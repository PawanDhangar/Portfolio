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

const checkbox = document.getElementById("checkbox");
checkbox.addEventListener("change", () => {
  if (checkbox.checked) {
    document.documentElement.classList.add("dark");
    localStorage.setItem("theme", "dark");
    updateIconVisibility("dark");
  } else {
    document.documentElement.classList.remove("dark");
    localStorage.setItem("theme", "light");
    updateIconVisibility("light");
  }
});

function updateIconVisibility(theme) {
  if (theme === "dark") {
    moonIcon.style.display = "none";
    sunIcon.style.display = "inline-block";
  } else {
    moonIcon.style.display = "inline-block";
    sunIcon.style.display = "none";
  }
}

// Check for saved theme preference in local storage
const savedTheme = localStorage.getItem("theme");
if (savedTheme === "dark") {
  document.documentElement.classList.add("dark");
  checkbox.checked = true;
  updateIconVisibility("dark");
} else {
  document.documentElement.classList.remove("dark");
  checkbox.checked = false;
  updateIconVisibility("light");
}
