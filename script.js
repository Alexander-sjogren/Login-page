const name = "test"; // Användarnamnet som används för att logga in
const password = "1234";    // Lösen som används för inloggning
const outputDiv = document.getElementById("output"); // hämtar in mina element med hjälp av deras id med getElementById metoden.
const inputDiv = document.getElementById("input");

    // Gör en kontroll för att se om vi har något i localstorage.
    if (localStorage.length > 0) {
        loggedInSuccessfull(); // Har vi något visas sidan för lyckad inloggning.
    }
    else {
        resetInputdiv(); // Annars kastar vi upp inloggningsformuläret.
    }
// Kollar så name och password stämmer, denna funktionen kallas på vid tryck på login knapp.
function logIn () {
    let userName = document.getElementById("userName");
    let userPassword = document.getElementById("password");
    let userNameInput = userName.value; // Hämtar användarnamn från input
    let userPasswordInput = userPassword.value;
    // Kollar så inloggningsuppgifter stämmer
    if (userNameInput === name && userPasswordInput === password){
        loggedInSuccessfull();
    }
    else {
        logInFailed();
    }
}
// visar sidan för inloggad, används inuti kontrollen av localstorage + checkingUserInput(). 
function loggedInSuccessfull () {
    inputDiv.innerHTML = "";
    outputDiv.innerHTML = "<h4>Login successfull, welcome back!<h4/>" // sätter innehåll i min tomma div.
    localStorage.setItem("namn", name); // lägger till användarnamn i localstorage
    addLogoutButton(); 
    logOut(); 
}
// visar sida för misslyckad inloggning
function logInFailed() {
    outputDiv.innerHTML = "<h5>Login failed, please try again!<h5/>"
}
// funktion som aktiveras och loggar ut när vi trycker på logout knappen.
function logOut () {   
    logoutBtn.onclick = function () {  // funktion som tömmer innerhtml + localstorage när vi trycker på logout.
        localStorage.clear(); 
        resetInputdiv();
    }
}
// Lägger till utloggningsknappen, denna används inuti loggedInSuccessfull().
function addLogoutButton (){ 
    const logoutBtn = document.createElement("button"); // skapar min knapp för utloggning.
    logoutBtn.id = "logoutBtn";
    logoutBtn.innerHTML = "Logout";
    outputDiv.appendChild(logoutBtn);
}
// Denna funktion återställer sidan till sitt ursprung, den används inuti logout funktionen.
function resetInputdiv () {
    outputDiv.innerHTML = "";
    inputDiv.innerHTML = "<h4 id='loginHeader'>Please enter your Username and Password</h4>" + " " +
    "<input type='text' id='userName' placeholder='Enter username...'>" + " " + // skapar mina input fält, submit knapp på nytt                                                                                           
    "<input type='password' id='password' placeholder='Enter password...'>" + " " +
    "<button id='btn' onclick='logIn();'>Login</button>";  
}
