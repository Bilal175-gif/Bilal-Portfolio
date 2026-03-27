import { ProjectCard } from "@/components/project-card";
import { SectionHeading } from "@/components/section-heading";

export function ProjectsSection({ projects }) {
  return (
    <section id="projects" className="section-shell section-padding">
      <SectionHeading
        eyebrow="Projects"
        title="Interactive work panels shaped around premium web directions and recruiter-facing storytelling."
        description="The card system is built for depth: perspective tilt on hover, scroll-reactive movement, and visual surfaces that feel more spatial than flat."
      />

      <div className="grid gap-5 lg:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </section>
  );
}
