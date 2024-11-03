const slides = document.querySelectorAll(".slide");
const audio = new Audio("./muzika.mp3");
let currentIndex = 0;

function changeSlide() {
  slides[currentIndex].classList.remove("active");
  currentIndex = (currentIndex + 1) % slides.length;
  slides[currentIndex].classList.add("active");
}

setInterval(changeSlide, 3000);
