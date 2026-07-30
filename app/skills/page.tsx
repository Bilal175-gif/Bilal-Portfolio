import type { Metadata } from "next";

import { SkillsExplorer } from "@/components/skills-explorer";
import { PageIntro } from "@/components/ui";
import { skills } from "@/content/site";

const description =
  "Explore Muhammad Bilal’s practical technology stack across AI engineering, model APIs, backend development, frontend systems, databases, testing, and deployment.";

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
        eyebrow="Skills / Technology stack"
        title="The tools behind the products I build."
        description="A practical mix of AI engineering and full-stack technology. Select any skill to see what it does, where it fits, and how I use it in product work."
        tags={[
          "AI engineering",
          "Frontend systems",
          "Backend APIs",
          "Production delivery",
        ]}
      />

      <section className="section-block skills-section">
        <div className="container skills-container">
          <SkillsExplorer skills={skills} />
        </div>
      </section>
    </>
  );
}
