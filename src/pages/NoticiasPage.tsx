export function NoticiasPage() {
  return (
    <main id="conteudo-principal" tabIndex={-1} className="site-main" role="main">
      <iframe
        src="https://www.cnnbrasil.com.br/tudo-sobre/animais/"
        id="product-frame"
        title="Lista de notícias sobre animais da CNN Brasil"
        className="noticas"
      />
    </main>
  );
}
