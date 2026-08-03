import { siteConfig } from "@/content/site";

export type AutomationIcon =
  | "brain"
  | "chart"
  | "check"
  | "clipboard"
  | "code"
  | "database"
  | "document"
  | "gauge"
  | "layers"
  | "message"
  | "network"
  | "plug"
  | "route"
  | "shield"
  | "timer"
  | "users"
  | "webhook"
  | "workflow";

export type N8nNavigationItem = {
  readonly label: string;
  readonly href: `#${string}`;
};

export type CapabilityItem = {
  readonly title: string;
  readonly description: string;
  readonly icon: AutomationIcon;
};

export type AutomationProblem = {
  readonly title: string;
  readonly manualState: string;
  readonly automatedOutcome: string;
  readonly icon: AutomationIcon;
};

export type AutomationService = {
  readonly id: string;
  readonly category: string;
  readonly title: string;
  readonly description: string;
  readonly capabilities: readonly string[];
  readonly icon: AutomationIcon;
};

export type DemoField = {
  readonly label: string;
  readonly value: string;
};

export type DemoStep = {
  readonly title: string;
  readonly output: string;
};

export type WorkflowDemoCase = {
  readonly id: string;
  readonly label: string;
  readonly category: string;
  readonly input: string;
  readonly steps: readonly DemoStep[];
  readonly extractedFields: readonly DemoField[];
  readonly missingDetails: readonly string[];
  readonly priority: string;
  readonly decision: string;
  readonly toolActivity: readonly string[];
  readonly finalResult: {
    readonly destination: string;
    readonly owner: string;
    readonly nextAction: string;
  };
  readonly response: string;
  readonly demoTime: string;
};

export type WorkflowSlide = {
  readonly id: string;
  readonly eyebrow: string;
  readonly title: string;
  readonly description: string;
  readonly steps: readonly string[];
  readonly integrations: readonly string[];
  readonly accent: "amber" | "blue" | "cyan" | "orange" | "red" | "violet";
  readonly icon: AutomationIcon;
};

export type ArchitectureLayer = {
  readonly label: string;
  readonly description: string;
  readonly icon: AutomationIcon;
};

export type IntegrationItem = {
  readonly name: string;
  readonly category: string;
  readonly mark: string;
};

export type ConceptProject = {
  readonly id: string;
  readonly label: "Concept solution";
  readonly title: string;
  readonly problem: string;
  readonly workflow: readonly string[];
  readonly outcome: string;
  readonly integrations: readonly string[];
  readonly technologies: readonly string[];
  readonly visual: "content" | "lead-agent" | "reporting" | "support";
  readonly image: string | null;
  readonly liveUrl: string | null;
  readonly caseStudyUrl: string | null;
};

export type TeamLink = {
  readonly label: string;
  readonly href: string;
};

export type AutomationTeamMember = {
  readonly name: string;
  readonly role: string;
  readonly bio: string;
  readonly skills: readonly string[];
  readonly image: string | null;
  readonly initials: string;
  readonly links: readonly TeamLink[];
};

export type ReasonItem = {
  readonly title: string;
  readonly description: string;
  readonly icon: AutomationIcon;
};

export type ProcessStep = {
  readonly number: string;
  readonly title: string;
  readonly description: string;
};

export type EngagementOption = {
  readonly title: string;
  readonly description: string;
  readonly deliverables: readonly string[];
  readonly cta: string;
};

export type ClientExpectation = {
  readonly id: string;
  readonly number: string;
  readonly title: string;
  readonly description: string;
  readonly proof: string;
  readonly icon: AutomationIcon;
};

export type FaqItem = {
  readonly id: string;
  readonly question: string;
  readonly answer: string;
};

export const n8nSeo = {
  title: "n8n Automation & AI Agent Development | Muhammad Bilal",
  description:
    "Professional n8n workflow automation, AI agents, API integrations, and custom business automation systems by Muhammad Bilal and Abdur Rehman.",
  canonical: `${siteConfig.url}/n8n`,
  keywords: [
    "n8n automation",
    "AI agent development",
    "workflow automation",
    "API integration",
    "business process automation",
    "Muhammad Bilal",
    "Abdur Rehman",
  ],
} as const;

