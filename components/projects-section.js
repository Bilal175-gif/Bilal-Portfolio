import { ProjectCard } from "@/components/project-card";
import { SectionHeading } from "@/components/section-heading";

export function ProjectsSection({ projects }) {
  return (
    <section id="projects" className="section-shell section-padding">
      <SectionHeading
        eyebrow="Projects"
        title="Selected projects pulled from Bilal's public GitHub work."
        description="These cards now point to real repositories and reflect the stack and project themes visible on the linked profile."
      />

      <div className="grid gap-5 lg:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </section>
  );
}
