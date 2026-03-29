// ================= MOBILE MENU =================
const menuOpenButton = document.querySelector('#menu-open-button');
const menuCloseButton = document.querySelector('#menu-close-button');
const navLinks = document.querySelectorAll('.nav-menu .nav-link');

if (menuOpenButton) {
  menuOpenButton.addEventListener("click", () => {
    document.body.classList.add("show-mobile-menu");
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


// ================= NAVBAR SCROLL =================
const header = document.querySelector("header");

window.addEventListener("scroll", () => {
  if (!header) return;

  if (window.scrollY > 50) {
    header.style.background = "rgba(0,0,0,0.9)";
    header.style.backdropFilter = "blur(12px)";
  } else {
    header.style.background = "rgba(59, 20, 28, 0.8)";
    header.style.backdropFilter = "blur(8px)";
  }
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


// ================= SCROLL REVEAL (REPEAT ENABLED) =================
if (typeof ScrollReveal !== "undefined") {
  const sr = ScrollReveal({
    distance: '80px',
    duration: 1200,
    easing: 'ease',
    reset: true // repeat animation
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


// ================= TYPEWRITER LOOP (SMOOTH) =================
const subtitle = document.querySelector(".subtitle");

if (subtitle) {
  const text = "Make your day great with our special coffee!";
  let index = 0;
  let isDeleting = false;

  function typeLoop() {
    if (!isDeleting) {
      subtitle.textContent = text.substring(0, index++);
      if (index > text.length) {
        isDeleting = true;
        setTimeout(typeLoop, 1200); // pause
        return;
      }
    } else {
      subtitle.textContent = text.substring(0, index--);
      if (index === 0) {
        isDeleting = false;
      }
    }

    setTimeout(typeLoop, isDeleting ? 35 : 55);
  }

  typeLoop();
}


// ================= PARALLAX (SMOOTH + PERFORMANCE) =================
const heroImage = document.querySelector(".hero-image");

window.addEventListener("scroll", () => {
  if (!heroImage) return;

  const scrollY = window.scrollY;

  requestAnimationFrame(() => {
    heroImage.style.transform = `translateY(${scrollY * 0.15}px)`;
  });
});

// ================= PROJECT STYLE GALLERY =================
const galleryItems = document.querySelectorAll('.gallery-item');

// Alternate reverse class auto add
galleryItems.forEach((item, index) => {
  if (index % 2 !== 0) {
    item.classList.add('reverse');
  }
});

// Scroll animation
const galleryObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    } else {
      entry.target.classList.remove('show');
    }
  });
}, { threshold: 0.3 });

galleryItems.forEach(item => {
  galleryObserver.observe(item);
});
