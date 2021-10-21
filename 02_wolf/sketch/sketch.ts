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

let wolf_img: p5.Image;
let rabbit_img: p5.Image;
let wolf: WolfGang;
let rabbit: WolfGang;

function loadImg(path: string): p5.Image {
    return loadImage(
        path,
        () => console.log("Loading" + path + " ok") ,
        () => console.log("Loading " + path + " error")
    );
}

function preload() {
    wolf_img = loadImage(
        '../sketch/lobol.png',
        () => console.log("Sucesso"),
        () => console.log("Falhou")
    );
    rabbit_img = loadImage(
        '../sketch/coelho.png',
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
    createCanvas(400, 400);
    wolf = new WolfGang(2, 2, 100, wolf_img);
    rabbit = new WolfGang(1, 1, 100, rabbit_img);
}

function draw(){
    background(0);
    wolf.draw();
    rabbit.draw();
}
