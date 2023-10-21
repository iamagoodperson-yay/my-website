const tileLeftObserver = new IntersectionObserver(entries => {
  // Loop over the entries
  entries.forEach(entry => {
    // If the element is visible
    if (entry.isIntersecting) {
      // Add the animation class
      entry.target.classList.add("tile-left");
    }
  });
});

tileLeftObserver.observe(document.querySelector(".appear-left1"));
tileLeftObserver.observe(document.querySelector(".appear-left2"));
tileLeftObserver.observe(document.querySelector(".appear-left3"));
tileLeftObserver.observe(document.querySelector(".appear-left4"));
tileLeftObserver.observe(document.querySelector(".appear-left5"));


const tileTopObserver = new IntersectionObserver(entries => {
  // Loop over the entries
  entries.forEach(entry => {
    // If the element is visible
    if (entry.isIntersecting) {
      // Add the animation class
      entry.target.classList.add("tile-top");
    }
  });
});

tileTopObserver.observe(document.querySelector(".appear-top1"));
tileTopObserver.observe(document.querySelector(".appear-top2"));

var drop = document.querySelector(".drop")

function menu(){
  if (drop.style.display == "none") {
    drop.style.display = "flex";
  } else {
    drop.style.display = "none";
  }
}