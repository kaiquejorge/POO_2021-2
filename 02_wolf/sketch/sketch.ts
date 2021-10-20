let x: number = 1;
let y: number = 2;
let step: number = 100;
let wolf_img: p5.Image;

function preload() {
    wolf_img = loadImage(
        'sketch/lobol.png',
        () => console.log("Sucesso"),
        () => console.log("Falhou")
    );
}

function keyPressed(){
    if (keyCode === LEFT_ARROW) {
        x--;
    } else if (keyCode === RIGHT_ARROW) {
        x++;
    } else if (keyCode) === UP_ARROW) {
        y--;
    } else if (keyCode) === DOWN_ARROW) {
        y++;
    }
}

function setup() {
    createCanvas(400, 400);
    loadImage('../sketch/lobol.png')
    image(wolf_img, 0, 0);
}

function draw(){
    background(0);
    image(wolf_img, x * step, y * step, step, step);
}
