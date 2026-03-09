import { MouseEvent, useEffect, useMemo, useState } from 'react';
import { Layout } from './components/Layout';
import { HomePage } from './pages/HomePage';
import { NoticiasPage } from './pages/NoticiasPage';
import { QuizPage } from './pages/QuizPage';
import { SobrePage } from './pages/Sobre';
import { SobreProconsvatePage } from './pages/SobreProconsvate';

type Page = '/' | '/noticias' | '/quiz' | '/sobre' | '/proconsvate';

function App() {
  const [pathname, setPathname] = useState<string>(window.location.pathname || '/');

  useEffect(() => {
    const navEntry = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming | undefined;
    const isReload = navEntry
      ? navEntry.type === 'reload'
      : (performance as Performance & { navigation?: { type?: number } }).navigation?.type === 1;

    if (!isReload) return;
    if ('scrollRestoration' in history) history.scrollRestoration = 'manual';
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const revealItems = Array.from(document.querySelectorAll('section.content, img.image-right, img.image-left')) as HTMLElement[];
    revealItems.forEach((el) => {
      el.classList.remove('show');
      el.style.opacity = '0';
    });

    const reveal = (el: HTMLElement) => {
      el.classList.add('show');
      el.style.opacity = '1';
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            reveal(entry.target as HTMLElement);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.01, rootMargin: '0px 0px -5% 0px' }
    );

    revealItems.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [pathname]);

  const page = useMemo<Page>(() => {
    if (['/', '/noticias', '/quiz', '/sobre', '/proconsvate'].includes(pathname)) return pathname as Page;
    return '/';
  }, [pathname]);

  const navigate = (href: string) => (e: MouseEvent<HTMLAnchorElement>) => {
    if (href.startsWith('http') || href.startsWith('#')) return;
    e.preventDefault();
    window.history.pushState({}, '', href);
    setPathname(href);
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    const onPop = () => setPathname(window.location.pathname || '/');
    window.addEventListener('popstate', onPop);
    return () => window.removeEventListener('popstate', onPop);
  }, []);

  return (
    <Layout page={page} onNavigate={navigate}>
      {page === '/' && <HomePage />}
      {page === '/noticias' && <NoticiasPage />}
      {page === '/quiz' && <QuizPage />}
      {page === '/sobre' && <SobrePage />}
      {page === '/proconsvate' && <SobreProconsvatePage />}
    </Layout>
  );
}

export default App;
