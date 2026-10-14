export function SectionHeading({
  number,
  title,
  description,
}: {
  number: string;
  title: string;
  description?: string;
}) {
  return (
    <header className="section-heading">
      <span className="eyebrow">{number}</span>
      <h2>{title}</h2>
      {description && <p>{description}</p>}
    </header>
  );
}
