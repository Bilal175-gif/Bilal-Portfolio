import { cn } from "@/lib/utils";

export function SectionHeading({ eyebrow, title, description, align = "left", className }) {
  const centered = align === "center";

  return (
    <div
      className={cn(
        "mb-10 max-w-3xl md:mb-12",
        centered && "mx-auto text-center",
        className
      )}
      data-reveal
    >
      <span className="soft-label inline-flex rounded-full px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.24em] text-white/70 sm:px-4 sm:py-2 sm:text-xs sm:tracking-[0.28em]">
        {eyebrow}
      </span>
      <h2 className="mt-5 text-3xl font-semibold leading-[1.02] text-white sm:text-4xl md:text-5xl">
        {title}
      </h2>
      <p className="mt-4 max-w-2xl text-sm leading-7 text-white/66 sm:text-base md:text-lg">
        {description}
      </p>
    </div>
  );
}
