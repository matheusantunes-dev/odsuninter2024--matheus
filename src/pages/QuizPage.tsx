export function QuizPage() {
  return (
    <main id="conteudo-principal" tabIndex={-1} className="site-main" role="main">
      <h1 style={{ textAlign: 'center', textDecoration: 'none', filter: 'drop-shadow(1px 8px 8px black)' }}>
        Ao clicar em Jogar o Quiz, clique em "continuar sem login"
      </h1>
      <iframe
        src="https://pt.quizur.com/trivia/como-esta-sua-consciencia-ambiental-teste-aqui-1pLTa"
        id="product-frame"
        title="Quiz: Você é consciente ambiental?"
        className="quiz"
      />
    </main>
  );
}
