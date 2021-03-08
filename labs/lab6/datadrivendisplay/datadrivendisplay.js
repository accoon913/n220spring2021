let square = {
    x: 50,
    y: 50,
    w: 400,
    h: 400,
    color: "#78c4d4"
}

function setup() {
    createCanvas( 500, 500);
    background("#f2b4b4");
}

function draw() {
    fill(square.color);
    rect(square.x, square.y, square.w, square.h);   
}