import { Layers3, MapPin, Radar, ShieldCheck } from "lucide-react";

import { SectionHeading } from "@/components/section-heading";

const principleIcons = [Layers3, Radar, ShieldCheck];

export function AboutSection({ profile }) {
  return (
    <section id="about" className="section-shell section-padding">
      <SectionHeading
        eyebrow="About"
        title="A dark, modern portfolio direction centered on polish, narrative flow, and careful performance."
        description="Designed for first impressions that feel intentional: immersive on desktop, graceful on tablet and mobile, and structured to be easy to update."
      />

      <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="glass-panel rounded-[30px] p-7 md:p-8" data-reveal>
          <div className="flex flex-wrap items-center gap-3 text-xs uppercase tracking-[0.28em] text-white/42">
            <span className="soft-label rounded-full px-3 py-1.5">Summary</span>
            <span className="soft-label rounded-full px-3 py-1.5">Portfolio Story</span>
          </div>

          <div className="mt-6 space-y-5 text-base leading-8 text-white/70 md:text-lg">
            {profile.intro.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-2">
            <div className="rounded-[24px] border border-white/10 bg-white/[0.03] p-5">
              <p className="text-xs uppercase tracking-[0.28em] text-white/42">Presence</p>
              <p className="mt-3 text-lg font-semibold text-white">
                Clear enough for recruiters, distinctive enough to be remembered.
              </p>
            </div>
            <div className="rounded-[24px] border border-white/10 bg-white/[0.03] p-5">
              <p className="text-xs uppercase tracking-[0.28em] text-white/42">Location</p>
              <div className="mt-3 flex items-center gap-2 text-lg font-semibold text-white">
                <MapPin className="h-4 w-4 text-cyan-300" />
                {profile.location}
              </div>
            </div>
          </div>
        </div>

        <div className="grid gap-4">
          {profile.principles.map((principle, index) => {
            const Icon = principleIcons[index];

            return (
              <article
                key={principle.title}
                className="glass-panel rounded-[28px] p-6"
                data-reveal
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/12 bg-white/[0.07] text-white">
                  <Icon className="h-5 w-5 text-fuchsia-300" />
                </div>
                <h3 className="mt-5 text-2xl font-semibold text-white">{principle.title}</h3>
                <p className="mt-3 text-sm leading-7 text-white/66 md:text-base">
                  {principle.description}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
