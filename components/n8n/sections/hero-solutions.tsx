import { ArrowDownRight, Check, CheckCircle2 } from "lucide-react";

import { AutomationIcon } from "@/components/n8n/automation-icon";
import { N8nButtonLink, N8nEyebrow, N8nSectionHeading } from "@/components/n8n/n8n-ui";
import { HeroWorkflowGraphic } from "@/components/n8n/workflow-graphics";
import {
  automationServices,
  businessProblems,
  heroCapabilities,
} from "@/content/n8n";

export function AutomationHero() {
  return (
    <section
      className="n8n-hero"
      id="n8n-content"
      tabIndex={-1}
      aria-labelledby="n8n-hero-title"
    >
      <div className="n8n-shell n8n-hero__grid">
        <div className="n8n-hero__copy">
          <N8nEyebrow>n8n automation · AI agents · system integration</N8nEyebrow>
          <h1 id="n8n-hero-title">
            We build intelligent workflows that keep your business <em>moving.</em>
          </h1>
          <p className="n8n-hero__summary">
            Muhammad Bilal and Abdur Rehman build n8n automations, AI agents, API
            integrations, and internal systems that connect tools and reduce repetitive work.
          </p>
          <div className="n8n-hero__actions">
            <N8nButtonLink href="#contact">Discuss your workflow</N8nButtonLink>
            <N8nButtonLink href="#solutions" variant="secondary">
              Explore our solutions
            </N8nButtonLink>
          </div>
          <ul className="n8n-hero__capabilities" aria-label="Core automation capabilities">
            {heroCapabilities.map((item) => (
              <li key={item}>
                <CheckCircle2 aria-hidden="true" size={14} /> {item}
              </li>
            ))}
          </ul>
        </div>

        <HeroWorkflowGraphic />
      </div>
    </section>
  );
}

export function BusinessProblems() {
  return (
    <section className="n8n-section" id="solutions" aria-labelledby="problems-title">
      <div className="n8n-shell">
        <N8nSectionHeading
          id="problems-title"
          eyebrow="Problems worth automating"
          title="Your team should not spend hours on work that software can handle."
          description="We turn recurring handoffs, data movement, routing, and reporting into clear workflows—while keeping people involved where judgment matters."
        />

        <div className="n8n-problem-grid">
          {businessProblems.map((problem, index) => (
            <article className="n8n-problem-card" key={problem.title}>
              <div className="n8n-problem-card__top">
                <span className="n8n-card-icon">
                  <AutomationIcon name={problem.icon} />
                </span>
                <span className="n8n-card-number">{String(index + 1).padStart(2, "0")}</span>
              </div>
              <h3>{problem.title}</h3>
              <p>{problem.manualState}</p>
              <div className="n8n-problem-card__outcome">
                <ArrowDownRight aria-hidden="true" size={17} />
                <div>
                  <small>Automated outcome</small>
                  <p>{problem.automatedOutcome}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function AutomationServices() {
  return (
    <section className="n8n-section n8n-section--tinted" id="services" aria-labelledby="services-title">
      <div className="n8n-shell">
        <N8nSectionHeading
          id="services-title"
          eyebrow="Automation services"
          title="Practical systems built around the way your business works."
          description="From one focused workflow to a connected automation system, each engagement is shaped around real inputs, tools, approvals, and expected outcomes."
        />

        <div className="n8n-services-grid">
          {automationServices.map((service) => (
            <article className="n8n-service-card" key={service.id}>
              <div className="n8n-service-card__header">
                <span className="n8n-card-icon n8n-card-icon--warm">
                  <AutomationIcon name={service.icon} size={24} />
                </span>
                <span className="n8n-service-card__category">{service.category}</span>
              </div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <ul>
                {service.capabilities.map((capability) => (
                  <li key={capability}>
                    <Check aria-hidden="true" size={13} /> {capability}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
