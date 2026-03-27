"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { cn } from "@/lib/utils";

gsap.registerPlugin(ScrollTrigger);

export function ProjectCard({ project }) {
  const cardRef = useRef(null);

  useEffect(() => {
    const card = cardRef.current;

    if (!card) {
      return undefined;
    }

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const supportsFinePointer = window.matchMedia("(pointer: fine)").matches;

    const previewSurfaces = gsap.utils.toArray("[data-preview-surface]", card);
    const cardNodes = gsap.utils.toArray("[data-card-node]", card);
    const orbitPill = card.querySelector("[data-card-orbit]");

    const hoverTimeline = gsap.timeline({
      paused: true,
      defaults: {
        duration: 0.65,
        ease: "power3.out",
      },
    });

    hoverTimeline
      .to(
        previewSurfaces[0],
        {
          y: -18,
          x: 12,
          rotate: -4,
        },
        0
      )
      .to(
        previewSurfaces[1],
        {
          y: -8,
          x: -16,
          rotate: 14,
        },
        0.04
      )
      .to(
        previewSurfaces[2],
        {
          y: -14,
          scale: 1.03,
        },
        0.08
      )
      .to(
        cardNodes,
        {
          y: -10,
          scale: 1.08,
          stagger: 0.05,
        },
        0.08
      );

    if (orbitPill) {
      hoverTimeline.to(
        orbitPill,
        {
          rotate: 180,
          scale: 1.05,
        },
        0
      );
    }

    const onMove = (event) => {
      if (prefersReducedMotion || !supportsFinePointer) {
        return;
      }

      const rect = card.getBoundingClientRect();
      const x = (event.clientX - rect.left) / rect.width - 0.5;
      const y = (event.clientY - rect.top) / rect.height - 0.5;

      card.style.setProperty("--hover-rotate-y", `${x * 18}deg`);
      card.style.setProperty("--hover-rotate-x", `${y * -14}deg`);
      card.style.setProperty("--pointer-x", `${((event.clientX - rect.left) / rect.width) * 100}%`);
      card.style.setProperty("--pointer-y", `${((event.clientY - rect.top) / rect.height) * 100}%`);
    };

    const onEnter = () => {
      if (prefersReducedMotion || !supportsFinePointer) {
        return;
      }

      hoverTimeline.play();
    };

    const reset = () => {
      card.style.setProperty("--hover-rotate-y", "0deg");
      card.style.setProperty("--hover-rotate-x", "0deg");
      card.style.setProperty("--pointer-x", "50%");
      card.style.setProperty("--pointer-y", "50%");
      hoverTimeline.reverse();
    };

    const trigger = ScrollTrigger.create({
      trigger: card,
      start: "top bottom",
      end: "bottom top",
      scrub: prefersReducedMotion ? false : 1.1,
      onUpdate: (self) => {
        const offset = self.progress - 0.5;
        card.style.setProperty("--scroll-rotate-y", `${offset * 12}deg`);
        card.style.setProperty("--scroll-rotate-x", `${offset * -8}deg`);
        card.style.setProperty("--card-shift", `${offset * -22}px`);
      },
    });

    card.addEventListener("mousemove", onMove);
    card.addEventListener("mouseenter", onEnter);
    card.addEventListener("mouseleave", reset);
    reset();

    return () => {
      trigger.kill();
      card.removeEventListener("mousemove", onMove);
      card.removeEventListener("mouseenter", onEnter);
      card.removeEventListener("mouseleave", reset);
    };
  }, []);

  return (
    <article
      className={cn(
        "group relative isolate overflow-hidden rounded-[28px] border border-white/12 bg-white/[0.05] p-0.5 sm:rounded-[34px] sm:p-1",
        "shadow-[0_26px_80px_rgba(7,2,20,0.42)]",
        project.featured && "lg:col-span-2"
      )}
      data-project-card
    >
      <div
        ref={cardRef}
        className="tilt-surface relative h-full overflow-hidden rounded-[24px] border border-white/12 bg-[#12032a]/92 p-5 sm:rounded-[30px] sm:p-6 md:p-7"
      >
        <div className={cn("absolute inset-0 bg-gradient-to-br opacity-90", project.accent)} />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.16),transparent_30%)]" />
        <div
          className="absolute inset-0 opacity-0 transition duration-300 group-hover:opacity-100"
          style={{
            background:
              "radial-gradient(circle at var(--pointer-x, 50%) var(--pointer-y, 50%), rgba(255,255,255,0.22), transparent 36%)",
          }}
        />
        <div data-card-shine className="absolute inset-0 opacity-60" />

        <div
          className={cn(
            "relative z-10 grid h-full gap-8",
            project.featured ? "lg:grid-cols-[1.02fr_0.98fr]" : ""
          )}
          >
            <div className="tilt-layer-1">
              <p className="text-xs uppercase tracking-[0.28em] text-white/48">{project.category}</p>
              <h3 className="mt-4 text-2xl font-semibold leading-tight text-white sm:text-3xl">{project.title}</h3>
              <p className="mt-4 max-w-2xl text-sm leading-7 text-white/70 md:text-base">
                {project.description}
              </p>

            <div className="mt-6 flex flex-wrap gap-2">
              {project.stack.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-white/12 bg-white/[0.07] px-3 py-1.5 text-xs uppercase tracking-[0.18em] text-white/68"
                >
                  {item}
                </span>
              ))}
            </div>

            <div className="mt-6 flex flex-wrap gap-2">
              {project.highlights.map((item) => (
                <span
                  key={item}
                  className="rounded-full bg-black/20 px-3 py-2 text-sm text-white/75 backdrop-blur-sm"
                >
                  {item}
                </span>
              ))}
            </div>

            <Link
              href={project.href}
              className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-white"
            >
              View Direction
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="tilt-layer-2 flex">
            <div className="project-stage relative min-h-[380px] w-full overflow-hidden rounded-[24px] border border-white/14 bg-[#100224]/82 p-3 sm:min-h-[420px] sm:rounded-[28px] sm:p-5">
              <div className="project-grid absolute inset-0 opacity-75" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_68%_24%,rgba(142,241,255,0.18),transparent_26%),radial-gradient(circle_at_25%_18%,rgba(255,255,255,0.12),transparent_20%),radial-gradient(circle_at_50%_75%,rgba(168,85,247,0.18),transparent_26%)]" />
              <div className="absolute -left-10 top-8 h-24 w-24 rounded-full bg-white/14 blur-3xl" />
              <div className="absolute right-0 top-10 h-28 w-28 rounded-full bg-cyan-300/14 blur-3xl" />

              <div
                data-card-orbit
                className="absolute right-3 top-3 rounded-full border border-white/12 bg-[#12032a]/78 px-3 py-1.5 text-[10px] uppercase tracking-[0.18em] text-white/68 backdrop-blur-xl sm:right-5 sm:top-5 sm:px-4 sm:py-2 sm:text-[11px] sm:tracking-[0.28em]"
              >
                {project.category}
              </div>

              <div
                data-preview-surface
                className="absolute left-3 top-4 w-[calc(100%-1.5rem)] rounded-[20px] border border-white/12 bg-[#170537]/84 p-3 shadow-[0_24px_70px_rgba(4,1,18,0.36)] -rotate-[3deg] sm:left-5 sm:top-8 sm:w-[74%] sm:rounded-[26px] sm:p-4 sm:-rotate-[8deg]"
              >
                <div className="flex items-center justify-between">
                  <div className="flex gap-2">
                    <span className="h-2.5 w-2.5 rounded-full bg-white/40" />
                    <span className="h-2.5 w-2.5 rounded-full bg-fuchsia-300/70" />
                    <span className="h-2.5 w-2.5 rounded-full bg-cyan-300/70" />
                  </div>
                  <span className="text-[9px] uppercase tracking-[0.18em] text-white/42 sm:text-[10px] sm:tracking-[0.26em]">
                    Interface Layer
                  </span>
                </div>

                <div className="mt-3 space-y-2.5 sm:mt-4 sm:space-y-3">
                  {project.preview.map((item, index) => (
                    <div key={item}>
                      <div className="mb-2 flex items-center justify-between gap-2 text-[10px] uppercase tracking-[0.16em] text-white/45 sm:text-[11px] sm:tracking-[0.22em]">
                        <span>{item}</span>
                        <span>{(index + 1) * 32}%</span>
                      </div>
                      <div className="h-2 rounded-full bg-white/[0.08]">
                        <span
                          className="block h-full rounded-full bg-gradient-to-r from-fuchsia-300 via-violet-300 to-cyan-300"
                          style={{ width: `${72 - index * 12}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div
                data-preview-surface
                className="absolute right-3 top-[43%] w-[58%] rounded-[20px] border border-white/12 bg-[#12032a]/82 p-3 shadow-[0_20px_60px_rgba(4,1,18,0.32)] rotate-[6deg] sm:right-5 sm:top-[29%] sm:w-[42%] sm:rounded-[24px] sm:p-4 sm:rotate-[12deg]"
              >
                <p className="text-[10px] uppercase tracking-[0.18em] text-white/42 sm:text-[11px] sm:tracking-[0.26em]">Impact Lens</p>
                <div className="mt-3 space-y-2 sm:mt-4 sm:space-y-3">
                  {project.highlights.slice(0, 2).map((item) => (
                    <div
                      key={item}
                      className="rounded-xl border border-white/10 bg-white/[0.05] px-3 py-2.5 text-xs text-white/72 sm:rounded-2xl sm:py-3 sm:text-sm"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>

              <div
                data-preview-surface
                className="absolute inset-x-3 bottom-3 rounded-[20px] border border-white/12 bg-[#12032a]/82 p-3 shadow-[0_18px_50px_rgba(4,1,18,0.3)] sm:inset-x-6 sm:bottom-6 sm:rounded-[24px] sm:p-4"
              >
                <div className="mb-3 flex items-center justify-between text-[10px] uppercase tracking-[0.18em] text-white/42 sm:text-[11px] sm:tracking-[0.26em]">
                  <span>Interactive Nodes</span>
                  <span>Depth Map</span>
                </div>

                <div className="grid grid-cols-3 gap-2 sm:gap-3">
                  {project.preview.map((item, index) => (
                    <div
                      key={item}
                      data-card-node
                      className={cn(
                        "rounded-[14px] border border-white/12 px-2 py-3 text-center backdrop-blur-md sm:rounded-[18px] sm:px-3 sm:py-4",
                        index === 1 ? "bg-white/[0.1]" : "bg-black/20"
                      )}
                    >
                      <p className="text-[9px] uppercase tracking-[0.16em] text-white/42 sm:text-[10px] sm:tracking-[0.24em]">Node</p>
                      <p className="mt-2 text-xs font-semibold text-white sm:text-sm">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
