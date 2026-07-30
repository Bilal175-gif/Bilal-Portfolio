type Highlight = {
  value: string;
  label: string;
  description: string;
};

export function HighlightStrip({ items }: { items: readonly Highlight[] }) {
  return (
    <section className="highlight-strip" aria-label="Profile highlights">
      <div className="container highlight-strip__grid">
        {items.map((item) => (
          <div className="highlight-strip__item" key={item.label}>
            <strong>{item.value}</strong>
            <span>{item.label}</span>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
