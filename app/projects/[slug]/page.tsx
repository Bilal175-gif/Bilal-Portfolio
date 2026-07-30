import type { Metadata } from "next";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { notFound } from "next/navigation";

import { ProjectVisual } from "@/components/project-visual";
import { ButtonLink, CtaPanel, Eyebrow, TagList } from "@/components/ui";
import { projects, siteConfig } from "@/content/site";

type ProjectPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    return {};
  }

  return {
    title: `${project.title} case study`,
    description: project.summary,
    alternates: {
      canonical: project.caseStudyHref,
    },
    openGraph: {
      title: `${project.title} case study | Muhammad Bilal`,
      description: project.summary,
      url: project.caseStudyHref,
    },
    twitter: {
      title: `${project.title} case study | Muhammad Bilal`,
      description: project.summary,
    },
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    notFound();
  }

  const details = project.detailPanel;

  return (
    <>
      <section className="case-hero">
        <div className="container">
          <div className="case-hero__top">
            <Eyebrow>
              Project {project.number} / {project.type}
            </Eyebrow>
            <h1>{project.title}</h1>
            <p className="case-hero__summary">{project.summary}</p>
            <TagList items={project.tags} />
          </div>
          <div className="case-hero__visual">
            <ProjectVisual slug={project.slug} title={project.title} />
          </div>
        </div>
      </section>

      <section className="section-block">
        <div className="container case-layout">
          <div className="case-content">
            <section className="case-section">
              <Eyebrow>Overview</Eyebrow>
              <h2>{project.overview.title}</h2>
              <div className="case-section__copy">
                {project.overview.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </section>

            <section className="case-section">
              <Eyebrow>My contribution</Eyebrow>
              <h2>Interface work connected to the complete product flow.</h2>
              <ol className="case-contribution">
                {project.contribution.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ol>
            </section>

            <section className="case-section">
              <Eyebrow>Key product flows</Eyebrow>
              <h2>Core workflows inside the product.</h2>
              <div className="flow-grid">
                {project.flows.map((flow) => (
                  <article className="flow-card" key={flow.title}>
                    <h3>{flow.title}</h3>
                    <p>{flow.description}</p>
                  </article>
                ))}
              </div>
            </section>

            <section className="case-section">
              <Eyebrow>What it demonstrates</Eyebrow>
              <h2>Practical strengths visible in this work.</h2>
              <ul className="check-list">
                {project.demonstrations.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </section>
          </div>

          <aside className="detail-panel" aria-labelledby="project-details">
            <div className="detail-panel__header">
              <h2 id="project-details">Project details</h2>
              <span className="status-chip">{details.status}</span>
            </div>
            <dl className="detail-list">
              <div>
                <dt>Type</dt>
                <dd>{details.type}</dd>
              </div>
              <div>
                <dt>Audience</dt>
                <dd>{details.audience}</dd>
              </div>
              <div>
                <dt>Focus</dt>
                <dd>{details.focus}</dd>
              </div>
              <div>
                <dt>Stack</dt>
                <dd>{details.stack.join(", ")}</dd>
              </div>
              <div>
                <dt>Status</dt>
                <dd>{details.status}</dd>
              </div>
            </dl>
            <div className="detail-panel__links">
              <ButtonLink
                href={details.liveUrl}
                external
                variant="primary"
              >
                Visit live project
                <ArrowUpRight aria-hidden="true" size={16} />
              </ButtonLink>
              <ButtonLink href={details.backHref} variant="secondary">
                <ArrowLeft aria-hidden="true" size={16} />
                Back to projects
              </ButtonLink>
            </div>
          </aside>
        </div>
      </section>

      <CtaPanel
        title="Interested in the thinking behind the interface?"
        description="I’m happy to discuss the product context, implementation work, or a relevant early-career opportunity."
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
