import type { Metadata } from "next";

import { ProjectCard } from "@/components/project-card";
import { PageIntro } from "@/components/ui";
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
    <>
      <PageIntro
        eyebrow="Selected projects"
        title="The product foundation behind useful AI systems."
        description="These shipped platforms demonstrate responsive interfaces, API workflows, dashboard design, and connected systems—the engineering layer required to deliver complete Generative AI products."
        tags={[
          "AI product interfaces",
          "Connected API workflows",
          "Editorial systems",
          "Live project links",
        ]}
      />

      <section className="section-block">
        <div className="container project-grid">
          {projects.map((project, index) => (
            <ProjectCard project={project} index={index} key={project.slug} />
          ))}
        </div>
      </section>

    </>
  );
}
