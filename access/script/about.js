// ========= SLIDESHOW =========
const slides = document.querySelectorAll(".slide");
const dots = document.querySelectorAll(".dot");
let currentSlide = 0;
let autoPlayInterval;

function showSlide(index) {
  slides.forEach((slide) => slide.classList.remove("active"));
  dots.forEach((dot) => dot.classList.remove("active"));

  slides[index].classList.add("active");
  dots[index].classList.add("active");
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}

// Bắt đầu tự động chuyển ảnh mỗi 4 giây
autoPlayInterval = setInterval(nextSlide, 4000);

// Cho phép click vào dots để chọn slide
dots.forEach((dot, index) => {
  dot.addEventListener("click", () => {
    clearInterval(autoPlayInterval); // Dừng auto khi click
    currentSlide = index;
    showSlide(currentSlide);
    // Bắt đầu lại sau 5s
    setTimeout(() => {
      autoPlayInterval = setInterval(nextSlide, 4000);
    }, 5000);
  });
});

// Tạm dừng khi hover vào slideshow
const slideshow = document.querySelector(".slideshow");
slideshow.addEventListener("mouseenter", () => {
  clearInterval(autoPlayInterval);
});
slideshow.addEventListener("mouseleave", () => {
  autoPlayInterval = setInterval(nextSlide, 4000);
});
