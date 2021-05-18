var acc = document.getElementsByClassName("shipping-price-container");
var i;

let slideshowImageIndex = 0;
let activeDonutColor = "black"

const donutImages = {
  black: "img/xefAuoHA.jpeg",
  beige: "img/9-G7b57w.jpeg"
}

const donutImage = document.querySelector(".donut-image");

donutImage.src = "img/xefAuoHA.jpeg"

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    /* Toggle between adding and removing the "active" class,
    to highlight the button that controls the panel */
    this.classList.toggle("active");

    /* Toggle between hiding and showing the active panel */
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}


const donutToggleButtons = document.querySelectorAll(".donut-color-toggle");
let slideShowImages = document.querySelectorAll(`.donut-container-right img.slideshow-${activeDonutColor}`);
slideShowImages[slideshowImageIndex].style.display = "block";


function setDonutColor(color) {
  slideShowImages.forEach((image) => {
    image.style.display = "none";
  })

  activeDonutColor = color;
  slideShowImages = document.querySelectorAll(`.donut-container-right img.slideshow-${activeDonutColor}`)
  slideshowImageIndex = 0;


  slideShowImages[slideshowImageIndex].style.display = "block"
}

donutToggleButtons.forEach(toggle => {
  toggle.addEventListener("click", () => {
    if (toggle.classList.contains("donut-color-toggle-beige")) {
      donutImage.src = donutImages.beige
      setDonutColor("beige")
    } else {
      donutImage.src = donutImages.black;
      setDonutColor("black")
    }
  })
})


function cycleImages(direction) {
  slideShowImages[slideshowImageIndex].style.display = "none";

  if (direction === "next") {
    if (slideshowImageIndex + 1 >= slideShowImages.length) {
      slideshowImageIndex = 0;
    } else {
      slideshowImageIndex++;
    }
  } else {
    if (slideshowImageIndex - 1 < 0) {
      slideshowImageIndex = slideShowImages.length - 1;
    } else {
      slideshowImageIndex--;
    }
  }

  slideShowImages[slideshowImageIndex].style.display = "block";
}



