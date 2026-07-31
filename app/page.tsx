import type { Metadata } from "next";

import { CapabilityCard } from "@/components/capability-card";
import { CodeProfileCard } from "@/components/code-profile-card";
import { HighlightStrip } from "@/components/highlight-strip";
import { ProjectCard } from "@/components/project-card";
import { ButtonLink, Eyebrow, SectionHeading } from "@/components/ui";
import {
  capabilities,
  homeHighlights,
  projects,
  siteConfig,
} from "@/content/site";

export const metadata: Metadata = {
  title: "Generative AI Engineer",
  description: siteConfig.description,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Muhammad Bilal | Generative AI Engineer",
    description: siteConfig.description,
    url: "/",
  },
  twitter: {
    title: "Muhammad Bilal | Generative AI Engineer",
    description: siteConfig.description,
  },
};

export default function HomePage() {
  return (
    <>
      <section className="home-hero">
        <div className="container home-hero__grid">
          <div className="hero-copy">
            <Eyebrow>{siteConfig.hero.eyebrow}</Eyebrow>
            <h1>
              Building practical AI products with{" "}
              <em>LLMs and retrieval.</em>
            </h1>
            <p className="hero-summary">
              I&apos;m Muhammad Bilal, a Computer Science undergraduate in Lahore. I
              focus on Generative AI applications using model APIs, LangChain,
              vector search, Python, FastAPI, and a dependable full-stack
              foundation.
            </p>
            <div className="hero-actions">
              <ButtonLink href={siteConfig.hero.primaryCta.href} arrow>
                {siteConfig.hero.primaryCta.label}
              </ButtonLink>
              <ButtonLink
                href={siteConfig.hero.secondaryCta.href}
                variant="secondary"
              >
                {siteConfig.hero.secondaryCta.label}
              </ButtonLink>
            </div>
          </div>

          <CodeProfileCard />
        </div>
      </section>

      <HighlightStrip items={homeHighlights} />

      <section className="section-block">
        <div className="container">
          <SectionHeading
            eyebrow="Selected projects"
            title="Product engineering that supports the AI layer."
            description="Two shipped platforms showing the interface, API, dashboard, and workflow experience I bring to complete Generative AI products."
          />
          <div className="project-grid">
            {projects.map((project, index) => (
              <ProjectCard project={project} index={index} key={project.slug} />
            ))}
          </div>
        </div>
      </section>

      <section className="section-block">
        <div className="container">
          <SectionHeading
            eyebrow="Generative AI focus"
            title="From model APIs to useful product experiences."
            description="My current direction combines structured Generative AI learning with practical full-stack engineering across APIs, data, deployment, and responsive interfaces."
          />
          <div className="capabilities-grid">
            {capabilities.map((capability, index) => (
              <CapabilityCard
                capability={capability}
                index={index}
                key={capability.title}
              />
            ))}
          </div>
        </div>
      </section>

    </>
  );
}
