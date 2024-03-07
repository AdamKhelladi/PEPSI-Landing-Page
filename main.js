let icon = document.querySelector(".toggle");
let nav = document.querySelector(".menu");

// Toggle menu when clicking the icon
icon.addEventListener("click", function () {
  icon.style.color = "white";
  if (nav.style.display === "flex") {
    nav.style.display = "none";
  } else {
    nav.style.display = "flex";
  }
});

// Hide menu when clicking outside the menu or the icon
document.addEventListener("click", function (event) {
  if (!event.target.closest(".menu") && !event.target.closest(".toggle")) {
    nav.style.display = "none";
  }
});
