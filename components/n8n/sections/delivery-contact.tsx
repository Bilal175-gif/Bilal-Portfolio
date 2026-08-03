import {
  ArrowRight,
  Check,
  CheckCircle2,
  FileCheck2,
  Mail,
  Send,
  ShieldCheck,
} from "lucide-react";

import { AutomationFaq } from "@/components/n8n/automation-faq";
import { ExpectationsCarousel } from "@/components/n8n/carousels";
import { N8nButtonLink, N8nEyebrow, N8nSectionHeading } from "@/components/n8n/n8n-ui";
import {
  automationContact,
  clientDeliverables,
  clientDeliverablesNote,
  clientExpectations,
  engagementOptions,
  faqItems,
} from "@/content/n8n";

export function ClientDelivery() {
  return (
    <section className="n8n-section" aria-labelledby="delivery-title">
      <div className="n8n-shell n8n-delivery-layout">
        <div>
          <N8nSectionHeading
            id="delivery-title"
            eyebrow="Client delivery"
            title="A practical handover, shaped by the project scope."
            description={clientDeliverablesNote}
          />
          <ul className="n8n-deliverables-list">
            {clientDeliverables.map((item) => (
              <li key={item}><Check aria-hidden="true" size={14} /> {item}</li>
            ))}
          </ul>
        </div>

        <div className="n8n-delivery-panel" aria-label="Example project handover panel">
          <div className="n8n-delivery-panel__top">
            <div>
              <span className="n8n-panel-kicker">Illustrative handover preview</span>
              <h3>Example automation delivery pack</h3>
            </div>
            <span className="n8n-success-chip"><CheckCircle2 aria-hidden="true" size={14} /> Example structure</span>
          </div>
          <div className="n8n-delivery-panel__files">
            {["Workflow files", "Integration map", "Test scenarios", "Operating notes"].map((file) => (
              <div key={file}>
                <span><FileCheck2 aria-hidden="true" size={17} /></span>
                <div><strong>{file}</strong><small>Defined per project scope</small></div>
                <Check aria-hidden="true" size={15} />
              </div>
            ))}
          </div>
          <div className="n8n-delivery-panel__approval">
            <ShieldCheck aria-hidden="true" size={20} />
            <div><strong>Scope-dependent delivery</strong><p>Credentials, infrastructure, licensing, and ongoing support are agreed for each project.</p></div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function EngagementOptions() {
  return (
    <section className="n8n-section n8n-section--tinted" aria-labelledby="engagement-title">
      <div className="n8n-shell">
        <N8nSectionHeading
          id="engagement-title"
          eyebrow="Ways to work together"
          title="Choose the level of support your workflow needs."
          description="Project estimates are tailored after reviewing your process, integrations, data, testing, deployment, and handover requirements."
        />
        <div className="n8n-engagement-grid">
          {engagementOptions.map((option, index) => (
            <article data-featured={index === 1 ? "true" : undefined} key={option.title}>
              <div className="n8n-engagement-card__top">
                <span>0{index + 1}</span>
                {index === 1 && <small>Defined workflow</small>}
              </div>
              <h3>{option.title}</h3>
              <p>{option.description}</p>
              <ul>
                {option.deliverables.map((item) => (
                  <li key={item}><Check aria-hidden="true" size={13} /> {item}</li>
                ))}
              </ul>
              <N8nButtonLink href={automationContact.estimateHref} variant={index === 1 ? "primary" : "secondary"}>
                {option.cta}
              </N8nButtonLink>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ClientExpectations() {
  return (
    <section className="n8n-section" aria-labelledby="expectations-title">
      <div className="n8n-shell">
        <N8nSectionHeading
          id="expectations-title"
          eyebrow="What clients can expect"
          title="The working standards behind every engagement."
          description="These service commitments describe our approach to planning, development, testing, and handover. They are not presented as client reviews."
        />
        <ExpectationsCarousel items={clientExpectations} />
      </div>
    </section>
  );
}

export function AutomationFaqSection() {
  return (
    <section className="n8n-section n8n-section--tinted" id="faq" aria-labelledby="faq-title">
      <div className="n8n-shell n8n-faq-layout">
        <div className="n8n-faq-intro">
          <N8nSectionHeading
            id="faq-title"
            eyebrow="Frequently asked questions"
            title="Clear answers before the workflow begins."
            description="Technical feasibility, access, security requirements, scope, and deployment are reviewed for the specific project rather than assumed."
          />
          <a className="n8n-faq-email" href={automationContact.projectDetailsHref}>
            <Mail aria-hidden="true" size={18} />
            <span><small>Still have a question?</small><strong>{automationContact.email}</strong></span>
            <ArrowRight aria-hidden="true" size={17} />
          </a>
        </div>
        <AutomationFaq items={faqItems} />
      </div>
    </section>
  );
}

export function AutomationContact() {
  return (
    <section className="n8n-final-cta" id="contact" aria-labelledby="contact-title">
      <div className="n8n-shell">
        <div className="n8n-final-cta__panel">
          <div className="n8n-final-cta__orb" aria-hidden="true"><Send size={34} /></div>
          <N8nEyebrow>Start with the process you have now</N8nEyebrow>
          <h2 id="contact-title">Have a repetitive process that should be automated?</h2>
          <p>
            Share your current workflow, the tools involved, and the result you want.
            Muhammad Bilal and Abdur Rehman will help turn it into a practical automation plan.
          </p>
          <div className="n8n-final-cta__actions">
            <N8nButtonLink href={automationContact.estimateHref}>Discuss your automation</N8nButtonLink>
            <N8nButtonLink href={automationContact.projectDetailsHref} variant="secondary">Send project details</N8nButtonLink>
          </div>
          <p className="n8n-final-cta__email">
            Prefer direct email? <a href={automationContact.emailHref}>{automationContact.email}</a>
          </p>
        </div>
      </div>
    </section>
  );
}
