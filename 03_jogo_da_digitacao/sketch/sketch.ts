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
        fill(255); // preenchimento
        stroke(255); // borda
        circle(this.x, this.y, 2 * Bubble.radius); // desenho do raio
        fill(0); //cor da fonte
        stroke(0); // borda da fonte
        textSize(15); // tam da fonte
        text(this.letter, this.x - 5, this.y + 5); // desenhando a letra no centro
    }
}

function setup() {
    createCanvas(800, 600);
}

function draw() {
    background(50, 50, 50);
    let bubble = new Bubble(100, 100, "a", 1);
    bubble.draw();
}
