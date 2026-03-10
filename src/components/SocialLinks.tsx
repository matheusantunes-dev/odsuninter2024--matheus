function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M20.52 3.48A11.84 11.84 0 0 0 12.08 0C5.55 0 .24 5.31.24 11.84c0 2.09.55 4.13 1.6 5.93L0 24l6.4-1.67a11.8 11.8 0 0 0 5.68 1.45h.01c6.53 0 11.84-5.31 11.84-11.84 0-3.16-1.23-6.13-3.41-8.46Zm-8.44 18.3h-.01a9.82 9.82 0 0 1-5-1.37l-.36-.21-3.8.99 1.02-3.71-.23-.38a9.83 9.83 0 0 1-1.5-5.26c0-5.42 4.41-9.84 9.84-9.84 2.63 0 5.09 1.02 6.95 2.89a9.77 9.77 0 0 1 2.89 6.95c0 5.42-4.42 9.84-9.84 9.84Zm5.4-7.37c-.3-.15-1.77-.87-2.05-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.95 1.17-.17.2-.35.22-.65.07-.3-.15-1.25-.46-2.39-1.48-.88-.78-1.48-1.74-1.65-2.04-.17-.3-.02-.46.13-.61.14-.14.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.62-.92-2.22-.24-.57-.48-.49-.67-.5h-.57c-.2 0-.52.07-.8.37-.27.3-1.05 1.02-1.05 2.49 0 1.47 1.07 2.88 1.22 3.08.15.2 2.1 3.21 5.1 4.5.71.31 1.26.49 1.69.63.71.23 1.35.2 1.86.12.56-.08 1.77-.72 2.02-1.41.25-.7.25-1.29.17-1.42-.07-.12-.27-.2-.57-.35Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default function SocialLinks() {
  return (
    <div className="social-links" aria-label="Redes sociais do projeto">
      <a
        className="social-button social-button--whatsapp"
        href="https://wa.me/5538988064942?text=Ol%C3%A1%2C%20vim%20do%20site%20e%20preciso%20de%20ajuda."
        target="_blank"
        rel="noreferrer"
        aria-label="Conversar no WhatsApp"
      >
        <WhatsAppIcon />
      </a>

      <a
        className="social-button social-button--instagram"
        href="https://www.instagram.com/proconsvate?igsh=MWMwb3ZucWFydmFyMQ=="
        target="_blank"
        rel="noreferrer"
        aria-label="Abrir Instagram do projeto"
      >
        <img src="/assets/img/insta.png" alt="" aria-hidden="true" />
      </a>
    </div>
  );
}