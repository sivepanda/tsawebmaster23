var t = false;

// Show the popup when the link is clicked
const newslinks = document.querySelectorAll('.timeline-item');
for(links of newslinks) {
    links.addEventListener('click', function (e) {
        e.preventDefault();
        var popupId = this.getAttribute('data-popup');
        document.querySelector(popupId) ? document.querySelector(popupId).style.display = 'block' : console.log(popupId, 'does not exist');
        t = true
        console.log('p',t)
    });
}


// Hide the popup when the user clicks outside of it
window.addEventListener('click', function (e) {
    if(!t) {
        var popups = document.querySelectorAll('.popup');
        for (var i = 0; i < popups.length; i++) {
            if (popups[i].contains(e.target)) {
                console.log('j',e.target.contains(popups[i]));
                return;
            } else {
                console.log("poggers");
                popups[i].style.display = 'none';
            }
        }
    } else {
        console.log("2poggers");
        t = false;
    }
}, false);