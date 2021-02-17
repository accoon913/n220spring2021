let xPos = [0, 0, 0, 0, 0, 0, 0, 0, 0 ,0]
let yPos = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
let colors = ["#d65483", "#aed4fc", "#d65483", "#aed4fc", "#d65483", "#aed4fc", "#d65483", "#aed4fc", "#d65483", "#aed4fc"]

function setup() {
    createCanvas(500, 500);
}

function draw() {

    background("#9feda0");

    xPos.push(mouseX);
    xPos.shift();

    yPos.push(mouseY);
    yPos.shift();

    for(var i = 0; i < xPos.length; i++) {
        fill(colors[i]);
        circle(xPos[i], yPos[i], 25);
    }
}