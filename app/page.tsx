import type { Metadata } from "next";

import { CapabilityCard } from "@/components/capability-card";
import { CodeProfileCard } from "@/components/code-profile-card";
import { HighlightStrip } from "@/components/highlight-strip";
import { ProjectCard } from "@/components/project-card";
import { ButtonLink, CtaPanel, Eyebrow, SectionHeading } from "@/components/ui";
import {
  capabilities,
  homeHighlights,
  projects,
  siteConfig,
} from "@/content/site";

export const metadata: Metadata = {
  title: "Frontend-focused full-stack developer",
  description: siteConfig.description,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Muhammad Bilal | Frontend-focused full-stack developer",
    description: siteConfig.description,
    url: "/",
  },
  twitter: {
    title: "Muhammad Bilal | Frontend-focused full-stack developer",
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
              Building useful digital products with{" "}
              <em>clean frontend engineering.</em>
            </h1>
            <p className="hero-summary">
              I&apos;m Muhammad Bilal, a Computer Science undergraduate in Lahore. I
              build responsive web applications, product interfaces, editorial
              dashboards, and practical API workflows with React, Next.js,
              TypeScript, and full-stack tools.
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
            <ul className="hero-facts">
              <li>{siteConfig.profile.location}</li>
              <li>{siteConfig.profile.availability[0]}</li>
              <li>{siteConfig.profile.availability[1]}</li>
            </ul>
          </div>

          <CodeProfileCard />
        </div>
      </section>

      <HighlightStrip items={homeHighlights} />

      <section className="section-block">
        <div className="container">
          <SectionHeading
            eyebrow="Selected projects"
            title="Product work with a clear point of view."
            description="Two substantial platforms showing responsive interface engineering, product thinking, connected workflows, and practical full-stack development."
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
            eyebrow="Capabilities"
            title="Frontend clarity, supported by practical full-stack understanding."
            description="I work across the visible interface and the connected product workflow, with a strong bias toward usable, responsive frontend systems."
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

      <CtaPanel
        title="Have a role or product that needs thoughtful frontend work?"
        description="I’m open to internships, junior software engineering roles, frontend opportunities, and practical remote collaboration."
        primary={{ label: "Start a conversation", href: "/contact" }}
        secondary={{
          label: "Download CV",
          href: siteConfig.cvPath,
          download: true,
        }}
      />
    </>
  );
}
