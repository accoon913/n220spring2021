var radius = 50;
var x= -radius;
var speed = 5;


function setup() {
    createCanvas(800, 600);
}

function draw() {
    background(130, 234, 255);
    x += speed;
    if (x > 850) {
        x = -50;
    }
    fill(237, 146, 26);
    ellipse(x, 300, 100, 100);
}