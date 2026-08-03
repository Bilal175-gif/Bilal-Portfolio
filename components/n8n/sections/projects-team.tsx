import { ChevronRight, CircleDot, ExternalLink, Mail, Sparkles } from "lucide-react";
import Image from "next/image";

import { AutomationIcon } from "@/components/n8n/automation-icon";
import { N8nSectionHeading } from "@/components/n8n/n8n-ui";
import { CompactWorkflowChain } from "@/components/n8n/workflow-graphics";
import {
  automationProjects,
  processSteps,
  teamMembers,
  teamWorkflow,
  whyWorkWithUs,
  workflowSlides,
} from "@/content/n8n";

export function AutomationProjects() {
  return (
    <section className="n8n-section" aria-labelledby="projects-title">
      <div className="n8n-shell">
        <N8nSectionHeading
          id="projects-title"
          eyebrow="Example automation projects"
          title="Concept solutions that make the workflow concrete."
          description="These examples show how common automation systems could be structured. They are clearly presented as concepts, not completed client case studies."
        />

        <div className="n8n-project-grid">
          {automationProjects.map((project, index) => (
            <article className="n8n-project-card" key={project.id}>
              <div className="n8n-project-card__visual" data-visual={project.visual}>
                <div className="n8n-project-card__toolbar">
                  <span><i /><i /><i /></span>
                  <small>Workflow concept · {String(index + 1).padStart(2, "0")}</small>
                  <CircleDot aria-hidden="true" size={14} />
                </div>
                <CompactWorkflowChain
                  accent={workflowSlides[index]?.accent ?? "orange"}
                  ariaLabel={`${project.title} workflow concept`}
                  steps={project.workflow}
                />
              </div>
              <div className="n8n-project-card__body">
                <span className="n8n-concept-label">{project.label}</span>
                <h3>{project.title}</h3>
                <p>{project.outcome}</p>
                <ul className="n8n-inline-tags" aria-label={`${project.title} technologies`}>
                  {project.technologies.map((technology) => (
                    <li key={technology}>{technology}</li>
                  ))}
                </ul>
                <details className="n8n-project-details">
                  <summary>
                    <span>View workflow details</span>
                    <ChevronRight aria-hidden="true" size={18} />
                  </summary>
                  <div className="n8n-project-details__content">
                    <div>
                      <small>Problem</small>
                      <p>{project.problem}</p>
                    </div>
                    <div>
                      <small>Workflow</small>
                      <p>{project.workflow.join(" → ")}</p>
                    </div>
                    <div>
                      <small>Outcome</small>
                      <p>{project.outcome}</p>
                    </div>
                    <div>
                      <small>Example integrations</small>
                      <p>{project.integrations.join(" · ")}</p>
                    </div>
                  </div>
                </details>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function AutomationTeam() {
  return (
    <section className="n8n-section n8n-section--tinted" id="team" aria-labelledby="team-title">
      <div className="n8n-shell">
        <N8nSectionHeading
          id="team-title"
          eyebrow="The project team"
          title="Technical execution with a clear delivery process."
          description="Muhammad Bilal and Abdur Rehman work together across workflow planning, implementation, testing, review, client communication, and delivery."
        />

        <div className="n8n-team-grid">
          {teamMembers.map((member, index) => (
            <article className="n8n-team-card" key={member.name}>
              <div className="n8n-team-card__profile">
                {member.image ? (
                  <div className="n8n-team-card__image">
                    <Image
                      alt={`${member.name}, ${member.role}`}
                      height={220}
                      src={member.image}
                      width={220}
                    />
                  </div>
                ) : (
                  <div
                    className="n8n-team-card__initials"
                    role="img"
                    aria-label={`${member.name} initials avatar`}
                  >
                    <span>{member.initials}</span>
                    <i aria-hidden="true" />
                  </div>
                )}
                <div>
                  <span className="n8n-card-number">0{index + 1}</span>
                  <h3>{member.name}</h3>
                  <p className="n8n-team-card__role">{member.role}</p>
                </div>
              </div>
              <p className="n8n-team-card__bio">{member.bio}</p>
              <ul className="n8n-inline-tags" aria-label={`${member.name} skills`}>
                {member.skills.map((skill) => <li key={skill}>{skill}</li>)}
              </ul>
              {member.links.length > 0 && (
                <div className="n8n-team-card__links">
                  {member.links.map((link) => (
                    <a
                      href={link.href}
                      key={link.label}
                      rel={link.href.startsWith("http") ? "noreferrer" : undefined}
                      target={link.href.startsWith("http") ? "_blank" : undefined}
                    >
                      {link.label}
                      {link.href.startsWith("http") ? (
                        <ExternalLink aria-hidden="true" size={13} />
                      ) : (
                        <Mail aria-hidden="true" size={13} />
                      )}
                    </a>
                  ))}
                </div>
              )}
            </article>
          ))}
        </div>

        <div className="n8n-team-flow">
          <span>How we deliver together</span>
          <CompactWorkflowChain steps={teamWorkflow} accent="blue" ariaLabel="Team delivery workflow" />
        </div>
      </div>
    </section>
  );
}

export function WhyWorkWithUs() {
  return (
    <section className="n8n-section" aria-labelledby="why-title">
      <div className="n8n-shell n8n-why-layout">
        <div className="n8n-why-sticky">
          <N8nSectionHeading
            id="why-title"
            eyebrow="Why work with us"
            title="Built for operation, handover, and future change."
            description="A useful automation needs more than a happy-path demo. We plan around the real process and make room for control, failure handling, and improvement."
          />
          <div className="n8n-why-callout">
            <Sparkles aria-hidden="true" size={21} />
            <p>Full-stack capability means workflows can be supported by APIs, databases, and a focused interface when the process needs more than orchestration alone.</p>
          </div>
        </div>
        <div className="n8n-reasons-grid">
          {whyWorkWithUs.map((reason, index) => (
            <article key={reason.title}>
              <span className="n8n-card-number">{String(index + 1).padStart(2, "0")}</span>
              <AutomationIcon name={reason.icon} size={20} />
              <h3>{reason.title}</h3>
              <p>{reason.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function AutomationProcess() {
  return (
    <section className="n8n-section n8n-section--tinted" id="process" aria-labelledby="process-title">
      <div className="n8n-shell">
        <N8nSectionHeading
          id="process-title"
          eyebrow="Delivery process"
          title="A connected path from discovery to improvement."
          description="Each stage makes the next one clearer, with requirements, failure cases, approvals, and delivery expectations agreed before they become surprises."
        />
        <ol className="n8n-process-timeline">
          {processSteps.map((step, index) => (
            <li key={step.number}>
              <div className="n8n-process-timeline__rail" aria-hidden="true">
                <span>{step.number}</span>
                {index < processSteps.length - 1 && <i />}
              </div>
              <div>
                <small>Step {step.number}</small>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