export const n8nNavigation = [
  { label: "Services", href: "#services" },
  { label: "Solutions", href: "#solutions" },
  { label: "Workflows", href: "#workflows" },
  { label: "Team", href: "#team" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
] as const satisfies readonly N8nNavigationItem[];

export const heroCapabilities = [
  "Custom n8n workflows",
  "AI-powered automation",
  "API and webhook integrations",
  "Human approval controls",
] as const satisfies readonly string[];

export const capabilities = [
  {
    title: "Workflow architecture",
    description: "Triggers, conditions, actions, and failure paths mapped as one maintainable system.",
    icon: "workflow",
  },
  {
    title: "AI agent integration",
    description: "Structured AI steps for classification, extraction, decision support, and drafting.",
    icon: "brain",
  },
  {
    title: "Secure API connections",
    description: "Purpose-built connections that respect each system's access and data requirements.",
    icon: "shield",
  },
  {
    title: "Business process automation",
    description: "Recurring operational steps connected without removing important human decisions.",
    icon: "route",
  },
  {
    title: "Custom interfaces",
    description: "Focused dashboards and internal tools when a workflow needs a human-facing layer.",
    icon: "layers",
  },
  {
    title: "Ongoing optimization",
    description: "Prompts, rules, integrations, and workflow paths refined as requirements evolve.",
    icon: "gauge",
  },
] as const satisfies readonly CapabilityItem[];

export const automationProblems = [
  {
    title: "Data copied between applications",
    manualState: "Team members repeatedly move the same information between forms, spreadsheets, and business tools.",
    automatedOutcome: "Capture the data once, validate it, and route a consistent record to the required systems.",
    icon: "database",
  },
  {
    title: "Repetitive inquiry responses",
    manualState: "Common questions take time to read, classify, and answer individually.",
    automatedOutcome: "Classify each inquiry, prepare a grounded response, and escalate cases that need a person.",
    icon: "message",
  },
  {
    title: "Every lead followed up manually",
    manualState: "New leads depend on someone noticing, qualifying, assigning, and contacting them.",
    automatedOutcome: "Extract and validate lead data, calculate priority, prepare the CRM record, and notify sales.",
    icon: "users",
  },
  {
    title: "Recurring reports assembled by hand",
    manualState: "Information is collected from several sources and reformatted on the same schedule.",
    automatedOutcome: "Collect, normalize, summarize, and deliver the report through a scheduled workflow.",
    icon: "chart",
  },
  {
    title: "Spreadsheets and CRMs fall out of sync",
    manualState: "Updates in one system are not reflected in another until someone corrects them.",
    automatedOutcome: "Validate changes and synchronize the approved fields between connected records.",
    icon: "workflow",
  },
  {
    title: "Disconnected tools interrupt the process",
    manualState: "Work stops while people move context from one application to the next.",
    automatedOutcome: "Use APIs and webhooks to carry structured context across the full process.",
    icon: "network",
  },
  {
    title: "Documents processed one at a time",
    manualState: "Forms and files must be opened, read, classified, and routed manually.",
    automatedOutcome: "Extract the required fields, flag missing information, and send the document to the correct path.",
    icon: "document",
  },
  {
    title: "Support requests routed manually",
    manualState: "Every request must be reviewed before the right team member knows about it.",
    automatedOutcome: "Detect topic and urgency, prepare context, and route sensitive or complex cases for review.",
    icon: "route",
  },
] as const satisfies readonly AutomationProblem[];

export const automationServices = [
  {
    id: "custom-n8n-workflows",
    category: "Orchestration",
    title: "Custom n8n Workflows",
    description: "Custom workflows designed around a company's real operational process, tools, and approval points.",
    capabilities: ["Triggers and schedules", "Conditional routing", "Failure and retry paths"],
    icon: "workflow",
  },
  {
    id: "ai-agent-automation",
    category: "Applied AI",
    title: "AI Agent Automation",
    description: "AI-assisted flows that interpret input, use approved tools, and return structured outputs for the next step.",
    capabilities: ["Information extraction", "Classification and routing", "Structured output"],
    icon: "brain",
  },
  {
    id: "crm-lead-automation",
    category: "Sales operations",
    title: "CRM and Lead Automation",
    description: "Capture, validate, qualify, assign, and follow up with incoming leads through one connected process.",
    capabilities: ["Lead capture", "Qualification rules", "Assignment notifications"],
    icon: "users",
  },
  {
    id: "api-webhook-integration",
    category: "Integration",
    title: "API and Webhook Integration",
    description: "Connect websites, applications, databases, forms, and third-party services through defined interfaces.",
    capabilities: ["REST API connections", "Webhook triggers", "Payload validation"],
    icon: "webhook",
  },
  {
    id: "customer-support-automation",
    category: "Service operations",
    title: "Customer Support Automation",
    description: "Classify requests, prepare response context, update records, and escalate issues that require judgment.",
    capabilities: ["Intent detection", "Response preparation", "Human escalation"],
    icon: "message",
  },
  {
    id: "reporting-data-automation",
    category: "Data operations",
    title: "Reporting and Data Automation",
    description: "Collect information from multiple sources and prepare scheduled reports or dashboard-ready data.",
    capabilities: ["Scheduled collection", "Data transformation", "Report delivery"],
    icon: "chart",
  },
  {
    id: "document-processing",
    category: "Document operations",
    title: "Document Processing Automation",
    description: "Extract, classify, summarize, validate, and route information from documents and forms.",
    capabilities: ["Field extraction", "Missing-data checks", "Approval routing"],
    icon: "document",
  },
  {
    id: "full-automation-systems",
    category: "Full-stack delivery",
    title: "Full Automation Systems",
    description: "Complete systems combining workflows, AI logic, backend services, databases, and focused interfaces.",
    capabilities: ["System architecture", "Backend integration", "Custom dashboard"],
    icon: "layers",
  },
] as const satisfies readonly AutomationService[];

export const workflowDemoDisclosure =
  "Interactive workflow preview using predefined local data. No live AI model or external business system is being called.";

export const workflowDemoSteps = [
  "Inquiry received",
  "AI extracts information",
  "Missing details identified",
  "Lead priority calculated",
  "CRM record prepared",
  "Team member notified",
  "Response generated",
] as const satisfies readonly string[];

export const workflowDemoCases = [
  {
    id: "property-inquiry",
    label: "New property inquiry",
    category: "Lead qualification",
    input: "I need a three-bedroom apartment in Lahore, preferably near Gulberg, and my budget is around PKR 45 million. Can someone share suitable options?",
    steps: [
      { title: "Inquiry received", output: "Message normalized and assigned a demo reference." },
      { title: "AI extracts information", output: "Location, property type, rooms, and budget identified." },
      { title: "Missing details identified", output: "Move-in timeline and preferred contact time are not supplied." },
      { title: "Lead priority calculated", output: "High-intent property inquiry prepared for review." },
      { title: "CRM record prepared", output: "Structured lead fields and follow-up task assembled." },
      { title: "Team member notified", output: "A sales review notification is prepared." },
      { title: "Response generated", output: "A concise clarification message is ready for approval." },
    ],
    extractedFields: [
      { label: "Intent", value: "Property search" },
      { label: "Location", value: "Gulberg, Lahore" },
      { label: "Property", value: "3-bedroom apartment" },
      { label: "Budget", value: "Approx. PKR 45M" },
    ],
    missingDetails: ["Move-in timeline", "Preferred contact time"],
    priority: "High",
    decision: "Request the missing timeline, then route the lead for human review.",
    toolActivity: ["Validate required fields", "Prepare CRM payload", "Prepare team notification"],
    finalResult: {
      destination: "CRM review queue",
      owner: "Sales team",
      nextAction: "Confirm timeline",
    },
    response: "Thanks for sharing the location, apartment size, and budget. What move-in timeline and contact time would work best for you?",
    demoTime: "1.8s",
  },
  {
    id: "software-request",
    label: "Software service request",
    category: "Project discovery",
    input: "Our operations team needs an internal portal that collects branch reports, validates missing fields, and gives managers a weekly summary.",
    steps: [
      { title: "Inquiry received", output: "Service request normalized for the preview." },
      { title: "AI extracts information", output: "Users, inputs, validation need, and reporting goal identified." },
      { title: "Missing details identified", output: "Branch count, data sources, and access roles require discovery." },
      { title: "Lead priority calculated", output: "Qualified discovery request prepared." },
      { title: "CRM record prepared", output: "Scope summary and open questions assembled." },
      { title: "Team member notified", output: "Technical discovery notification is prepared." },
      { title: "Response generated", output: "A discovery-focused reply is ready for approval." },
    ],
    extractedFields: [
      { label: "Project", value: "Internal reporting portal" },
      { label: "Users", value: "Operations and managers" },
      { label: "Automation", value: "Validation and weekly summary" },
      { label: "Stage", value: "Requirements discovery" },
    ],
    missingDetails: ["Branch count", "Data sources", "Access roles"],
    priority: "Qualified",
    decision: "Prepare a discovery review before estimating the implementation.",
    toolActivity: ["Structure scope summary", "List missing requirements", "Prepare discovery task"],
    finalResult: {
      destination: "Project planning queue",
      owner: "Discovery team",
      nextAction: "Review requirements",
    },
    response: "The reporting and validation goal is clear. The next step is to map your current data sources, branch count, and manager access requirements.",
    demoTime: "2.1s",
  },
  {
    id: "support-complaint",
    label: "Customer support complaint",
    category: "Support triage",
    input: "I was charged twice for the same order and have not received a reply. Please help before the payment settles.",
    steps: [
      { title: "Inquiry received", output: "Support message normalized and tagged for review." },
      { title: "AI extracts information", output: "Billing issue, duplicate charge, and urgency indicators identified." },
      { title: "Missing details identified", output: "Order reference and charge timestamps are required." },
      { title: "Lead priority calculated", output: "Urgent billing escalation selected." },
      { title: "CRM record prepared", output: "Support record and evidence checklist assembled." },
      { title: "Team member notified", output: "A billing specialist alert is prepared." },
      { title: "Response generated", output: "An acknowledgement and information request are ready." },
    ],
    extractedFields: [
      { label: "Intent", value: "Billing complaint" },
      { label: "Issue", value: "Possible duplicate charge" },
      { label: "Urgency", value: "High" },
      { label: "Sentiment", value: "Frustrated" },
    ],
    missingDetails: ["Order reference", "Charge timestamps"],
    priority: "Urgent",
    decision: "Escalate to a person for account and payment verification.",
    toolActivity: ["Flag billing category", "Prepare evidence checklist", "Prepare escalation alert"],
    finalResult: {
      destination: "Billing support queue",
      owner: "Billing specialist",
      nextAction: "Verify order and charges",
    },
    response: "I'm sorry about the duplicate charge concern. Please share the order reference and charge timestamps so a billing specialist can verify the account safely.",
    demoTime: "1.5s",
  },
  {
    id: "appointment-request",
    label: "Appointment booking request",
    category: "Scheduling",
    input: "Could I book a consultation next Tuesday afternoon? I would prefer an online meeting and can adjust within a two-hour window.",
    steps: [
      { title: "Inquiry received", output: "Booking request normalized for the preview." },
      { title: "AI extracts information", output: "Day, time preference, meeting format, and flexibility identified." },
      { title: "Missing details identified", output: "Timezone, exact date, and contact email require confirmation." },
      { title: "Lead priority calculated", output: "Standard scheduling path selected." },
      { title: "CRM record prepared", output: "Appointment request and missing fields assembled." },
      { title: "Team member notified", output: "A scheduling review task is prepared." },
      { title: "Response generated", output: "A clarification request is ready to send." },
    ],
    extractedFields: [
      { label: "Intent", value: "Book consultation" },
      { label: "Preference", value: "Tuesday afternoon" },
      { label: "Format", value: "Online" },
      { label: "Flexibility", value: "Two-hour window" },
    ],
    missingDetails: ["Exact date", "Timezone", "Contact email"],
    priority: "Standard",
    decision: "Request the missing booking details before checking availability.",
    toolActivity: ["Normalize time preference", "Check required booking fields", "Prepare clarification"],
    finalResult: {
      destination: "Scheduling queue",
      owner: "Scheduling coordinator",
      nextAction: "Confirm date and timezone",
    },
    response: "Tuesday afternoon may work. Please confirm the exact date, your timezone, and the email to use before availability is checked.",
    demoTime: "1.3s",
  },
] as const satisfies readonly WorkflowDemoCase[];

export const workflowSlides = [
  {
    id: "lead-management",
    eyebrow: "Sales operations",
    title: "Lead Management Automation",
    description: "Move a new inquiry from capture to a structured sales follow-up without repeated data entry.",
    steps: ["Form submission", "AI qualification", "CRM entry", "Sales assignment", "Follow-up email"],
    integrations: ["Web form", "AI model", "CRM", "Email"],
    accent: "orange",
    icon: "users",
  },
  {
    id: "customer-support",
    eyebrow: "Service operations",
    title: "Customer Support Automation",
    description: "Organize incoming requests and preserve a human escalation path for complex or sensitive cases.",
    steps: ["Incoming request", "Intent detection", "Knowledge search", "Response preparation", "Human escalation"],
    integrations: ["Support inbox", "Knowledge source", "Ticketing system", "Team alert"],
    accent: "violet",
    icon: "message",
  },
  {
    id: "content-operations",
    eyebrow: "Content operations",
    title: "Content Operations Automation",
    description: "Coordinate research, drafting, review, and publishing while keeping approval with the content team.",
    steps: ["Topic input", "Research", "Draft preparation", "Human approval", "CMS publishing"],
    integrations: ["Research sources", "AI model", "Approval inbox", "CMS"],
    accent: "blue",
    icon: "document",
  },
  {
    id: "ecommerce-orders",
    eyebrow: "Commerce operations",
    title: "E-commerce Order Automation",
    description: "Connect order checks and customer updates through a visible sequence of operational steps.",
    steps: ["New order", "Payment verification", "Inventory check", "Customer update", "Delivery notification"],
    integrations: ["Storefront", "Payment data", "Inventory", "Email"],
    accent: "amber",
    icon: "check",
  },
  {
    id: "reporting",
    eyebrow: "Data operations",
    title: "Reporting Automation",
    description: "Collect recurring data, transform it consistently, and deliver a prepared report to the right destination.",
    steps: ["Scheduled trigger", "Data collection", "Data transformation", "Report generation", "Email or dashboard delivery"],
    integrations: ["Scheduler", "REST API", "Database", "Dashboard"],
    accent: "cyan",
    icon: "chart",
  },
  {
    id: "recruitment",
    eyebrow: "People operations",
    title: "Recruitment Automation",
    description: "Structure candidate information and support shortlisting without removing the hiring team's decision.",
    steps: ["Application received", "CV extraction", "Candidate classification", "Shortlisting", "Interview scheduling"],
    integrations: ["Application form", "Document parser", "Candidate records", "Calendar"],
    accent: "violet",
    icon: "timer",
  },
] as const satisfies readonly WorkflowSlide[];

export const architectureLayers = [
  { label: "Triggers", description: "Forms, schedules, messages, and events start the workflow.", icon: "gauge" },
  { label: "n8n orchestration", description: "Nodes coordinate data, conditions, retries, and each next action.", icon: "workflow" },
  { label: "AI model", description: "Approved AI steps extract, classify, summarize, or draft structured output.", icon: "brain" },
  { label: "Business rules", description: "Defined conditions keep operational decisions explicit and testable.", icon: "route" },
  { label: "APIs", description: "Documented interfaces carry validated data between connected systems.", icon: "plug" },
  { label: "Databases", description: "Required records are read or written according to the workflow scope.", icon: "database" },
  { label: "External tools", description: "Existing business applications stay part of the process where appropriate.", icon: "network" },
  { label: "Human approval", description: "Sensitive or high-impact steps pause for an authorized person.", icon: "clipboard" },
  { label: "Monitoring", description: "Execution states and failure paths make operational issues visible.", icon: "gauge" },
  { label: "Final actions", description: "The workflow sends, updates, saves, generates, or assigns the approved result.", icon: "check" },
] as const satisfies readonly ArchitectureLayer[];

export const triggerSources = [
  "Website forms",
  "Webhooks",
  "Emails",
  "Scheduled jobs",
  "CRMs",
  "Spreadsheets",
  "Databases",
  "Messaging platforms",
] as const satisfies readonly string[];

export const automationActions = [
  "Send email",
  "Update a record",
  "Create a report",
  "Notify the team",
  "Save to a database",
  "Generate a document",
  "Call an API",
  "Request human approval",
] as const satisfies readonly string[];

export const integrations = [
  { name: "n8n", category: "Workflow orchestration", mark: "n8n" },
  { name: "OpenAI API", category: "Model API", mark: "AI" },
  { name: "Gemini", category: "Model API", mark: "G" },
  { name: "Claude", category: "Model API", mark: "C" },
  { name: "Gmail", category: "Email", mark: "GM" },
  { name: "Google Sheets", category: "Spreadsheets", mark: "GS" },
  { name: "Google Drive", category: "File storage", mark: "GD" },
  { name: "Slack", category: "Team messaging", mark: "S" },
  { name: "Notion", category: "Knowledge and operations", mark: "N" },
  { name: "Airtable", category: "Structured records", mark: "A" },
  { name: "HubSpot", category: "CRM", mark: "H" },
  { name: "WordPress", category: "Content management", mark: "W" },
  { name: "PostgreSQL", category: "Relational database", mark: "PG" },
  { name: "MySQL", category: "Relational database", mark: "SQL" },
  { name: "MongoDB", category: "Document database", mark: "DB" },
  { name: "REST APIs", category: "System integration", mark: "{}" },
  { name: "Webhooks", category: "Event integration", mark: "<>" },
  { name: "FastAPI", category: "Backend API", mark: "API" },
  { name: "Next.js", category: "Full-stack interface", mark: "NX" },
  { name: "Docker", category: "Deployment", mark: "D" },
] as const satisfies readonly IntegrationItem[];

// Future project updates belong here. Replace the title, problem, workflow,
// outcome, image, technologies, live URL, and case-study URL only when matching
// project material exists. These entries must remain labelled as concepts until then.
export const conceptProjects = [
  {
    id: "real-estate-lead-agent",
    label: "Concept solution",
    title: "AI Real Estate Lead Agent",
    problem: "Property inquiries arrive with useful details mixed into unstructured messages and often require manual CRM entry.",
    workflow: ["Receive inquiry", "Extract requirements", "Identify missing details", "Score priority", "Prepare property search", "Prepare CRM record"],
    outcome: "A structured lead record, a clear list of missing details, and a response draft ready for team review.",
    integrations: ["Website form", "Property data source", "CRM", "Email"],
    technologies: ["n8n", "AI model", "REST API", "PostgreSQL"],
    visual: "lead-agent",
    image: null,
    liveUrl: null,
    caseStudyUrl: null,
  },
  {
    id: "customer-support-workflow",
    label: "Concept solution",
    title: "AI Customer Support Workflow",
    problem: "Incoming support messages need consistent classification, useful context, and a safe route to a person when the case is sensitive.",
    workflow: ["Receive request", "Detect intent and urgency", "Search approved information", "Prepare response", "Update support record", "Escalate when required"],
    outcome: "A categorized support record and a grounded response draft, with complex requests routed for human review.",
    integrations: ["Support inbox", "Knowledge source", "Ticketing system", "Team notifications"],
    technologies: ["n8n", "AI model", "REST API", "FastAPI"],
    visual: "support",
    image: null,
    liveUrl: null,
    caseStudyUrl: null,
  },
  {
    id: "content-publishing",
    label: "Concept solution",
    title: "Content Publishing Automation",
    problem: "Research, drafting, review, and publishing are distributed across tools and can lose context between handoffs.",
    workflow: ["Collect topic", "Prepare structured research", "Create draft", "Request human approval", "Apply approved changes", "Publish after confirmation"],
    outcome: "A visible content pipeline that preserves editorial approval before anything is published.",
    integrations: ["Content source", "Approval inbox", "CMS", "Notification channel"],
    technologies: ["n8n", "AI model", "Next.js", "REST API"],
    visual: "content",
    image: null,
    liveUrl: null,
    caseStudyUrl: null,
  },
  {
    id: "automated-reporting",
    label: "Concept solution",
    title: "Automated Reporting System",
    problem: "Recurring reports require the same data to be gathered, cleaned, combined, and reformatted on a schedule.",
    workflow: ["Run scheduled trigger", "Collect source data", "Validate records", "Transform and combine", "Generate report", "Deliver to the required team"],
    outcome: "A repeatable reporting flow with validation states and a prepared delivery record.",
    integrations: ["Databases", "REST APIs", "Email", "Dashboard"],
    technologies: ["n8n", "Python", "FastAPI", "PostgreSQL"],
    visual: "reporting",
    image: null,
    liveUrl: null,
    caseStudyUrl: null,
  },
] as const satisfies readonly ConceptProject[];

export const automationTeam = [
  {
    name: "Muhammad Bilal",
    role: "AI Automation Developer · Full-Stack Developer",
    bio: "Builds practical AI applications, n8n workflows, API integrations, and the full-stack systems needed to turn connected automation into a usable product.",
    skills: ["n8n workflow automation", "AI agent integration", "API integration", "Next.js", "TypeScript", "Python", "FastAPI", "Databases"],
    image: "/muhammad-bilal-portrait-graded.png",
    initials: "MB",
    links: [
      { label: "LinkedIn", href: siteConfig.linkedin },
      { label: "GitHub", href: siteConfig.github },
      { label: "Email", href: `mailto:${siteConfig.email}` },
    ],
  },
  // Update Abdur Rehman's exact role, bio, skills, image, and verified links here
  // when approved profile information is available. Do not infer qualifications.
  {
    name: "Abdur Rehman",
    role: "Automation Project Collaborator",
    bio: "Works alongside Muhammad Bilal on workflow planning, project execution, testing, client requirements, and delivery coordination.",
    skills: ["Workflow planning", "Client requirements", "Testing coordination", "Delivery coordination"],
    image: null,
    initials: "AR",
    links: [],
  },
] as const satisfies readonly AutomationTeamMember[];

export const teamWorkflow = [
  "Client requirements",
  "Workflow planning",
  "Technical development",
  "Testing",
  "Review",
  "Delivery",
] as const satisfies readonly string[];

export const reasonsToWorkWithUs = [
  {
    title: "Process-first planning",
    description: "The workflow starts with the actual business process, its tools, inputs, decisions, and expected output.",
    icon: "route",
  },
  {
    title: "Clear communication",
    description: "Requirements, progress, assumptions, and open decisions are kept visible during development.",
    icon: "message",
  },
  {
    title: "Human approval where it matters",
    description: "Important financial, customer, publishing, or operational actions can pause for an authorized person.",
    icon: "clipboard",
  },
  {
    title: "Maintainable workflow structure",
    description: "Steps are organized so future changes can be understood without rebuilding the entire flow.",
    icon: "workflow",
  },
  {
    title: "Failure paths considered",
    description: "Missing data, invalid input, duplicate records, and external service errors are included in planning and testing.",
    icon: "shield",
  },
  {
    title: "Reusable components",
    description: "Repeated logic can be separated into focused pieces where that makes the system easier to extend.",
    icon: "layers",
  },
  {
    title: "Practical documentation",
    description: "Important setup, workflow behavior, and operating notes can be documented according to project scope.",
    icon: "document",
  },
  {
    title: "Testing before delivery",
    description: "Expected inputs, incomplete data, failures, duplicates, permissions, and key edge cases are reviewed.",
    icon: "check",
  },
  {
    title: "Room for improvement",
    description: "Prompts, rules, integrations, and workflow paths can be refined after real usage reveals new needs.",
    icon: "gauge",
  },
  {
    title: "Full-stack capability",
    description: "The workflow can be supported by APIs, databases, and responsive interfaces when the scope requires them.",
    icon: "code",
  },
] as const satisfies readonly ReasonItem[];

export const processSteps = [
  {
    number: "01",
    title: "Discovery",
    description: "Understand the business process, current tools, manual steps, problems, and expected output.",
  },
  {
    number: "02",
    title: "Workflow planning",
    description: "Map triggers, conditions, data sources, actions, approvals, and failure cases.",
  },
  {
    number: "03",
    title: "Development",
    description: "Build the n8n workflows, AI logic, APIs, databases, and required interfaces included in scope.",
  },
  {
    number: "04",
    title: "Testing",
    description: "Test valid data, missing data, API failures, duplicate inputs, permissions, and relevant edge cases.",
  },
  {
    number: "05",
    title: "Delivery",
    description: "Deploy the workflow, provide the agreed documentation, and explain how the system works.",
  },
  {
    number: "06",
    title: "Improvement",
    description: "Refine prompts, rules, integrations, and workflow performance according to real usage and agreed support.",
  },
] as const satisfies readonly ProcessStep[];

export const clientDeliverables = [
  "n8n workflow files",
  "Workflow setup and configuration",
  "AI prompt and agent logic",
  "API integrations",
  "Webhook configuration",
  "Database integration",
  "Error handling",
  "Human approval steps",
  "Testing scenarios",
  "Basic technical documentation",
  "Deployment guidance",
  "Optional dashboard or interface",
  "Post-delivery improvement plan",
] as const satisfies readonly string[];

export const clientDeliverablesNote =
  "Final deliverables are agreed during discovery and depend on the project's scope, systems, access, and deployment requirements.";

export const engagementOptions = [
  {
    title: "Automation Consultation and Workflow Plan",
    description: "For businesses that want to identify practical automation opportunities before committing to implementation.",
    deliverables: ["Process review", "Workflow map", "Technical recommendation", "Automation roadmap"],
    cta: "Discuss the Workflow",
  },
  {
    title: "Custom n8n Automation",
    description: "For a defined workflow requiring triggers, conditions, integrations, approvals, and actions.",
    deliverables: ["Complete n8n workflow", "API integrations", "Testing", "Documentation", "Deployment support"],
    cta: "Request a Project Estimate",
  },
  {
    title: "AI Automation System",
    description: "For broader solutions involving AI logic, databases, APIs, interfaces, and multiple connected workflows.",
    deliverables: ["System architecture", "AI agent logic", "Multiple workflows", "Backend integration", "Dashboard or interface", "Deployment assistance"],
    cta: "Discuss the Workflow",
  },
] as const satisfies readonly EngagementOption[];

export const clientExpectations = [
  {
    id: "planning",
    number: "01",
    title: "Clear workflow planning",
    description: "Inputs, decisions, integrations, approvals, and failure paths are mapped before implementation moves too far.",
    proof: "A shared workflow map keeps scope and handoffs visible.",
    icon: "workflow",
  },
  {
    id: "communication",
    number: "02",
    title: "Transparent communication",
    description: "Progress, assumptions, access needs, and open decisions are explained in direct language.",
    proof: "Open questions and decisions are surfaced throughout delivery.",
    icon: "message",
  },
  {
    id: "testing",
    number: "03",
    title: "Structured testing",
    description: "Important paths are checked with valid, missing, duplicate, and failed inputs relevant to the scope.",
    proof: "Agreed test scenarios cover the workflow's important paths.",
    icon: "check",
  },
  {
    id: "documentation",
    number: "04",
    title: "Practical documentation",
    description: "The agreed handover covers important setup, workflow behavior, and operating notes.",
    proof: "Handover material focuses on the details needed to operate the system.",
    icon: "document",
  },
  {
    id: "maintainability",
    number: "05",
    title: "Maintainable implementation",
    description: "Workflow logic is organized to make diagnosis and future changes more approachable.",
    proof: "Focused steps and explicit routes keep the workflow understandable.",
    icon: "code",
  },
  {
    id: "improvement",
    number: "06",
    title: "Post-delivery improvement support",
    description: "Further refinement can be scoped after real usage reveals new data, rules, or integration needs.",
    proof: "Follow-up improvements are based on observed usage and agreed priorities.",
    icon: "gauge",
  },
] as const satisfies readonly ClientExpectation[];

export const faqs = [
  {
    id: "what-is-n8n",
    question: "What is n8n?",
    answer: "n8n is a workflow automation platform used to connect applications, APIs, data, and custom logic. A workflow can respond to an event, process information through defined steps, and perform approved actions in other systems.",
  },
  {
    id: "tasks-to-automate",
    question: "What kind of business tasks can be automated?",
    answer: "Common candidates include repeated data entry, lead routing, inquiry classification, scheduled reporting, document processing, record synchronization, notifications, and approval handoffs. Discovery is used to check whether automation is practical for the specific process.",
  },
  {
    id: "existing-tool-connections",
    question: "Can n8n connect with our existing tools?",
    answer: "Often, yes, when a tool provides a supported integration, API, webhook, database connection, or another reliable interface. We review authentication, permissions, rate limits, data formats, and technical constraints before confirming the connection.",
  },
  {
    id: "ai-agent-workflows",
    question: "Can you add AI agents to an n8n workflow?",
    answer: "AI-assisted steps can be added for tasks such as extraction, classification, summarization, drafting, and tool selection. The model, prompts, allowed tools, validation, and fallback behavior should match the risk and purpose of the workflow.",
  },
  {
    id: "human-approval",
    question: "Can the workflow require human approval?",
    answer: "Yes. A workflow can pause before sensitive actions and request review through an agreed channel. Approval steps are especially useful for payments, customer communication, publishing, record changes, and decisions that require judgment.",
  },
  {
    id: "private-business-data",
    question: "Can you work with private business data?",
    answer: "Private-data requirements must be reviewed before implementation. The suitable approach depends on hosting, access controls, connected providers, retention needs, and the client's policies. No architecture should be treated as absolutely secure without an appropriate security review.",
  },
  {
    id: "workflow-file-handover",
    question: "Will we receive the workflow file?",
    answer: "Workflow-file handover can be included in the agreed deliverables. The final handover depends on project scope, ownership terms, connected credentials, and any third-party licensing or access constraints.",
  },
  {
    id: "repair-existing-workflow",
    question: "Can you fix an existing broken workflow?",
    answer: "An existing workflow can be reviewed for failed nodes, credential or permission issues, changed payloads, API errors, missing fallback paths, and maintainability concerns. The repair scope is confirmed after the workflow and relevant logs are inspected.",
  },
  {
    id: "automation-dashboard",
    question: "Can you build a dashboard with the automation?",
    answer: "Yes, when the project needs a human-facing layer for inputs, approvals, status, or results. A dashboard or focused internal interface is scoped separately from the underlying workflow and integrations.",
  },
  {
    id: "post-delivery-improvements",
    question: "Can the workflow be improved after delivery?",
    answer: "Yes. Real usage may reveal better prompts, additional validation, new edge cases, or changed integration needs. Improvements can be planned as a follow-up phase or an agreed support arrangement.",
  },
  {
    id: "deployment-support",
    question: "Do you provide deployment support?",
    answer: "Deployment guidance or assistance can be included according to the selected hosting model, available access, and project scope. Infrastructure charges, third-party accounts, and ongoing operations are clarified before delivery.",
  },
  {
    id: "project-cost",
    question: "How is project cost determined?",
    answer: "Cost depends on workflow complexity, number of integrations, AI and data requirements, custom code, interface needs, testing depth, deployment, documentation, and support. An estimate follows a review of the current process and desired result.",
  },
] as const satisfies readonly FaqItem[];

const projectMailSubject = encodeURIComponent("n8n automation project details");
const estimateMailSubject = encodeURIComponent("n8n automation project estimate");

export const automationContact = {
  email: siteConfig.email,
  phone: siteConfig.phone,
  linkedin: siteConfig.linkedin,
  github: siteConfig.github,
  emailHref: `mailto:${siteConfig.email}`,
  projectDetailsHref: `mailto:${siteConfig.email}?subject=${projectMailSubject}`,
  estimateHref: `mailto:${siteConfig.email}?subject=${estimateMailSubject}`,
} as const;

// Stable page-facing aliases keep the landing-page composition concise while
// the descriptive source names above remain clear for future content editors.
export const capabilityStrip = capabilities;
export const businessProblems = automationProblems;
export const architectureTriggers = triggerSources;
export const architectureActions = automationActions;
export const automationProjects = conceptProjects;
export const teamMembers = automationTeam;
export const whyWorkWithUs = reasonsToWorkWithUs;
export const faqItems = faqs;
