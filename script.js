// Mobile Menu Toggle
const navLinks = document.querySelectorAll('.nav-menu .nav-link');
const menuOpenButton = document.querySelector('#menu-open-button');
const menuCloseButton = document.querySelector('#menu-close-button');

menuOpenButton.addEventListener("click", () => {
    document.body.classList.toggle("show-mobile-menu");
});

// Close menu when the close button is clicked
menuCloseButton.addEventListener("click", () => menuOpenButton.click());

// Close mobile menu when any nav link is clicked
navLinks.forEach(link => {
    link.addEventListener("click", () => menuOpenButton.click());
});


// Testimonials Swiper Slider
const swiper = new Swiper('.slider-wrapper', {
    loop: true,
    grabCursor: true,
    spaceBetween: 25,

    // AUTO-SLIDE
    autoplay: {
        delay: 2500,  // Every 2.5 Second slide change
        disableOnInteraction: false,
    },

    // ⭐ SMOOTH SLIDE ANIMATION
    effect: "slide",  
    speed: 800,       // slide speed

    // Pagination bullets
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        dynamicBullets: true,
    },

    // Next / Prev buttons
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    // Responsive breakpoints
    breakpoints: {
        0: {
            slidesPerView: 1
        },
        768: {
            slidesPerView: 2
        },
        1024: {
            slidesPerView: 3
        },
    }

    // ================= SCROLL ANIMATION =================
const sr = ScrollReveal({
  origin: 'bottom',
  distance: '60px',
  duration: 1200,
  delay: 200,
  reset: false
});

// Hero section
sr.reveal('.hero-details', { origin: 'left' });
sr.reveal('.hero-image-wrapper', { origin: 'right' });

// About
sr.reveal('.about-image-wrapper', { origin: 'left' });
sr.reveal('.about-details', { origin: 'right' });

// Menu
sr.reveal('.menu-item', { interval: 200 });

// Gallery
sr.reveal('.gallery-item', { interval: 200 });

// Contact
sr.reveal('.contact-info', { interval: 200 });
sr.reveal('.contact-form', { origin: 'right' });
});
