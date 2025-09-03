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

// Slider scroll buttons
function scrollSlider(id, direction) {
  const slider = document.getElementById(id);
  if (slider) {
    const cardWidth = slider.querySelector("div").offsetWidth + 12; // card width + gap
    slider.scrollBy({ left: direction * cardWidth, behavior: "smooth" });
  }
}
