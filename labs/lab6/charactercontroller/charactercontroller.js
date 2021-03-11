let movingCirc = {
    x: 250,
    y: 250,
    r: 50,
    color: "#e86c43",
    update: function () {
        // Draw the cirlce to the screen
        fill(this.color);
        circle(this.x, this.y, this.r);
        
        // When the right arrow key is pressed, move the object 2 pixels right
        if (keyIsDown(RIGHT_ARROW)) {
            movingCirc.x += 2;
        }
        // When the left arrow key is pressed, move the object 2 pixels left
        if (keyIsDown(LEFT_ARROW)) {
            movingCirc.x -= 2;
        }
        // When the up arrow key is pressed, move the object 2 pixels up
        if (keyIsDown(UP_ARROW)) {
            movingCirc.y -= 2;
        }
        // When the down arrow key is pressed, move the object 2 pixels down
        if(keyIsDown(DOWN_ARROW)) {
            movingCirc.y += 2;
        }
    }
}

function setup() {
    createCanvas(500, 500);
}

function draw() {
    background("#acf2fa");
    movingCirc.update();   
}