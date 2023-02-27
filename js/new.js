// Show the popup when the link is clicked
document.querySelector('.popup-link').addEventListener('click', function(e) {
    e.preventDefault();
    var popupId = this.getAttribute('data-popup');
    document.querySelector(popupId).style.display = 'block';
  });
  
  // Hide the popup when the user clicks outside of it
  window.addEventListener('click', function(e) {
    var popups = document.querySelectorAll('.popup');
    for (var i = 0; i < popups.length; i++) {
      if (popups[i].contains(e.target)) {
        return;
      }
      popups[i].style.display = 'none';
    }
  });