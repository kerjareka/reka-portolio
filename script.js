const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');
const themeToggle = document.getElementById('themeToggle');

menuToggle?.addEventListener('click', () => {
  const isOpen = navLinks.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', String(isOpen));
  menuToggle.textContent = isOpen ? '×' : '☰';
});

navLinks?.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
    menuToggle?.setAttribute('aria-expanded', 'false');
    if (menuToggle) menuToggle.textContent = '☰';
    navLinks.querySelectorAll('a').forEach((item) => item.classList.remove('active'));
    link.classList.add('active');
  });
});

themeToggle?.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  const isDark = document.body.classList.contains('dark-mode');
  themeToggle.textContent = isDark ? '☾' : '☼';
  themeToggle.setAttribute('aria-pressed', String(isDark));
});

document.getElementById('year').textContent = new Date().getFullYear();

// Highlight the navigation item for the section currently in view.
const sections = document.querySelectorAll('main section[id]');
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const id = entry.target.id;
      navLinks?.querySelectorAll('a').forEach((link) => {
        link.classList.toggle('active', link.getAttribute('href') === `#${id}`);
      });
    }
  });
}, { rootMargin: '-35% 0px -55% 0px' });
sections.forEach((section) => observer.observe(section));
