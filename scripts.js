const spinnerWrapperE1 = document.querySelector(".spinner-wrapper");
window.addEventListener("load", () => {
  spinnerWrapperE1.style.opacity = "0";
  setTimeout(() => {
    spinnerWrapperE1.style.display = "none";
  }, 1000);
});

const navLinks = document.querySelectorAll(".nav-item");
const menuToggle = document.getElementById("navbarSupportedContent");
const bsCollapse = new bootstrap.Collapse(menuToggle);
navLinks.forEach((l) => {
  l.addEventListener("click", () => {
    bsCollapse.toggle();
  });
});
