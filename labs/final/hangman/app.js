// array of words to guess
let guessWords = ["sloth", "indubitably", "ampersand", "controller", "candle", 
"gulp", "basketball", "college", "state", "informatics"];

// array of letters for creating buttons
let alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m",
"n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

// choses a random word from the guessWords array
var chosenWord = guessWords[Math.floor(Math.random() * guessWords.length)];
console.log(chosenWord);

// array for replacing letters with _
var guessLetter = [];

// loop that replaces the chosenWord letters with _
for (var i = 0; i < chosenWord.length; i++) {
    let word = document.getElementById("word");
    guessLetter[i] = "_";

    // joins the array to remove commas
    word.innerHTML = guessLetter.join(" ");
    console.log(guessLetter);
}

// variable for the letters that remain to be guessed
var remainingLetters = chosenWord.length;

// function to create the canvas for the hangman drawing
function setup() {
    createCanvas(500, 500);
    background("#c7f7ff");
}

// loops to create alphabet buttons as divs
for(var i = 0; i < alphabet.length; i++) {
    let dvButtons = document.getElementById("dvButtons");
    let buttons = document.createElement("div");

    // button styling
    buttons.innerHTML = alphabet[i];
    buttons.style.textAlign = "center";
    buttons.style.float = "left";
    buttons.style.width = "20px";
    buttons.style.height = "20px";
    buttons.style.margin = "5px";
    buttons.style.backgroundColor = "#6ef093";

    // adds the button to the page
    dvButtons.appendChild(buttons);

    // if the button is clicked run the checkMatch() function
    buttons.addEventListener("click", checkMatch);

    function checkMatch() {
        // variable to store the letter values of pressed buttons
        var guess = buttons.innerHTML;
        console.log(guess);

       for(var i = 0; i < chosenWord.length; i++) {
        // if any of the letters in chosenWord match the guessed letter
        if(chosenWord[i] === guess) {
                guessLetter[i] = guess;
                //subtract guessed letters from remaining letters
                remainingLetters--;
                console.log(remainingLetters)
            }
        }

        event.target.style.backgroundColor = "#c9c9c9";
    }
}

