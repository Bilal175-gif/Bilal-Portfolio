type TimelineItemProps = {
  item: {
    period: string;
    title: string;
    organisation: string;
    summary: string;
    highlights: readonly string[];
    id: string;
  };
  index: number;
};

export function TimelineItem({ item, index }: TimelineItemProps) {
  return (
    <article className="timeline-item">
      <div className="timeline-item__rail" aria-hidden="true">
        <span>{String(index + 1).padStart(2, "0")}</span>
      </div>
      <div className="timeline-item__period">
        <small>{item.id === "education" ? "Education" : "Experience"}</small>
        <strong>{item.period}</strong>
      </div>
      <div className="timeline-item__body">
        <h2>{item.title}</h2>
        <p className="timeline-item__organisation">{item.organisation}</p>
        <p>{item.summary}</p>
        <ul className="check-list">
          {item.highlights.map((bullet) => (
            <li key={bullet}>{bullet}</li>
          ))}
        </ul>
      </div>
    </article>
  );
}
