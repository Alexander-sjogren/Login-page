const name = "test"; // Användarnamnet som används för att logga in
const password = "1234";    // Lösen som används för inloggning

const btn = document.getElementById("btn"); 
const logInHeader = document.getElementById("loginHeader");
let userName = document.getElementById("userName");
let userPassword = document.getElementById("password");
const outputDiv = document.getElementById("output");
const inputDiv = document.getElementById("input");

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
   // logInHeader.innerHTML = "Logged in as, " + name;
   inputDiv.innerHTML = "";
    outputDiv.innerHTML = "Login successfull, welcome " + name; // sätter innehåll i min tomma div.
    localStorage.setItem("namn", name); // lägger till användarnamn i localstorage
    addLogoutButton();
    logout();
    console.log("lyckad inloggning");
}
// visar sida för misslyckad inloggning
function logInFailed() {
   // logInHeader.innerHTML = "";
    outputDiv.innerHTML = "Login failed, please try again!"
    console.log("misslyckad inloggning");
}
// funktion som aktiveras och loggar ut när vi trycker på logout.
function logout () {   
    logoutBtn.onclick = function () {  // funktion som tömmer innerhtml när vi trycker på logout.
        localStorage.clear(); // Tömmer localstorage
        logInHeader.innerHTML = "Please log in!";
        outputDiv.innerHTML = "";
        console.log("click på logoutknapp");
        resetInputdiv();
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
function resetInputdiv () {
    inputDiv.innerHTML ="<input type='text' id='userName' placeholder='Enter username...'>" + 
    "<input type='password' id='password' placeholder='Enter password...'>" + 
    "<button id='btn' onclick='logIn();'>Submit</button>";
}
