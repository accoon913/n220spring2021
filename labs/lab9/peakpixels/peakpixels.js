let dvSquare = document.getElementById("dvSquare");

// Style the square
dvSquare.style.backgroundColor = "#1dde4a";
dvSquare.style.width = "100px";
dvSquare.style.height = "100px";

// Variable to store sizes
let w = 100;
let h = 100;

// Onclick function
function increaseSize() {
    // When the square is clicked multiple the width by 1.1 (10%)
    w = w * 1.1;
    // When the square is clicked multiple the height by 1.1 (10%)
    h = h * 1.1;
    // Styles the square to add pixels to the end of the w & h numbers
    dvSquare.style.width = w + "px";
    dvSquare.style.height = h + "px";
}