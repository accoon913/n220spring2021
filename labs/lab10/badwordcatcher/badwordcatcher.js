let txtBadWords = document.getElementById("txtBadWords");
let dvResults = document.getElementById("dvResults");
let dvTally = document.getElementById("dvTally");

function detectBadWords() {
    let userInput = txtBadWords.value;
    let wordArray = userInput.split(" ");

    // Variables for the bad words
    let badWord1 = "clear";
    let badWord2 = "water";
    let badWord3 = "tired";

    // Bad word tally count starts at zero
    let tallyCount = 0;

    // Loops through the created input array
    for (i = 0; i < wordArray.length; i++) {
        // If a bad word is detected, add one to tallyCount & let the user know
        if (wordArray[i].toLowerCase() == badWord1) {
            //console.log("Bad word detected!" + i);  
            tallyCount += 1;
            dvResults.innerHTML = "Bad Word(s) Detected!";
        } 
        if (wordArray[i].toLowerCase() == badWord2){
            //console.log("Bad word detected!" + i);
            tallyCount += 1;
            dvResults.innerHTML = "Bad Word(s) Detected!";
        } 
        if (wordArray[i].toLowerCase() == badWord3){
            //console.log("Bad word detected!" + i);
            tallyCount += 1;
            dvResults.innerHTML = "Bad Word(s) Detected!";
        }
        // If a bad word is not detected, let the user know
        else if (tallyCount <= 0) {
            dvResults.innerHTML = "No Bad Words Detected!";
        }
        dvTally.innerHTML = tallyCount;
    }
    // Resets the input field
    txtBadWords.value = "";
}
