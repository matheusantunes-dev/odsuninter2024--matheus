import { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Footer from './Footer';
import Header from './Header';
import SocialLinks from './SocialLinks';
import { useRevealOnScroll } from '../hooks/useRevealOnScroll';

export default function Layout() {
  const { pathname } = useLocation();

  useRevealOnScroll();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
  }, [pathname]);

  return (
    <div className="app-shell">
      <div id="topo" />
      <Header />
      <main className="site-main" role="main">
        <Outlet />
      </main>
      <Footer />
      <SocialLinks />
    </div>
  );
}