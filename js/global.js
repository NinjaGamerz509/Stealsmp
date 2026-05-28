// ─── HAMBURGER + SIDE NAV ───
const hamburger = document.getElementById('hamburger');
const sideNav = document.getElementById('side-nav');
const navOverlay = document.getElementById('nav-overlay');

function openNav() {
  hamburger.classList.add('open');
  sideNav.classList.add('open');
  navOverlay.classList.add('open');
  document.body.style.overflow = 'hidden';
}
function closeNav() {
  hamburger.classList.remove('open');
  sideNav.classList.remove('open');
  navOverlay.classList.remove('open');
  document.body.style.overflow = '';
}

hamburger?.addEventListener('click', () => {
  sideNav.classList.contains('open') ? closeNav() : openNav();
});
navOverlay?.addEventListener('click', closeNav);

// ─── PAGE TRANSITIONS ───
function navigateTo(url) {
  const overlay = document.getElementById('page-transition');
  overlay.classList.add('fade-out');
  setTimeout(() => { window.location.href = url; }, 350);
}

document.addEventListener('DOMContentLoaded', () => {
  // Set active nav link
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-link[data-page]').forEach(link => {
    if (link.dataset.page === currentPage) link.classList.add('active');
  });

  // Intercept nav link clicks for smooth transition
  document.querySelectorAll('.nav-link[data-page]').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      closeNav();
      const target = link.dataset.page;
      if (target !== currentPage) {
        setTimeout(() => navigateTo(target), 200);
      }
    });
  });

  // Page enter animation
  document.querySelector('.main-content')?.classList.add('page-enter');

  // Back to top
  const backToTop = document.getElementById('back-to-top');
  window.addEventListener('scroll', () => {
    backToTop?.classList.toggle('visible', window.scrollY > 300);
  });
  backToTop?.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
});
