export type NavigationItem = {
  readonly label: string;
  readonly href: string;
};

export type HomeHighlight = {
  readonly label: string;
  readonly value: string;
  readonly description: string;
};

export type Capability = {
  readonly key: "frontend" | "fullstack" | "usability";
  readonly title: string;
  readonly description: string;
  readonly items: readonly string[];
};

export type SkillGroup = {
  readonly id:
    | "languages"
    | "frontend"
    | "backend-and-apis"
    | "databases"
    | "developer-tools"
    | "product-workflows";
  readonly title: string;
  readonly description: string;
  readonly skills: readonly string[];
};

export type TimelineItem = {
  readonly id: "rollitech" | "independent-projects" | "education";
  readonly period: string;
  readonly title: string;
  readonly organisation: string;
  readonly location?: string;
  readonly summary: string;
  readonly highlights: readonly string[];
};

export type WorkingPrinciple = {
  readonly title: string;
  readonly description: string;
};

export type ProjectFlow = {
  readonly title: string;
  readonly description: string;
};

export type ProjectDetailPanel = {
  readonly type: string;
  readonly audience: string;
  readonly focus: string;
  readonly stack: readonly string[];
  readonly status: string;
  readonly liveUrl: string;
  readonly backHref: "/projects";
};

export type Project = {
  readonly slug: "launchmind-ai" | "vivid-horizon";
  readonly number: "01" | "02";
  readonly title: string;
  readonly type: string;
  readonly summary: string;
  readonly tags: readonly string[];
  readonly caseStudyHref:
    | "/projects/launchmind-ai"
    | "/projects/vivid-horizon";
  readonly overview: {
    readonly title: string;
    readonly paragraphs: readonly string[];
  };
  readonly contribution: readonly string[];
  readonly flows: readonly ProjectFlow[];
  readonly demonstrations: readonly string[];
  readonly detailPanel: ProjectDetailPanel;
};

export type ContactMethod = {
  readonly key: "email" | "phone" | "linkedin" | "github" | "cv";
  readonly label: "Email" | "Phone" | "LinkedIn" | "GitHub" | "CV";
  readonly value: string;
  readonly href: string;
  readonly external: boolean;
  readonly download?: boolean;
};

export type SiteConfig = {
  readonly name: string;
  readonly professionalTitle: string;
  readonly shortTitle: string;
  readonly url: string;
  readonly email: string;
  readonly phone: string;
  readonly linkedin: string;
  readonly github: string;
  readonly cvPath: string;
  readonly description: string;
  readonly profile: {
    readonly location: string;
    readonly summary: string;
    readonly availability: readonly string[];
    readonly education: {
      readonly degree: string;
      readonly university: string;
      readonly location: string;
      readonly graduation: string;
    };
  };
  readonly hero: {
    readonly eyebrow: string;
    readonly heading: string;
    readonly primaryCta: NavigationItem;
    readonly secondaryCta: NavigationItem;
    readonly codeProfile: {
      readonly name: string;
      readonly role: string;
      readonly focus: readonly string[];
      readonly stack: {
        readonly frontend: readonly string[];
        readonly backend: readonly string[];
        readonly data: readonly string[];
      };
      readonly availability: string;
    };
    readonly coreStack: readonly string[];
  };
  readonly contact: {
    readonly heading: string;
    readonly description: string;
    readonly methods: readonly ContactMethod[];
  };
};

const professionalSummary =
  "Computer Science undergraduate and frontend-focused full-stack developer with hands-on experience building responsive web applications, product interfaces, editorial dashboards, and REST API workflows. Strongest in React, Next.js, and TypeScript, with practical backend experience using Node.js, FastAPI, MongoDB, PostgreSQL, and Postman. Completed a web development internship at Rollitech, contributing to application development, testing, and maintenance in a collaborative team environment.";

