import ContentSection from '../components/ContentSection';
import PageHero from '../components/PageHero';
import { usePageTitle } from '../hooks/usePageTitle';

const sections = [
  {
    image: {
      src: '/assets/img/agua.png',
      alt: 'Ilustração sobre vida aquática',
      caption: 'Gerado por IA',
      align: 'right' as const,
    },
    paragraphs: [
      'A vida aquática, que varia de pequenos plânctons a grandes baleias, é crucial para a saúde dos oceanos e para a produção de oxigênio. Esses organismos sustentam ecossistemas marinhos complexos e são vitais para o equilíbrio ambiental.',
      'Rios e lagos também fornecem água doce essencial para a sobrevivência humana e para o desenvolvimento de comunidades ao redor do mundo. Proteger esses recursos é fundamental para garantir a continuidade da vida em nosso planeta.',
    ],
    quote: '“A natureza não é um lugar para visitar. Ela é o lar.” Gary Snyder',
  },
  {
    image: {
      src: '/assets/img/vida terrestre.avif',
      alt: 'Imagem sobre vida terrestre',
      caption: 'Fonte: https://shre.ink/qahc',
      align: 'left' as const,
    },
    paragraphs: [
      'Florestas e savanas são essenciais para a vida na Terra, desempenhando papéis vitais na saúde ambiental e na qualidade de vida. Esses ecossistemas abrigam uma imensa biodiversidade, sustentando inúmeras espécies de plantas e animais.',
      'Além de seu valor ecológico, eles ajudam a regular o clima, controlar temperaturas e sequestrar carbono da atmosfera. Preservar esses habitats é um compromisso indispensável para proteger a biodiversidade e o bem-estar das futuras gerações.',
    ],
    quote:
      '“O que fazemos com as florestas do mundo é apenas um espelho do que fazemos a nós mesmos e uns aos outros.” Mahatma Gandhi',
  },
  {
    image: {
      src: '/assets/img/preservação.webp',
      alt: 'Imagem sobre preservação ambiental',
      caption: 'Fonte: https://shre.ink/qahQ',
      align: 'right' as const,
    },
    paragraphs: [
      'A poluição dos mares e o desmatamento são problemas urgentes que exigem atenção constante. O descarte inadequado de plásticos devasta habitats marinhos, enquanto a remoção de florestas acelera a perda de biodiversidade e altera ciclos climáticos.',
      'Reduzir o uso de descartáveis, reciclar, escolher produtos com menos embalagens e buscar alternativas ecológicas são passos concretos para preservar nossos ambientes naturais.',
    ],
    quote:
      '“Não herdamos a Terra de nossos ancestrais, a tomamos emprestada de nossos filhos.” Provérbio nativo americano',
  },
  {
    image: {
      src: '/assets/img/conciência.jpg',
      alt: 'Consciência ambiental',
      caption: 'Gerado por IA',
      align: 'left' as const,
    },
    paragraphs: [
      'Ensinar as novas gerações sobre a importância da conservação é essencial para um futuro mais verde e sustentável. Compartilhar conhecimento prepara jovens para tomar decisões mais conscientes e responsáveis.',
      'As escolhas que fazemos hoje moldam o futuro do planeta. Investir em educação ambiental ajuda a entender os desafios e inspira um compromisso duradouro com a proteção dos recursos naturais.',
    ],
    quote:
      '“A educação é a arma mais poderosa que você pode usar para mudar o mundo.” Nelson Mandela',
  },
  {
    image: {
      src: '/assets/img/Terra.jpg',
      alt: 'Imagem do planeta Terra',
      caption: 'Gerado por IA',
      align: 'right' as const,
    },
    paragraphs: [
      'A sustentabilidade é uma necessidade urgente e não pode ser adiada. Precisamos repensar hábitos de consumo e estilo de vida, adotando práticas mais conscientes desde agora.',
      'Só assim poderemos assegurar que a vida na Terra continue a prosperar e que as próximas gerações encontrem um futuro saudável e equilibrado.',
    ],
    quote:
      '“A Terra fornece o suficiente para satisfazer as necessidades de todos os homens, mas não a ganância de todos os homens.” Mahatma Gandhi',
  },
];

export default function Home() {
  usePageTitle('Início');

  return (
    <>
      <PageHero
        title="PROCONSVATE"
        subtitle="Programa de Conscientização de Vida Aquática e Terrestre"
      />

      <section className="section-card section-card--intro" data-reveal>
        <div className="hero-logos">
          <img src="/assets/img/logo ods.png" alt="Logo dos Objetivos de Desenvolvimento Sustentável" />
          <img src="/assets/img/logo.png" alt="Logo PROCONSVATE" />
        </div>

        <div className="section-copy">
          <p>
            Preservar a vida aquática e terrestre é essencial para manter o
            equilíbrio do ambiente. Temos a responsabilidade de adotar práticas
            sustentáveis que protejam habitats e garantam a sobrevivência das
            espécies.
          </p>
          <p>
            O programa busca sensibilizar sobre a importância de ações que
            ajudem a conservar o meio ambiente, ressaltando a necessidade de um
            enfoque integrado para a vida tanto na Terra quanto na água.
          </p>
          <p>
            A diversidade biológica em oceanos, rios, florestas e savanas
            desempenha um papel fundamental no equilíbrio ambiental global. Cada
            espécie tem uma função específica na rede da vida e depende de
            ecossistemas preservados para continuar existindo.
          </p>
        </div>
      </section>

      {sections.map((section) => (
        <ContentSection
          key={section.image.src}
          image={section.image}
          paragraphs={section.paragraphs}
          quote={section.quote}
        />
      ))}

      <section className="section-card objective-awareness" data-reveal>
        <div className="section-copy">
          <h2>Nosso objetivo</h2>
          <p>
            Queremos aumentar a conscientização global sobre a importância de
            preservar a vida aquática e terrestre, destacando desafios reais e
            soluções acessíveis para proteger a biodiversidade.
          </p>

          <h2>Conscientização</h2>
          <p>
            Conscientização é o primeiro passo para a mudança. Quando
            compreendemos os impactos das nossas ações no meio ambiente,
            tomamos decisões mais informadas e responsáveis.
          </p>

          <h3>Um pouco deste projeto</h3>
          <p>
            O PROCONSVATE se apoia em duas ODS entre as 17 metas globais da
            Agenda 2030: a ODS 14, focada na vida na água, e a ODS 15, voltada
            à vida terrestre.
          </p>
        </div>
      </section>
    </>
  );
}