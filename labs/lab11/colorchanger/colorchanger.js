let dvSquare1 = document.getElementById("dvSquare1");
let dvSquare2 = document.getElementById("dvSquare2");
let dvSquare3 = document.getElementById("dvSquare3");

dvSquare1.addEventListener("click", colorChange);
dvSquare2.addEventListener("click", colorChange);
dvSquare3.addEventListener("click", colorChange);

// Styling for my first square div
dvSquare1.style.width = "200px";
dvSquare1.style.height = "200px";
dvSquare1.style.backgroundColor = "#bdb9b9";
dvSquare1.style.float = "left";
dvSquare1.style.margin = "5px";

// Styling for my second square div
dvSquare2.style.width = "200px";
dvSquare2.style.height = "200px";
dvSquare2.style.backgroundColor = "#bdb9b9";
dvSquare2.style.float = "left";
dvSquare2.style.margin = "5px";

// Styling for my third square div
dvSquare3.style.width = "200px";
dvSquare3.style.height = "200px";
dvSquare3.style.backgroundColor = "#bdb9b9";
dvSquare3.style.float = "left";
dvSquare3.style.margin = "5px";


function colorChange(event) {
    // When the square is clicked change the color based off the color attribute
   this.style.backgroundColor = this.getAttribute('color')
}
