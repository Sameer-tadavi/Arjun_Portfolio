// Mobile menu toggle
const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");

menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("hidden");
});

// Smooth scroll to Work section
function scrollToWork() {
  const workSection = document.getElementById("work");
  if (workSection) {
    workSection.scrollIntoView({ behavior: "smooth" });
  }
}
