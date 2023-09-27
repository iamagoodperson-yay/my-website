window.addEventListener('scroll', function() {
    var navbar = document.querySelector("nav");
    if (this.window.pageYOffset > 750) {
        navbar.style.top = 0;
    } else {
        navbar.style.top = -100;
    }
});