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
    background("#bbfaf1");

    circlebounce();
    
    collideRect();

    rect(rectX, rectY, rectW, rectH);
}

function circlebounce () {
    circle(circX, circY, 25);

    circX += speedX;
    circY += speedY;

    if (circX < 25 || circX > 475) {
        speedX *= -1;
    }
    if (circY < 25 || circY > 475) {
        speedY *= -1;
    }
}

//colide function
function collideRect(circX, circY, rectX, rectY, rectW, rectH) {

    var colliding = false;

    if(circX > rectX && circX < rectX + rectW) {

        if(circY > rectY && circY < rectY + rectH) {
              return true;
        }
   }
   return false;
}