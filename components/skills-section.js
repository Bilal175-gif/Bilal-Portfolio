"use client";

import { useMemo, useState } from "react";
import { Code2, Gauge, Orbit, Sparkles } from "lucide-react";

import { SectionHeading } from "@/components/section-heading";
import { cn } from "@/lib/utils";

const iconMap = {
  Code2,
  Sparkles,
  Orbit,
  Gauge,
};

const accentMap = {
  Code2: {
    surface: "from-fuchsia-500/18 via-violet-500/10 to-transparent",
    orb: "bg-fuchsia-400/18",
    icon: "text-fuchsia-300",
    ring: "from-fuchsia-400 via-violet-200 to-cyan-300",
  },
  Sparkles: {
    surface: "from-violet-500/18 via-sky-400/10 to-transparent",
    orb: "bg-violet-400/16",
    icon: "text-violet-200",
    ring: "from-violet-300 via-fuchsia-200 to-cyan-300",
  },
  Orbit: {
    surface: "from-cyan-500/18 via-sky-500/10 to-transparent",
    orb: "bg-cyan-400/18",
    icon: "text-cyan-200",
    ring: "from-cyan-300 via-sky-300 to-violet-300",
  },
  Gauge: {
    surface: "from-amber-300/14 via-pink-400/10 to-transparent",
    orb: "bg-pink-400/16",
    icon: "text-pink-200",
    ring: "from-amber-200 via-pink-300 to-fuchsia-300",
  },
};

const skillNarratives = {
  "Next.js / React": {
    signal: "App Router + scalable UI flow",
    summary:
      "Production-style React architecture focused on fluid routing, component layering, and polished rendering behavior.",
    tags: ["App Router", "SSR", "State Flow"],
  },
  "Component Architecture": {
    signal: "Reusable systems over one-off code",
    summary:
      "Turning visuals into maintainable sections, repeatable patterns, and cleaner boundaries that can scale with product needs.",
    tags: ["Composition", "Reuse", "Consistency"],
  },
  "Tailwind CSS": {
    signal: "Fast styling with strong structure",
    summary:
      "Building expressive surfaces, spacing systems, and responsive states without sacrificing speed or maintainability.",
    tags: ["Utility System", "Responsive", "Design Tokens"],
  },
  "Responsive UI Engineering": {
    signal: "Desktop-first, then refined downward",
    summary:
      "Layouts are shaped for large-screen impact while still adapting cleanly across tablet and mobile breakpoints.",
    tags: ["Desktop-first", "Tablet Fit", "Fluid Layout"],
  },
  "GSAP / ScrollTrigger": {
    signal: "Scroll movement with control",
    summary:
      "High-end reveal timing, scrubbed motion, and section choreography that gives the page rhythm and direction.",
    tags: ["ScrollTrigger", "Scrub", "Sequencing"],
  },
  "Micro-interactions": {
    signal: "Feedback in the details",
    summary:
      "Hover behavior, button response, and subtle surface shifts that make the interface feel deliberate and premium.",
    tags: ["Hover States", "Feedback", "Polish"],
  },
  "Scroll Storytelling": {
    signal: "Narrative-driven pacing",
    summary:
      "Designing sections so each scroll movement reveals the next beat with stronger control over hierarchy and drama.",
    tags: ["Narrative", "Tempo", "Reveal Logic"],
  },
  "Interaction Prototyping": {
    signal: "Ideas tested in motion early",
    summary:
      "Exploring interaction behavior fast so the final product feels refined before deeper implementation begins.",
    tags: ["Prototype", "Iteration", "UX Motion"],
  },
  "Three.js / React Three Fiber": {
    signal: "Real-time depth on the web",
    summary:
      "Using WebGL scenes for hero moments, spatial surfaces, and animated visual identity that stands out immediately.",
    tags: ["WebGL", "R3F", "Real-time Scene"],
  },
  "Scene Composition": {
    signal: "Lighting, scale, and placement",
    summary:
      "Balancing foreground geometry, supporting particles, and supporting UI overlays so the whole scene feels intentional.",
    tags: ["Layout", "Depth", "Composition"],
  },
  "Lighting & Materials": {
    signal: "Better mood through surface treatment",
    summary:
      "Using emissive surfaces, transparent materials, glow balance, and contrast to make 3D elements feel premium.",
    tags: ["Lighting", "Materials", "Mood"],
  },
  "3D UI Experiments": {
    signal: "Interfaces with spatial identity",
    summary:
      "Blending cards, HUD layers, and perspective motion so UI feels dimensional instead of flat and template-like.",
    tags: ["Spatial UI", "HUD", "Depth Motion"],
  },
  "Code Splitting": {
    signal: "Heavy visuals, lighter delivery",
    summary:
      "Keeping ambitious sections fast by loading interactive modules only where the experience actually benefits from them.",
    tags: ["Lazy Chunks", "Load Strategy", "Performance"],
  },
  "Lazy Loading": {
    signal: "Prioritize the first impression",
    summary:
      "Deferring non-critical visual work so the first render stays smooth even when the page carries richer interactions.",
    tags: ["Defer", "First Paint", "Efficiency"],
  },
  "Accessibility Passes": {
    signal: "Motion with restraint and clarity",
    summary:
      "Making sure the site stays usable with readable contrast, keyboard access, and reduced-motion considerations.",
    tags: ["A11y", "Readable", "Inclusive"],
  },
  "Performance Tuning": {
    signal: "Premium feel without jank",
    summary:
      "Tuning animation density, GPU-heavy moments, and render behavior so the experience still feels controlled and fast.",
    tags: ["FPS Care", "Optimization", "Smoothness"],
  },
};

