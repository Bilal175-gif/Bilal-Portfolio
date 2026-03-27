"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

export function PageLoader() {
  const rootRef = useRef(null);
  const barRef = useRef(null);
  const [progress, setProgress] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    if (!rootRef.current || !barRef.current) {
      return undefined;
    }

    const value = { current: 0 };
    const htmlOverflow = document.documentElement.style.overflow;
    const bodyOverflow = document.body.style.overflow;

    document.documentElement.style.overflow = "hidden";
    document.body.style.overflow = "hidden";

    const ctx = gsap.context(() => {
      gsap.set(barRef.current, { scaleX: 0, transformOrigin: "left center" });
      gsap.set("[data-loader-copy]", { y: 26, autoAlpha: 0 });

      const timeline = gsap.timeline({
        defaults: {
          ease: "power3.out",
        },
      });

      timeline
        .to("[data-loader-copy]", {
          y: 0,
          autoAlpha: 1,
          stagger: 0.08,
          duration: 0.7,
        })
        .to(
          value,
          {
            current: 100,
            duration: 1.9,
            ease: "power2.inOut",
            onUpdate: () => {
              setProgress(Math.round(value.current));
            },
          },
          0.1
        )
        .to(
          barRef.current,
          {
            scaleX: 1,
            duration: 1.9,
            ease: "power2.inOut",
          },
          0.1
        )
        .to(
          rootRef.current,
          {
            yPercent: -100,
            duration: 1.05,
            ease: "power4.inOut",
            delay: 0.12,
            onComplete: () => {
              document.documentElement.style.overflow = htmlOverflow;
              document.body.style.overflow = bodyOverflow;
              setIsComplete(true);
            },
          }
        );
    }, rootRef);

    return () => {
      document.documentElement.style.overflow = htmlOverflow;
      document.body.style.overflow = bodyOverflow;
      ctx.revert();
    };
  }, []);

  if (isComplete) {
    return null;
  }

  return (
    <div
      ref={rootRef}
      className="loader-grid fixed inset-0 z-[120] overflow-hidden bg-[#090114] text-white"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_15%,rgba(168,85,247,0.22),transparent_24%),radial-gradient(circle_at_80%_20%,rgba(103,232,249,0.15),transparent_18%),linear-gradient(180deg,#110222_0%,#090114_100%)]" />
      <div className="absolute left-[12%] top-[14%] h-48 w-48 rounded-full bg-fuchsia-500/18 blur-3xl" />
      <div className="absolute bottom-[16%] right-[10%] h-56 w-56 rounded-full bg-cyan-400/14 blur-3xl" />

      <div className="relative flex h-full flex-col justify-between px-6 py-8 md:px-10 md:py-10">
        <div className="flex items-center justify-between text-xs uppercase tracking-[0.34em] text-white/42">
          <span data-loader-copy>Initializing portfolio system</span>
          <span data-loader-copy>{String(progress).padStart(3, "0")}%</span>
        </div>

        <div className="mx-auto flex w-full max-w-6xl items-end justify-between gap-6">
          <div className="max-w-xl">
            <p
              data-loader-copy
              className="text-[clamp(3.8rem,11vw,9rem)] font-semibold leading-[0.88] tracking-[-0.07em] text-white"
            >
              {String(progress).padStart(3, "0")}
            </p>
            <p
              data-loader-copy
              className="mt-4 max-w-md text-sm uppercase tracking-[0.26em] text-white/52 md:text-base"
            >
              Loading shader surfaces, motion layers, and interactive background systems
            </p>
          </div>

          <div className="hidden max-w-sm md:block">
            <p data-loader-copy className="text-sm leading-7 text-white/58">
              A premium 3D portfolio should enter with intent. This preload overlay now gives the
              site a deliberate opening sequence instead of a plain content flash.
            </p>
          </div>
        </div>

        <div className="relative">
          <div className="h-px w-full bg-white/10" />
          <div ref={barRef} className="absolute inset-y-0 left-0 h-px w-full bg-gradient-to-r from-fuchsia-400 via-violet-300 to-cyan-300" />
        </div>
      </div>
    </div>
  );
}
