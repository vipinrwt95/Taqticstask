// JavaScript to handle scroll event
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) { // Change 50 to the scroll distance you want
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });