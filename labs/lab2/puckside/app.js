function setup () {
    createCanvas(400, 300);
    
}

function draw() {
    var red = color(209, 32, 4); // right half red
    var blue = color(10, 100, 209); // left half blue

    if (mouseX <= 200) {
        fill(blue);
    } else {
        fill(red);
    }
    background (207, 207, 207);
    ellipse (mouseX, mouseY, 50, 50);
}