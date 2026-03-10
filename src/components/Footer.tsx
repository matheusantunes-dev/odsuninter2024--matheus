export default function Footer() {
  return (
    <footer className="site-footer" role="contentinfo">
      <div className="container footer-grid">
        <div>
          <p className="footer-title">
            Programa de Conscientização de Vida Aquática e Terrestre (PROCONSVATE)
          </p>
          <p className="footer-copy">
            Matheus Antunes Reis © Todos os direitos reservados - Desenvolvido por
            {' '}
            MR SISTEMAS
          </p>
        </div>

        <div className="footer-meta">
          <p>Siga-nos no Instagram!</p>
          <a className="email-link" href="mailto:proconsvate@gmail.com">
            proconsvate@gmail.com
          </a>
          <a className="back-to-top" href="#topo">
            Voltar ao topo
          </a>
        </div>
      </div>
    </footer>
  );
}