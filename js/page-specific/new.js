var t = false;

// Show the popup when the link is clicked
document.querySelector('.popup-link').addEventListener('click', function (e) {
    e.preventDefault();
    var popupId = this.getAttribute('data-popup');
    document.querySelector(popupId).style.display = 'block';
    t = true
    console.log('p',t)
});

// Hide the popup when the user clicks outside of it
window.addEventListener('click', function (e) {
    if(!t) {
        var popups = document.querySelectorAll('.popup');
        for (var i = 0; i < popups.length; i++) {
            if (popups[i].contains(e.target)) {
                console.log('j',e.target.contains(popups[i]));
                return;
            } else {
                console.log("poggers")
                popups[i].style.display = 'none';
            }
        }
    } else {
        t = false;
    }
}, false);