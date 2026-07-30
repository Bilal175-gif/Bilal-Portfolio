import type { Metadata } from "next";

import { SkillGroupCard } from "@/components/skill-group";
import { CtaPanel, PageIntro } from "@/components/ui";
import { siteConfig, skillGroups } from "@/content/site";

const description =
  "Muhammad Bilal’s practical frontend, backend, API, database, developer-tool, and product-workflow skills.";

export const metadata: Metadata = {
  title: "Skills",
  description,
  alternates: {
    canonical: "/skills",
  },
  openGraph: {
    title: "Skills | Muhammad Bilal",
    description,
    url: "/skills",
  },
  twitter: {
    title: "Skills | Muhammad Bilal",
    description,
  },
};

export default function SkillsPage() {
  return (
    <>
      <PageIntro
        eyebrow="Skills / Capabilities"
        title="A practical stack, organised by how it is used."
        description="These are the technologies and workflows I have used across frontend development, APIs, databases, testing, debugging, content systems, and deployment."
        tags={[
          "Frontend focused",
          "Full-stack context",
          "API-connected products",
          "Testing and debugging",
        ]}
      />

      <section className="section-block">
        <div className="container skills-grid">
          {skillGroups.map((group) => (
            <SkillGroupCard group={group} key={group.id} />
          ))}
        </div>
      </section>

      <CtaPanel
        title="Skills matter most when they support a useful product."
        description="See how this stack comes together across a startup-planning workspace and a technology publishing platform."
        primary={{ label: "View projects", href: "/projects" }}
        secondary={{
          label: "Download CV",
          href: siteConfig.cvPath,
          download: true,
        }}
      />
    </>
  );
}
