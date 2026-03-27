import { InteractiveDotBackground } from "@/components/interactive-dot-background";

export function PortfolioBackdrop() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <InteractiveDotBackground />
      <div className="scanline-layer absolute inset-0 opacity-30" />
      <div className="ambient-radar-sweep absolute inset-[-18%] opacity-45" />
      <div className="ambient-radar-sweep ambient-radar-sweep-secondary absolute inset-[-18%] opacity-35" />
      <div className="float-slow absolute left-[-10%] top-[10%] h-72 w-72 rounded-full bg-fuchsia-500/16 blur-3xl" />
      <div className="float-slower absolute right-[-8%] top-[18%] h-96 w-96 rounded-full bg-cyan-400/12 blur-3xl" />
      <div className="glow-pulse absolute bottom-[12%] left-[20%] h-80 w-80 rounded-full bg-violet-500/12 blur-[140px]" />
      <div className="ambient-vignette absolute inset-0" />
      <div className="absolute inset-x-0 top-0 h-px bg-white/8" />
      <div className="absolute inset-y-0 left-1/2 w-px bg-gradient-to-b from-transparent via-white/10 to-transparent opacity-30" />
    </div>
  );
}
