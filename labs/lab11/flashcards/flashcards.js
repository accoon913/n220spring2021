let dvQuestion1 = document.getElementById("dvQuestion1");
let dvQuestion2 = document.getElementById("dvQuestion2");
let dvQuestion3 = document.getElementById("dvQuestion3");

dvQuestion1.addEventListener("click", revealAnswer);
dvQuestion2.addEventListener("click", revealAnswer);
dvQuestion3.addEventListener("click", revealAnswer);

// Styles the divs
dvQuestion1.style.height = "20px";
dvQuestion1.style.width = "260px";
dvQuestion1.style.backgroundColor = "#407cff";
dvQuestion1.style.margin = "10px";

dvQuestion2.style.height = "20px";
dvQuestion2.style.width = "260px";
dvQuestion2.style.backgroundColor = "#407cff";
dvQuestion2.style.margin = "10px";

dvQuestion3.style.height = "20px";
dvQuestion3.style.width = "260px";
dvQuestion3.style.backgroundColor = "#407cff";
dvQuestion3.style.margin = "10px";

function revealAnswer(event) {
    // When clicked display the answer stored in the data-answer attribute
    event.target.innerHTML = this.getAttribute('data-answer');
    // When clicked change the background color to yellow
    event.target.style.backgroundColor = "#ffdf40";
}