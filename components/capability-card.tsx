import { Blocks, MonitorSmartphone, ScanSearch } from "lucide-react";
import type { LucideIcon } from "lucide-react";

const icons: Record<string, LucideIcon> = {
  frontend: MonitorSmartphone,
  fullstack: Blocks,
  usability: ScanSearch,
};

export function CapabilityCard({
  capability,
  index,
}: {
  capability: {
    key: string;
    title: string;
    description: string;
  };
  index: number;
}) {
  const Icon = icons[capability.key] ?? Blocks;

  return (
    <article className="capability-card">
      <div className="capability-card__top">
        <span>
          <Icon aria-hidden="true" size={21} strokeWidth={1.5} />
        </span>
        <small>{String(index + 1).padStart(2, "0")}</small>
      </div>
      <h3>{capability.title}</h3>
      <p>{capability.description}</p>
    </article>
  );
}
