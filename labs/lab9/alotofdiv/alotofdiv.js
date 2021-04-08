for (var i = 0; i < 100; i++) {
    let dvSquare = document.getElementById("dvSquare");
    // Creating a new div during each loop iteration
    let dvNew = document.createElement('div');
    
    // Styling the created div
    dvNew.style.float = "left";
    dvNew.style.height = "20px";
    dvNew.style.width = "20px";
    // Background-Color is determined by the randomColor function
    dvNew.style.backgroundColor = randomColor();
 
    // Adds the new div to the HTML
    dvSquare.appendChild(dvNew); 
}


function randomColor() {
    // determines the red value
    var r = Math.round( Math.random() * 255);
    // determines the green value
    var g = Math.round( Math.random() * 255);
    // determines the blue values
    var b = Math.round( Math.random() * 255);
    // Adds the variable values together in the rgb format
    var squareColor = "rgb(" + r + "," + g + "," + b + ")";
    // Function returns the variables in the rgb format to the backgroundColor style
    return squareColor;
}