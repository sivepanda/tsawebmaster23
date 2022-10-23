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


const scrollContainer = document.getElementsByClassName("horiz")[0];
const scrollElements = document.getElementsByClassName("helement");
var dists = []
for (el in scrollElements) {
    dists.push(el.offsetLeft)
}

//HERE LIES BROKEN SCROLL CODE

// scrollContainer.scrollLeft = .5;
// var scr = 0;

// window.addEventListener("scroll", function(e) {
//     scrollContainer.addEventListener("wheel", (evt) => {
//         evt.preventDefault();
//         // if (evt.deltaY > 0 && scr < dists.length) {
//         //     scr++;
//         //     scrollContainer.scrollLeft = dists[scr];
//         // } else if (evt.deltaY < 0 && scr > 0) {
//         //     scr--;
//         //     scrollContainer.scrollLeft = dists[scr];
//         // }
//         // scrollContainer.scrollLeft += evt.deltaY * 10;
//     });
// });