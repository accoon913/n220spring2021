let colors = ["#e3b3df", "#8a755a", "#f7f1e9"]

function setup() {
    createCanvas(600, 600);
    noStroke();

    for(var i = 0; i < colors.length; i++) {
        fill(colors[i]);
        rect(0, 0 + 200 * i, 600, 200);
    }
}