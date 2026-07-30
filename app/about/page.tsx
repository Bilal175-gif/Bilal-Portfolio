import type { Metadata } from "next";

import { ButtonLink, CtaPanel, PageIntro, SectionHeading } from "@/components/ui";
import { siteConfig, workingPrinciples } from "@/content/site";

const description =
  "Learn about Muhammad Bilal’s frontend-first approach, practical full-stack experience, education, and working principles.";

export const metadata: Metadata = {
  title: "About",
  description,
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "About | Muhammad Bilal",
    description,
    url: "/about",
  },
  twitter: {
    title: "About | Muhammad Bilal",
    description,
  },
};

export default function AboutPage() {
  return (
    <>
      <PageIntro
        eyebrow="About / Approach"
        title="Frontend clarity backed by practical full-stack understanding."
        description="I’m a Computer Science undergraduate and frontend-focused full-stack developer. My strongest work is in React, Next.js, and TypeScript, supported by hands-on experience with backend APIs, databases, testing, and deployment workflows."
        tags={[
          siteConfig.profile.location,
          "BSCS expected 2029",
          "Open to remote work",
          "Internships and junior roles",
        ]}
      />

      <section className="section-block">
        <div className="container about-grid">
          <div className="copy-stack">
            <h2>
              I care about interfaces that are easy to understand and
              straightforward to maintain.
            </h2>
            <p>
              {siteConfig.profile.summary}
            </p>
            <h3>Frontend first, not frontend only</h3>
            <p>
              My strongest work combines responsive UI development,
              component-based architecture, API integration, debugging, and
              practical product thinking. I enjoy building interfaces that
              communicate their purpose quickly instead of relying on heavy
              animation or unnecessary visual complexity.
            </p>
            <p>
              I&apos;ve worked on product workspaces, editorial dashboards,
              content platforms, and REST API workflows. That experience gives
              me a useful perspective across both the visible product experience
              and the systems that support it.
            </p>
          </div>

          <aside className="profile-panel" aria-labelledby="profile-snapshot">
            <h2 id="profile-snapshot">Profile snapshot</h2>
            <dl className="detail-list">
              <div>
                <dt>Name</dt>
                <dd>{siteConfig.name}</dd>
              </div>
              <div>
                <dt>Role</dt>
                <dd>{siteConfig.shortTitle}</dd>
              </div>
              <div>
                <dt>Location</dt>
                <dd>{siteConfig.profile.location}</dd>
              </div>
              <div>
                <dt>Education</dt>
                <dd>{siteConfig.profile.education.degree}</dd>
              </div>
              <div>
                <dt>University</dt>
                <dd>{siteConfig.profile.education.university}</dd>
              </div>
              <div>
                <dt>Graduation</dt>
                <dd>{siteConfig.profile.education.graduation}</dd>
              </div>
              <div>
                <dt>Current focus</dt>
                <dd>React, Next.js, TypeScript, responsive product UI</dd>
              </div>
            </dl>
          </aside>
        </div>
      </section>

      <section className="section-block">
        <div className="container">
          <SectionHeading
            eyebrow="Working principles"
            title="A practical approach to product development."
            description="These principles keep the visible interface, connected workflow, and review process aligned."
          />
          <div className="principles-grid">
            {workingPrinciples.map((principle, index) => (
              <article className="principle-card" key={principle.title}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <div>
                  <h3>{principle.title}</h3>
                  <p>{principle.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-block section-block--compact">
        <div className="container">
          <div className="opportunity-panel">
            <div>
              <h2>Currently open to the right early-career opportunity.</h2>
              <p>
                Internships, junior software engineering roles, frontend work,
                and practical remote collaboration are all welcome.
              </p>
            </div>
            <div className="hero-actions">
              <ButtonLink href="/contact">Contact me</ButtonLink>
              <ButtonLink
                href={siteConfig.cvPath}
                download
                variant="secondary"
              >
                Download CV
              </ButtonLink>
            </div>
          </div>
        </div>
      </section>

      <CtaPanel
        eyebrow="Selected work"
        title="See how that approach appears in shipped product interfaces."
        description="The project case studies explain the product context, my contribution, core workflows, and live links."
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
