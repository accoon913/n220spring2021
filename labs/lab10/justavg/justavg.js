let txtNumbers = document.getElementById("txtNumbers");
let dvSumResults = document.getElementById("dvSumResults");
let dvAvgResults = document.getElementById("dvAvgResults");

function doCalcs() {
    // Variable for my input string
    let numbString = txtNumbers.value;
    // Splits the input string on commas
    let numbArray = numbString.split(",");

    // Used for calculations/ reduce array
    let sum = 0;

    for(let i = 0; i < numbArray.length; i++) {
        // Number turns the string values into numbers for calculations
        sum += Number(numbArray[i]);
        avg = sum / Number(numbArray.length);
    }
    dvSumResults.innerHTML = sum;
    dvAvgResults.innerHTML = avg;
    
    //console.log(sum);
    //console.log(avg);

    // Resets input field
    txtNumbers.value = "";
}