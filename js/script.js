// PROCONSVATE - script.js

// Toggle do menu (inalterado)
const toggle = document.querySelector('.nav-toggle');
const nav = document.getElementById('menu-principal');
if (toggle && nav) {
  toggle.addEventListener('click', () => {
    const opened = nav.classList.toggle('open');
    toggle.setAttribute('aria-expanded', String(opened));
  });
}

// Voltar ao topo em reload (inalterado)
(function () {
  const navEntry = performance.getEntriesByType && performance.getEntriesByType('navigation')[0];
  const isReload = navEntry ? navEntry.type === 'reload'
    : (performance.navigation && performance.navigation.type === 1);
  if (!isReload) return;
  if ('scrollRestoration' in history) history.scrollRestoration = 'manual';
  window.addEventListener('load', () => window.scrollTo(0, 0));
})();

// Fade-in por elemento ao entrar no viewport (WAAPI)
document.addEventListener('DOMContentLoaded', () => {
  const items = document.querySelectorAll('section.content, img.image-right, img.image-left');
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const getFromTransform = (el) => {
    if (el.matches('img.image-right')) return 'translate(16px, 16px)';
    if (el.matches('img.image-left')) return 'translate(-16px, 16px)';
    return 'translateY(16px)'; // sections .content
  };

  // Estado inicial via JS
  items.forEach(el => {
    el.style.opacity = reduce ? '1' : '0';
    el.style.transform = reduce ? 'translate(0, 0)' : getFromTransform(el);
  });
  if (reduce) return;

  const io = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const el = entry.target;
      const from = getFromTransform(el);

      const keyframes = [
        { opacity: 0, transform: from },
        { opacity: 1, transform: 'translate(0, 0)' }
      ];
      const opts = { duration: 480, easing: 'ease', fill: 'forwards' };

      if (typeof el.animate === 'function') {
        el.animate(keyframes, opts);
      } else {
        // Fallback simples
        el.style.opacity = '1';
        el.style.transform = 'translate(0, 0)';
      }
      obs.unobserve(el); // anima só uma vez
    });
  }, { threshold: 0.2, rootMargin: '0px 0px -10% 0px' });

  items.forEach(el => io.observe(el));
});
