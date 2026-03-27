const ribbonItems = [
  "GLSL",
  "Three.js",
  "GSAP",
  "ScrollTrigger",
  "Spatial UI",
  "Premium Motion",
];

export function MotionRibbon() {
  const content = [...ribbonItems, ...ribbonItems];

  return (
    <section className="section-shell py-6 md:py-8" aria-hidden="true">
      <div className="overflow-hidden rounded-[30px] border border-white/10 bg-white/[0.04] px-4 py-5 backdrop-blur-xl md:px-6">
        <div
          data-ribbon-track
          className="flex min-w-max items-center gap-6 whitespace-nowrap text-[clamp(2.5rem,7vw,5.5rem)] font-semibold uppercase leading-none tracking-[-0.06em] text-white/16"
        >
          {content.map((item, index) => (
            <span key={`${item}-${index}`} className="flex items-center gap-6">
              <span>{item}</span>
              <span className="h-3 w-3 rounded-full bg-fuchsia-300/55" />
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