export const siteConfig = {
  name: "Muhammad Bilal",
  professionalTitle:
    "Software Engineer | Frontend-focused full-stack developer",
  shortTitle: "Frontend-focused full-stack developer",
  url: "https://bilalgilani.me",
  email: "bilalshah2237463@gmail.com",
  phone: "+92 325 8166829",
  linkedin:
    "https://www.linkedin.com/in/m-bilal-shah-gillani-3a7980220",
  github: "https://github.com/Bilal175-gif",
  cvPath: "/Muhammad-Bilal-CV.pdf",
  description:
    "Muhammad Bilal is a frontend-focused full-stack developer in Lahore building responsive product interfaces with React, Next.js, and TypeScript.",
  profile: {
    location: "Lahore, Pakistan",
    summary: professionalSummary,
    availability: [
      "Open to internships and junior roles",
      "Available for remote collaboration",
    ],
    education: {
      degree: "Bachelor of Science in Computer Science (BSCS)",
      university: "Lahore Garrison University",
      location: "Lahore, Pakistan",
      graduation: "Expected 2029",
    },
  },
  hero: {
    eyebrow: "Frontend-focused full-stack developer",
    heading:
      "Building useful digital products with clean frontend engineering.",
    primaryCta: {
      label: "View projects",
      href: "/projects",
    },
    secondaryCta: {
      label: "Contact me",
      href: "/contact",
    },
    codeProfile: {
      name: "Muhammad Bilal",
      role: "Frontend-focused full-stack developer",
      focus: [
        "Product interfaces",
        "Responsive web applications",
        "REST API workflows",
      ],
      stack: {
        frontend: ["React", "Next.js", "TypeScript"],
        backend: ["Node.js", "FastAPI"],
        data: ["MongoDB", "PostgreSQL"],
      },
      availability: "Open to internships and junior roles",
    },
    coreStack: ["React", "TypeScript", "Next.js", "REST APIs"],
  },
  contact: {
    heading: "A direct route to the next conversation.",
    description:
      "For internships, junior software engineering roles, frontend opportunities, or practical collaboration, email and LinkedIn are the fastest ways to reach me.",
    methods: [
      {
        key: "email",
        label: "Email",
        value: "bilalshah2237463@gmail.com",
        href: "mailto:bilalshah2237463@gmail.com",
        external: false,
      },
      {
        key: "phone",
        label: "Phone",
        value: "+92 325 8166829",
        href: "tel:+923258166829",
        external: false,
      },
      {
        key: "linkedin",
        label: "LinkedIn",
        value: "Muhammad Bilal",
        href: "https://www.linkedin.com/in/m-bilal-shah-gillani-3a7980220",
        external: true,
      },
      {
        key: "github",
        label: "GitHub",
        value: "Bilal175-gif",
        href: "https://github.com/Bilal175-gif",
        external: true,
      },
      {
        key: "cv",
        label: "CV",
        value: "Muhammad Bilal CV",
        href: "/Muhammad-Bilal-CV.pdf",
        external: false,
        download: true,
      },
    ],
  },
} as const satisfies SiteConfig;

export const navigation = [
  { label: "Home", href: "/" },
  { label: "Projects", href: "/projects" },
  { label: "About", href: "/about" },
  { label: "Experience", href: "/experience" },
  { label: "Skills", href: "/skills" },
  { label: "Contact", href: "/contact" },
] as const satisfies readonly NavigationItem[];

export const homeHighlights = [
  {
    label: "Location",
    value: "Lahore, Pakistan",
    description: "Available for remote collaboration",
  },
  {
    label: "Experience",
    value: "March–May 2026",
    description: "Web Development Intern at Rollitech",
  },
  {
    label: "Frontend focus",
    value: "React · Next.js · TypeScript",
    description: "Supported by practical backend and API experience",
  },
  {
    label: "Education",
    value: "Expected 2029",
    description: "BSCS at Lahore Garrison University",
  },
] as const satisfies readonly HomeHighlight[];

export const capabilities = [
  {
    key: "frontend",
    title: "Frontend systems",
    description:
      "Responsive product interfaces built with React, Next.js, TypeScript, and component-based UI development.",
    items: [
      "Responsive web design",
      "Component-based UI",
      "API integration",
    ],
  },
  {
    key: "fullstack",
    title: "Practical full stack",
    description:
      "Hands-on backend and API work using Node.js, FastAPI, MongoDB, PostgreSQL, REST APIs, and Postman.",
    items: [
      "REST API workflows",
      "CRUD operations",
      "Request and response validation",
    ],
  },
  {
    key: "usability",
    title: "Recruiter usability",
    description:
      "Clear project context, visible contribution details, live links, and direct contact options make the work straightforward to review.",
    items: [
      "Focused project stories",
      "Explicit contributions",
      "Direct contact paths",
    ],
  },
] as const satisfies readonly Capability[];

