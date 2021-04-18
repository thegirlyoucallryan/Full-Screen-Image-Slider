let sliderImages = document.querySelectorAll(".slide");
let arrowLeft = document.querySelector("#arrow-left");
let arrowRight = document.querySelector("#arrow-right");
let current = 0;

//clear all images
function reset() {
  for (let i = 0; i < sliderImages.length; i++) {
    sliderImages[i].style.display = "none";
  }
}
//init slider
function startSlide() {
  reset();
  sliderImages[0].style.display = "block";
}

//show previous
function previous() {
  reset();
  sliderImages[current - 1].style.display = "block";
  current--;
}

//show next
function next() {
  reset();
  sliderImages[current + 1].style.display = "block";
  current++;
}

//left arrow click
arrowLeft.addEventListener("click", function () {
  if (current === 0) {
    current = sliderImages.length;
  }
  previous();
});
//left arrow click
arrowRight.addEventListener("click", function () {
  if (current === sliderImages.length - 1) {
    current = -1;
  }
  next();
});

startSlide();

let heading = document.querySelectorAll("span");
for (let i = 0; i < heading.length; i++) {
  let info = document.querySelectorAll(".modal");
  for (let j = 0; j < info.length; j++)
    heading[i].addEventListener("click", function (e) {
      info[j].classList.toggle("hidden");
    });
}
