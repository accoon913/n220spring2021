// Connecting to divs
let dvColor = document.getElementById("dvColor");
let dvCurrentRgb = document.getElementById("dvCurrentRgb");
let red1 = document.getElementById("red1");

dvColor.style.width = "200px";
dvColor.style.height = "100px";
dvColor.style.backgroundColor = "rgb(0, 0, 0)";

function changeColorRed(event) {
    let start = 0;
    let redValue = start + red1.getAttribute("data-add");
console.log(redValue);
console.log(start);
    dvColor.style.backgroundColor = "rgb(",redValue,"0, 0)";

}