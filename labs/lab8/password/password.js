let txtUsername = document.getElementById("txtUsername");
let txtPassword = document.getElementById("txtPassword");
let dvLoginResult = document.getElementById("dvLoginResult");

function login() {
    if((txtUsername.value == "Username") && (txtPassword.value == "Password")) {
        dvLoginResult.innerHTML = "Succes!";
    } else {
        dvLoginResult.innerHTML = "Wrong Information.";
    }
}