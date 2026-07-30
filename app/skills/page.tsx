import type { Metadata } from "next";
import { ArrowUpRight } from "lucide-react";

import { SkillGroupCard } from "@/components/skill-group";
import { ButtonLink, PageIntro } from "@/components/ui";
import { siteConfig, skillGroups } from "@/content/site";

const description =
  "Muhammad Bilal’s Generative AI learning stack across LLM APIs, LangChain, Hugging Face, vector databases, retrieval, Python, and full-stack application engineering.";

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
        eyebrow="Skills / Learning stack"
        title="A Generative AI stack, organised by the systems it supports."
        description="This combines my active course-led learning in LLM applications with the full-stack tools I use to connect APIs, data, interfaces, testing, and deployment."
        tags={[
          "LLM APIs",
          "LangChain",
          "Vector databases",
          "Full-stack AI products",
        ]}
      />

      <section className="section-block section-block--compact learning-track">
        <div className="container learning-track__panel">
          <div>
            <p className="learning-track__label">Current structured learning</p>
            <h2>{siteConfig.learning.title}</h2>
            <p>
              {siteConfig.learning.provider} · {siteConfig.learning.summary}
            </p>
          </div>
          <ButtonLink href={siteConfig.learning.url} external>
            View course
            <ArrowUpRight aria-hidden="true" size={17} />
          </ButtonLink>
          <ul className="tag-list learning-track__topics">
            {siteConfig.learning.topics.map((topic) => (
              <li key={topic}>{topic}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section-block">
        <div className="container skills-grid">
          {skillGroups.map((group) => (
            <SkillGroupCard group={group} key={group.id} />
          ))}
        </div>
      </section>

    </>
  );
}
