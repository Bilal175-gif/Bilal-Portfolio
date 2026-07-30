import { ArrowRight, ArrowUpRight } from "lucide-react";
import Link from "next/link";

import { ProjectVisual } from "@/components/project-visual";
import { TagList } from "@/components/ui";

type ProjectCardProps = {
  project: {
    slug: string;
    title: string;
    type: string;
    summary: string;
    tags: readonly string[];
    detailPanel: {
      liveUrl: string;
    };
  };
  index: number;
};

export function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <article className="project-card">
      <ProjectVisual slug={project.slug} title={project.title} />
      <div className="project-card__body">
        <div className="project-card__meta">
          <span>{String(index + 1).padStart(2, "0")} / Featured</span>
          <span>{project.type}</span>
        </div>
        <h3>{project.title}</h3>
        <p>{project.summary}</p>
        <TagList items={project.tags} />
        <div className="project-card__actions">
          <Link href={`/projects/${project.slug}`}>
            Read case study
            <ArrowRight aria-hidden="true" size={16} />
          </Link>
          <a href={project.detailPanel.liveUrl} target="_blank" rel="noreferrer">
            Visit live project
            <ArrowUpRight aria-hidden="true" size={15} />
          </a>
        </div>
      </div>
    </article>
  );
}
