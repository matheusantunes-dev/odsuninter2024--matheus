import ContentSection from '../components/ContentSection';
import PageHero from '../components/PageHero';
import { usePageTitle } from '../hooks/usePageTitle';

export default function Proconsvate() {
  usePageTitle('Quem Somos');

  return (
    <>
      <PageHero
        title="Quem somos nós?"
        subtitle="Uma apresentação do programa e do compromisso com a preservação da vida aquática e terrestre."
        compact
      />

      <ContentSection
        image={{
          src: '/assets/img/logo.png',
          alt: 'Logo PROCONSVATE',
          caption: 'Programa criado em 2024',
          align: 'left',
          className: 'section-media__logo',
        }}
        paragraphs={[
          'A PROCONSVATE é um programa de conscientização ambiental criado em 2024 para promover a importância de preservar a vida aquática e terrestre.',
          'O projeto dialoga diretamente com a ODS 14 e a ODS 15, reforçando que a proteção de habitats e espécies depende de atitudes sustentáveis, informação acessível e participação coletiva.',
          'Hoje, inúmeras espécies correm risco de extinção e muitos ecossistemas sofrem com poluição, descarte irregular e uso irresponsável dos recursos naturais. Por isso, decisões cotidianas e ações educativas têm impacto real.',
          'Se quiser aprofundar o tema, volte para a página inicial e explore os conteúdos de conscientização e os materiais complementares do projeto.',
        ]}
      >
        <p className="alert-copy">
          Qualquer denúncia de maus-tratos contra animais terrestres ou
          aquáticos pode ser encaminhada ao IBAMA pela Linha Verde:
          {' '}
          <a className="inline-link" href="tel:0800618080">
            0800 61 8080
          </a>
          .
        </p>
        <p className="closing-copy">Toda ação ajuda. Faça a sua parte.</p>
      </ContentSection>
    </>
  );
}