export const skillGroups = [
  {
    id: "languages",
    title: "Languages",
    description:
      "Core languages used across interface, API, database, and application work.",
    skills: ["TypeScript", "JavaScript", "Python", "SQL", "HTML5", "CSS3"],
  },
  {
    id: "frontend",
    title: "Frontend",
    description:
      "Primary area of strength: responsive product interfaces and component-based web development.",
    skills: [
      "React",
      "Next.js",
      "Responsive web design",
      "Component-based UI development",
      "API integration",
    ],
  },
  {
    id: "backend-and-apis",
    title: "Backend and APIs",
    description:
      "Practical backend experience supporting connected product workflows.",
    skills: [
      "Node.js",
      "FastAPI",
      "REST APIs",
      "CRUD operations",
      "Request/response validation",
    ],
  },
  {
    id: "databases",
    title: "Databases",
    description:
      "Application data work across document and relational databases.",
    skills: ["MongoDB", "PostgreSQL"],
  },
  {
    id: "developer-tools",
    title: "Developer tools",
    description:
      "Tools used for version control, deployment, API testing, debugging, and browser-based development.",
    skills: [
      "Git",
      "GitHub",
      "Postman",
      "Vercel",
      "Browser developer tools",
      "Debugging",
    ],
  },
  {
    id: "product-workflows",
    title: "Product workflows",
    description:
      "Practical workflows used across product interfaces, publishing systems, testing, and quality assurance.",
    skills: [
      "Responsive product interfaces",
      "Startup-planning workflows",
      "Editorial content management",
      "Authentication pages",
      "SEO audits and analytics",
      "Testing and quality assurance",
    ],
  },
] as const satisfies readonly SkillGroup[];

export const timeline = [
  {
    id: "rollitech",
    period: "March 2026 – May 2026",
    title: "Web Development Intern",
    organisation: "Rollitech",
    summary:
      "Contributed to application development, testing, and maintenance while working in a collaborative development environment.",
    highlights: [
      "Assisted senior developers across web development projects.",
      "Contributed to development, testing, and maintenance of web applications.",
      "Supported debugging and quality-assurance activities.",
      "Worked in a collaborative development environment.",
    ],
  },
  {
    id: "independent-projects",
    period: "Independent project work",
    title: "Independent Project Development",
    organisation: "LaunchMind AI and Vivid Horizon",
    summary:
      "Built responsive product interfaces, connected API workflows, and editorial content-management experiences.",
    highlights: [
      "Built a responsive startup-planning workspace for LaunchMind AI.",
      "Developed a responsive technology publication and custom editorial dashboard for Vivid Horizon.",
      "Integrated API workflows and tested CRUD endpoints with Postman.",
    ],
  },
  {
    id: "education",
    period: "Expected 2029",
    title: "Bachelor of Science in Computer Science (BSCS)",
    organisation: "Lahore Garrison University",
    location: "Lahore, Pakistan",
    summary:
      "Computer Science undergraduate with an expected graduation in 2029.",
    highlights: [
      "Frontend-focused full-stack development",
      "Responsive web applications and product interfaces",
      "Practical backend, API, and database experience",
    ],
  },
] as const satisfies readonly TimelineItem[];

export const workingPrinciples = [
  {
    title: "Make the purpose clear",
    description:
      "Build interfaces that communicate their purpose quickly and remain straightforward to use.",
  },
  {
    title: "Design responsively",
    description:
      "Treat responsive behaviour as part of the product experience from the start.",
  },
  {
    title: "Use component-based structure",
    description:
      "Organise repeated interface patterns into focused, maintainable components.",
  },
  {
    title: "Connect the complete workflow",
    description:
      "Consider API integration, request and response behaviour, and data flow alongside the visible interface.",
  },
  {
    title: "Test and debug deliberately",
    description:
      "Use browser developer tools, Postman, debugging, and quality-assurance checks throughout development.",
  },
] as const satisfies readonly WorkingPrinciple[];

