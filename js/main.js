/* PAP Weld Core Automation — Shared JavaScript */

// ── HAMBURGER MENU ──
const hamburger = document.getElementById('hamburger');
const mobileNav = document.getElementById('mobileNav');
const closeNav  = document.getElementById('closeNav');

if (hamburger) {
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('open');
        mobileNav.classList.toggle('open');
        document.body.style.overflow = mobileNav.classList.contains('open') ? 'hidden' : '';
    });
}
if (closeNav) {
    closeNav.addEventListener('click', closeMenu);
}
function closeMenu() {
    if (hamburger) hamburger.classList.remove('open');
    if (mobileNav) mobileNav.classList.remove('open');
    document.body.style.overflow = '';
}

// ── ACTIVE NAV LINK ──
document.querySelectorAll('.nav-links a, .mobile-nav a').forEach(link => {
    if (link.href === window.location.href) {
        link.classList.add('active');
    }
});

// ── CONTACT FORM HANDLER ──
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const btn = this.querySelector('.form-submit');
        btn.textContent = 'Sending…';
        btn.disabled = true;
        setTimeout(() => {
            btn.textContent = '✓ Message Sent — We\'ll contact you within 24 hours';
            btn.style.background = '#1a7a3f';
            contactForm.reset();
        }, 1200);
    });
}

// ── SCROLL REVEAL ──
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('.reveal').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(24px)';
    el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    observer.observe(el);
});
