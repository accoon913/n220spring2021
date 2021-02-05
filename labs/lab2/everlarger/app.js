let circ = 1

function setup(){
  createCanvas(300,300);
  background(75, 250, 195);
  frameRate(30);
}

function draw() {
  circ = circ + 1;
  fill(250, 107, 75);
  ellipse(150, 150, circ + 1, circ + 1);

  if(circ >= 200){
    background(75, 250, 195);
    circ = 1;
  } 
}