import { ShieldCheck } from "lucide-react";

import { AutomationIcon } from "@/components/n8n/automation-icon";
import { WorkflowCarousel } from "@/components/n8n/carousels";
import { N8nSectionHeading } from "@/components/n8n/n8n-ui";
import { WorkflowDemo } from "@/components/n8n/workflow-demo";
import { AutomationArchitectureDiagram } from "@/components/n8n/workflow-graphics";
import {
  architectureActions,
  architectureLayers,
  architectureTriggers,
  integrations,
  workflowDemoCases,
  workflowDemoSteps,
  workflowSlides,
} from "@/content/n8n";

export function InteractiveWorkflowPreview() {
  return (
    <section className="n8n-section" id="workflows" aria-labelledby="demo-title">
      <div className="n8n-shell">
        <N8nSectionHeading
          id="demo-title"
          eyebrow="Interactive workflow preview"
          title="See how an inquiry becomes a structured next action."
          description="Choose a sample request and replay a predefined AI lead-qualification flow. The preview demonstrates processing states and outputs locally; it does not call a live model."
        />
        <WorkflowDemo cases={workflowDemoCases} steps={workflowDemoSteps} />
      </div>
    </section>
  );
}

export function WorkflowLibrary() {
  return (
    <section className="n8n-section n8n-section--tinted" aria-labelledby="workflow-library-title">
      <div className="n8n-shell">
        <N8nSectionHeading
          id="workflow-library-title"
          eyebrow="Workflow library"
          title="Connected automation patterns for everyday operations."
          description="Every example is adapted to the client's systems, rules, and approval requirements before it becomes an implementation."
        />
        <WorkflowCarousel slides={workflowSlides} />
      </div>
    </section>
  );
}

export function AutomationArchitecture() {
  return (
    <section className="n8n-section" aria-labelledby="architecture-title">
      <div className="n8n-shell">
        <div className="n8n-architecture-intro">
          <N8nSectionHeading
            id="architecture-title"
            eyebrow="Automation architecture"
            title="One orchestration layer, with the right controls around it."
            description="We do not force every business into the same workflow. Each automation is designed according to the company's process, tools, data, and approval requirements."
          />
          <div className="n8n-architecture-note">
            <ShieldCheck aria-hidden="true" size={21} />
            <p>AI output can be validated by business rules and held for human review before a sensitive action continues.</p>
          </div>
        </div>

        <AutomationArchitectureDiagram triggers={architectureTriggers} actions={architectureActions} />

        <div className="n8n-architecture-legend" aria-label="Automation architecture layers">
          {architectureLayers.map((layer) => (
            <article key={layer.label}>
              <AutomationIcon name={layer.icon} size={17} />
              <div>
                <h3>{layer.label}</h3>
                <p>{layer.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function IntegrationsGrid() {
  return (
    <section className="n8n-section n8n-section--tinted" aria-labelledby="integrations-title">
      <div className="n8n-shell">
        <div className="n8n-section-heading-row">
          <N8nSectionHeading
            id="integrations-title"
            eyebrow="Tools we can integrate"
            title="Connect the systems already involved in your work."
            description="Integration feasibility depends on each tool's API, permissions, authentication, and plan. Tool names indicate possible connections—not official partnerships."
          />
          <span className="n8n-tool-count">{integrations.length} integration categories</span>
        </div>
        <div className="n8n-integrations-grid">
          {integrations.map((integration) => (
            <article key={integration.name}>
              <span className="n8n-integration-mark" aria-hidden="true">{integration.mark}</span>
              <div>
                <h3>{integration.name}</h3>
                <p>{integration.category}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
