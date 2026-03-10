import ExternalFrame from '../components/ExternalFrame';
import PageHero from '../components/PageHero';
import { usePageTitle } from '../hooks/usePageTitle';

export default function News() {
  usePageTitle('Notícias');

  return (
    <>
      <PageHero
        title="Notícias sobre animais"
        subtitle="Acompanhe conteúdos externos que ampliam a discussão sobre biodiversidade, fauna e preservação."
        compact
      />

      <ExternalFrame
        title="Portal CNN Brasil"
        description="A página abaixo reaproveita a mesma referência do projeto original para reunir notícias e reportagens sobre animais."
        sourceUrl="https://www.cnnbrasil.com.br/tudo-sobre/animais/"
        linkLabel="Abrir notícia em nova aba"
      />
    </>
  );
}