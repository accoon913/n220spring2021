let txtAmount = document.getElementById("txtAmount");

function calcTip() {
    let initialAmount = Number(txtAmount.value);
    let tipAmount = initialAmount * 0.2;
    let totalAmount = initialAmount + tipAmount;

    console.log("Tip: $", tipAmount, "Total: $", totalAmount);
}