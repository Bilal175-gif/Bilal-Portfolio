export const navigation = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export const profile = {
  name: "M Bilal Shah Gillani",
  role: "Frontend Developer",
  tagline:
    "Building frontend and full-stack web projects with JavaScript, Vue, Next.js, Node.js, and MongoDB.",
  availability: "Open to frontend and web development opportunities",
  location: "Pakistan",
  linkedin: "https://www.linkedin.com/in/m-bilal-shah-gillani-3a7980220/",
  github: "https://github.com/Bilal175-gif",
  intro: [
    "Bilal Shah is a developer from Pakistan whose public GitHub profile shows hands-on work across frontend and backend learning projects.",
    "His repositories point to practical work with JavaScript, HTML, Vue, Next.js, Node.js, Express.js, MongoDB, Tailwind CSS, and related tools used to build portfolio, backend, and small web application projects.",
  ],
  quickFacts: [
    { label: "GitHub Name", value: "Bilal Shah" },
    { label: "Public Repos", value: "9 repositories" },
    { label: "Current Focus", value: "Frontend, backend, and portfolio projects" },
  ],
  principles: [
    {
      title: "Frontend Development",
      description:
        "Main focus is building user-facing interfaces with JavaScript frameworks and responsive layouts.",
    },
    {
      title: "Full-Stack Learning",
      description:
        "Public work also shows backend learning with Node.js, Express.js, MongoDB, and Mongoose.",
    },
    {
      title: "Project-Based Practice",
      description:
        "Projects on GitHub are centered around learning by building portfolio sites, backend practice, and small web examples.",
    },
  ],
};

export const skillGroups = [
  {
    title: "Frontend Systems",
    icon: "Code2",
    description:
      "Frontend work shown across portfolio and web UI projects.",
    skills: [
      { name: "Next.js / React", level: 84 },
      { name: "Component Architecture", level: 78 },
      { name: "Tailwind CSS", level: 84 },
      { name: "Responsive UI Engineering", level: 82 },
    ],
  },
  {
    title: "UI Interaction",
    icon: "Sparkles",
    description:
      "Interface polish, interactions, and smoother user flow.",
    skills: [
      { name: "GSAP / ScrollTrigger", level: 70 },
      { name: "Micro-interactions", level: 76 },
      { name: "Scroll Storytelling", level: 68 },
      { name: "Interaction Prototyping", level: 72 },
    ],
  },
  {
    title: "Backend Learning",
    icon: "Orbit",
    description:
      "Backend-focused learning through Node.js and database-based projects.",
    skills: [
      { name: "Three.js / React Three Fiber", level: 35 },
      { name: "Scene Composition", level: 40 },
      { name: "Lighting & Materials", level: 32 },
      { name: "3D UI Experiments", level: 30 },
    ],
  },
  {
    title: "Delivery & Quality",
    icon: "Gauge",
    description:
      "Turning projects into usable, organized, and shareable code.",
    skills: [
      { name: "Code Splitting", level: 62 },
      { name: "Lazy Loading", level: 60 },
      { name: "Accessibility Passes", level: 58 },
      { name: "Performance Tuning", level: 61 },
    ],
  },
];

export const projects = [
  {
    title: "Bilal-Portfolio",
    category: "Portfolio Website",
    description:
      "A personal portfolio project described on GitHub as a full frontend and backend site using Vue 3, JavaScript, Vue Router, Vite, Tailwind CSS v4, shadcn-vue, Reka UI, Lucide Vue, Node.js, Express.js, MongoDB, Mongoose, Nodemailer, dotenv, and CORS.",
    stack: ["Vue 3", "JavaScript", "Tailwind CSS", "Node.js", "Express.js", "MongoDB"],
    highlights: ["Frontend and backend structure", "Portfolio presentation", "MongoDB and Express integration"],
    preview: ["Portfolio UI", "Backend API", "Contact Flow"],
    href: "https://github.com/Bilal175-gif/Bilal-Portfolio",
    accent: "from-emerald-400/30 via-cyan-400/18 to-sky-400/12",
    featured: true,
  },
  {
    title: "Learn-Backend-Development",
    category: "Backend Practice",
    description:
      "A backend learning repository focused on practicing server-side development concepts with JavaScript and Node.js.",
    stack: ["JavaScript", "Node.js"],
    highlights: ["Backend learning", "Server-side practice", "JavaScript workflow"],
    preview: ["Routes", "Logic", "Practice"],
    href: "https://github.com/Bilal175-gif/Learn-Backend-Development",
    accent: "from-violet-400/28 via-fuchsia-400/16 to-cyan-300/12",
  },
  {
    title: "Create-a-resturant-site-using-chatgpt",
    category: "Frontend Practice",
    description:
      "An HTML-based restaurant website project published on GitHub as a frontend practice build.",
    stack: ["HTML", "CSS", "JavaScript"],
    highlights: ["Website layout", "Frontend practice", "Static page structure"],
    preview: ["Landing Page", "Sections", "Layout"],
    href: "https://github.com/Bilal175-gif/Create-a-resturant-site-using-chatgpt",
    accent: "from-amber-300/24 via-pink-400/16 to-fuchsia-500/16",
  },
];

export const experience = [
  {
    period: "2026",
    title: "Portfolio and Web App Development",
    company: "Personal GitHub Projects",
    summary:
      "Recent public repositories show active work on portfolio development and JavaScript-based web projects.",
    highlights: ["Portfolio builds", "JavaScript projects", "Frontend implementation"],
  },
  {
    period: "2025 - 2026",
    title: "Backend Learning and Practice",
    company: "Node.js and MongoDB work",
    summary:
      "Repository history suggests ongoing learning in backend concepts including Node.js, Express.js, MongoDB, and Mongoose.",
    highlights: ["Node.js", "Express.js", "MongoDB"],
  },
  {
    period: "2024 - 2026",
    title: "Consistent GitHub Project Building",
    company: "Self-driven development",
    summary:
      "Public repositories include starter work, HTML practice, backend learning, and more recent portfolio repositories, showing steady project-based progress.",
    highlights: ["HTML practice", "Portfolio repos", "Self-learning"],
  },
];

export const contact = {
  title: "Let's connect for frontend or web development work.",
  description:
    "LinkedIn is the main contact link on this portfolio, and GitHub shows the public projects behind the work.",
  primaryCta: {
    label: "Connect on LinkedIn",
    href: "https://www.linkedin.com/in/m-bilal-shah-gillani-3a7980220/",
  },
  secondaryCta: {
    label: "View GitHub",
    href: "https://github.com/Bilal175-gif",
  },
};
