// Mobile menu toggle
const menuBtn = document.getElementById("menu-btn");
const mobileMenu = document.getElementById("mobile-menu");

menuBtn.addEventListener("click", () => {
  mobileMenu.classList.toggle("hidden");
});

// Smooth scroll to Work section
function scrollToWork() {
  const workSection = document.getElementById("work");
  if (workSection) {
    workSection.scrollIntoView({ behavior: "smooth" });
  }
}

// Slider navigation
function scrollSlider(id, direction) {
  const slider = document.getElementById(id);
  if (slider) {
    const scrollAmount = 320; // equal to card width
    if (direction === "left") {
      slider.scrollBy({ left: -scrollAmount, behavior: "smooth" });
    } else {
      slider.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  }
}
