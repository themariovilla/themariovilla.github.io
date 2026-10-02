// Theme toggle with localStorage persistence + system-pref fallback.
(function () {
  const STORAGE_KEY = 'mv-theme';
  const root = document.documentElement;
  const btn = document.querySelector('[data-theme-toggle]');

  const saved = localStorage.getItem(STORAGE_KEY);
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  let theme = saved || (prefersDark ? 'dark' : 'light');
  root.setAttribute('data-theme', theme);

  if (!btn) return;
  btn.setAttribute('aria-pressed', String(theme === 'dark'));
  btn.addEventListener('click', function () {
    theme = theme === 'dark' ? 'light' : 'dark';
    root.setAttribute('data-theme', theme);
    localStorage.setItem(STORAGE_KEY, theme);
    btn.setAttribute('aria-pressed', String(theme === 'dark'));
  });
})();

// Scroll reveal: JS adds .reveal so content still shows with JS disabled.
// Safety net: a timer reveals everything even if the observer never fires
// (seen on some mobile in-app browsers where whole sections stayed invisible).
(function () {
  try {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    var els = document.querySelectorAll('main section, .deal-card, .work-tile, .timeline li');
    if (!('IntersectionObserver' in window)) return;
    els.forEach(function (el) { el.classList.add('reveal'); });
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { e.target.classList.add('visible'); io.unobserve(e.target); }
      });
    }, { threshold: 0.05, rootMargin: '0px 0px 300px 0px' });
    els.forEach(function (el) { io.observe(el); });
    setTimeout(function () {
      els.forEach(function (el) { el.classList.add('visible'); });
      io.disconnect();
    }, 2500);
  } catch (err) { /* content stays visible without .reveal */ }
})();
