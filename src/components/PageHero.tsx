type PageHeroProps = {
  title: string;
  subtitle: string;
  compact?: boolean;
};

export default function PageHero({
  title,
  subtitle,
  compact = false,
}: PageHeroProps) {
  return (
    <section
      className={`page-hero${compact ? ' page-hero--compact' : ''}`}
      data-reveal
    >
      <div className="container">
        <p className="page-hero__eyebrow">PROCONSVATE</p>
        <h1>{title}</h1>
        <p className="page-hero__subtitle">{subtitle}</p>
      </div>
    </section>
  );
}