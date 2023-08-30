let slideIndex = 0;
showSlide(slideIndex);

function changeSlide(n) {
  showSlide((slideIndex += n));
}

function showSlide(index) {
  const slides = document.querySelectorAll(".slide");

  if (index >= slides.length) {
    slideIndex = 0;
  } else if (index < 0) {
    slideIndex = slides.length - 1;
  }

  slides.forEach((slide) => (slide.style.display = "none"));
  slides[slideIndex].style.display = "block";
}
