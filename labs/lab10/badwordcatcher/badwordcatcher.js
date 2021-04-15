let txtBadWords = document.getElementById("txtBadWords");
let dvResults = document.getElementById("dvResults");
let dvTally = document.getElementById("dvTally");

function detectBadWords() {
    let userInput = txtBadWords.value;
    let wordArray = userInput.split(" ");

    let badWord1 = "clear";
    let badWord2 = "water";
    let badWord3 = "tired";

    for (i = 0; i < wordArray.length; i++) {
        if (wordArray[i].toLowerCase() == badWord1) {
            console.log("Bad word detected!" + i);
            
        } 
        if (wordArray[i].toLowerCase() == badWord2){
            console.log("Bad word detected!" + i);
            dvTally.innerHTML = start += 1;
        } 
        if (wordArray[i].toLowerCase() == badWord3){
            console.log("Bad word detected!" + i);
            dvTally.innerHTML = start += 1;
        } 
        
    }
    
}
