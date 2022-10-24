// Hamburger Menu
let hamburger = document.querySelector(".hamburger");
let navMenu = document.querySelector(".container-nav-menu");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
})
document.querySelectorAll(".nav-menu").forEach(n => n.addEventListener("click", () => {
  hamburger.classList.remove("active");
  navMenu.classList.remove("active");
}))
