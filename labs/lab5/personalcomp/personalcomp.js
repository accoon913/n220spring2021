function setup() {
    createCanvas (500, 500);
}

function draw() {
    // The daytime sky background
    background("#67cceb"); // Light blue color

    // Calls my sun function in
    sun(mouseY);

    // When the sun goes behind the ground
    if (mouseY > 350) {
        // Calls in my night function to make the background a night sky
        night();
    }

    // These lines create the ground
    fill("#41ba45");
    noStroke();
    rect(0, 350, 500, 150);
}

// Funtion to create the sun
function sun (yPos) {
    fill("#f7cb39"); // Yellow color
    circle(250, yPos, 50);
}

// Function used to create the night sky
function night () {
    background("#0f143b"); // Dark blue color

    // This loop creates my stars in the night sky
    for (var i = 0; i < 10; i++) {
    var x = 20 + i * 50 ;
        for (var j = 0; j < 7; j++) {
            var y = 20 + 50 * j;
            fill ("#e8cb6b");
             circle(x, y, 5);
        }
    }
}