export const projects = [
  {
    slug: "launchmind-ai",
    number: "01",
    title: "LaunchMind AI",
    type: "AI startup planning platform",
    summary:
      "A product platform for founders, students, and early-stage teams that transforms raw ideas into structured startup plans.",
    tags: [
      "Next.js",
      "TypeScript",
      "Responsive UI",
      "API integration",
      "Postman",
    ],
    caseStudyHref: "/projects/launchmind-ai",
    overview: {
      title: "One product experience for early-stage planning.",
      paragraphs: [
        "LaunchMind AI brings startup-planning activities into a single responsive workspace for founders, students, and early-stage teams.",
        "The product turns raw ideas into structured plans through feasibility reports, competitor comparison, SWOT analysis, pitch-deck preparation, and MVP planning.",
      ],
    },
    contribution: [
      "Built responsive product interfaces and connected workflows that turn user inputs into structured startup-planning outputs.",
      "Implemented pricing, FAQ, blog, contact, and authentication pages.",
      "Integrated API workflows and tested CRUD endpoints with Postman.",
    ],
    flows: [
      {
        title: "Feasibility reports",
        description:
          "Transforms startup inputs into a structured feasibility workflow.",
      },
      {
        title: "Competitor comparison",
        description:
          "Organises competitor information within the connected planning workspace.",
      },
      {
        title: "SWOT analysis",
        description:
          "Supports structured strengths, weaknesses, opportunities, and threats planning.",
      },
      {
        title: "Pitch-deck preparation",
        description:
          "Supports preparation work for presenting an early-stage idea.",
      },
      {
        title: "MVP planning",
        description:
          "Brings minimum viable product planning into the same product experience.",
      },
    ],
    demonstrations: [
      "Responsive product-interface development",
      "Connected startup-planning workflows",
      "API integration and CRUD endpoint testing",
      "Supporting product, contact, and authentication pages",
    ],
    detailPanel: {
      type: "AI startup planning platform",
      audience: "Founders, students, and early-stage teams",
      focus: "Responsive workspace and connected startup-planning workflows",
      stack: [
        "Next.js",
        "TypeScript",
        "Responsive UI",
        "API workflows",
        "Postman",
      ],
      status: "Live product",
      liveUrl: "https://launchmind.app",
      backHref: "/projects",
    },
  },
  {
    slug: "vivid-horizon",
    number: "02",
    title: "Vivid Horizon",
    type: "Technology publishing platform",
    summary:
      "A technology publishing platform with a custom editorial management system for writing, publishing, organising, optimising, and analysing content.",
    tags: [
      "Editorial dashboard",
      "Content management",
      "SEO workflows",
      "Analytics",
      "REST APIs",
    ],
    caseStudyHref: "/projects/vivid-horizon",
    overview: {
      title: "A publication experience on both sides of the product.",
      paragraphs: [
        "Vivid Horizon includes a responsive public-facing technology publication and the internal workflows needed to operate it.",
        "The publication covers news, buying guides, deals, AI, software, tutorials, e-books, search, and affiliate content.",
      ],
    },
    contribution: [
      "Developed responsive publication interfaces and an editorial dashboard for drafting, creating, editing, publishing, duplicating, and managing articles.",
      "Built management workflows for categories, tags, media, and users.",
      "Added AI-assisted writing, SEO audits, analytics, newsletters, affiliate items, and API-driven content-management workflows.",
    ],
    flows: [
      {
        title: "Article publishing",
        description:
          "Supports drafting, creating, editing, publishing, and duplicating articles.",
      },
      {
        title: "Editorial organisation",
        description:
          "Provides management workflows for categories, tags, media, and users.",
      },
      {
        title: "AI-assisted writing and SEO",
        description:
          "Adds AI-assisted writing and SEO-audit workflows to the editorial experience.",
      },
      {
        title: "Analytics and newsletters",
        description:
          "Connects analytics and newsletter workflows to the content-management system.",
      },
      {
        title: "Affiliate content",
        description:
          "Supports affiliate items alongside the publication's wider content workflows.",
      },
    ],
    demonstrations: [
      "Responsive public-facing technology publication",
      "Custom editorial content-management dashboard",
      "Content, SEO, analytics, media, and user workflows",
      "API-driven content management",
    ],
    detailPanel: {
      type: "Technology publishing platform",
      audience: "Technology readers and editorial users",
      focus:
        "Content publishing, SEO, analytics, media, users, and affiliate workflows",
      stack: [
        "Editorial dashboard",
        "Content management",
        "SEO workflows",
        "Analytics",
        "REST APIs",
      ],
      status: "Live project",
      liveUrl: "https://vavidhorizontech.vercel.app",
      backHref: "/projects",
    },
  },
] as const satisfies readonly Project[];
