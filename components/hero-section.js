import Link from "next/link";
import { ArrowDownRight, ArrowUpRight, Link2, MapPin, Sparkles } from "lucide-react";

import { AnimatedTextLoop } from "@/components/animated-text-loop";
import HeroCanvas from "@/components/hero-canvas";

const stageMetrics = [
  { label: "Mode", value: "Desktop-first" },
  { label: "Motion", value: "GSAP-driven" },
  { label: "Depth", value: "Real 3D scene" },
];

const motionWords = [
  "GLSL surfaces",
  "3D interfaces",
  "motion systems",
  "scroll stories",
];

const radarBlips = [
  { left: "30%", top: "36%", delay: "0.2s" },
  { left: "67%", top: "24%", delay: "1.1s" },
  { left: "54%", top: "63%", delay: "2s" },
  { left: "24%", top: "72%", delay: "2.8s" },
];

const neuralFeed = [
  { label: "Render Sync", level: 96 },
  { label: "Signal Mapping", level: 88 },
  { label: "Depth Pulse", level: 91 },
];

const signalStream = ["Radar sweep active", "Cursor-linked particles", "Ambient data field live"];

export function HeroSection({ profile }) {
  return (
    <section
      id="home"
      className="section-shell relative min-h-screen pt-28 sm:pt-32 md:pt-36 lg:flex lg:items-center"
    >
      <div className="grid w-full items-center gap-10 lg:grid-cols-[1fr_1.02fr] lg:gap-12">
        <div className="relative z-10" data-hero-copy-block>
          <div
            data-hero-badge
            className="soft-label inline-flex max-w-full items-center gap-2 rounded-full px-3 py-2 text-[11px] font-semibold uppercase leading-tight tracking-[0.18em] text-white/72 sm:px-4 sm:text-xs sm:tracking-[0.28em]"
          >
            <Sparkles className="h-4 w-4 shrink-0 text-fuchsia-300" />
            <span className="truncate">{profile.availability}</span>
          </div>

          <p className="mt-6 text-[11px] uppercase tracking-[0.24em] text-white/42 sm:text-sm sm:tracking-[0.34em]" data-hero-kicker>
            {profile.role}
          </p>

          <h1 className="mt-5 text-4xl font-semibold leading-[0.92] text-white sm:text-6xl lg:text-[5.5rem]">
            <span className="block overflow-hidden">
              <span data-hero-title className="inline-block">
                {profile.name}
              </span>
            </span>
          </h1>

          <div className="mt-4 overflow-hidden">
            <p
              data-hero-title
              className="text-gradient inline-block text-2xl font-semibold leading-tight sm:text-3xl lg:text-[2.7rem]"
            >
              {profile.role}
            </p>
          </div>

          <p
            className="mt-6 max-w-2xl text-sm leading-7 text-white/68 sm:text-base md:text-lg md:leading-8"
            data-hero-copy
          >
            {profile.tagline}
          </p>

          <p className="mt-4 max-w-2xl text-sm leading-7 text-white/58 md:text-base" data-hero-copy>
            A spatial portfolio direction with stronger 3D presence, sharper motion timing, and
            recruiter-friendly structure designed to feel premium from the first fold.
          </p>

          <div
            className="mt-5 inline-flex max-w-full flex-wrap items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2.5 text-sm text-white/72 backdrop-blur-xl"
            data-hero-copy
          >
            <span className="text-white/42">Now shaping</span>
            <span className="min-w-0">
              <AnimatedTextLoop
                items={motionWords}
                className="min-w-[130px] font-semibold text-cyan-200 sm:min-w-[150px]"
              />
            </span>
          </div>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap" data-hero-actions>
            <Link
              href="#projects"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-[#14042f] hover:-translate-y-0.5 hover:bg-white/90 sm:w-auto"
            >
              Explore Projects
              <ArrowDownRight className="h-4 w-4" />
            </Link>
            <Link
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/15 bg-white/[0.06] px-5 py-3 text-sm font-medium text-white hover:-translate-y-0.5 hover:bg-white/[0.1] sm:w-auto"
            >
              LinkedIn
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="mt-10 grid gap-4 xl:grid-cols-[1.14fr_0.86fr]">
            <div className="glass-panel rounded-[24px] p-5 sm:rounded-[28px] sm:p-6 md:p-7" data-hero-card>
              <p className="text-xs uppercase tracking-[0.28em] text-white/42">Signature Direction</p>
              <h2 className="mt-4 text-xl font-semibold leading-tight text-white sm:text-2xl md:text-[1.9rem]">
                High-end portfolio storytelling with movement that actually feels engineered.
              </h2>
              <p className="mt-4 max-w-xl text-sm leading-7 text-white/66 md:text-base">
                Built around layered surfaces, cinematic scroll response, and a 3D hero stage so the
                page feels more like a crafted product than a static template.
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                <span className="rounded-full border border-white/12 bg-white/[0.06] px-3 py-2 text-[11px] uppercase tracking-[0.18em] text-white/68 sm:text-xs sm:tracking-[0.22em]">
                  Spatial UI
                </span>
                <span className="rounded-full border border-white/12 bg-white/[0.06] px-3 py-2 text-[11px] uppercase tracking-[0.18em] text-white/68 sm:text-xs sm:tracking-[0.22em]">
                  Scroll Choreography
                </span>
                <span className="rounded-full border border-white/12 bg-white/[0.06] px-3 py-2 text-[11px] uppercase tracking-[0.18em] text-white/68 sm:text-xs sm:tracking-[0.22em]">
                  Glass Depth
                </span>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-3 xl:grid-cols-1">
              {profile.quickFacts.map((fact) => (
                <div
                  key={fact.label}
                  data-hero-card
                  className="glass-panel rounded-[22px] p-4 sm:rounded-[24px] sm:p-5"
                >
                  <p className="text-xs uppercase tracking-[0.24em] text-white/42 sm:tracking-[0.28em]">
                    {fact.label}
                  </p>
                  <p className="mt-3 text-base font-semibold leading-6 text-white sm:text-lg sm:leading-7">
                    {fact.value}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="relative lg:pl-4" data-hero-stage>
          <div className="hero-stage-shell glass-panel relative overflow-hidden rounded-[28px] p-2.5 sm:rounded-[36px] sm:p-3 md:p-4">
            <div className="stage-grid absolute inset-0 opacity-55" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.18),transparent_30%)]" />
            <div className="absolute -right-10 top-8 h-44 w-44 rounded-full bg-fuchsia-400/20 blur-3xl" />
            <div className="absolute -left-12 bottom-8 h-44 w-44 rounded-full bg-cyan-400/14 blur-3xl" />

            <div className="hero-stage relative min-h-[430px] overflow-hidden rounded-[24px] border border-white/12 bg-[#110329]/92 sm:min-h-[520px] sm:rounded-[32px] lg:min-h-[560px]">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_25%,rgba(168,85,247,0.16),transparent_32%),radial-gradient(circle_at_62%_68%,rgba(103,232,249,0.12),transparent_26%)]" />
              <div className="hero-video-noise pointer-events-none absolute inset-0 opacity-55" />
              <div className="hero-scan-beam pointer-events-none absolute inset-x-4 -top-14 h-24 sm:inset-x-6" />
              <div
                className="hero-scan-beam pointer-events-none absolute inset-x-8 top-[36%] h-[4.5rem] opacity-45 sm:inset-x-12"
                style={{ animationDelay: "-3.2s" }}
              />
              <HeroCanvas />

              <div
                data-stage-chip
                className="pointer-events-none absolute right-3 top-3 inline-flex items-center gap-2 rounded-full border border-white/12 bg-[#12032a]/78 px-3 py-1.5 text-[10px] font-medium uppercase tracking-[0.18em] text-white/68 backdrop-blur-xl sm:right-5 sm:top-5 sm:px-4 sm:py-2 sm:text-xs sm:tracking-[0.26em]"
              >
                <Link2 className="h-3.5 w-3.5 text-cyan-300 sm:h-4 sm:w-4" />
                <span className="hidden min-[360px]:inline">Live 3D System</span>
                <span className="min-[360px]:hidden">3D Live</span>
              </div>

              <div data-stage-panel className="pointer-events-none absolute left-5 top-[13%] hidden lg:block">
                <div className="hud-float-inner">
                  <div className="radar-widget">
                    <div className="radar-grid-overlay absolute inset-0" />
                    <div className="radar-sweep absolute inset-[-14%]" />
                    <span className="radar-axis radar-axis-horizontal" />
                    <span className="radar-axis radar-axis-vertical" />
                    <span className="radar-ring radar-ring-inner" />
                    <span className="radar-ring radar-ring-mid" />
                    <span className="radar-ring radar-ring-outer" />
                    {radarBlips.map((blip) => (
                      <span
                        key={`${blip.left}-${blip.top}`}
                        className="radar-blip"
                        style={{ left: blip.left, top: blip.top, animationDelay: blip.delay }}
                      />
                    ))}
                    <span className="radar-core" />
                  </div>

                  <div className="mt-3 max-w-[230px] rounded-[22px] border border-white/12 bg-[#12032a]/74 p-4 backdrop-blur-xl">
                    <p className="text-[10px] uppercase tracking-[0.3em] text-white/42">Signal Radar</p>
                    <p className="mt-2 text-xs leading-6 text-white/72">
                      Autonomous sweep layers keep the hero active even when the user is idle.
                    </p>
                  </div>
                </div>
              </div>

              <div
                data-stage-panel
                className="pointer-events-none absolute right-6 top-[24%] hidden w-[240px] lg:block"
              >
                <div className="hud-float-inner hud-float-inner-delayed rounded-[22px] border border-white/12 bg-[#150433]/74 p-4 backdrop-blur-xl">
                  <div className="flex items-center justify-between gap-3">
                    <p className="text-xs uppercase tracking-[0.28em] text-white/42">Neural Feed</p>
                    <span className="rounded-full border border-white/10 bg-white/[0.05] px-2 py-1 text-[10px] uppercase tracking-[0.22em] text-white/56">
                      Live
                    </span>
                  </div>

                  <div className="mt-4 space-y-3">
                    {neuralFeed.map((item, index) => (
                      <div key={item.label} className="space-y-2">
                        <div className="flex items-center justify-between text-[11px] uppercase tracking-[0.24em] text-white/46">
                          <span>{item.label}</span>
                          <span>{item.level}%</span>
                        </div>
                        <div className="signal-feed-bar">
                          <span
                            className="signal-feed-fill"
                            style={{ width: `${item.level}%`, animationDelay: `${index * 0.4}s` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div
                data-stage-panel
                className="pointer-events-none absolute inset-x-4 bottom-4 sm:left-6 sm:right-auto sm:bottom-6 sm:max-w-[280px]"
              >
                <div className="rounded-[22px] border border-white/12 bg-[#12032a]/74 p-4 backdrop-blur-xl sm:rounded-[26px] sm:p-5">
                  <p className="text-xs uppercase tracking-[0.24em] text-white/42 sm:tracking-[0.3em]">
                    Signal Stream
                  </p>
                  <div className="mt-3 space-y-2.5 sm:mt-4 sm:space-y-3">
                    {signalStream.map((item, index) => (
                      <div key={item} className="flex items-center gap-3">
                        <span className="live-pulse-dot" style={{ animationDelay: `${index * 0.4}s` }} />
                        <span className="text-xs text-white/74 sm:text-sm">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="pointer-events-none absolute bottom-6 right-6 hidden gap-3 md:grid md:max-w-[52%] md:grid-cols-3">
                {stageMetrics.map((metric) => (
                  <div
                    key={metric.label}
                    data-stage-panel
                    className="rounded-[20px] border border-white/12 bg-[#12032a]/74 px-4 py-3 backdrop-blur-xl"
                  >
                    <p className="text-[11px] uppercase tracking-[0.24em] text-white/42">{metric.label}</p>
                    <p className="mt-2 text-sm font-semibold text-white">{metric.value}</p>
                  </div>
                ))}
              </div>

              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-[#110329] via-[#110329]/72 to-transparent" />
              <div className="pointer-events-none absolute left-0 top-0 h-full w-20 bg-gradient-to-r from-[#110329]/72 to-transparent sm:w-32" />
            </div>

            <div className="mt-4 grid gap-3 md:hidden">
              <div className="grid gap-3 sm:grid-cols-3">
                {stageMetrics.map((metric) => (
                  <div
                    key={metric.label}
                    className="rounded-[18px] border border-white/10 bg-white/[0.04] px-4 py-3 backdrop-blur-xl"
                  >
                    <p className="text-[10px] uppercase tracking-[0.22em] text-white/42">{metric.label}</p>
                    <p className="mt-2 text-sm font-semibold text-white">{metric.value}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-4 flex flex-col gap-4 rounded-[20px] border border-white/10 bg-white/[0.04] px-4 py-4 sm:flex-row sm:items-center sm:justify-between sm:rounded-[24px] sm:px-5">
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-2xl border border-white/12 bg-white/[0.07] text-white">
                  <MapPin className="h-4 w-4 text-cyan-300" />
                </span>
                <div>
                  <p className="text-xs uppercase tracking-[0.24em] text-white/42 sm:tracking-[0.28em]">Base</p>
                  <p className="mt-1 text-sm font-semibold text-white">{profile.location}</p>
                </div>
              </div>

              <div className="sm:text-right">
                <p className="text-xs uppercase tracking-[0.24em] text-white/42 sm:tracking-[0.28em]">Focus</p>
                <p className="mt-1 text-sm font-semibold text-white">Immersive frontend systems</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
