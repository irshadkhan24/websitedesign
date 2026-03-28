// ================= MOBILE MENU =================
const navLinks = document.querySelectorAll('.nav-menu .nav-link');
const menuOpenButton = document.querySelector('#menu-open-button');
const menuCloseButton = document.querySelector('#menu-close-button');

menuOpenButton.addEventListener("click", () => {
    document.body.classList.toggle("show-mobile-menu");
});

// Close menu when close button clicked
menuCloseButton.addEventListener("click", () => menuOpenButton.click());

// Close menu on link click
navLinks.forEach(link => {
    link.addEventListener("click", () => menuOpenButton.click());
});


// ================= SWIPER SLIDER =================
const swiper = new Swiper('.slider-wrapper', {
    loop: true,
    grabCursor: true,
    spaceBetween: 25,

    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },

    effect: "slide",
    speed: 800,

    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        dynamicBullets: true,
    },

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    breakpoints: {
        0: { slidesPerView: 1 },
        768: { slidesPerView: 2 },
        1024: { slidesPerView: 3 },
    }
});


// ================= SCROLL REVEAL =================
const sr = ScrollReveal({
    distance: '80px',
    duration: 1400,
    easing: 'ease-in-out',
    reset: false
});

// Hero
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


// ================= PARALLAX EFFECT =================
window.addEventListener("scroll", () => {
    const image = document.querySelector(".hero-image");
    let scrollY = window.scrollY;

    if (image) {
        image.style.transform = `translateY(${scrollY * 0.2}px)`;
    }
});


// ================= CUSTOM CURSOR =================
const cursor = document.createElement("div");
cursor.classList.add("custom-cursor");
document.body.appendChild(cursor);

document.addEventListener("mousemove", (e) => {
    cursor.style.top = e.clientY + "px";
    cursor.style.left = e.clientX + "px";
});


// ================= TYPEWRITER EFFECT =================
const text = "Make your day great with our special coffee!";
let i = 0;

function typeEffect() {
    const subtitle = document.querySelector(".subtitle");

    if (subtitle && i < text.length) {
        subtitle.innerHTML += text.charAt(i);
        i++;
        setTimeout(typeEffect, 50);
    }
}

// Clear text then start typing
const subtitleElement = document.querySelector(".subtitle");
if (subtitleElement) {
    subtitleElement.innerHTML = "";
    typeEffect();
}
