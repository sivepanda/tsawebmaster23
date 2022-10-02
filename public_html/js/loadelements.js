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