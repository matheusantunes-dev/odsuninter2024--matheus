import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export function useRevealOnScroll() {
  const { pathname } = useLocation();

  useEffect(() => {
    const items = Array.from(
      document.querySelectorAll<HTMLElement>('[data-reveal]'),
    );

    if (!items.length) {
      return;
    }

    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches;

    if (prefersReducedMotion) {
      items.forEach((item) => item.classList.add('show'));
      return;
    }

    items.forEach((item, index) => {
      item.classList.remove('show');
      item.style.transitionDelay = `${Math.min(index * 70, 280)}ms`;
    });

    const reveal = (item: HTMLElement) => {
      item.classList.add('show');
    };

    const checkInView = () => {
      const viewportHeight = window.innerHeight;

      items.forEach((item) => {
        if (item.classList.contains('show')) {
          return;
        }

        const rect = item.getBoundingClientRect();

        if (rect.top < viewportHeight * 0.9 && rect.bottom > 0) {
          reveal(item);
        }
      });
    };

    let observer: IntersectionObserver | null = null;

    if ('IntersectionObserver' in window) {
      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting) {
              return;
            }

            reveal(entry.target as HTMLElement);
            observer?.unobserve(entry.target);
          });
        },
        {
          threshold: 0.1,
          rootMargin: '0px 0px -8% 0px',
        },
      );

      items.forEach((item) => observer?.observe(item));
    }

    const timeoutId = window.setTimeout(checkInView, 160);
    window.addEventListener('scroll', checkInView, { passive: true });
    window.addEventListener('resize', checkInView);
    requestAnimationFrame(checkInView);

    return () => {
      observer?.disconnect();
      window.clearTimeout(timeoutId);
      window.removeEventListener('scroll', checkInView);
      window.removeEventListener('resize', checkInView);
      items.forEach((item) => {
        item.style.transitionDelay = '';
      });
    };
  }, [pathname]);
}