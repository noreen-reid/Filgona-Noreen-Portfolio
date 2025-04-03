// Mobile Menu Toggle
const menuToggle = document.querySelector('.menu-toggle');
const navbar = document.querySelector('.navbar');

menuToggle.addEventListener('click', () => {
  navbar.classList.toggle('active');
  menuToggle.classList.toggle('active');
});

// Close menu when clicking a link
document.querySelectorAll('.navbar a').forEach(link => {
  link.addEventListener('click', () => {
    navbar.classList.remove('active');
    menuToggle.classList.remove('active');
  });
});

// Typing Animation
const typingText = document.querySelector('.typing-text');
const professions = ['Web Developer', 'Problem Solver', 'Sociologist'];
let index = 0;
let charIndex = 0;
let isDeleting = false;

const type = () => {
  const currentProfession = professions[index];
  
  if (!isDeleting && charIndex < currentProfession.length) {
    typingText.textContent += currentProfession.charAt(charIndex);
    charIndex++;
    setTimeout(type, 100);
  } else if (isDeleting && charIndex > 0) {
    typingText.textContent = currentProfession.substring(0, charIndex - 1);
    charIndex--;
    setTimeout(type, 50);
  } else {
    isDeleting = !isDeleting;
    if (!isDeleting) index = (index + 1) % professions.length;
    setTimeout(type, 1000);
  }
};

type();

// Smooth Scrolling for Anchor Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Form Submission
const contactForm = document.getElementById('contactForm');
contactForm.addEventListener('submit', (e) => {
  e.preventDefault();
  alert('Message sent successfully!');
  contactForm.reset();
});