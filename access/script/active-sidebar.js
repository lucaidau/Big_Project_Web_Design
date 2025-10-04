const toggle = document.querySelector(".navbar__toggle");
const menu = document.querySelector(".navbar__menu");

toggle.addEventListener("click", () => {
  menu.classList.toggle("active");
});
