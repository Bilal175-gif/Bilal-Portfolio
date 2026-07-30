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

export type Skill = {
  readonly id: string;
  readonly name: string;
  readonly category: string;
  readonly status: string;
  readonly logo: string;
  readonly color: string;
  readonly glow: string;
  readonly summary: string;
  readonly description: string;
  readonly application: string;
  readonly topics: readonly string[];
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

export const skills = [
  {
    id: "python",
    name: "Python",
    category: "AI engineering",
    status: "Primary AI language",
    logo: "/tech/python.svg",
    color: "#4B8BBE",
    glow: "rgba(75, 139, 190, 0.42)",
    summary: "The core language behind my AI application and API work.",
    description:
      "Python provides the practical foundation for connecting model APIs, processing data, building retrieval workflows, and serving AI features through backend services.",
    application:
      "I use it as the bridge between LLM services, application logic, databases, and FastAPI endpoints.",
    topics: ["API integration", "Data handling", "AI workflows", "Backend logic"],
  },
  {
    id: "openai",
    name: "OpenAI API",
    category: "Model APIs",
    status: "Applied learning",
    logo:
      "https://cdn.jsdelivr.net/npm/@lobehub/icons-static-svg@latest/icons/openai.svg",
    color: "#10A37F",
    glow: "rgba(16, 163, 127, 0.42)",
    summary: "Model access for conversational and structured AI features.",
    description:
      "The OpenAI API exposes language models through programmable endpoints for chat, content generation, structured outputs, and tool-assisted product workflows.",
    application:
      "My focus is reliable prompt design, clean request handling, response validation, and integrating generated output into usable interfaces.",
    topics: ["Chat completions", "Prompt design", "Structured output", "API safety"],
  },
  {
    id: "gemini",
    name: "Gemini",
    category: "Multimodal AI",
    status: "Applied learning",
    logo: "/tech/gemini.svg",
    color: "#A78BFA",
    glow: "rgba(167, 139, 250, 0.46)",
    summary: "Google’s model family for text and multimodal AI workflows.",
    description:
      "Gemini supports language and multimodal applications through Google’s model APIs, making it useful for assistants, analysis, and content-aware product features.",
    application:
      "I am exploring Gemini integrations with a focus on clear prompts, response handling, and practical full-stack AI experiences.",
    topics: ["Gemini API", "Multimodal input", "Content generation", "Integration"],
  },
  {
    id: "langchain",
    name: "LangChain",
    category: "AI orchestration",
    status: "Current focus",
    logo: "/tech/langchain.svg",
    color: "#5FD4C7",
    glow: "rgba(95, 212, 199, 0.46)",
    summary: "A framework for composing model, prompt, memory, and data flows.",
    description:
      "LangChain helps organise multi-step AI application behaviour by connecting prompts, models, tools, memory, retrievers, and reusable chains.",
    application:
      "I use its concepts to structure maintainable LLM workflows instead of placing all model logic inside a single request.",
    topics: ["Chains", "Prompt templates", "Memory", "Retrieval"],
  },
  {
    id: "hugging-face",
    name: "Hugging Face",
    category: "Open models",
    status: "Exploring ecosystem",
    logo: "/tech/hugging-face.svg",
    color: "#FFD21E",
    glow: "rgba(255, 210, 30, 0.42)",
    summary: "An ecosystem for discovering and working with open AI models.",
    description:
      "Hugging Face brings together model hosting, datasets, inference APIs, and open-source tooling for experimenting with a broad range of machine-learning models.",
    application:
      "My focus is model discovery, hosted inference, and understanding how open models fit into application workflows.",
    topics: ["Model Hub", "Inference APIs", "Transformers", "Open-source models"],
  },
  {
    id: "llama",
    name: "Llama",
    category: "Open LLMs",
    status: "Model exploration",
    logo: "https://cdn.simpleicons.org/meta/0467DF",
    color: "#4F8CFF",
    glow: "rgba(79, 140, 255, 0.44)",
    summary: "Meta’s open model family for adaptable LLM applications.",
    description:
      "Llama models offer an open-weight route for building and studying language-model applications with greater control over deployment and customisation.",
    application:
      "I am learning where open models are a strong fit compared with hosted APIs, including privacy, control, and deployment trade-offs.",
    topics: ["Open models", "Inference", "Model selection", "Deployment trade-offs"],
  },
  {
    id: "fastapi",
    name: "FastAPI",
    category: "Backend APIs",
    status: "Practical foundation",
    logo: "https://cdn.simpleicons.org/fastapi/009688",
    color: "#00C7A5",
    glow: "rgba(0, 199, 165, 0.42)",
    summary: "Fast Python APIs for connecting AI logic to product interfaces.",
    description:
      "FastAPI provides typed request handling, validation, automatic API documentation, and an efficient way to expose Python services to web applications.",
    application:
      "I use it for REST endpoints, CRUD workflows, request and response validation, and the backend layer around AI services.",
    topics: ["REST APIs", "Validation", "CRUD", "Async endpoints"],
  },
  {
    id: "react",
    name: "React",
    category: "Frontend",
    status: "Core strength",
    logo: "https://cdn.simpleicons.org/react/61DAFB",
    color: "#61DAFB",
    glow: "rgba(97, 218, 251, 0.42)",
    summary: "Component-based interfaces for responsive product experiences.",
    description:
      "React makes complex interfaces easier to organise through reusable components, state-driven rendering, and predictable interaction patterns.",
    application:
      "It is a primary tool in my product work for dashboards, forms, data-rich interfaces, and frontend API integration.",
    topics: ["Components", "State", "Responsive UI", "API integration"],
  },
  {
    id: "nextjs",
    name: "Next.js",
    category: "Full-stack React",
    status: "Core strength",
    logo: "https://cdn.simpleicons.org/nextdotjs/FFFFFF",
    color: "#F7F8FF",
    glow: "rgba(247, 248, 255, 0.3)",
    summary: "A React framework for production-grade web applications.",
    description:
      "Next.js combines routing, rendering, metadata, server capabilities, and performance tooling in one framework for building complete web products.",
    application:
      "I use it for responsive applications, content-driven pages, project dashboards, SEO metadata, and deployment-ready frontend systems.",
    topics: ["App Router", "Server rendering", "Metadata", "Performance"],
  },
  {
    id: "typescript",
    name: "TypeScript",
    category: "Language",
    status: "Core strength",
    logo: "https://cdn.simpleicons.org/typescript/3178C6",
    color: "#5294E2",
    glow: "rgba(82, 148, 226, 0.42)",
    summary: "Typed JavaScript for safer application and API development.",
    description:
      "TypeScript adds static types to JavaScript, improving editor support and making component contracts, data models, and API responses easier to maintain.",
    application:
      "I use it across React and Next.js projects to reduce integration mistakes and keep growing codebases understandable.",
    topics: ["Type safety", "Interfaces", "API models", "Component contracts"],
  },
  {
    id: "nodejs",
    name: "Node.js",
    category: "Backend runtime",
    status: "Working knowledge",
    logo: "https://cdn.simpleicons.org/nodedotjs/5FA04E",
    color: "#6CC24A",
    glow: "rgba(108, 194, 74, 0.4)",
    summary: "JavaScript runtime for APIs and server-side application logic.",
    description:
      "Node.js supports backend services, API routes, automation, and shared JavaScript or TypeScript logic across the application stack.",
    application:
      "I use it for REST API workflows, server-side integration, package tooling, and full-stack application development.",
    topics: ["REST services", "Server logic", "npm tooling", "API integration"],
  },
  {
    id: "mongodb",
    name: "MongoDB",
    category: "Database",
    status: "Practical foundation",
    logo: "https://cdn.simpleicons.org/mongodb/47A248",
    color: "#55C878",
    glow: "rgba(85, 200, 120, 0.4)",
    summary: "Document storage for flexible application data models.",
    description:
      "MongoDB stores JSON-like documents, making it practical for content, user data, and product features whose structures evolve over time.",
    application:
      "I have used it in application data flows alongside APIs and CRUD operations.",
    topics: ["Documents", "Collections", "CRUD", "Application data"],
  },
  {
    id: "postgresql",
    name: "PostgreSQL",
    category: "Database",
    status: "Practical foundation",
    logo: "https://cdn.simpleicons.org/postgresql/4169E1",
    color: "#5B8DD4",
    glow: "rgba(91, 141, 212, 0.42)",
    summary: "Relational data storage with strong structure and SQL support.",
    description:
      "PostgreSQL is a reliable relational database for structured product data, relationships, constraints, and transactional workflows.",
    application:
      "I use SQL and PostgreSQL concepts when an application benefits from explicit relationships and dependable data integrity.",
    topics: ["SQL", "Relations", "Queries", "Data integrity"],
  },
  {
    id: "postman",
    name: "Postman",
    category: "API tooling",
    status: "Hands-on use",
    logo: "https://cdn.simpleicons.org/postman/FF6C37",
    color: "#FF7A45",
    glow: "rgba(255, 122, 69, 0.42)",
    summary: "A practical workspace for testing and validating APIs.",
    description:
      "Postman helps inspect endpoints, request payloads, authentication, status codes, and response behaviour before an API is connected to a frontend.",
    application:
      "I use it to test CRUD endpoints, debug integration issues, and verify API contracts.",
    topics: ["Endpoint testing", "Payloads", "Status codes", "Debugging"],
  },
  {
    id: "github",
    name: "GitHub",
    category: "Version control",
    status: "Daily workflow",
    logo: "https://cdn.simpleicons.org/github/FFFFFF",
    color: "#C8B6FF",
    glow: "rgba(200, 182, 255, 0.36)",
    summary: "Version control, collaboration, and project delivery workflows.",
    description:
      "Git and GitHub provide a clear history of changes, support safe collaboration, and connect source code with review and deployment systems.",
    application:
      "I use branches, commits, repositories, and connected deployments to manage and publish application work.",
    topics: ["Git", "Commits", "Branches", "Repository workflow"],
  },
  {
    id: "vercel",
    name: "Vercel",
    category: "Deployment",
    status: "Production delivery",
    logo: "https://cdn.simpleicons.org/vercel/FFFFFF",
    color: "#FFFFFF",
    glow: "rgba(255, 255, 255, 0.28)",
    summary: "Continuous deployment for modern frontend applications.",
    description:
      "Vercel connects Git repositories to preview and production deployments with framework-aware build infrastructure.",
    application:
      "I use it to publish Next.js applications, verify production builds, and connect custom domains.",
    topics: ["Deployments", "Preview builds", "Custom domains", "Next.js hosting"],
  },
] as const satisfies readonly Skill[];

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
