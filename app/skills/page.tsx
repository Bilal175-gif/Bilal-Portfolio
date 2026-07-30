import type { Metadata } from "next";

import { SkillsExplorer } from "@/components/skills-explorer";
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
    <section aria-labelledby="skills-page-title" className="skills-section">
      <h1 className="visually-hidden" id="skills-page-title">
        Technology skills
      </h1>
      <div className="container skills-container">
        <SkillsExplorer skills={skills} />
      </div>
    </section>
  );
}
