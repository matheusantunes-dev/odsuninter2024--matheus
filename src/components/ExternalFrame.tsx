type ExternalFrameProps = {
  title: string;
  description: string;
  sourceUrl: string;
  linkLabel: string;
};

export default function ExternalFrame({
  title,
  description,
  sourceUrl,
  linkLabel,
}: ExternalFrameProps) {
  return (
    <section className="section-card embed-panel" data-reveal>
      <div className="embed-panel__header">
        <div>
          <h2>{title}</h2>
          <p>{description}</p>
        </div>

        <a
          className="button-link"
          href={sourceUrl}
          target="_blank"
          rel="noreferrer"
        >
          {linkLabel}
        </a>
      </div>

      <iframe
        src={sourceUrl}
        title={title}
        className="embed-frame"
        loading="lazy"
        referrerPolicy="strict-origin-when-cross-origin"
      />

      <p className="embed-note">
        Se o conteúdo não carregar dentro do site, abra o link em uma nova aba.
      </p>
    </section>
  );
}