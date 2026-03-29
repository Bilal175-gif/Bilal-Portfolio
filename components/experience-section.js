import { SectionHeading } from "@/components/section-heading";

export function ExperienceSection({ experience }) {
  return (
    <section id="experience" className="section-shell section-padding">
      <SectionHeading
        eyebrow="Experience"
        title="A simple timeline based on public project activity and current development focus."
        description="This section summarizes the kind of work visible through Bilal's GitHub repositories rather than using generic portfolio claims."
      />

      <div className="relative mx-auto max-w-5xl">
        <div
          data-experience-line
          className="absolute left-[15px] top-3 hidden h-[calc(100%-1.5rem)] w-px origin-top bg-gradient-to-b from-fuchsia-400/80 via-violet-300/40 to-transparent md:block"
        />

        <div className="space-y-7">
          {experience.map((item) => (
            <article key={item.title} className="grid gap-4 md:grid-cols-[150px_1fr]" data-reveal>
              <div className="pt-2">
                <p className="text-xs uppercase tracking-[0.3em] text-white/38">{item.period}</p>
              </div>

              <div className="relative md:pl-8">
                <span className="absolute left-0 top-6 hidden h-4 w-4 rounded-full border border-white/12 bg-[#170537] shadow-[0_0_0_6px_rgba(168,85,247,0.12)] md:block" />
                <div className="glass-panel rounded-[28px] p-6 md:p-7">
                  <p className="text-xs uppercase tracking-[0.28em] text-white/42">{item.company}</p>
                  <h3 className="mt-3 text-2xl font-semibold text-white">{item.title}</h3>
                  <p className="mt-4 text-sm leading-7 text-white/68 md:text-base">{item.summary}</p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {item.highlights.map((highlight) => (
                      <span
                        key={highlight}
                        className="rounded-full border border-white/10 bg-white/[0.05] px-3 py-2 text-sm text-white/68"
                      >
                        {highlight}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
