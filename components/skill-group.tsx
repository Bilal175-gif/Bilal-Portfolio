import {
  Blocks,
  Bot,
  BrainCircuit,
  Database,
  Network,
  Sparkles,
  Workflow,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

const icons: Record<string, LucideIcon> = {
  "genai-foundations": Sparkles,
  "llm-models": Bot,
  orchestration: Workflow,
  retrieval: Database,
  "ai-application": BrainCircuit,
  "supporting-stack": Blocks,
};

export function SkillGroupCard({
  group,
}: {
  group: {
    id: string;
    title: string;
    description: string;
    skills: readonly string[];
  };
}) {
  const Icon = icons[group.id] ?? Network;

  return (
    <article className="skill-card">
      <span className="skill-card__icon">
        <Icon aria-hidden="true" size={22} strokeWidth={1.5} />
      </span>
      <h2>{group.title}</h2>
      <p>{group.description}</p>
      <ul className="tag-list">
        {group.skills.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </article>
  );
}
