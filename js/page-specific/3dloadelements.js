
var development = false;

String.prototype.toTitleCase = function () {
    return this.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
};

/**load logo and other header elements */

//load fonts
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

// create site title based on HTML hyperlink
var path = window.location.pathname;
path = path.substring(path.lastIndexOf("/") + 1)
var title;
title = path.substring(0, 1).toUpperCase() + path.substring(1, path.lastIndexOf("."))
title = title.replace("-"," ").toTitleCase();
title = (title == "Index" || title == "") ? "Home" : title;
document.title = title + " - Retrograde"; //set site title

//set local storage variable
var localWebStorage = window.localStorage;


const header = document.getElementById("header");

//loading screen
var isLoaded = false;
var timerComplete = false;

// window.addEventListener('load', (event) => {
//     // console.log(xhr.loaded);
//     isLoaded = true;
//     loaded();
// });



/*LOADING SCREEN */
/**what happens when the page loads*/
function loaded() {
    if (isLoaded && timerComplete && document.getElementById("loadtank")) {
        var load = document.getElementById("loadtank");
        load.remove();
        document.getElementById("ic0") ? document.querySelector("#ic0 h1").classList.add("showh1") : console.log('ic0 not found');
        document.getElementById("ic0") ? document.querySelector("#ic0 p").classList.add("showp") : console.log('ic0 not found');
        
        // REENABLE BELOW
        document.getElementById("")
        window.clearTimeout(loadInterval);
        console.log('Page loaded successfully');
    }
}
var loadInterval; 
loadInterval = setInterval(function() {
    timerComplete = true;
    loaded();
}, 1500);

/**Triggered when element is in viewport
 * @param el - parameter being watched
 */
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

//Scroll event for when the full navbar transforms into the compact one
window.addEventListener("scroll", function(e) {
    if (window.scrollY > 150) {
        header.classList.remove("fullheader");
        header.classList.add("compactheader");
    } else {
        header.classList.remove("compactheader");
        header.classList.add("fullheader");

    }
});

// for (page in document.getElementsByClassName("mnuele")) {
//     if (document.getElementsByClassName("mnuele")[page].getAttribute("href") == path) {
//         document.getElementsByClassName("mnuele")[page].classList.add('mnuact');
//     }
// }
