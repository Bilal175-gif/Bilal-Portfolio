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
  readonly key: "genai" | "retrieval" | "product";
  readonly title: string;
  readonly description: string;
  readonly items: readonly string[];
};

export type SkillGroup = {
  readonly id:
    | "genai-foundations"
    | "llm-models"
    | "orchestration"
    | "retrieval"
    | "ai-application"
    | "supporting-stack";
  readonly title: string;
  readonly description: string;
  readonly skills: readonly string[];
};

export type TimelineItem = {
  readonly id:
    | "genai-learning"
    | "rollitech"
    | "independent-projects"
    | "education";
  readonly period: string;
  readonly title: string;
  readonly organisation: string;
  readonly location?: string;
  readonly summary: string;
  readonly highlights: readonly string[];
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
        readonly models: readonly string[];
        readonly orchestration: readonly string[];
        readonly retrieval: readonly string[];
      };
      readonly availability: string;
    };
    readonly coreStack: readonly string[];
  };
  readonly learning: {
    readonly title: string;
    readonly provider: string;
    readonly url: string;
    readonly summary: string;
    readonly topics: readonly string[];
  };
  readonly contact: {
    readonly heading: string;
    readonly description: string;
    readonly methods: readonly ContactMethod[];
  };
};

const professionalSummary =
  "Computer Science undergraduate and Generative AI Engineer focused on building practical LLM-powered applications and dependable product experiences. My current learning track covers OpenAI and Gemini APIs, LangChain, Hugging Face, vector databases, Pinecone, ChromaDB, Llama 2, retrieval workflows, and AI application deployment. I bring an existing full-stack foundation across Python, FastAPI, React, Next.js, TypeScript, REST APIs, MongoDB, and PostgreSQL.";

export const siteConfig = {
  name: "Muhammad Bilal",
  professionalTitle: "Generative AI Engineer | AI application developer",
  shortTitle: "Generative AI Engineer",
  url: "https://bilalgilani.me",
  email: "bilalshah2237463@gmail.com",
  phone: "+92 325 8166829",
  linkedin:
    "https://www.linkedin.com/in/m-bilal-shah-gillani-3a7980220",
  github: "https://github.com/Bilal175-gif",
  cvPath: "/Muhammad-Bilal-CV.pdf",
  description:
    "Muhammad Bilal is a Generative AI Engineer in Lahore focused on practical LLM applications, LangChain workflows, vector search, and full-stack AI products.",
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
    eyebrow: "Generative AI Engineer",
    heading:
      "Engineering practical AI experiences with LLMs, retrieval, and reliable product foundations.",
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
      role: "Generative AI Engineer",
      focus: [
        "LLM-powered applications",
        "Retrieval and vector search",
        "AI product engineering",
      ],
      stack: {
        models: ["OpenAI", "Gemini", "Llama 2"],
        orchestration: ["LangChain", "Hugging Face"],
        retrieval: ["Pinecone", "ChromaDB"],
      },
      availability: "Open to internships and junior roles",
    },
    coreStack: ["Python", "Gemini", "LangChain", "Hugging Face"],
  },
  learning: {
    title:
      "Generative AI Full Course — Gemini Pro, OpenAI, Llama, LangChain, Pinecone, Vector Databases & More",
    provider: "freeCodeCamp.org",
    url: "https://www.youtube.com/watch?v=mEsleV16qdo",
    summary:
      "A structured learning path covering Generative AI foundations, LLM APIs, orchestration, memory, vector search, end-to-end projects, and deployment.",
    topics: [
      "OpenAI API",
      "LangChain",
      "Hugging Face API",
      "LangChain memory",
      "LLM project deployment",
      "Vector databases",
      "Pinecone",
      "ChromaDB",
      "Meta Llama 2",
      "Gemini Pro",
    ],
  },
  contact: {
    heading: "A direct route to the next conversation.",
    description:
      "For Generative AI internships, junior AI engineering roles, LLM application work, or practical collaboration, email and LinkedIn are the fastest ways to reach me.",
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
    label: "Current focus",
    value: "Generative AI",
    description: "LLM applications, orchestration, and retrieval",
  },
  {
    label: "AI learning stack",
    value: "OpenAI · Gemini · LangChain",
    description: "Supported by Python, FastAPI, and full-stack engineering",
  },
  {
    label: "Education",
    value: "Expected 2029",
    description: "BSCS at Lahore Garrison University",
  },
] as const satisfies readonly HomeHighlight[];

