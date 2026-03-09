export function SobrePage() {
  return (
    <>
      <img src="/assets/img/logo.png" alt="Logo PROCONSVATE" className="logoproject logo--livre sobre" loading="lazy" />
      <div className="PROCONSVATE">
        <h1>PROCONSVATE (Programa de Conscientização de Vida Aquática e Terrestre)</h1>
      </div>

      <button className="chat-launcher" aria-label="Abrir chat" id="launcher" type="button">
        💬
      </button>

      <div className="chat" id="chat" role="dialog" aria-label="Sobre o Projeto Proconsvate" aria-modal="false">
        <header className="chat-header">
          <strong>Sobre o Projeto Proconsvate</strong>
          <button className="chat-close" id="close" aria-label="Fechar" type="button">
            ×
          </button>
        </header>

        <div className="messages" id="messages" aria-live="polite" aria-atomic="false" />

        <div className="quick" id="quick" />

        <div className="footer" id="footer">
          <input id="input" type="text" placeholder="Digite seu feedback..." autoComplete="off" />
          <button id="send" type="button">
            Enviar
          </button>
        </div>
      </div>
      <div style={{ height: 500 }} />
    </>
  );
}
