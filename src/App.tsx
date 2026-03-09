import { MouseEvent, useEffect, useMemo, useState } from 'react';

type Page = '/' | '/noticias' | '/quiz' | '/sobre' | '/proconsvate';

const NAV_ITEMS = [
  { href: '/', label: 'Início', cls: 'button1' },
  { href: '/noticias', label: 'Notícias', cls: 'button2' },
  { href: '/quiz', label: 'Quiz', cls: 'button3' },
  { href: '/sobre', label: 'Sobre', cls: 'button4' }
];

function App() {
  const [pathname, setPathname] = useState<string>(window.location.pathname || '/');

  useEffect(() => {
    const navEntry = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming | undefined;
    const isReload = navEntry ? navEntry.type === 'reload' : (performance as Performance & { navigation?: { type?: number } }).navigation?.type === 1;

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

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          reveal(entry.target as HTMLElement);
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.01, rootMargin: '0px 0px -5% 0px' });

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
    <>
      <div id="topo" />
      <header className={`site-header${page === '/sobre' || page === '/proconsvate' ? ' pro' : ''}`} role="banner">
        <div className="container header-inner">
          <a className="brand" href="/" onClick={navigate('/')} aria-label="Início PROCONSVATE">PROCONSVATE</a>
          <img className="logo-float" src="/assets/img/logo.png" width={48} height={48} alt="Logo PROCONSVATE" aria-hidden="true" loading="lazy" />
          <nav id="menu-principal" className="site-nav" aria-label="Menu principal">
            <ul>
              {NAV_ITEMS.map((item) => (
                <li key={item.href}>
                  <a href={item.href} className={`active ${item.cls}`} onClick={navigate(item.href)}>{item.label}</a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </header>

      {page === '/' && <HomePage />}
      {page === '/noticias' && <NoticiasPage />}
      {page === '/quiz' && <QuizPage />}
      {(page === '/sobre' || page === '/proconsvate') && <SobrePage />}

      <footer className="site-footer" role="contentinfo">
        <div className="container">
          <p><strong>Programa de Conscientização de Vida Aquática e Terrestre (PROCONSVATE)</strong></p>
          <p>Matheus Antunes Reis © Todos os direitos reservados - Desenvolvido por MR SISTEMAS</p>
          <div className="back-to-top-wrapper"><a className="back-to-top" href="#topo">Voltar ao topo</a></div>
        </div>
        <a href="https://wa.me/5538988064942" className="number-phone btn-float" target="_blank" rel="noopener"><i className="fa-brands fa-whatsapp" /></a>
        <a href="https://www.instagram.com/proconsvate?igsh=MWMwb3ZucWFydmFyMQ==" className="insta-btn" target="_blank" rel="noopener"><img src="/assets/img/insta.png" alt="Instagram" loading="lazy" /></a>
        <p className="insta-text">Siga-nos no Instagram!</p>
        <p className="email-text">proconsvate@gmail.com</p>
      </footer>
    </>
  );
}

function HomePage() {
  return (
    <>
      <div className="PROCONSVATE"><h1>PROCONSVATE (Programa de Conscientização de Vida Aquática e Terrestre)</h1></div>
      <main id="conteudo-principal" tabIndex={-1} className="site-main" role="main">
        <section className="content">
          <img src="/assets/img/logo ods.png" alt="Logo ODS" className="logo" loading="lazy" />
          <img src="/assets/img/logo.png" alt="Logo PROCONSVATE" className="logoproject logo--livre" loading="lazy" />
          <p>Preservar a vida aquática e terrestre é essencial para manter o equilíbrio do nosso ambiente. Temos a responsabilidade de adotar práticas sustentáveis que protejam os habitats e garantam a sobrevivência das espécies. Este programa busca sensibilizar sobre a importância de ações que ajudem a conservar o meio ambiente, ressaltando a necessidade de um enfoque integrado para a vida tanto na Terra quanto na água.</p>
          <p>A proteção da vida aquática e terrestre é crucial para garantir um futuro sustentável. A diversidade biológica nos oceanos, rios, florestas e savanas desempenha um papel fundamental no equilíbrio ambiental global. Cada espécie, desde plânctons até microrganismos do solo, tem um papel específico na complexa rede da vida. Precisamos preservar esses ecossistemas, reduzir a poluição e promover o uso responsável dos recursos naturais.</p>
        </section>

        <section className="content">
          <figure>
            <img src="/assets/img/agua.png" alt="Vida Aquática" className="image-right image-fix" loading="lazy" width={400} />
            <figcaption style={{ marginLeft: 'auto', textAlign: 'right', width: 'fit-content' }}>Gerado por IA</figcaption>
          </figure>
          <p>A vida aquática, que varia de pequenos plânctons a grandes baleias, é crucial para a saúde dos oceanos e para a produção de oxigênio. Esses organismos sustentam ecossistemas marinhos complexos e são vitais para o equilíbrio ambiental. Rios e lagos também fornecem água doce essencial para a sobrevivência humana e para o desenvolvimento de comunidades ao redor do mundo. Proteger esses recursos é fundamental para garantir a continuidade da vida em nosso planeta. A preservação da biodiversidade marinha e a qualidade da água doce são essenciais para nossa sobrevivência e para a saúde global do planeta. Conscientizar e se comprometer com a conservação é fundamental para assegurar um futuro sustentável.</p>
          <blockquote>"A natureza não é um lugar para visitar. Ela é o lar." – Gary Snyder</blockquote>
        </section>

        <section className="content">
          <figure>
            <img src="/assets/img/vida terrestre.avif" className="image-left" alt="Vida Terrestre" loading="lazy" width={400} />
            <figcaption>Fonte: https://shre.ink/qahc</figcaption>
          </figure>
          <p>Florestas e savanas são essenciais para a vida na Terra, desempenhando papéis vitais na saúde ambiental e na qualidade de vida. Esses ecossistemas abrigam uma imensa biodiversidade, sustentando inúmeras espécies de plantas e animais. Além de seu valor ecológico, eles ajudam a regular o clima, controlar as temperaturas e sequestrar carbono da atmosfera. Também são fundamentais na purificação do ar e da água. Preservar esses habitats é crucial para proteger a biodiversidade, garantir a saúde do nosso planeta e o bem-estar das futuras gerações. A conservação dessas áreas naturais é um compromisso vital para a sustentabilidade e qualidade de vida global.</p>
          <blockquote>"O que fazemos com as florestas do mundo é apenas um espelho do que fazemos a nós mesmos e uns aos outros." – Mahatma Gandhi</blockquote>
        </section>

        <section className="content">
          <figure>
            <img src="/assets/img/preservação.webp" className="image-right" alt="Preservação" loading="lazy" width={400} />
            <figcaption style={{ textAlign: 'right' }}>Fonte: https://shre.ink/qahQ</figcaption>
          </figure>
          <p>A poluição dos mares e o desmatamento são problemas urgentes que precisam de nossa atenção constante. A poluição marinha, principalmente pelo descarte inadequado de plásticos, está devastando habitats e afetando a vida marinha. O desmatamento, por sua vez, causa perda de biodiversidade e altera os ciclos climáticos. Precisamos reduzir o uso de plásticos descartáveis e adotar práticas de consumo mais sustentáveis. A reciclagem, a escolha de produtos com menos embalagens e a busca por alternativas ecológicas são passos importantes para preservar nossos ambientes naturais e proteger os recursos que sustentam a vida. Ao agir de forma consciente, podemos enfrentar esses desafios e garantir um futuro mais saudável para o planeta.</p>
          <blockquote>"Não herdamos a Terra de nossos ancestrais, a tomamos emprestada de nossos filhos." – Provérbio nativo americano</blockquote>
        </section>

        <section className="content">
          <figure>
            <img src="/assets/img/conciência.jpg" alt="Consciência Ambiental" className="image-left" loading="lazy" width={400} />
            <figcaption style={{ marginRight: 'auto', textAlign: 'left', width: 'fit-content' }}>Gerado por IA</figcaption>
          </figure>
          <p>Ensinar as novas gerações sobre a importância da conservação é essencial para um futuro mais verde e sustentável. Ao compartilhar conhecimentos e valores sobre o cuidado com o meio ambiente, estamos preparando os jovens para tomar decisões mais conscientes e responsáveis. As escolhas que fazemos hoje moldam o futuro do planeta. Investir em educação ambiental ajuda a entender melhor os desafios e inspira um compromisso com a proteção dos recursos naturais. Cultivar um respeito profundo pelo meio ambiente é fundamental para construir um futuro onde a harmonia entre seres humanos e natureza seja duradoura.</p>
          <blockquote>"A educação é a arma mais poderosa que você pode usar para mudar o mundo." – Nelson Mandela</blockquote>
        </section>

        <section className="content">
          <figure>
            <img src="/assets/img/Terra.jpg" alt="Sustentabilidade" className="image-right image-terra--fix" loading="lazy" width={400} />
            <figcaption style={{ marginLeft: 'auto', textAlign: 'right', width: 'fit-content' }}>Gerado por IA</figcaption>
          </figure>
          <p>A sustentabilidade é uma necessidade urgente e não pode ser adiada. Precisamos repensar nossos hábitos de consumo e estilo de vida, adotando práticas mais conscientes e responsáveis desde agora. Só assim poderemos assegurar que a vida na Terra continue a prosperar e que as próximas gerações tenham um futuro saudável e equilibrado.</p>
          <blockquote>"A Terra fornece o suficiente para satisfazer as necessidades de todos os homens, mas não a ganância de todos os homens." – Mahatma Gandhi</blockquote>
        </section>

        <section className="content objective-awareness">
          <h2>Nosso Objetivo</h2>
          <p>Nosso objetivo é aumentar a conscientização global sobre a importância de preservar a vida aquática e terrestre, destacando os desafios que ameaçam a biodiversidade e as soluções que podemos adotar. Queremos estimular a adoção de práticas sustentáveis que protejam os ecossistemas e assegurem um futuro saudável para todas as formas de vida.</p>
          <h2>Conscientização</h2>
          <p>A conscientização é o primeiro passo para a mudança. Compreender os impactos de nossas ações no meio ambiente permite que tomemos decisões mais informadas e responsáveis. Preservar a vida na Terra e na água depende de todos nós, e pequenas mudanças em nosso cotidiano podem gerar grandes resultados.</p>
          <h3>Um Pouco deste Projeto</h3>
          <p>Este Projeto Utiliza-se de 2 ODS dentre as 17 ODS, a ODS 14 e a ODS 15, que ajudam a preservar a vida terrestre e aquática, respectivamente.</p>
        </section>
      </main>
    </>
  );
}

function NoticiasPage() {
  return <main id="conteudo-principal" tabIndex={-1} className="site-main" role="main"><iframe src="https://www.cnnbrasil.com.br/tudo-sobre/animais/" id="product-frame" title="Lista de notícias sobre animais da CNN Brasil" className="noticas" /></main>;
}

function QuizPage() {
  return <main id="conteudo-principal" tabIndex={-1} className="site-main" role="main"><h1 style={{ textAlign: 'center', textDecoration: 'none', filter: 'drop-shadow(1px 8px 8px black)' }}>Ao clicar em Jogar o Quiz, clique em "continuar sem login" </h1><iframe src="https://pt.quizur.com/trivia/como-esta-sua-consciencia-ambiental-teste-aqui-1pLTa" id="product-frame" title="Quiz: Você é consciente ambiental?" className="quiz" /></main>;
}

function SobrePage() {
  return (
    <main id="conteudo-principal" tabIndex={-1} className="site-main pro" role="main">
      <h1 className="h1 pro">Quem Somos Nós?</h1>
      <img src="/assets/img/logo.png" alt="Logo PROCONSVATE" className="logoproject logo--livre pro" loading="lazy" />
      <p className="p pro"> A <strong>&quot;PROCONSVATE&quot;</strong> é um Programa de Conscientização Ambiental, criado em 2024, que busca promover a conscientização global sobre a importância de preservar a vida aquática e terrestre. Juntamente com a ODS 14 e a ODS 15, que ajudam a preservar a vida terrestre e aquática, respectivamente. Devemos tomar a responsabilidade de adotar práticas sustentáticas que protejam os habitats e garantam a sobrevivência das espécies. Cada espécie, desde plânctons até microrganismos do solo, tem um papel específico na complexa rede da vida. Hoje em dia muitas especies correm risco de extinção, e muitos habitats estao sendo degradados pela poluicao e uso irresponsavel dos recursos naturais. A sua e nossa participação na preservação da vida terrestre e aquática e importante para garantir a sustentabilidade do nosso planeta. Compreender os impactos de nossas ações no meio ambiente permite que tomemos decisões mais informadas e responsáveis. Preservar a vida na Terra e na água depende de todos nós, e pequenas mudanças em nosso cotidiano podem gerar grandes resultados. Caso queira saber mais sobre a importância de preservar a vida terrestre e aquática, visite nossa pagina de conscientização, clicando no botão Inicio acima. Qualquer Denúncia de maus tratos com animais, sendo terrestres ou aquáticos, contate o IBAMA - Telefone (Linha Verde): <a className="ibama" href="tel:0800618080">0800 61 8080</a><br /><span><br /><strong>Toda ação ajuda, faça sua parte.</strong></span></p>
    </main>
  );
}

export default App;
