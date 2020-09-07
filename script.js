const name = "test"; // Användarnamnet som används för att logga in
const password = "1234";    // Lösen som används för inloggning
const btn = document.getElementById("btn");
const userName = document.getElementById("userName");
const userPassword = document.getElementById("password");

// Kollar så name och password stämmer. 
function logIn () {
    let userNameInput = userName.value;
    let userPasswordInput = userPassword.value;
    console.log(userNameInput)
    console.log(userPasswordInput);
    checkingUserInput(userNameInput, userPasswordInput)
}
// visar sidan för inloggad
function loggedInSuccessfull () {
    console.log("lyckad inloggning");
}
// visar sida för misslyckad inloggning
function logInFailed() {
    console.log("misslyckad inloggning");
}
// funktion som aktiveras och loggar ut när vi trycker på logout.
function logout () {

}
// Funktion som kollar användarnamn och lösenord
function checkingUserInput(namn, losen) {  // bör hitta andra namn på parametrar
    if (namn === name && losen === password){
        loggedInSuccessfull();
    }
    else {
        logInFailed();
    }
}
