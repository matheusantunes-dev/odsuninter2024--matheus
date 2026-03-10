import AboutChat from '../components/AboutChat';
import ContentSection from '../components/ContentSection';
import PageHero from '../components/PageHero';
import { usePageTitle } from '../hooks/usePageTitle';

export default function About() {
  usePageTitle('Sobre');

  return (
    <>
      <PageHero
        title="Sobre o projeto"
        subtitle="Conheça a proposta do PROCONSVATE e use o chat para navegar entre informações rápidas, ODS e feedback."
        compact
      />

      <ContentSection
        title="Como o PROCONSVATE atua"
        image={{
          src: '/assets/img/logo.png',
          alt: 'Logo do projeto PROCONSVATE',
          caption: 'Identidade visual do projeto',
          align: 'right',
          className: 'section-media__logo',
        }}
        paragraphs={[
          'O projeto foi criado para divulgar práticas de preservação e ampliar o debate sobre a proteção da vida na água e em ambientes terrestres.',
        ]}
      />

      <ContentSection
        title="O que você encontra aqui"
        paragraphs={[
          'A navegação principal reúne início, notícias, quiz e uma área sobre o projeto, tudo dentro de uma única aplicação com rotas.',
          'O botão de chat fica disponível nesta página para responder perguntas rápidas, listar as ODS e registrar sugestões dos visitantes.',
        ]}
      />

      <AboutChat />
    </>
  );
}
