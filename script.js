// ================= MOBILE MENU =================
const menuOpenButton = document.querySelector('#menu-open-button');
const menuCloseButton = document.querySelector('#menu-close-button');
const navLinks = document.querySelectorAll('.nav-menu .nav-link');

if (menuOpenButton) {
    menuOpenButton.addEventListener("click", () => {
        document.body.classList.toggle("show-mobile-menu");
    });
}

if (menuCloseButton) {
    menuCloseButton.addEventListener("click", () => {
        document.body.classList.remove("show-mobile-menu");
    });
}

// Close menu on link click
navLinks.forEach(link => {
    link.addEventListener("click", () => {
        document.body.classList.remove("show-mobile-menu");
    });
});


// ================= SWIPER SLIDER =================
if (typeof Swiper !== "undefined") {
    new Swiper('.slider-wrapper', {
        loop: true,
        grabCursor: true,
        spaceBetween: 25,

        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },

        speed: 800,

        pagination: {
            el: '.swiper-pagination',
            clickable: true,
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
}


// ================= SCROLL REVEAL =================
if (typeof ScrollReveal !== "undefined") {
    const sr = ScrollReveal({
        distance: '60px',
        duration: 1000,
        easing: 'ease',
        reset: false
    });

    sr.reveal('.hero-details', { origin: 'left' });
    sr.reveal('.hero-image-wrapper', { origin: 'right' });

    sr.reveal('.about-image-wrapper', { origin: 'left' });
    sr.reveal('.about-details', { origin: 'right' });

    sr.reveal('.menu-item', { interval: 150 });
    sr.reveal('.gallery-item', { interval: 150 });

    sr.reveal('.contact-info', { interval: 100 });
    sr.reveal('.contact-form', { origin: 'right' });
}


// ================= TYPEWRITER EFFECT =================
const subtitle = document.querySelector(".subtitle");

if (subtitle) {
    const text = "Make your day great with our special coffee!";
    let i = 0;

    subtitle.textContent = "";

    function typeEffect() {
        if (i < text.length) {
            subtitle.textContent += text[i];
            i++;
            setTimeout(typeEffect, 50);
        }
    }

    typeEffect();
}


// ================= SIMPLE PARALLAX (LIGHTWEIGHT) =================
const heroImage = document.querySelector(".hero-image");

window.addEventListener("scroll", () => {
    if (!heroImage) return;

    const scrollY = window.scrollY;
    heroImage.style.transform = `translateY(${scrollY * 0.15}px)`;
});
