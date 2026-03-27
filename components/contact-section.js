import Link from "next/link";
import { ArrowUpRight, Link2, MapPin, MoveUpRight } from "lucide-react";

import { SectionHeading } from "@/components/section-heading";

export function ContactSection({ contact, profile }) {
  return (
    <section id="contact" className="section-shell section-padding">
      <SectionHeading
        eyebrow="Contact"
        title={contact.title}
        description={contact.description}
      />

      <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="glass-panel rounded-[34px] p-7 md:p-9" data-reveal>
          <p className="text-xs uppercase tracking-[0.3em] text-white/42">Primary Channel</p>
          <h3 className="mt-4 text-3xl font-semibold text-white">LinkedIn conversation, polished first touch.</h3>
          <p className="mt-4 max-w-2xl text-sm leading-7 text-white/68 md:text-base">
            This contact block stays deliberately minimal so the overall experience feels clean.
            The main call to action is direct, visible, and easy to act on.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href={contact.primaryCta.href}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-[#13032b] hover:-translate-y-0.5 hover:bg-white/90"
            >
              {contact.primaryCta.label}
              <ArrowUpRight className="h-4 w-4" />
            </Link>

            <Link
              href={contact.secondaryCta.href}
              className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.06] px-5 py-3 text-sm font-medium text-white hover:-translate-y-0.5 hover:bg-white/[0.1]"
            >
              {contact.secondaryCta.label}
              <MoveUpRight className="h-4 w-4" />
            </Link>
          </div>
        </div>

        <div className="grid gap-4">
          <article className="glass-panel rounded-[28px] p-6" data-reveal>
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/12 bg-white/[0.06]">
              <Link2 className="h-5 w-5 text-fuchsia-300" />
            </div>
            <p className="mt-5 text-xs uppercase tracking-[0.28em] text-white/42">LinkedIn</p>
            <p className="mt-3 text-lg font-semibold text-white">{profile.name}</p>
            <p className="mt-2 break-all text-sm leading-7 text-white/62">{profile.linkedin}</p>
          </article>

          <article className="glass-panel rounded-[28px] p-6" data-reveal>
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/12 bg-white/[0.06]">
              <MapPin className="h-5 w-5 text-cyan-300" />
            </div>
            <p className="mt-5 text-xs uppercase tracking-[0.28em] text-white/42">Based In</p>
            <p className="mt-3 text-lg font-semibold text-white">{profile.location}</p>
            <p className="mt-2 text-sm leading-7 text-white/62">{profile.availability}</p>
          </article>
        </div>
      </div>
    </section>
  );
}
