import { MouseEvent, ReactNode } from 'react';

type NavItem = { href: string; label: string; cls: string };

type LayoutProps = {
  children: ReactNode;
  page: string;
  onNavigate: (href: string) => (e: MouseEvent<HTMLAnchorElement>) => void;
};

const NAV_ITEMS: NavItem[] = [
  { href: '/', label: 'Início', cls: 'button1' },
  { href: '/noticias', label: 'Notícias', cls: 'button2' },
  { href: '/quiz', label: 'Quiz', cls: 'button3' },
  { href: '/sobre', label: 'Sobre', cls: 'button4' }
];

export function Layout({ children, page, onNavigate }: LayoutProps) {
  return (
    <>
      <div id="topo" />
      <header
        className={`site-header${page === '/sobre' ? ' sobre' : ''}${page === '/proconsvate' ? ' pro' : ''}`}
        role="banner"
      >
        <div className="container header-inner">
          <a className="brand" href="/" onClick={onNavigate('/')} aria-label="Início PROCONSVATE">
            PROCONSVATE
          </a>
          <img
            className="logo-float"
            src="/assets/img/logo.png"
            width={48}
            height={48}
            alt="Logo PROCONSVATE"
            aria-hidden="true"
            loading="lazy"
          />
          <nav id="menu-principal" className="site-nav" aria-label="Menu principal">
            <ul>
              {NAV_ITEMS.map((item) => (
                <li key={item.href}>
                  <a href={item.href} className={`active ${item.cls}`} onClick={onNavigate(item.href)}>
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </header>

      {children}

      <footer className={`site-footer${page === '/sobre' ? ' sobre' : ''}`} role="contentinfo">
        <div className="container">
          <p>
            <strong>Programa de Conscientização de Vida Aquática e Terrestre (PROCONSVATE)</strong>
          </p>
          <p>Matheus Antunes Reis © Todos os direitos reservados - Desenvolvido por MR SISTEMAS</p>
          <div className="back-to-top-wrapper">
            <a className="back-to-top" href="#topo">
              Voltar ao topo
            </a>
          </div>
        </div>
        {page !== '/sobre' && (
          <a href="https://wa.me/5538988064942" className="number-phone btn-float" target="_blank" rel="noopener">
            <i className="fa-brands fa-whatsapp" />
          </a>
        )}
        <a
          href="https://www.instagram.com/proconsvate?igsh=MWMwb3ZucWFydmFyMQ=="
          className="insta-btn"
          target="_blank"
          rel="noopener"
        >
          <img src="/assets/img/insta.png" alt="Instagram" loading="lazy" />
        </a>
        <p className="insta-text">Siga-nos no Instagram!</p>
        <p className="email-text">proconsvate@gmail.com</p>
      </footer>
    </>
  );
}
