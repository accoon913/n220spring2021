
function setup() {
    createCanvas(500, 500);
}

function draw() {
    background("#b8ffe2");

    // Draw 10 circles to the screen at the y location of the mouse
    for (i = 0; i < 10; i++) {

        fill(255 - i * 25); // color gets lighter the further our the circle is

        circle (10 + 20 * i, mouseY, 10); // 10 circles that follow mouseY
    }

    moveDown();
}

function moveDown () {
    if (mouseIsPressed) { // When the mouse is being pressed
        mouseY++; // The circles move down until the mouse is released
    }
}