function SkillPopup({ skill, accent }) {
  const detail = skillNarratives[skill.name];

  return (
    <div className="relative overflow-hidden rounded-[20px] border border-white/12 bg-[#12032a]/88 p-4 shadow-[0_20px_60px_rgba(4,1,18,0.32)] backdrop-blur-xl sm:rounded-[24px]">
      <div className={cn("pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r opacity-80", accent.ring)} />
      <div className="flex flex-col items-start gap-3 sm:flex-row sm:items-start sm:justify-between sm:gap-4">
        <div>
          <p className="text-[11px] uppercase tracking-[0.28em] text-white/38">Active Capability</p>
          <h4 className="mt-2 text-lg font-semibold text-white sm:text-xl">{skill.name}</h4>
        </div>
        <span className="rounded-full border border-white/12 bg-white/[0.06] px-3 py-1.5 text-sm font-semibold text-white/76">
          {skill.level}%
        </span>
      </div>

      <p className="mt-3 text-sm leading-7 text-white/66">{detail.summary}</p>

      <div className="mt-4 flex flex-wrap gap-2">
        {detail.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full border border-white/10 bg-white/[0.05] px-3 py-1.5 text-[11px] uppercase tracking-[0.2em] text-white/62"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}

function SkillCapabilityCard({ group, index }) {
  const Icon = iconMap[group.icon];
  const accent = accentMap[group.icon];
  const [activeSkillName, setActiveSkillName] = useState(group.skills[0].name);

  const activeSkill = useMemo(
    () => group.skills.find((skill) => skill.name === activeSkillName) ?? group.skills[0],
    [activeSkillName, group.skills]
  );

  return (
      <article
      className="group/skill relative overflow-hidden rounded-[26px] border border-white/12 bg-[#14042f]/72 p-5 shadow-[0_28px_80px_rgba(7,2,20,0.38)] backdrop-blur-2xl sm:rounded-[32px] sm:p-6 md:p-7"
      data-skill-card
    >
      <div className={cn("pointer-events-none absolute inset-0 bg-gradient-to-br opacity-90", accent.surface)} />
      <div className={cn("pointer-events-none absolute -right-10 top-5 h-36 w-36 rounded-full blur-3xl", accent.orb)} />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.12),transparent_28%)]" />

      <div className="relative z-10">
        <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <div className={cn("flex h-12 w-12 items-center justify-center rounded-[18px] border border-white/12 bg-white/[0.06] sm:h-14 sm:w-14 sm:rounded-[22px]", accent.icon)}>
              <Icon className="h-6 w-6" />
            </div>
            <p className="mt-5 text-xs uppercase tracking-[0.3em] text-white/38">
              Capability Suite {String(index + 1).padStart(2, "0")}
            </p>
            <h3 className="mt-3 text-2xl font-semibold leading-tight text-white sm:text-3xl">{group.title}</h3>
          </div>

          <div className="hidden rounded-full border border-white/10 bg-white/[0.05] px-4 py-2 text-[11px] uppercase tracking-[0.24em] text-white/56 sm:block">
            {group.skills.length} skill signals
          </div>
        </div>

        <p className="mt-5 max-w-2xl text-sm leading-7 text-white/66 md:text-base">
          {group.description}
        </p>

        <div className="mt-8 space-y-3">
          {group.skills.map((skill) => {
            const detail = skillNarratives[skill.name];
            const isActive = activeSkill.name === skill.name;

            return (
              <button
                key={skill.name}
                type="button"
                onMouseEnter={() => setActiveSkillName(skill.name)}
                onFocus={() => setActiveSkillName(skill.name)}
                onClick={() => setActiveSkillName(skill.name)}
                className={cn(
                  "w-full rounded-[22px] border px-4 py-4 text-left transition duration-300",
                  isActive
                    ? "border-white/16 bg-white/[0.1] shadow-[0_18px_40px_rgba(7,2,20,0.18)]"
                    : "border-white/8 bg-white/[0.04] hover:border-white/14 hover:bg-white/[0.07]"
                )}
              >
                <div className="flex flex-col items-start gap-3 sm:flex-row sm:items-start sm:justify-between sm:gap-4">
                  <div>
                    <p className="text-base font-semibold text-white sm:text-lg">{skill.name}</p>
                    <p className="mt-1 text-[11px] uppercase tracking-[0.16em] text-white/38 sm:text-xs sm:tracking-[0.22em]">
                      {detail.signal}
                    </p>
                  </div>
                  <span
                    className={cn(
                      "rounded-full border px-3 py-1.5 text-sm font-semibold transition duration-300",
                      isActive
                        ? "border-white/14 bg-white/[0.1] text-white"
                        : "border-white/10 bg-black/15 text-white/62"
                    )}
                  >
                    {skill.level}%
                  </span>
                </div>

                <div className="relative mt-4 h-2.5 rounded-full bg-white/[0.08]">
                  <span
                    data-meter-fill
                    className={cn("meter-fill block h-full rounded-full bg-gradient-to-r", accent.ring)}
                    style={{ width: `${skill.level}%` }}
                  />
                  <span
                    className="absolute top-1/2 h-4 w-4 -translate-y-1/2 rounded-full border border-white/20 bg-white shadow-[0_0_20px_rgba(255,255,255,0.4)]"
                    style={{ left: `calc(${skill.level}% - 0.55rem)` }}
                  />
                </div>
              </button>
            );
          })}
        </div>

        <div className="mt-5">
          <div className="relative min-h-[220px] sm:min-h-[185px]">
            {group.skills.map((skill) => {
              const isActive = activeSkill.name === skill.name;

              return (
                <div
                  key={skill.name}
                  className={cn(
                    "absolute inset-0 transition duration-500",
                    isActive
                      ? "translate-y-0 scale-100 opacity-100"
                      : "pointer-events-none translate-y-5 scale-[0.97] opacity-0"
                  )}
                >
                  <SkillPopup skill={skill} accent={accent} />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </article>
  );
}

export function SkillsSection({ skillGroups }) {
  const totalSkills = skillGroups.reduce((sum, group) => sum + group.skills.length, 0);

  return (
    <section id="skills" className="section-shell section-padding">
      <SectionHeading
        eyebrow="Skills"
        title="Capability cards that feel more like a polished product system than a plain resume list."
        description="Each skill cluster now has stronger hierarchy, active-state detail, and popup-style motion so recruiters can scan fast while the section still feels premium and alive."
      />

      <div className="mb-6 grid gap-4 lg:grid-cols-3" data-skill-summary>
        <div className="glass-panel rounded-[26px] p-5">
          <p className="text-xs uppercase tracking-[0.28em] text-white/40">Coverage</p>
          <p className="mt-3 text-2xl font-semibold text-white sm:text-3xl">{totalSkills} active skills</p>
          <p className="mt-2 text-sm leading-7 text-white/62">Frontend, motion, 3D, and delivery quality in one system.</p>
        </div>
        <div className="glass-panel rounded-[26px] p-5">
          <p className="text-xs uppercase tracking-[0.28em] text-white/40">Best Fit</p>
          <p className="mt-3 text-2xl font-semibold text-white sm:text-3xl">Premium UI builds</p>
          <p className="mt-2 text-sm leading-7 text-white/62">Strongest when polish, storytelling, and interaction quality matter.</p>
        </div>
        <div className="glass-panel rounded-[26px] p-5">
          <p className="text-xs uppercase tracking-[0.28em] text-white/40">Interaction</p>
          <p className="mt-3 text-2xl font-semibold text-white sm:text-3xl">Hover to inspect</p>
          <p className="mt-2 text-sm leading-7 text-white/62">Each row activates a popup detail card with a clearer skill narrative.</p>
        </div>
      </div>

      <div className="grid gap-5 lg:grid-cols-2">
        {skillGroups.map((group, index) => (
          <SkillCapabilityCard key={group.title} group={group} index={index} />
        ))}
      </div>
    </section>
  );
}
