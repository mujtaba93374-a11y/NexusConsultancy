const hamburger = document.getElementById("hamburger");
const mobileNav = document.getElementById("mobileNav");

// Toggle menu
hamburger.addEventListener("click", () => {
  mobileNav.classList.toggle("active");
});

// Close menu when link clicked
document.querySelectorAll(".mobile-nav a").forEach(link => {
  link.addEventListener("click", () => {
    mobileNav.classList.remove("active");
  });
});

/* HERO SLIDER */
const slides = document.querySelectorAll(".hero-slide");
let current = 0;

function slider() {
  slides.forEach(s => s.classList.remove("active"));
  slides[current].classList.add("active");
  current = (current + 1) % slides.length;
  setTimeout(slider, 5000);
}
slider();

/* TYPEWRITER */
const text = document.getElementById("typewriter");
const messages = [
  "Medical Admissions in India",
  "Paramedical Admissions",
  "MBBS Abroad Guidance"
];

let i = 0, j = 0, typing = true;

function type() {
  if (typing) {
    if (j < messages[i].length) {
      text.textContent += messages[i][j++];
      setTimeout(type, 80);
    } else {
      typing = false;
      setTimeout(type, 1400);
    }
  } else {
    if (j > 0) {
      text.textContent = messages[i].substring(0, --j);
      setTimeout(type, 40);
    } else {
      typing = true;
      i = (i + 1) % messages.length;
      setTimeout(type, 300);
    }
  }
}
type();
