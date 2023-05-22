var development = false;

var title;

String.prototype.toTitleCase = function () {
    return this.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substring(1).toLowerCase();});
};

/**load logo and other header elements */

//load fonts
var fonts = document.createElement('link');
// fonts.setAttribute('rel', 'stylesheet');
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
title = path.substring(0, 1).toUpperCase() + path.substring(1, path.lastIndexOf("."))
title = title.replace("-"," ").toTitleCase();
title = (title == "Index" || title == "") ? "Home" : title;
document.title = title + " - Retrograde"; //set site title

//set local storage variable
var localWebStorage = window.localStorage;



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
    var loadInterval = setInterval(function() {
        loaded();
    }, 10);
});



/*LOADING SCREEN */
/**what happens when the page loads*/
function loaded() {
    if (isLoaded && document.getElementById("loadtank")) {
        var load = document.getElementById("loadtank");
        load.remove();
        document.getElementById("ic0") ? document.querySelector("#ic0 h1").classList.add("showh1") : console.log('ic0 not found');
        document.getElementById("ic0") ? document.querySelector("#ic0 p").classList.add("showp") : console.log('ic0 not found');
        
        // REENABLE BELOW
        document.getElementById("")
        // loadInterval ? window.clearTimeout(loadInterval) : null;
        console.log('Page loaded successfully');

        const header = document.getElementById("header");

        //Scroll event for when the full navbar transforms into the compact one
        window.addEventListener("scroll", function(e) {
            if (window.scrollY > 50) {
                header.classList.remove("fullheader");
                header.classList.add("compactheader");
            } else {
                header.classList.remove("compactheader");
                header.classList.add("fullheader");

            }
        });
    }
}

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



// for (page in document.getElementsByClassName("mnuele")) {
//     if (document.getElementsByClassName("mnuele")[page].getAttribute("href") == path) {
//         document.getElementsByClassName("mnuele")[page].classList.add('mnuact');
//     }
// }