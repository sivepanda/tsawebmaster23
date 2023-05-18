//INDEX PAGE ANIMATIONS------------------------------------------------------------------------------------------------------------
const ic0 = document.getElementById("ic0") ? document.getElementById("ic0") : false;
const ic1 = document.getElementById("ic1") ? document.getElementById("ic1") : false;
const ic2 = document.getElementById("ic2") ? document.getElementById("ic2") : false;

const liic0 = document.getElementById("liic0") ? document.getElementById("liic0") : false;
const liic1 = document.getElementById("liic1") ? document.getElementById("liic1") : false;
const liic2 = document.getElementById("liic2") ? document.getElementById("liic2") : false;

const ic1lef = document.getElementById("ic1lef") ? document.getElementById("ic1lef") : false;
const ic1righ = document.getElementById("ic1righ") ? document.getElementById("ic1righ") : false;

const ic2lef = document.getElementById("ic2lef") ? document.getElementById("ic2lef") : false;
const ic2righ = document.getElementById("ic2righ") ? document.getElementById("ic2righ") : false;

console.log((localStorage.getItem("visited") == "true") ? "none" : "block")

document.getElementById("modalstart").style.display = (localStorage.getItem("visited") == "true") ? "none" : "inline-flex";

function closeIntroModal() {
    document.getElementById("modalstart").style.display = 'none';
    localStorage.setItem("visited", "true");
}

window.addEventListener("scroll", function(e) {
    if(elementInViewport(ic1)) {

        ic1lef ? ic1lef.classList.add('slidein-horiz') : null;
        ic1righ ? ic1righ.classList.add('slidein-horiz') : null;
    }

    if(elementInViewport(ic2)) {
        ic2lef ? ic2lef.classList.add('slidein-horiz') : null;
        ic2righ ? ic2righ.classList.add('slidein-horiz') : null;
    }
});


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

// window.addEventListener("scroll", function(e) {
//     if (elementInViewport(ic0)) {
//         liic0.classList.add("scaletwo");
//         liic1.classList.remove("scaletwo");
//         liic2.classList.remove("scaletwo");
//     } else if (elementInViewport(ic1)) {
//         liic1.classList.add("scaletwo");
//         liic0.classList.remove("scaletwo");
//         liic2.classList.remove("scaletwo");
//     } else if (elementInViewport(ic2)) {
//         liic2.classList.add("scaletwo");
//         liic0.classList.remove("scaletwo");
//         liic1.classList.remove("scaletwo");
//     }
// });



// let counter = 0;
// let lastIntersectedDiv = null;

// const counterElement = document.getElementById('counter');
// const observer = new IntersectionObserver(entries => {
//   entries.forEach(entry => {
//     if (entry.isIntersecting) {
//       if (lastIntersectedDiv === null || entry.target.offsetTop > lastIntersectedDiv.offsetTop) {
//         counter++;
//       } else {
//         counter--;
//       }
//       counterElement.textContent = counter.toString();
//       lastIntersectedDiv = entry.target;
//     }
//   });
// });

// const boxes = document.querySelectorAll('.box');
// boxes.forEach(box => {
//   observer.observe(box);
// });