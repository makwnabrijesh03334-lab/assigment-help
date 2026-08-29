/**
 * ==========================================================================
 * ASSIGNMENT HELP - JAVASCRIPT
 * Pure Vanilla JavaScript for interactivity, mobile drawer & Google Form CTA
 * ==========================================================================
 */

// ==========================================================================
// CENTRAL GOOGLE FORM CONFIGURATION
// Replace the URL below with your actual Google Form link.
// All "Place Your Request" buttons across the site will automatically open this link.
// ==========================================================================
const GOOGLE_FORM_URL = "https://docs.google.com/forms/d/e/1FAIpQLSdUDQEGcvtHYc4TjhFgXXrhB-S2OB7_3MgTcB2nrxqw7qYWJA/viewform?usp=header";

document.addEventListener('DOMContentLoaded', () => {
  initFormCTA();
  initMobileMenu();
  initHeaderScroll();
  initActiveNavLink();
});

/**
 * Attaches the central Google Form URL opening behavior to all CTA buttons.
 * When clicked, opens the Google Form in a new browser tab.
 */
function initFormCTA() {
  const ctaButtons = document.querySelectorAll('.js-form-cta');

  ctaButtons.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      // Securely open Google Form URL in a new tab
      window.open(GOOGLE_FORM_URL, '_blank', 'noopener,noreferrer');
    });
  });
}

/**
 * Handles the mobile hamburger menu open/close toggle and auto-close on link click.
 */
function initMobileMenu() {
  const toggleBtn = document.getElementById('mobileMenuToggle');
  const drawer = document.getElementById('mobileDrawer');
  const mobileLinks = document.querySelectorAll('.mobile-nav-link');

  if (!toggleBtn || !drawer) return;

  const toggleMenu = () => {
    const isExpanded = toggleBtn.getAttribute('aria-expanded') === 'true';
    const nextState = !isExpanded;

    toggleBtn.setAttribute('aria-expanded', String(nextState));
    drawer.setAttribute('aria-hidden', String(!nextState));

    if (nextState) {
      drawer.classList.add('open');
    } else {
      drawer.classList.remove('open');
    }
  };

  const closeMenu = () => {
    toggleBtn.setAttribute('aria-expanded', 'false');
    drawer.setAttribute('aria-hidden', 'true');
    drawer.classList.remove('open');
  };

  toggleBtn.addEventListener('click', toggleMenu);

  // Close mobile drawer when any link inside it is clicked
  mobileLinks.forEach((link) => {
    link.addEventListener('click', () => {
      closeMenu();
    });
  });

  // Close mobile drawer if clicking outside
  document.addEventListener('click', (e) => {
    if (
      drawer.classList.contains('open') &&
      !drawer.contains(e.target) &&
      !toggleBtn.contains(e.target)
    ) {
      closeMenu();
    }
  });

  // Close mobile drawer on Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && drawer.classList.contains('open')) {
      closeMenu();
    }
  });
}

/**
 * Adds an elevation shadow & darker background to the sticky header upon scrolling down.
 */
function initHeaderScroll() {
  const header = document.getElementById('siteHeader');
  if (!header) return;

  const handleScroll = () => {
    if (window.scrollY > 20) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  };

  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll(); // Initial check
}

/**
 * Highlights active navigation link based on current scroll position using IntersectionObserver.
 */
function initActiveNavLink() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.main-nav .nav-link');

  if (!sections.length || !navLinks.length) return;

  const observerOptions = {
    root: null,
    rootMargin: '-20% 0px -70% 0px',
    threshold: 0
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        navLinks.forEach((link) => {
          if (link.getAttribute('href') === `#${id}`) {
            link.classList.add('active');
          } else {
            link.classList.remove('active');
          }
        });
      }
    });
  }, observerOptions);

  sections.forEach((section) => observer.observe(section));
}
