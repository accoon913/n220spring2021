function setup() {
    createCanvas(600, 800);
    background(255, 240, 207);
    strokeWeight(4);

    // Body
    fill(250, 250, 252);
    rect(220,200,200,250);
    quad(240,450,400,450,360,480,280,480);

    // Head
    fill(184, 186, 194);
    arc(320,198,200,200,radians(180),radians(0));

    // Legs
    fill(250, 250, 252);
    strokeJoin(ROUND);
    rect(190,200,30,300); // left leg
    quad(190,500,220,500,230,540,180,540);
    rect(420,200,30,300); // right leg
    quad(420,500,450,500,460,540,410,540);
}