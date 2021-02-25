let colors = ["#de1d10", "#e6b207", "#0eb33a"];

function setup() {
    createCanvas(600, 600);
}

function draw () {
    fill("#505752");
    rect(225, 225, 150, 350);
    lights();
    
}

function lights () {
    for(var i = 0; i < colors.length; i++) {
        fill(colors[i]);
        circle(300, 300 + 100 * i, 50);
    }
}