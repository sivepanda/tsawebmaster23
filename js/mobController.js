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

var menu = document.querySelector('.menu');

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
        // window.scrollTo(0, 0);
        document.getElementById("loadtank") ? document.getElementById("loadtank").remove() : null;
    }
}

window.addEventListener('load', (event) => {
    const menu_btn = document.querySelector('.hamburger');
    const mobile_menu = document.querySelector('.dotmnu');
    const mobile_list = document.querySelector('.newcirc');
    
    console.log('mobile menu ready');

    const ic1Logo = document.getElementById("ic1logo");
    ic1Logo ? initialLogoHeight = ic1Logo.offsetHeight : console.log("not index");
    const ic3bp = document.getElementById("ic3bp");
    ic3bp ? initialTextIBP3Height = ic3bp.offsetHeight : console.log("not index");

    menu_btn.addEventListener('click', function() {
        menu_btn.classList.toggle('is-active');
        mobile_menu.classList.toggle('is-active-flex');
        mobile_list.classList.toggle('is-active');
    });
});


function toggleMenu() {
    menu_btn.classList.toggle('is-active');
    mobile_menu.classList.toggle('is-active');
    mobile_list.classList.toggle('is-active');
    console.log('menu loaded');
}


window.addEventListener("resize", resizeWindow);