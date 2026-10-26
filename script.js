const menuToggle = document.getElementById(“menu-toggle”);
const navLinks = document.getElementById(“nav-links”);

menuToggle.addEventListener(“click”, function () {
const isOpen = navLinks.classList.toggle(“active”);

menuToggle.setAttribute("aria-expanded", isOpen);
menuToggle.setAttribute(
    "aria-label",
    isOpen ? "Close navigation menu" : "Open navigation menu"
);
menuToggle.textContent = isOpen ? "✕" : "☰";

});

document.querySelectorAll(”.nav-links a”).forEach(function (link) {
link.addEventListener(“click”, function () {
navLinks.classList.remove(“active”);
menuToggle.setAttribute(“aria-expanded”, “false”);
menuToggle.setAttribute(“aria-label”, “Open navigation menu”);
menuToggle.textContent = “☰”;
});
});

document.getElementById(“current-year”).textContent =
new Date().getFullYear();