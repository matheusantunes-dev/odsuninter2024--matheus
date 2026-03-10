import { ReactNode } from 'react';

type ContentSectionProps = {
  title?: string;
  paragraphs: string[];
  image?: {
    src: string;
    alt: string;
    caption?: string;
    align?: 'left' | 'right';
    className?: string;
  };
  quote?: string;
  className?: string;
  children?: ReactNode;
};

export default function ContentSection({
  title,
  paragraphs,
  image,
  quote,
  className = '',
  children,
}: ContentSectionProps) {
  const reverse = image?.align === 'left';

  return (
    <section className={`section-card ${className}`.trim()} data-reveal>
      <div className={`section-card__body${reverse ? ' is-reverse' : ''}`}>
        {image ? (
          <figure className="section-media">
            <img
              className={image.className}
              src={image.src}
              alt={image.alt}
              loading="lazy"
            />
            {image.caption ? (
              <figcaption className="figure-caption">{image.caption}</figcaption>
            ) : null}
          </figure>
        ) : null}

        <div className="section-copy">
          {title ? <h2>{title}</h2> : null}
          {paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
          {children}
          {quote ? <blockquote className="quote">{quote}</blockquote> : null}
        </div>
      </div>
    </section>
  );
}