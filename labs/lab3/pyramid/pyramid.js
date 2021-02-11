function setup() {
    createCanvas(500, 500);
}



function draw() {
    fill (255, 0, 0);
    background(255);
    noStroke(); 
    
    for (var i = 0; i < 4; i++) {
        var x = i * 55;
        for(var j = 0; j < 4 - i; j++){
            var y = 400 - j * 55;
            square (x, y, 50);
        }
        
    }
}