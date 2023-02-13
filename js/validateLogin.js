var userLogin;
var pass;
var userExists = false;
var correctPass = false;
var userData;
var cot;



const userSetBox = document.getElementById("setUser") ? document.getElementById("setUser") : false;
const pwrdSetBox = document.getElementById("newPass") ? document.getElementById("newPass") : false;
const passCheckBox = document.getElementById("newPassCheck") ? document.getElementById("newPassCheck") : false;
const actCreateModal = document.getElementById("register") ? document.getElementById("register") : false;

class User {
    constructor(full, user, pass) {
        this.fullname = full
        this.username = user;
        this.password = pass;
    }
}

document.getElementById("yacwelcome") ? initializeAccount() : null;

function initializeAccount() {
    var guest = new User("Guest", "guest", "guest");
    localStorage.setItem("userguest", JSON.stringify(guest));
    
    let currUser = JSON.parse(localStorage.getItem(sessionStorage.getItem("currentUser")));
    document.getElementById("yacwelcome").innerHTML = "Welcome, " + currUser.fullname;
}

console.log("hello")

/**Automatically log in user if there is one in session */
function autoLogIn() {
    console.log("hello1")
    window.addEventListener('load', (event) => {
        if (sessionStorage.getItem("currentUser") != null) {
            console.log(sessionStorage.getItem("currentUser"));
            document.getElementById("output").innerHTML = "Welcome, " + JSON.parse(localStorage.getItem(sessionStorage.getItem("currentUser"))).fullname;
            window.open("your-account.html", "_self");
        }
    });
}

function logOut() {
    sessionStorage.removeItem("currentUser");
    window.open("purchase.html", "_self");
}

// COOKIES --------------------------------------------------------

//EXAMPLE OF COOKIE STRING [(user:"Admin",pass:"@#$%^&"),(user:"User",pass:"%^&*")]

function convertCookie(cookie) {
    return cookie
}

function setCookie(cname, cvalue) {
    document.cookie += cname + "=" + cvalue + ";";
    return cname + "=" + cvalue + ";";
}

function getCookie(cname) {
    let name = cname + "=";
    let ca = document.cookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

function cookieExists(cname) {
    let name = cname + "=";
    let ca = document.cookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return true;
        }
    }
    return false;
}

function getAndParseCookie(cname) {
    return JSON.parse(getCookie(cname));
}

//Let's do some basic encryption on the cookies being used as a user/pass

//IMPORT md5.js HERE (its imported now - JS functions are made public to each other when both are linked in the html) you may need to change the import type to async though)

// FUNCTIONALITY --------------------------------------------------------

function checkPassMatch() {
    passCheckBox.addEventListener('input', (event) => {
        if (pwrdSetBox.value == passCheckBox.value) {
            passCheckBox.style.border = '1px solid #008000'
        } else {
            passCheckBox.style.border = '1px solid #fc324f'
        }
    });
}

clickTarget.removeEventListener('click',
    makeBackgroundYellow,
    false
);

function addAccModalListener(event) {
    if (event.target != actCreateModal && !event.target.classList.contains("text-input")) {
        console.log(event.target.classList);
        actCreateModal.style.display = cot > 0 ? 'none' : "grid"
        cot++;
    }
}

function openActModal() {
    actCreateModal.style.display = "grid";
    checkPassMatch();
    cot = 0;
    window.addEventListener('click',
        addAccModalListener,
        false
    );
}

function encrypt(toEncrypt) {

    // return toEncrypt

    return md5(toEncrypt);

}

function checkUser() {
    var user = document.getElementById("user").value;
    var pass = encrypt(document.getElementById("pass").value);

    i = 0;
    while (cookieExists("user" + i)) {
        if (getAndParseCookie(user + i)) {
            if (pass = getAndParseCookie(user + i).password) {
                setCookie("currentUser", ("user" + i));
                document.getElementById("output").innerHTML = "Welcome, " + getAndParseCookie("user" + i).fullname;
                window.open("your-account.html", "_self");
                return true;
            } else {
                document.getElementById("output").innerHTML = "Incorrect Password";
                return false;
            }
        } else {
            i++;
        }
    }
    document.getElementById("output").innerHTML = "User does not exist";
    return false;
    //document.getElementById("output") ? document.getElementById("output").innerHTML = "Welcome, " + document.getElementById("user").value : console.log("sad");
    //return (user == getAndParseCookie("user").username && pass == getAndParseCookie("user").password) ? true : false;
}

function checkUserLS() {
    var user = document.getElementById("user").value;
    var pass = encrypt(document.getElementById("pass").value);

    i = 0;
    while (localStorage.getItem("user" + i) != null) {
        if (JSON.parse(localStorage.getItem("user" + i)).username == user) {
            if (pass == JSON.parse(localStorage.getItem("user" + i)).password) {
                sessionStorage.setItem("currentUser", ("user" + i));
                document.getElementById("output").innerHTML = "Welcome, " + JSON.parse(localStorage.getItem("user" + i)).fullname;
                window.open("your-account.html", "_self");

                return true;
            } else {
                document.getElementById("output").innerHTML = "Incorrect Password";
                return false;
            }
        } else {
            i++;
        }
    }
    document.getElementById("output").innerHTML = "User does not exist";
    return false;
}

function openGuest() {
    sessionStorage.setItem("currentUser", "userguest");
    document.getElementById("output").innerHTML = "Welcome, Guest";
    window.open("your-account.html", "_self");
}

function register() {
    var f = document.getElementById("regfields");
    var newUser = document.getElementById("newUser").value;
    var newPass = encrypt(document.getElementById("newPass").value);
    var newPassCheck = encrypt(document.getElementById("newPassCheck").value);
    var newName = document.getElementById("fullname").value;
    var userExists = false;

    if (newUser != "" && newPass != "" && newPass == newPassCheck && newName != "") {
        var user = new User(newName, newUser, newPass);
        var i = 0;
        while (cookieExists("user" + i)) {
            if (newUser == JSON.parse(localStorage.getItem("user" + i)).username) {
                userExists = true;
                break;
            }
            i++;
        }
        if (userExists) {
            document.getElementById("error").style.display = "block";
            document.getElementById("error").innerHTML = "Username is taken.";
        } else {
            console.log(i);
            setCookie("user" + i, JSON.stringify(user));
            sessionStorage.setItem("currentUser", (user + i));
            localStorage.setItem("user" + i.toString(), JSON.stringify(user)); //alternative to cookies that are not persistent after browser close for testing
            // https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage
            window.open("your-account.html", "_self");
        }
    } else {
        document.getElementById("error").style.display = "block";
        if (newUser == "") {
            document.getElementById("error").innerHTML = "Please enter a username.";
        } else if (newPass == "" || newPassCheck == "") {
            document.getElementById("error").innerHTML = "Please enter a password.";
        } else if (newPass != newPassCheck) {
            document.getElementById("error").innerHTML = "Passwords do not match.";
        }
    }
}

