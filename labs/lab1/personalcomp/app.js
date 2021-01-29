function setup() {
    createCanvas(600, 650);
    background(255, 240, 207);
    strokeWeight(4);
    var blue = color(43, 93, 255);
    var white = color(250,250,252);
    

    // Body
    fill(white); //white
    rect(220,200,200,210);
    quad(240,410,400,410,360,440,280,440);
    fill(blue); //blue
    rect(270,210,100,8);
    quad(265,225,375,230,375,235,265,240);
    quad(265,255,375,260,375,245,265,250);
    rect(300,280,40,70);
    fill(white); //white
    stroke(255,255,255);
    ellipse(320,300,20,25);
    ellipse(320,330,20,25);
    stroke(184, 186, 194);
    line(313,310,327,310);
    line(310,305,330,305);
    line(310,300,330,300);
    line(310,295,330,295);
    line(313,290,327,290);  
    stroke(0);             
    rect(314,320,12,19);
    stroke(184, 186, 194); 
    line(315,325,325,325);
    line(315,330,325,330);
    line(315,335,325,335);
    stroke(0);
    ellipse(320,385,25,25);
    stroke(43, 93, 255);
    line(311,385,329,385);
    line(320,376,320,394);
    stroke(0);
    rect(260,315,15,35);
    fill(184, 186, 194); //silver
    rect(220,370,30,40);
    stroke(43, 93, 255);
    line(225,375,225,395);
    line(230,375,230,395);
    line(235,375,235,395);
    line(240,375,240,395);
    line(245,375,245,395);
    line(264,320,271,320);
    line(264,325,271,325);
    line(264,330,271,330);
    line(264,335,271,335);
    line(264,340,271,340);
    line(264,345,271,345);
    stroke(0);

    // Head
    fill(184, 186, 194); //silver
    arc(320,198,200,200,radians(180),radians(0));
    ellipse(355,168,20,20);
    ellipse(355,168,10,10);
    fill(blue); //blue
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
    arc(333,115,75,27,radians(270),radians(0));
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
    fill(white); // white
    strokeJoin(ROUND);
    rect(190,200,30,260); // left leg
    quad(190,460,220,460,230,500,180,500);
    rect(220,435,20,40);
    triangle(190,320,190,340,180,340);
    rect(420,200,30,260); // right leg
    quad(420,460,450,460,460,500,410,500);
    rect(400,435,20,40);
    triangle(450,320,460,340,450,340);
    fill(blue); //blue & start of leg details
    rect(190,340,10,80);
    rect(440,340,10,80);
    stroke(204, 149, 94);
    line(225,468,210,468);
    line(235,468,210,480);
    line(415,468,430,468);
    line(405,468,430,480);
}