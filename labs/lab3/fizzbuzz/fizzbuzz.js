function setup() {
    createCanvas(1500, 500);
}

function draw() {
    background(214, 206, 184);
    var y = 200;
    
    for (i = 0; i < 25; ++ i) { // Loop repeats 25 times
        
        var x = i*50; 
        
        if (i % 3 == 0 && i % 5 == 0) {
            fill (25, 106, 227); // Blue
            square(x, y, 50);
        }
        else if (i % 5 == 0) {
            fill (46, 191, 119); // Green
            square(x, y, 50);
        }
        else if (i % 3 == 0) {
            fill (185, 59, 227); // Purple
            circle(x+25, y+25, 25);
        }
        else {
            fill(255);
            circle(x+25, y+25, 25);
        }
    }
}