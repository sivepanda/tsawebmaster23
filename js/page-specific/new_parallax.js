var bkg = document.getElementById("nc1");

addEventListener("scroll", (event) => {
    var yMax = document.scrollingElement.scrollHeight;
    var y = window.scrollY;
    var pos = (y/yMax) * 20;
    bkg.style.backgroundPosition = 'center ' + pos + '%'; 
});