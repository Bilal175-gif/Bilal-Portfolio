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
  role: "Creative Frontend Developer",
  tagline:
    "Designing immersive, high-performance web experiences where motion, depth, and clarity work together.",
  availability: "Open to modern frontend and product engineering opportunities",
  location: "Pakistan",
  linkedin: "https://www.linkedin.com/in/m-bilal-shah-gillani-3a7980220/",
  intro: [
    "Bilal leans toward frontend work where the details carry real weight: layouts feel deliberate, motion supports the story, and performance remains part of the craft.",
    "His portfolio direction blends polished interface systems, cinematic interaction design, and responsive implementation so the final experience feels premium without becoming heavy or distracting.",
  ],
  quickFacts: [
    { label: "Design Lens", value: "Immersive, dark, product-first" },
    { label: "Build Bias", value: "Motion with performance discipline" },
    { label: "Current Focus", value: "Next.js, GSAP, and 3D storytelling" },
  ],
  principles: [
    {
      title: "Motion With Intent",
      description:
        "Every transition, reveal, and hover treatment should clarify hierarchy or amplify the narrative, not compete with it.",
    },
    {
      title: "Systems Before Noise",
      description:
        "Reusable sections, consistent spacing, and clean component boundaries keep ambitious visuals maintainable over time.",
    },
    {
      title: "Depth Without Drag",
      description:
        "Rich visuals, subtle glow, and 3D presence are paired with lazy loading and restrained effects to keep the experience fast.",
    },
  ],
};

export const skillGroups = [
  {
    title: "Frontend Systems",
    icon: "Code2",
    description:
      "Component architecture, responsive layout thinking, and modern React patterns for product-grade interfaces.",
    skills: [
      { name: "Next.js / React", level: 96 },
      { name: "Component Architecture", level: 92 },
      { name: "Tailwind CSS", level: 90 },
      { name: "Responsive UI Engineering", level: 94 },
    ],
  },
  {
    title: "Motion & Narrative",
    icon: "Sparkles",
    description:
      "Scroll choreography and micro-interactions that add texture while preserving readability and flow.",
    skills: [
      { name: "GSAP / ScrollTrigger", level: 93 },
      { name: "Micro-interactions", level: 89 },
      { name: "Scroll Storytelling", level: 91 },
      { name: "Interaction Prototyping", level: 88 },
    ],
  },
  {
    title: "3D & Spatial UI",
    icon: "Orbit",
    description:
      "WebGL-driven scenes and perspective-based UI moments that create depth without overwhelming the page.",
    skills: [
      { name: "Three.js / React Three Fiber", level: 84 },
      { name: "Scene Composition", level: 80 },
      { name: "Lighting & Materials", level: 77 },
      { name: "3D UI Experiments", level: 82 },
    ],
  },
  {
    title: "Delivery & Quality",
    icon: "Gauge",
    description:
      "Performance-aware implementation with maintainable structure, lazy loading, and recruiter-friendly polish.",
    skills: [
      { name: "Code Splitting", level: 87 },
      { name: "Lazy Loading", level: 89 },
      { name: "Accessibility Passes", level: 83 },
      { name: "Performance Tuning", level: 86 },
    ],
  },
];

export const projects = [
  {
    title: "Healthcare Management App",
    category: "Healthtech Platform",
    description:
      "A modern healthcare application built with TypeScript, Next.js, Tailwind CSS, and Appwrite, focused on appointment workflows, patient-facing clarity, and secure dashboard operations for everyday medical use.",
    stack: ["TypeScript", "Next.js", "Tailwind CSS", "Appwrite"],
    highlights: ["Appointment booking flow", "Patient and admin dashboards", "Appwrite-powered data handling"],
    preview: ["Appointments", "Patient Portal", "Care Records"],
    href: "#contact",
    accent: "from-emerald-400/30 via-cyan-400/18 to-sky-400/12",
    featured: true,
  },
  {
    title: "Library Management System",
    category: "Operations System",
    description:
      "A library workflow platform built with Vue.js, JavaScript, Tailwind CSS, and Node.js for managing catalog visibility, borrow and return cycles, and smoother day-to-day admin control.",
    stack: ["Vue.js", "JavaScript", "Tailwind CSS", "Node.js"],
    highlights: ["Book issue and return flow", "Catalog and inventory tracking", "Administrative control panels"],
    preview: ["Book Catalog", "Borrow Logs", "Admin Access"],
    href: "#contact",
    accent: "from-violet-400/28 via-fuchsia-400/16 to-cyan-300/12",
  },
  {
    title: "E-Commerce Storefront",
    category: "Commerce Platform",
    description:
      "A responsive e-commerce application built with Vue.js, JavaScript, Tailwind CSS, and Node.js, designed around product discovery, cart flow, and a cleaner customer purchase journey.",
    stack: ["Vue.js", "JavaScript", "Tailwind CSS", "Node.js"],
    highlights: ["Product browsing and filters", "Cart and checkout journey", "Order management workflow"],
    preview: ["Product Grid", "Cart Flow", "Order Queue"],
    href: "#contact",
    accent: "from-amber-300/24 via-pink-400/16 to-fuchsia-500/16",
  },
];

export const experience = [
  {
    period: "Today",
    title: "Frontend Experience Design",
    company: "Interactive web products",
    summary:
      "Building interfaces that combine product clarity with a cinematic feel, using motion and spacing to guide attention rather than distract from it.",
    highlights: ["Storytelling layouts", "UI polish", "Design-system thinking"],
  },
  {
    period: "Workflow",
    title: "Motion-led Implementation",
    company: "Animation systems and interaction detail",
    summary:
      "Using scroll logic, deliberate easing, and hover response to create rhythm across the page while keeping each interaction lightweight and purposeful.",
    highlights: ["GSAP sequences", "ScrollTrigger orchestration", "Micro-motion refinement"],
  },
  {
    period: "Delivery",
    title: "Performance-aware Engineering",
    company: "Responsive, maintainable builds",
    summary:
      "Pairing rich visuals with lazy-loaded scenes, modular components, and careful front-end structure so the end result feels polished and scalable.",
    highlights: ["Code splitting", "Responsive systems", "Maintainable architecture"],
  },
];

export const contact = {
  title: "Let's build something that feels as sharp as it performs.",
  description:
    "If you're hiring, collaborating, or exploring a polished product experience, LinkedIn is the fastest way to start the conversation.",
  primaryCta: {
    label: "Connect on LinkedIn",
    href: "https://www.linkedin.com/in/m-bilal-shah-gillani-3a7980220/",
  },
  secondaryCta: {
    label: "Jump to Projects",
    href: "#projects",
  },
};
