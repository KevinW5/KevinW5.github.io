// script.js

const slides = document.querySelectorAll(".slide");
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");

let currentSlide = 0;

function showSlide(n) { 
  slides.forEach(slide => slide.classList.remove("active"));
  slides[n].classList.add("active");
}

function nextSlide() {
  currentSlide++;
  if (currentSlide >= slides.length) {
    currentSlide = 0;
  }
  showSlide(currentSlide);
}

function prevSlide() {
  currentSlide--;
  if (currentSlide < 0) {
    currentSlide = slides.length - 1;
  }
  showSlide(currentSlide);
}

next.addEventListener("click", nextSlide);
prev.addEventListener("click", prevSlide);

// Initial slide
showSlide(currentSlide);

// Change background color of the web page 
document.body.style.backgroundColor = "#445"; 
