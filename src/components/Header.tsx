import { NavLink } from 'react-router-dom';

const navigation = [
  { to: '/', label: 'Início' },
  { to: '/noticias', label: 'Notícias' },
  { to: '/quiz', label: 'Quiz' },
  { to: '/sobre', label: 'Sobre' },
];

export default function Header() {
  return (
    <header className="site-header" role="banner">
      <div className="container header-inner">
        <NavLink className="brand" to="/" end>
          PROCONSVATE
        </NavLink>

        <img
          className="logo-float"
          src="/assets/img/logo.png"
          width="48"
          height="48"
          alt=""
          aria-hidden="true"
        />

        <nav className="site-nav" aria-label="Menu principal">
          <ul>
            {navigation.map((item) => (
              <li key={item.to}>
                <NavLink
                  to={item.to}
                  end={item.to === '/'}
                  className={({ isActive }) =>
                    `nav-link${isActive ? ' nav-link--active' : ''}`
                  }
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}