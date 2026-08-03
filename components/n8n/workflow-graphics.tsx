import {
  Activity,
  ArrowRight,
  Bell,
  Bot,
  BrainCircuit,
  CheckCircle2,
  Clock3,
  Database,
  GitBranch,
  Link,
  MessageSquare,
  Play,
  Send,
  ShieldCheck,
  UserCheck,
  Webhook,
  Workflow,
  Zap,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

export type WorkflowAccent =
  | "orange"
  | "amber"
  | "red"
  | "violet"
  | "blue"
  | "cyan"
  | "green";

type GraphicProps = {
  readonly className?: string;
};

export type HeroWorkflowGraphicProps = GraphicProps;

export type CompactWorkflowChainProps = GraphicProps & {
  readonly steps: readonly string[];
  readonly accent?: WorkflowAccent;
  readonly ariaLabel?: string;
};

export type AutomationArchitectureDiagramProps = GraphicProps & {
  readonly triggers: readonly string[];
  readonly actions: readonly string[];
};

type HeroWorkflowStep = {
  readonly id: string;
  readonly label: string;
  readonly detail: string;
  readonly icon: LucideIcon;
  readonly tone: WorkflowAccent;
};

const heroWorkflowSteps = [
  {
    id: "inquiry",
    label: "Customer inquiry",
    detail: "New request received",
    icon: MessageSquare,
    tone: "blue",
  },
  {
    id: "webhook",
    label: "Webhook",
    detail: "Payload captured",
    icon: Webhook,
    tone: "orange",
  },
  {
    id: "analysis",
    label: "AI analysis",
    detail: "Intent and fields extracted",
    icon: BrainCircuit,
    tone: "violet",
  },
  {
    id: "validation",
    label: "Data validation",
    detail: "Business rules passed",
    icon: ShieldCheck,
    tone: "amber",
  },
  {
    id: "crm",
    label: "CRM update",
    detail: "Contact record prepared",
    icon: Database,
    tone: "cyan",
  },
  {
    id: "notification",
    label: "Team notification",
    detail: "Owner alerted with context",
    icon: Bell,
    tone: "red",
  },
  {
    id: "response",
    label: "Automated response",
    detail: "Relevant reply delivered",
    icon: Send,
    tone: "green",
  },
] as const satisfies readonly HeroWorkflowStep[];

const compactStepIcons = [
  Zap,
  BrainCircuit,
  GitBranch,
  Database,
  UserCheck,
  Send,
] as const satisfies readonly LucideIcon[];

function classNames(baseClass: string, className?: string) {
  return className ? `${baseClass} ${className}` : baseClass;
}

export function HeroWorkflowGraphic({ className }: HeroWorkflowGraphicProps) {
  return (
    <figure className={classNames("n8n-hero-workflow", className)}>
      <div className="n8n-hero-workflow__window">
        <header className="n8n-hero-workflow__toolbar">
          <div className="n8n-hero-workflow__window-controls" aria-hidden="true">
            <span />
            <span />
            <span />
          </div>
          <div className="n8n-hero-workflow__title">
            <Workflow aria-hidden="true" size={15} strokeWidth={1.8} />
            <span>Client inquiry routing</span>
          </div>
          <span className="n8n-hero-workflow__environment">Preview</span>
        </header>

        <div className="n8n-hero-workflow__canvas">
          <div className="n8n-hero-workflow__run-status">
            <span className="n8n-status-pill" data-status="running">
              <Activity aria-hidden="true" size={13} />
              Demo execution
            </span>
            <span className="n8n-hero-workflow__run-id">Run #024</span>
          </div>

          <ol className="n8n-hero-workflow__steps">
            {heroWorkflowSteps.map((step, index) => {
              const Icon = step.icon;
              const isLastStep = index === heroWorkflowSteps.length - 1;

              return (
                <li
                  className="n8n-hero-workflow__step"
                  data-step={step.id}
                  data-tone={step.tone}
                  key={step.id}
                >
                  <div className="n8n-workflow-node n8n-workflow-node--hero">
                    <span className="n8n-workflow-node__icon">
                      <Icon aria-hidden="true" size={18} strokeWidth={1.7} />
                    </span>
                    <span className="n8n-workflow-node__copy">
                      <strong>{step.label}</strong>
                      <small>{step.detail}</small>
                    </span>
                    <CheckCircle2
                      className="n8n-workflow-node__status"
                      aria-hidden="true"
                      size={15}
                    />
                    <span className="visually-hidden">Completed</span>
                  </div>

                  {!isLastStep && (
                    <span className="n8n-flow-connector" aria-hidden="true">
                      <span className="n8n-flow-connector__line" />
                      <span className="n8n-flow-connector__packet" />
                      <ArrowRight size={13} />
                    </span>
                  )}
                </li>
              );
            })}
          </ol>

          <aside
            className="n8n-hero-workflow__execution"
            aria-label="Demonstration execution details"
          >
            <div className="n8n-hero-workflow__execution-heading">
              <span>
                <Play aria-hidden="true" size={13} fill="currentColor" />
                Execution complete
              </span>
              <CheckCircle2 aria-hidden="true" size={17} />
            </div>
            <dl className="n8n-hero-workflow__execution-details">
              <div>
                <dt>Steps</dt>
                <dd>7 / 7 completed</dd>
              </div>
              <div>
                <dt>Checks</dt>
                <dd>Validation passed</dd>
              </div>
              <div>
                <dt>Duration</dt>
                <dd>
                  <Clock3 aria-hidden="true" size={12} />
                  1.8s demo
                </dd>
              </div>
            </dl>
          </aside>
        </div>
      </div>

      <figcaption className="visually-hidden">
        An original interface preview showing a customer inquiry entering a
        webhook, passing through AI analysis and data validation, updating a CRM,
        notifying the team, and producing an automated response. The displayed
        execution is a demonstration.
      </figcaption>
    </figure>
  );
}

export function CompactWorkflowChain({
  steps,
  accent = "orange",
  ariaLabel = "Automation workflow steps",
  className,
}: CompactWorkflowChainProps) {
  return (
    <figure
      className={classNames("n8n-compact-workflow", className)}
      data-accent={accent}
    >
      <ol className="n8n-compact-workflow__list">
        {steps.map((step, index) => {
          const Icon = compactStepIcons[index % compactStepIcons.length];
          const isLastStep = index === steps.length - 1;

          return (
            <li className="n8n-compact-workflow__step" key={`${step}-${index}`}>
              <span className="n8n-compact-workflow__node">
                <span className="n8n-compact-workflow__icon">
                  <Icon aria-hidden="true" size={15} strokeWidth={1.7} />
                </span>
                <span>{step}</span>
              </span>
              {!isLastStep && (
                <span className="n8n-compact-workflow__connector" aria-hidden="true">
                  <span />
                  <ArrowRight size={12} />
                </span>
              )}
            </li>
          );
        })}
      </ol>
      <figcaption className="visually-hidden">{ariaLabel}</figcaption>
    </figure>
  );
}

export function AutomationArchitectureDiagram({
  triggers,
  actions,
  className,
}: AutomationArchitectureDiagramProps) {
  return (
    <figure className={classNames("n8n-architecture", className)}>
      <div className="n8n-architecture__layer n8n-architecture__layer--sources">
        <div className="n8n-architecture__layer-heading">
          <Zap aria-hidden="true" size={16} />
          <span>Triggers</span>
        </div>
        <ul className="n8n-architecture__items">
          {triggers.map((trigger, index) => (
            <li key={`${trigger}-${index}`}>
              <span aria-hidden="true" />
              {trigger}
            </li>
          ))}
        </ul>
      </div>

      <div className="n8n-architecture__bridge" aria-hidden="true">
        <span className="n8n-architecture__bridge-line" />
        <span className="n8n-architecture__bridge-packet" />
        <ArrowRight size={15} />
      </div>

      <div className="n8n-architecture__core">
        <div className="n8n-architecture__orchestrator">
          <span className="n8n-architecture__core-icon">
            <Workflow aria-hidden="true" size={24} strokeWidth={1.65} />
          </span>
          <span>
            <small>Orchestration layer</small>
            <strong>n8n workflow</strong>
          </span>
          <span className="n8n-status-pill" data-status="ready">
            Ready
          </span>
        </div>

        <div className="n8n-architecture__logic" aria-label="Workflow logic layers">
          <div data-tone="violet">
            <Bot aria-hidden="true" size={18} />
            <span>
              <strong>AI model</strong>
              <small>Understand and structure input</small>
            </span>
          </div>
          <div data-tone="amber">
            <GitBranch aria-hidden="true" size={18} />
            <span>
              <strong>Business rules</strong>
              <small>Conditions, routing, and fallbacks</small>
            </span>
          </div>
          <div data-tone="blue">
            <Link aria-hidden="true" size={18} />
            <span>
              <strong>Connected systems</strong>
              <small>APIs, databases, and external tools</small>
            </span>
          </div>
          <div data-tone="green">
            <UserCheck aria-hidden="true" size={18} />
            <span>
              <strong>Human approval</strong>
              <small>Review important decisions</small>
            </span>
          </div>
        </div>

        <div className="n8n-architecture__monitoring">
          <Activity aria-hidden="true" size={15} />
          <span>Execution monitoring, error handling, and audit context</span>
        </div>
      </div>

      <div className="n8n-architecture__bridge" aria-hidden="true">
        <span className="n8n-architecture__bridge-line" />
        <span className="n8n-architecture__bridge-packet" />
        <ArrowRight size={15} />
      </div>

      <div className="n8n-architecture__layer n8n-architecture__layer--actions">
        <div className="n8n-architecture__layer-heading">
          <Send aria-hidden="true" size={16} />
          <span>Final actions</span>
        </div>
        <ul className="n8n-architecture__items">
          {actions.map((action, index) => (
            <li key={`${action}-${index}`}>
              <CheckCircle2 aria-hidden="true" size={13} />
              {action}
            </li>
          ))}
        </ul>
      </div>

      <figcaption className="visually-hidden">
        Business triggers enter an n8n orchestration layer, where AI processing,
        business rules, connected systems, human approval, monitoring, and error
        handling coordinate the requested final actions.
      </figcaption>
    </figure>
  );
}
