var height = window.innerHeight;
var width = window.innerWidth;
var isOpen = false;
var dtstyles = 'styles/desktopstyles.css';
var mobstyles = 'styles/mobilestyles.css';
var styles = document.createElement('link');
var isMobile;
var initialLogoHeight;
var initialTextIBP3Height;

styles.setAttribute('rel', 'stylesheet');

resizeWindow();
document.head.appendChild(styles);
const head = document.getElementById("header");

function changeElementIDDisplay(id, display) {
    document.getElementById(id) ? document.getElementById(id).style.display = display : console.log(id + " replaced");
}

// var logo = document.querySelector('.menumenu');
var menu = document.querySelector('.menu');

// logo.addEventListener('click', function() {
//     menu.classList.toggle('showmenu');
// });

function resizeWindow() {
    var height = window.innerHeight;
    var width = window.innerWidth;
    console.log("window size ratio: " + width / height);

    if ((width / height) > (7 / 6)) {
        isMobile = false;
        styles.setAttribute('href', dtstyles);
    } else {
        isMobile = true;
        styles.setAttribute('href', mobstyles);
        window.scrollTo(0, 0);

    }
}



function toggleMenu() {
    menu_btn.classList.toggle('is-active');
    mobile_menu.classList.toggle('is-active');
    mobile_list.classList.toggle('is-active');
    console.log('menu loaded');

}


window.addEventListener("resize", resizeWindow);