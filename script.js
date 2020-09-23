const outputDiv = document.getElementById("output"); // hämtar in mina element med hjälp av deras id med getElementById metoden.
const inputDiv = document.getElementById("input");
let userNameJson;

function checkLocalStorage() {
    fetch('users.json')
        .then(response => response.json())
        .then(json => {
            if (localStorage.getItem("userId") != null) {
                userNameJson = json[localStorage.getItem("userId")].userName;
                loggedInSuccessfull(); // Har vi något visas sidan för lyckad inloggning.
                console.log(userNameJson);
            }
            else if (localStorage.length >= json.length) { 
                logInFailed();
                localStorage.clear(); // clearar så det inte ligger kvar när vi refreshar
            }
    })
        
}

checkLocalStorage(); // kollar även utanför login funktionen så att rätt sida kan visas vid refresh.

// Kollar så name och password stämmer, denna funktionen kallas på vid tryck på login knapp.
function logIn() {
    let userName = document.getElementById("userName").value;
    let userPassword = document.getElementById("password").value;
    fetch('users.json')
        .then(response => response.json())
        .then(json => {
            console.log(json)
            for (let i = 0; i < json.length; i++) {
                if (userName === json[i].userLogin && userPassword === json[i].userPassword) {
                    console.log("ja det stämmer");
                    localStorage.setItem("userId", i);
                }
                else {
                    console.log("ngt var fel");
                    localStorage.setItem(i, "wrong");
                }
            }
            checkLocalStorage();
        })
}
// Sidan som visas vid lyckas inloggning.
function loggedInSuccessfull() {
    inputDiv.innerHTML = "";
    let myString = "<h4>Login successfull, welcome back! " + userNameJson + "<h4/>"
    outputDiv.innerHTML = myString; // sätter innehåll i min tomma div.
    addLogoutButton();
    logOut();
}

// visar sida för misslyckad inloggning
function logInFailed() {
    outputDiv.innerHTML = "<h5>Login failed, please try again!<h5/>"
}
// funktion som aktiveras och loggar ut när vi trycker på logout knappen.
function logOut() {
    logoutBtn.onclick = function () {  // funktion som tömmer innerhtml + localstorage när vi trycker på logout.
        localStorage.clear();
        resetInputdiv();
    }
}
// Lägger till utloggningsknappen, denna används inuti loggedInSuccessfull().
function addLogoutButton() {
    const logoutBtn = document.createElement("button"); // skapar min knapp för utloggning.
    logoutBtn.id = "logoutBtn";
    logoutBtn.innerHTML = "Logout";
    outputDiv.appendChild(logoutBtn);
}
// Denna funktion återställer sidan till sitt ursprung, den används inuti logout funktionen.
function resetInputdiv() {
    outputDiv.innerHTML = "";
    inputDiv.innerHTML = "<h4 id='loginHeader'>Please enter your Username and Password</h4>" + " " +
        "<input type='text' id='userName' placeholder='Enter username...'>" + " " + // skapar mina input fält, submit knapp på nytt                                                                                           
        "<input type='password' id='password' placeholder='Enter password...'>" + " " +
        "<button id='btn' onclick='logIn();'>Login</button>";
}
