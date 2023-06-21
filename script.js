function slidesPlugin(activeSlide = 4) {
  const slides = document.querySelectorAll(".slide");
  slides[activeSlide].classList.add("active");
  slides.forEach((item) =>
    item.addEventListener("click", function () {
      slides.forEach((slid) => slid.classList.remove("active"));
      item.classList.add("active");
    })
  );
}
slidesPlugin(4);
