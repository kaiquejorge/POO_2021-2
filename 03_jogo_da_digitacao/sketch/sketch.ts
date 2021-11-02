class Bubble {
    x: number;
    y: number;
    letter: string;
    speed: number;

    static radius: number = 20;
    alive: boolean = true;
    constructor(x: number, y: number, letter: string, speed: number) { // metodo q invoco p construir a bolha
        this.x = x;
        this.y = y;
        this.letter = letter;
        this.speed = speed;
    }
    
    update():void {
        this.y += this.speed;
    }

    draw(): void {
        fill(color(0, 0, 255)); // preenchimento
        stroke(255); // borda
        circle(this.x, this.y, 2 * Bubble.radius); // desenho do raio
        fill(255, 204, 0); //cor da fonte
        stroke(0); // borda da fonte
        textSize(20); // tam da fonte
        text(this.letter, this.x - 5, this.y + 5); // desenhando a letra no centro
    }
}

class Board {
    bubbles: Bubble[];
    timeout: number = 40; // a cada 30 quadros eu vou ter uma nova bolha por segundo
    timer: number = 0;
    hits = 0;
    mistakes = 0;
    constructor() {
        this.bubbles = [new Bubble(100, 100, "a", 2)];
        this.bubbles.push(new Bubble(200, 100, "b", 2));
        this.bubbles.push(new Bubble(300, 100, "c", 3));
    }

    update() : void { // para cada bolha do vetor de bolhas call uptade
        this.checkBubbleTime();

        for (let bubble of this.bubbles)
            bubble.update(); 
        this.removeDeadBubbles();
    }

    removeDeadBubbles(): void {
        this.bubbles = this.bubbles.filter(b => b.alive);
    }

    removeByHit(code: number): void {
        for(let bubble of this.bubbles){
            if(bubble.letter[0].toUpperCase().charCodeAt(0) == code){
                bubble.alive = false;
                this.hits++;
                break;
            }
        }

    }

    checkBubbleTime() : void{ //verificar o tempo da bolha, ele vai ficar diminuindo o timer em um
        this.timer -= 1;
        if(this.timer <= 0) { // se tempo for menor q 0
            this.addBubble(); // add uma bolha 
            this.timer = this.timeout; // zera o timer
        }

    }

    markOutsideBubbles(): void {
        for(let bubble of this.bubbles)
            if (bubble.y + 2 * Bubble.radius >= height) {
                bubble.alive = false;
                this.mistakes++;
            }
        
    }

    addBubble(): void{ // definir o x, y, letra e velocidade
        let x = random(0, width - 2 * Bubble.radius);
        let y = -2 * Bubble.radius;
        let letter = random(["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "v", "u", "v", "w", "x", "z"]);
        let speed = random(1, 5);
        let bubble = new Bubble(x, y, letter, speed);
        this.bubbles.push(bubble); //colocar a bolha dentro do vetor

    }

    draw(): void {
        stroke("white");
        fill("blue");
        textSize(20);
        text(" Hits: "  + this.hits +  "\n Mistakes: "  + this.mistakes, 275, 30);
        for (let bubble of this.bubbles)
            bubble.draw();
    }

}

class Game {
    board: Board;
    activeState: () => void; // means fun q n recebe nd e n retorna nada 
    constructor() {
        this.board = new Board();
        this.activeState = this.gamePlay; // aqui digo q a fun atv começa sendo o gameplay  
    }
    gamePlay(): void {
        this.board.update();
        background(255, 204, 0);
        this.board.draw();
        if(this.board.mistakes >= 5)
            this.activeState = this.gameOver;
    }
    
    gameOver(): void {
        background('rgb(100%,0%,10%)');
        fill(0)
        textSize(100);
        text("Game Over!", 50, 300);
    }
}

let game: Game;

function setup() {
    createCanvas(800, 600);
    frameRate(30); //30 vezes q a fun update vai ser chamada por segundo
    game = new Game();
}

function keyPressed() {
    game.board.removeByHit(keyCode);

}

function draw() {
    game.activeState();
}
