var brickY = [] // y coordinate of brick
var brickX = [] // x coordinate of brick

function setup() {
    createCanvas(500, 500);
}

function draw() {
    background("#61a5ed");
    fill("#ba4c4e");

    for(var i = 0; i < brickY.length; i++) {
        rect(brickX[i], brickY[i], 100, 50);
        brickY[i] += 5; // speed at which brick is falling
    }
}

function mousePressed() { // when the mouse is pressed the brick is created and begins falling
    brickY.push(mouseY);
    brickX.push(mouseX);
}