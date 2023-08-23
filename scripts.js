const spinnerWrapperE1 = document.querySelector(".spinner-wrapper");
window.addEventListener("load", () => {
  spinnerWrapperE1.style.opacity = "0";
  setTimeout(() => {
    spinnerWrapperE1.style.display = "none";
  }, 1000);
});

const navLinks = document.querySelectorAll(".nav-item");
const toggleButton = document.getElementById("navbarSupportedContent");
const bsCollapse = new bootstrap.Collapse(toggleButton, {
  toggle: false,
});

navLinks.forEach((l) => {
  l.addEventListener("click", () => {
    bsCollapse.hide();
  });
});

$(document).ready(function () {
  $("a").on("click", function (event) {
    if (this.hash !== "") {
      event.preventDefault();

      var hash = this.hash;
      $("html, body").animate(
        {
          scrollTop: $(hash).offset().top,
        },
        800,
        function () {
          window.location.hash = hash;
        }
      );
    }
  });
});
