// ================= PARALLAX =================
const heroImage = document.querySelector(".hero-image");

window.addEventListener("scroll", () => {
    if (!heroImage) return;

    const scrollY = window.scrollY;

    requestAnimationFrame(() => {
        heroImage.style.transform = `translateY(${scrollY * 0.15}px)`;
    });
});


// ================= GALLERY (FIXED) =================
const galleryItems = document.querySelectorAll('.gallery-item');

// ❌ reverse hata diya (ab need nahi)
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    }
  });
}, { threshold: 0.2 });

galleryItems.forEach(item => observer.observe(item));
