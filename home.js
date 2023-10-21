window.onscroll = function() { navBarAppear() };
var windowHeight = window.innerHeight;

function navBarAppear() {
    if ( document.body.scrollTop > (windowHeight * 0.9) || document.documentElement.scrollTop > (windowHeight * 0.9) ) {
        document.querySelector("nav").style.top = "0";
        document.querySelector(".scroll").style.animation = "none";
    } else {
        document.querySelector("nav").style.top = "-100px";
        document.querySelector(".drop").style.display = "none";
    }
}