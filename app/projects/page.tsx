import type { Metadata } from "next";

import { ProjectCard } from "@/components/project-card";
import { CtaPanel, PageIntro } from "@/components/ui";
import { projects, siteConfig } from "@/content/site";

const description =
  "Explore Muhammad Bilal’s frontend and full-stack product work across startup planning and technology publishing platforms.";

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
        title="Product work with a clear point of view."
        description="Two substantial platforms that show responsive UI engineering, product thinking, dashboard design, API workflows, content systems, and practical full-stack development."
        tags={[
          "Responsive product interfaces",
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

      <CtaPanel
        title="Want the concise version?"
        description="The attached CV brings my experience, technical skills, education, and selected work into one easy-to-review document."
        primary={{ label: "Contact me", href: "/contact" }}
        secondary={{
          label: "Download CV",
          href: siteConfig.cvPath,
          download: true,
        }}
      />
    </>
  );
}
