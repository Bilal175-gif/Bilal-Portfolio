import {
  Braces,
  CodeXml,
  Database,
  GitBranch,
  PanelsTopLeft,
  Workflow,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

const icons: Record<string, LucideIcon> = {
  languages: CodeXml,
  frontend: PanelsTopLeft,
  backend: Braces,
  databases: Database,
  tools: GitBranch,
  workflows: Workflow,
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
  const iconKey =
    group.id === "backend-and-apis"
      ? "backend"
      : group.id === "developer-tools"
        ? "tools"
        : group.id === "product-workflows"
          ? "workflows"
          : group.id;
  const Icon = icons[iconKey] ?? CodeXml;

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
