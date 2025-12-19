// PROCONSVATE - script.js
// Javascript do site do PROCONSVATE

// Voltar ao topo em reload (inalterado)
(function () {
  const navEntry =
    performance.getEntriesByType &&
    performance.getEntriesByType("navigation")[0];

  const isReload = navEntry
    ? navEntry.type === "reload"
    : performance.navigation && performance.navigation.type === 1;

  if (!isReload) return;

  if ("scrollRestoration" in history) history.scrollRestoration = "manual";
  window.addEventListener("load", () => window.scrollTo(0, 0));
})();

// Fade-in por elemento ao entrar no viewport (forçado no mobile, sem alterar layout)
document.addEventListener("DOMContentLoaded", () => {
  const items = Array.from(
    document.querySelectorAll(
      "section.content, img.image-right, img.image-left"
    )
  );

  if (items.length === 0) return;

  const FROM = (el) => {
    if (el.matches("img.image-right")) return "translate(16px, 16px)";
    if (el.matches("img.image-left")) return "translate(-16px, 16px)";
    return "translateY(16px)"; // sections .content
  };

  const SUPPORTS_WAAPI = !!(Element.prototype && Element.prototype.animate);

  const init = (el) => {
    el.style.willChange = "opacity, transform";
    el.style.opacity = "0";
    el.style.transform = FROM(el);
  };

  const finalize = (el) => {
    el.style.opacity = "1";
    el.style.transform = "translate(0, 0)";
    el.style.willChange = "auto";
    el.dataset.revealed = "1";
  };

  const reveal = (el) => {
    if (el.dataset.revealed === "1") return;

    if (SUPPORTS_WAAPI) {
      try {
        const anim = el.animate(
          [
            { opacity: 0, transform: FROM(el) },
            { opacity: 1, transform: "translate(0, 0)" },
          ],
          { duration: 480, easing: "ease", fill: "both" }
        );

        if (anim && anim.finished && typeof anim.finished.then === "function") {
          anim.finished.then(() => finalize(el)).catch(() => finalize(el));
        } else {
          setTimeout(() => finalize(el), 520);
        }
      } catch (_e) {
        finalize(el);
      }
    } else {
      el.style.transition = "opacity 0.48s ease, transform 0.48s ease";
      requestAnimationFrame(() => finalize(el));
    }
  };

  items.forEach(init);

  // Primeiro: IntersectionObserver (mais eficiente)
  let io = null;
  if ("IntersectionObserver" in window) {
    io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          reveal(entry.target);
          io.unobserve(entry.target);
        });
      },
      { threshold: 0.01, rootMargin: "0px 0px -5% 0px" }
    );

    requestAnimationFrame(() => items.forEach((el) => io.observe(el)));
  }

  // Segundo: fallback ativo no mobile (scroll/resize/load + timeout)
  const checkInView = () => {
    const h = window.innerHeight || document.documentElement.clientHeight;
    items.forEach((el) => {
      if (el.dataset.revealed === "1") return;
      const r = el.getBoundingClientRect();
      if (r.top < h * 0.95 && r.bottom > 0) reveal(el);
    });
  };

  window.addEventListener("load", checkInView, { once: true });
  window.addEventListener("scroll", checkInView, { passive: true });
  window.addEventListener("resize", checkInView);
  setTimeout(checkInView, 400);
});
