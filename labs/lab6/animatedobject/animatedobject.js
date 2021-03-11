let circleMove = {
    x: 225,
    y: 50,
    r: 25,
    color: "#e05cd1"
}

function setup() {
    createCanvas(500, 500);
}

function draw () {
    background("#8ff2b2");
    fill(circleMove.color);
    circle(circleMove.x, circleMove.y, circleMove.r);
    circleMove.y += 1;
}