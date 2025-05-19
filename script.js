// Dark/Light Mode Toggle
const toggle = document.getElementById('toggle');
const body = document.body;

// Check for saved theme preference
if (localStorage.getItem('theme') === 'light') {
    body.classList.remove('dark-mode');
    body.classList.add('light-mode');
    toggle.checked = true;
}

toggle.addEventListener('change', () => {
    if (toggle.checked) {
        body.classList.remove('dark-mode');
        body.classList.add('light-mode');
        localStorage.setItem('theme', 'light');
    } else {
        body.classList.remove('light-mode');
        body.classList.add('dark-mode');
        localStorage.setItem('theme', 'dark');
    }
});

// Hero Slider
const slides = document.querySelectorAll('.slide');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
let currentSlide = 0;

function showSlide(n) {
    slides.forEach(slide => slide.classList.remove('active'));
    slides[n].classList.add('active');
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}

function prevSlide() {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
}

nextBtn.addEventListener('click', nextSlide);
prevBtn.addEventListener('click', prevSlide);

// Auto-slide every 5 seconds
setInterval(nextSlide, 5000);

// Smooth Scrolling for Navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Mobile Menu Toggle (Hidden in CSS, can be expanded)
// Mobile Navigation Toggle
const mobileToggle = document.querySelector('.mobile-nav-toggle');
const mobileNav = document.querySelector('.mobile-nav');

mobileToggle.addEventListener('click', () => {
    mobileNav.classList.toggle('active');
    mobileToggle.innerHTML = mobileNav.classList.contains('active') 
        ? '<i class="fas fa-times"></i>' 
        : '<i class="fas fa-bars"></i>';
});

// Close mobile nav when clicking a link
document.querySelectorAll('.mobile-nav a').forEach(link => {
    link.addEventListener('click', () => {
        mobileNav.classList.remove('active');
        mobileToggle.innerHTML = '<i class="fas fa-bars"></i>';
    });
});