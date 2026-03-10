import ExternalFrame from '../components/ExternalFrame';
import PageHero from '../components/PageHero';
import { usePageTitle } from '../hooks/usePageTitle';

export default function Quiz() {
  usePageTitle('Quiz');

  return (
    <>
      <PageHero
        title="Quiz de conscientização"
        subtitle="Teste seus conhecimentos e reflita sobre hábitos que impactam a vida aquática e terrestre."
        compact
      />

      <ExternalFrame
        title="Quiz ambiental"
        description='Ao clicar em "Jogar o Quiz", use a opção "continuar sem login" para acessar mais rápido.'
        sourceUrl="https://pt.quizur.com/trivia/como-esta-sua-consciencia-ambiental-teste-aqui-1pLTa"
        linkLabel="Abrir quiz em nova aba"
      />
    </>
  );
}