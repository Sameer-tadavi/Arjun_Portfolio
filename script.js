/* ========== Utilities ========== */
const $ = (sel, scope = document) => scope.querySelector(sel);
const $$ = (sel, scope = document) => scope.querySelectorAll(sel);

/* ========== Mobile menu toggle & close behaviors ========== */
const menuBtn = $("#menu-btn");
const mobileMenu = $("#mobile-menu");

function toggleMenu(forceState) {
  const willShow = typeof forceState === "boolean"
    ? forceState
    : mobileMenu.classList.contains("hidden");

  mobileMenu.classList.toggle("hidden", !willShow);
  menuBtn.setAttribute("aria-expanded", String(willShow));
}

if (menuBtn && mobileMenu) {
  menuBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    toggleMenu();
  });

  // Close when tapping a link
  $$(".nav-link", mobileMenu).forEach((link) => {
    link.addEventListener("click", () => toggleMenu(false));
  });

  // Close on outside click
  document.addEventListener("click", (e) => {
    if (!mobileMenu.classList.contains("hidden")) {
      const clickInsideMenu = mobileMenu.contains(e.target);
      const clickOnButton = menuBtn.contains(e.target);
      if (!clickInsideMenu && !clickOnButton) toggleMenu(false);
    }
  });

  // Close on Escape
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") toggleMenu(false);
  });
}

/* ========== Smooth scroll to Work section ========== */
window.scrollToWork = function scrollToWork() {
  const workSection = $("#work");
  if (workSection) workSection.scrollIntoView({ behavior: "smooth", block: "start" });
};

/* ========== Carousel buttons ========== */
window.scrollSlider = function scrollSlider(id, direction = 1) {
  const slider = document.getElementById(id);
  if (!slider) return;

  // Scroll nearly a viewport worth of cards for consistent feel on all devices
  const delta = Math.max(240, Math.floor(slider.clientWidth * 0.85));
  slider.scrollBy({ left: direction * delta, behavior: "smooth" });
};

/* ========== Minor UX: improve focus ring on keyboard nav ========== */
(function manageFocusRing() {
  let mouseDown = false;
  document.addEventListener("mousedown", () => (mouseDown = true));
  document.addEventListener("keydown", () => (mouseDown = false));
  document.body.addEventListener(
    "focusin",
    (e) => {
      if (mouseDown) e.target.classList.remove("outline-none");
      else e.target.classList.add("outline-none");
    },
    true
  );
})();