export const capabilities = [
  {
    key: "genai",
    title: "LLM application engineering",
    description:
      "Building an applied understanding of LLM APIs, prompt-driven workflows, model integration, memory, and end-to-end Generative AI applications.",
    items: [
      "OpenAI and Gemini APIs",
      "LangChain workflows",
      "Model integration",
    ],
  },
  {
    key: "retrieval",
    title: "Retrieval and vector search",
    description:
      "Learning how embeddings, retrieval workflows, and vector databases connect private knowledge to useful LLM responses.",
    items: [
      "Vector databases",
      "Pinecone and ChromaDB",
      "Retrieval workflows",
    ],
  },
  {
    key: "product",
    title: "Full-stack AI products",
    description:
      "Combining AI services with Python, FastAPI, APIs, databases, and responsive interfaces to build complete product experiences.",
    items: [
      "Python and FastAPI",
      "REST API integration",
      "React and Next.js",
    ],
  },
] as const satisfies readonly Capability[];

export const skillGroups = [
  {
    id: "genai-foundations",
    title: "Generative AI foundations",
    description:
      "Concepts currently being developed through structured course-led learning and practical exploration.",
    skills: [
      "Generative models",
      "Large Language Models",
      "Prompt design",
      "Tokens and context",
      "LLM application patterns",
    ],
  },
  {
    id: "llm-models",
    title: "LLM APIs and models",
    description:
      "Model providers and APIs covered across the linked Generative AI learning track.",
    skills: [
      "OpenAI API",
      "Gemini Pro",
      "Meta Llama 2",
      "Hugging Face API",
      "Model integration",
    ],
  },
  {
    id: "orchestration",
    title: "Orchestration and memory",
    description:
      "Structuring multi-step LLM application behavior with reusable chains, prompts, and conversational context.",
    skills: [
      "LangChain",
      "Prompt templates",
      "Chains",
      "Conversation memory",
      "LLM workflows",
    ],
  },
  {
    id: "retrieval",
    title: "Retrieval and vector databases",
    description:
      "Course-led understanding of embeddings, document retrieval, semantic search, and vector-backed AI applications.",
    skills: [
      "Embeddings",
      "Vector search",
      "Vector databases",
      "Pinecone",
      "ChromaDB",
      "Retrieval workflows",
    ],
  },
  {
    id: "ai-application",
    title: "AI application engineering",
    description:
      "The application layer used to connect models, APIs, data, and deployable product workflows.",
    skills: [
      "Python",
      "FastAPI",
      "REST APIs",
      "LLM project deployment",
      "API testing",
      "Debugging",
    ],
  },
  {
    id: "supporting-stack",
    title: "Supporting full-stack foundation",
    description:
      "Existing web engineering skills that support usable, connected, and deployable AI product experiences.",
    skills: [
      "React",
      "Next.js",
      "TypeScript",
      "Node.js",
      "MongoDB",
      "PostgreSQL",
      "Git and GitHub",
      "Vercel",
    ],
  },
] as const satisfies readonly SkillGroup[];

export const timeline = [
  {
    id: "genai-learning",
    period: "Current learning track",
    title: "Generative AI Engineering",
    organisation: "freeCodeCamp.org structured course",
    summary:
      "Developing an applied understanding of LLM APIs, LangChain workflows, model integration, vector databases, retrieval, end-to-end projects, and deployment.",
    highlights: [
      "Studying OpenAI API, Gemini Pro, Meta Llama 2, and Hugging Face API integration.",
      "Following practical LangChain modules covering chains, prompts, and conversational memory.",
      "Learning vector database workflows with Pinecone and ChromaDB.",
      "Connecting Generative AI concepts to Python, FastAPI, APIs, and deployable product experiences.",
    ],
  },
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
      "Generative AI and LLM application engineering",
      "Full-stack web applications and product interfaces",
      "Practical backend, API, and database foundations",
    ],
  },
] as const satisfies readonly TimelineItem[];

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
