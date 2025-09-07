// Hamburger Menu Toggle
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// Hero Background Slideshow
const hero = document.querySelector('.hero');
const heroImages = ["image1.jpg", "image2.jpg", "image3.jpg"];
let currentHero = 0;

function changeHeroImage() {
  hero.style.backgroundImage = `url('${heroImages[currentHero]}')`;
  currentHero = (currentHero + 1) % heroImages.length;
  let interval = currentHero === 0 ? 5000 : currentHero === 1 ? 6000 : 5000; // 5s, 6s, 5s
  setTimeout(changeHeroImage, interval);
}
changeHeroImage();

// Typewriter Effect
const typewriter = document.getElementById('typewriter');
const messages = [
  "Providing admissions in Paramedical",
  "Providing admissions in Medical",
  "BCA, MCA, MBBS courses"
];
let msgIndex = 0;
let charIndex = 0;
let typing = true;

function type() {
  if (typing) {
    if (charIndex < messages[msgIndex].length) {
      typewriter.textContent += messages[msgIndex][charIndex];
      charIndex++;
      setTimeout(type, 100);
    } else {
      typing = false;
      setTimeout(type, 1500); // wait before deleting
    }
  } else {
    if (charIndex > 0) {
      typewriter.textContent = messages[msgIndex].substring(0, charIndex - 1);
      charIndex--;
      setTimeout(type, 50);
    } else {
      typing = true;
      msgIndex = (msgIndex + 1) % messages.length;
      setTimeout(type, 500);
    }
  }
}
type();

// Optional: Auto-scroll Testimonials
const testimonialSlider = document.querySelector('.testimonial-slider');
let scrollAmount = 0;
function autoScrollTestimonials() {
  if(testimonialSlider.scrollWidth - testimonialSlider.clientWidth <= scrollAmount) {
    scrollAmount = 0;
  } else {
    scrollAmount += 1; // scroll speed
  }
  testimonialSlider.scrollTo({left: scrollAmount, behavior: 'smooth'});
}
setInterval(autoScrollTestimonials, 50);
// Hero Slideshow (fade in/out)
const heroSlides = document.querySelectorAll('.hero-slide');
let currentSlide = 0;

function showSlide() {
  heroSlides.forEach((slide, index) => {
    slide.classList.remove('active');
    if(index === currentSlide) slide.classList.add('active');
  });

  // Custom display duration per image
  let interval = currentSlide === 0 ? 5000 :
                 currentSlide === 1 ? 6000 : 5000;

  currentSlide = (currentSlide + 1) % heroSlides.length;
  setTimeout(showSlide, interval);
}

showSlide();
