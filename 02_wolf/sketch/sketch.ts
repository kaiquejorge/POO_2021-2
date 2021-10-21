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
    draw() {
        image(this.image, this.x * this.step, this.y * this.step, this.step);
    }

}

let x: number = 1;
let y: number = 2;
let step: number = 100;
let wolf_img: p5.Image;
let wolf: WolfGang;

function preload() {
    wolf_img = loadImage(
        '../sketch/lobol.png',
        () => console.log("Sucesso"),
        () => console.log("Falhou")
    );
}

function keyPressed() {
    if (keyCode === LEFT_ARROW) {
        wolf.x--;
    } else if (keyCode === RIGHT_ARROW) {
        wolf.x++;
    } else if (keyCode === UP_ARROW) {
        wolf.y--;
    } else if (keyCode === DOWN_ARROW) {
       wolf.y++;
    }
}

function setup() {
    createCanvas(400, 400);
    wolf = new WolfGang(2, 2, 100, wolf_img);
}

function draw(){
    background(100);
    wolf.draw();
    image(wolf_img, x * step, y * step, step, step);
}
