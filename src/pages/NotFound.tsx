import { Link } from 'react-router-dom';
import PageHero from '../components/PageHero';
import { usePageTitle } from '../hooks/usePageTitle';

export default function NotFound() {
  usePageTitle('Página não encontrada');

  return (
    <>
      <PageHero
        title="Página não encontrada"
        subtitle="O endereço acessado não existe nesta aplicação."
        compact
      />

      <section className="section-card not-found" data-reveal>
        <div className="section-copy">
          <p>
            Verifique o menu principal ou volte para a página inicial para
            continuar navegando.
          </p>
          <Link className="button-link" to="/">
            Ir para o início
          </Link>
        </div>
      </section>
    </>
  );
}