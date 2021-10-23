class WolfGang {
    x: number; 
    y: number;
    step: number;
    image: p5.Image;

    constructor(x: number, y:number, step:number, image: p5.Image) {
        this.x = x;
        this.y = y;
        this.step = step;
        this.image = image;
    }
    draw(): void {
        image(this.image, this.x * this.step, this.y * this.step, this.step, this.step);
    }

}

class Board {
    nl: number;
    nc: number;
    step: number;
    background: p5.Image;

    constructor(nc: number, nl: number, step: number, background: p5.Image) {
        this.nc = nc
        this.nl = nl
        this.step = step
        this.background = background;
    }

    draw(): void {
        image(this.background, 0, 0, this.nc * this.step, this.nl * this.step);
        for (let x = 0; x < this.nc; x++) {
            for (let y = 0; y < this.nl; y++) {
               noFill();
               stroke(0);
               strokeWeight(2);
               rect(x * this.step, y * this.step, this.step, this.step);

            }
        }
    }


}

let wolf_img: p5.Image;
let wolf2_img: p5.Image;
let rabbit_img: p5.Image;
let board_img: p5.Image;

let wolf: WolfGang;
let wolf2: WolfGang;
let rabbit: WolfGang;
let board: Board;

function loadImg(path: string): p5.Image {
    return loadImage(
        path,
        () => console.log("Loading" + path + " ok") ,
        () => console.log("Loading " + path + " error")
    );
}

function preload() {
    wolf_img = loadImage('../sketch/lobol.png');
    wolf2_img = loadImage('../sketch/lobor.png');
    rabbit_img = loadImage('../sketch/coelho.png');
    board_img = loadImage('../sketch/grama.jpg');
}

function keyPressed() {
    if (keyCode === LEFT_ARROW) {
        wolf.x--;
        wolf.image = wolf2_img;
            return;
    } else if (keyCode === RIGHT_ARROW) {
        wolf.x++;
        wolf.image = wolf_img;
    } else if (keyCode === UP_ARROW) {
        wolf.y--;
        wolf.image = wolf_img;
    } else if (keyCode === DOWN_ARROW) {
       wolf.y++;
       wolf.image = wolf_img;
    }
    if (keyCode === "A" .charCodeAt(0)) {
        rabbit.x--;
    } else if (keyCode === "D" .charCodeAt(0)) {
        rabbit.x++;
    } else if (keyCode === "W" .charCodeAt(0)) {
        rabbit.y--;
    } else if (keyCode === "S" .charCodeAt(0)) {
        rabbit.y++;
    }

}

function setup() {
    let size = 100;
    wolf = new WolfGang(2, 2, size, wolf_img);
    wolf2 = new WolfGang(2,2, size, wolf2_img);
    rabbit = new WolfGang(1, 1, size, rabbit_img);
    board = new Board(6, 4, size, board_img);
    createCanvas(board.nl * size, board.nc * size);
}

function draw(){
    board.draw();
    wolf.draw();
    //wolf2.draw();
    rabbit.draw();
}
