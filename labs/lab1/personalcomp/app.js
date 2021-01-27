function setup() {
    createCanvas(600, 800);
    background(255, 240, 207);
    strokeWeight(4);

    // Body
    fill(250, 250, 252);
    rect(220,200,200,250);
    quad(240,450,400,450,360,480,280,480);

    // Head
    fill(184, 186, 194); //silver
    arc(320,198,200,200,radians(180),radians(0));
    ellipse(355,168,20,20);
    ellipse(355,168,10,10);
    fill(43, 93, 255); //blue
    quad(300,125,340,125,340,160,290,160);
    rect(220,188,200,6);
    rect(305,165,30,17);
    rect(375,158,10,25);
    rect(395,158,10,25);
    rect(290,165,8,17);
    rect(275,158,10,25);
    rect(260,158,8,25);
    rect(230,158,20,25);
    arc(305,115,75,27,radians(180),radians(270));
    arc(330,115,75,30,radians(270),radians(0));
    fill(46, 46, 46); //black
    ellipse(315,142,25,25);
    stroke(184, 186, 194);
    line(277,165,283,165)
    line(277,170,283,170);
    line(277,175,283,175);
    stroke(0,0,0);
    fill(168, 19, 19); //red
    ellipse(327,173,10,10);
    

    // Legs
    fill(250, 250, 252);
    strokeJoin(ROUND);
    rect(190,200,30,300); // left leg
    quad(190,500,220,500,230,540,180,540);
    rect(420,200,30,300); // right leg
    quad(420,500,450,500,460,540,410,540);
}