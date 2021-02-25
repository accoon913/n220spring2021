var circX = 50;
var circY = 50;
var rectX = 100;
var rectY = 400;
var rectW = 300;
var rectH = 50;
var speedX = 2;
var speedY = 4;

function setup () {
    createCanvas(500, 500);
}

function draw () {
    background("#28527a");

    circlebounce();
    
    collideRect(circX, circY, rectX, rectY, rectW, rectH);

    fill("#8ac4d0");
    rect(rectX, rectY, rectW, rectH);
}

// Creating my ball 
function circlebounce () {
    fill ("#f4d160");
    circle(circX, circY, 25);

    circX += speedX; // Vertical speed of the ball
    circY += speedY; // Horizontal speed of the ball

    // When the ball approaches the edges of the screen vertically
    if (circX < 25 || circX > 475) {
        speedX *= -1; // Reverses the x direction of the ball
    }
    // When the ball approaches the edges of the screen horizontally
    if (circY < 25 || circY > 475) {
        speedY *= -1; // Reverse the y direction of the ball
    }
}

// Collide function
function collideRect(circX, circY, rectX, rectY, rectW, rectH) {

    var colliding = false;
    console.log(circX);
    // When the ball approaches the rectangle vertically
    if(circX > rectX && circX < rectX + rectW) { // Ball collides with the rectangle and reverses direction vertically
        
        // When the ball approaches the rectangle horizontally
        if(circY > rectY && circY < rectY + rectH) { // Ball collides with the rectangle and reverses direction horizontally
            
            speedY *= -1;
            
              return true;
        }
   }
   return false;
}