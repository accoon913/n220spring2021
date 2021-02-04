function setup() {
    createCanvas(100,100)
    frameRate();
}
function draw() {
    ellipse(50, 50, 20, 20);
    print(frameCount);
}