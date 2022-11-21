//load logo and other header elements


var fonts = document.createElement('link');
fonts.setAttribute('rel', 'stylesheet');
fonts.setAttribute('type', 'text/css');
fonts.setAttribute('href', 'https://fonts.googleapis.com/css2?family=Orbitron:wght@400;500&family=Sarabun&display=swap');
document.head.appendChild(fonts);
//set header icon
var icon = document.createElement('link');
icon.setAttribute('rel', 'icon');
icon.setAttribute('href', 'resources/images/favicon.ico');
icon.setAttribute('type', 'image/x-icon');
document.head.appendChild(icon);
var path = window.location.pathname;
path = path.substring(path.lastIndexOf("/") + 1)
title = path.substring(0, 1).toUpperCase() + path.substring(1, path.lastIndexOf("."))
title = (title == "Index") ? "Home" : title;
//set site title
document.title = title + " - Retrograde";
//set local storage variable
var localWebStorage = window.localStorage;


const header = document.getElementById("header");


function closeBox(a, b) {
    a = document.getElementById(a);
    b = document.getElementById(b);
    a.style.display = a.style.display == "" ? "none" : "";
    b.classList.toggle("undLineActive");
    console.log(a.style.display)
}

function closeBox(a, b, c, d) {
    a = document.getElementById(a);
    b = document.getElementById(b);
    lsc = []
    lsd = []
    for (x of c) lsc.push(document.getElementById(x))
    for (x of d) lsd.push(document.getElementById(x))
        // a.style.display = a.style.display == "grid" ? "none" : "grid";
    if (a.style.display == "grid") {
        a.style.display = 'none';
        b.classList.remove("undLineActive");
        for (x of lsc) x.classList.remove("undLineActive");
        for (x of lsd) x.style.display = "none";
    } else {
        a.style.display = 'grid';
        b.classList.add("undLineActive");
        for (x of lsc) x.classList.remove("undLineActive");
        for (x of lsd) x.style.display = "none";
    }
    // for (x of lsc) x.classList.remove("undLineActive");
    // for (x of lsd) x.style.display == "none";
    // b.classList.toggle("undLineActive");
    // console.log(b.classList.contains("undLineActive"));
}


//loading screen
var isLoaded = false;
var timerComplete = false;

window.addEventListener('load', (event) => {
    isLoaded = true;
    loaded();
});



/*LOADING SCREEN */
//remove loading screen upon load
function loaded() {
    if (isLoaded && timerComplete && document.getElementById("loadtank")) {
        var load = document.getElementById("loadtank");
        load.remove();
        document.getElementById("ic0") ? document.querySelector("#ic0 h1").classList.add("showh1") : console.log('ic0 not found');
        document.getElementById("ic0") ? document.querySelector("#ic0 p").classList.add("showp") : console.log('ic0 not found');
        window.clearTimeout(loadInterval);
        console.log('Page loaded successfully');
    }
}

loadInterval = setInterval(function() {
    timerComplete = true;
    loaded();
}, 1500);

function elementInViewport(el) {
    var top = el.offsetTop;
    var left = el.offsetLeft;
    var width = el.offsetWidth;
    var height = el.offsetHeight;

    while (el.offsetParent) {
        el = el.offsetParent;
        top += el.offsetTop;
        left += el.offsetLeft;
    }

    return (
        top >= window.pageYOffset &&
        left >= window.pageXOffset &&
        (top + height) <= (window.pageYOffset + window.innerHeight) &&
        (left + width) <= (window.pageXOffset + window.innerWidth)
    );
}

window.addEventListener("scroll", function(e) {
    if (window.scrollY > 200) {
        header.classList.remove("fullheader");
        header.classList.add("compactheader");
    } else {
        header.classList.remove("compactheader");
        header.classList.add("fullheader");

    }
});

for (page in document.getElementsByClassName("mnuele")) {
    if (document.getElementsByClassName("mnuele")[page].getAttribute("href") == path) {
        document.getElementsByClassName("mnuele")[page].classList.add('mnuact');
    }
}


//INDEX PAGE ANIMATIONS------------------------------------------------------------------------------------------------------------
const ic0 = document.getElementById("ic0") ? document.getElementById("ic0") : console.log('ic0 not found');
const ic1 = document.getElementById("ic1") ? document.getElementById("ic1") : console.log('ic1 not found');
const ic2 = document.getElementById("ic2") ? document.getElementById("ic2") : console.log('ic2 not found');

const liic0 = document.getElementById("liic0") ? document.getElementById("liic0") : console.log('liic0 not found');
const liic1 = document.getElementById("liic1") ? document.getElementById("liic1") : console.log('liic1 not found');
const liic2 = document.getElementById("liic2") ? document.getElementById("liic2") : console.log('liic2 not found');

window.addEventListener("scroll", function(e) {
    if (elementInViewport(ic0)) {
        liic0.classList.add("scaletwo");
        liic1.classList.remove("scaletwo");
        liic2.classList.remove("scaletwo");
    } else if (elementInViewport(ic1)) {
        liic1.classList.add("scaletwo");
        liic0.classList.remove("scaletwo");
        liic2.classList.remove("scaletwo");
    } else if (elementInViewport(ic2)) {
        liic2.classList.add("scaletwo");
        liic0.classList.remove("scaletwo");
        liic1.classList.remove("scaletwo");
    }
});

//MISSION PAGE ANIMATIONS----------------------------------------------------------------------------------------------------------