const spinnerWrapperE1 = document.querySelector(".spinner-wrapper");
window.addEventListener("load", () => {
  spinnerWrapperE1.style.opacity = "0";
  setTimeout(() => {
    spinnerWrapperE1.style.display = "none";
  }, 1000);
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
