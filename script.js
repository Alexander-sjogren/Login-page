const name = "test"; // Användarnamnet som används för att logga in
const password = "1234";    // Lösen som används för inloggning
const btn = document.getElementById("btn"); 
const userName = document.getElementById("userName");
const userPassword = document.getElementById("password");
const outputDiv = document.getElementById("output");

const logoutBtn = document.createElement("button"); // skapar min knapp för utloggning.
    logoutBtn.id = "logoutBtn";
    logoutBtn.innerHTML = "Logout";

// kolla localstorage högst upp här?

// Kollar så name och password stämmer. 
function logIn () {
    let userNameInput = userName.value; // Hämtar användarnamn från input
    let userPasswordInput = userPassword.value;
    console.log(userNameInput)
    console.log(userPasswordInput);
    checkingUserInput(userNameInput, userPasswordInput)
}
// visar sidan för inloggad
function loggedInSuccessfull () {
    outputDiv.innerHTML = "Login successfull, welcome " + name; // sätter innehåll i min tomma div.
    localStorage.setItem("namn", name); // lägger till användarnamn i localstorage
    addLogoutButton();
    logout();
    console.log("lyckad inloggning");
}
// visar sida för misslyckad inloggning
function logInFailed() {
    outputDiv.innerHTML = "Login failed, please try again!"
    console.log("misslyckad inloggning");
}
// funktion som aktiveras och loggar ut när vi trycker på logout.
function logout () {
    localStorage.removeItem(name); // Tömmer localstorage
    logoutBtn.onclick = function () {
        outputDiv.innerHTML = "";
        console.log("click på logoutknapp");
    }
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
function addLogoutButton (){
    outputDiv.appendChild(logoutBtn);
    console.log("logout test");
}
