import type { Metadata } from "next";

import { ProjectCard } from "@/components/project-card";
import { projects } from "@/content/site";

const description =
  "Explore Muhammad Bilal’s product engineering work across AI startup planning and technology publishing platforms.";

export const metadata: Metadata = {
  title: "Projects",
  description,
  alternates: {
    canonical: "/projects",
  },
  openGraph: {
    title: "Projects | Muhammad Bilal",
    description,
    url: "/projects",
  },
  twitter: {
    title: "Projects | Muhammad Bilal",
    description,
  },
};

export default function ProjectsPage() {
  return (
    <section
      aria-labelledby="projects-page-title"
      className="section-block direct-page-section"
    >
      <h1 className="visually-hidden" id="projects-page-title">
        Selected projects
      </h1>
      <div className="container project-grid">
        {projects.map((project, index) => (
          <ProjectCard project={project} index={index} key={project.slug} />
        ))}
      </div>
    </section>
  );
}
