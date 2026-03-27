"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

import headerAvatar from "@/src/assets/imp.jpeg";
import { cn } from "@/lib/utils";

export function SiteHeader({ navigation, name }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const overlayRef = useRef(null);
  const panelRef = useRef(null);
  const footerRef = useRef(null);
  const itemRefs = useRef([]);
  const timelineRef = useRef(null);

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 24);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    itemRefs.current = itemRefs.current.slice(0, navigation.length);
  }, [navigation.length]);

  useEffect(() => {
    if (!overlayRef.current || !panelRef.current) {
      return undefined;
    }

    if (!timelineRef.current) {
      gsap.set(overlayRef.current, { autoAlpha: 0, pointerEvents: "none" });
      gsap.set(itemRefs.current, { autoAlpha: 0, y: 32 });
      gsap.set(footerRef.current, { autoAlpha: 0, y: 24 });

      timelineRef.current = gsap.timeline({
        paused: true,
        onStart: () => {
          gsap.set(overlayRef.current, { pointerEvents: "auto" });
        },
        onReverseComplete: () => {
          gsap.set(overlayRef.current, { pointerEvents: "none" });
        },
      });

      timelineRef.current
        .to(overlayRef.current, {
          autoAlpha: 1,
          duration: 0.18,
          ease: "power2.out",
        })
        .fromTo(
          panelRef.current,
          {
            clipPath: "inset(0 0 100% 0 round 34px)",
            y: -32,
          },
          {
            clipPath: "inset(0 0 0% 0 round 34px)",
            y: 0,
            duration: 0.86,
            ease: "power4.out",
          },
          0
        )
        .to(
          itemRefs.current,
          {
            autoAlpha: 1,
            y: 0,
            stagger: 0.08,
            duration: 0.62,
            ease: "power3.out",
          },
          0.18
        )
        .to(
          footerRef.current,
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.56,
            ease: "power3.out",
          },
          0.32
        );
    }

    if (isMenuOpen) {
      document.documentElement.style.overflow = "hidden";
      document.body.style.overflow = "hidden";
      timelineRef.current.play();
    } else {
      document.documentElement.style.overflow = "";
      document.body.style.overflow = "";
      timelineRef.current.reverse();
    }

    return () => {
      document.documentElement.style.overflow = "";
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  return (
    <>
      <header className="pointer-events-none fixed inset-x-0 top-0 z-40">
        <div
          data-progress-line
          className="h-[2px] origin-left scale-x-0 bg-gradient-to-r from-fuchsia-400 via-violet-300 to-cyan-300"
        />
        <div className="section-shell pt-3 sm:pt-5">
          <div
            className={cn(
              "pointer-events-auto flex items-center justify-between gap-3 rounded-[24px] border px-3 py-2.5 sm:gap-4 sm:rounded-[28px] sm:px-4 sm:py-3 md:px-5",
              isScrolled
                ? "border-white/16 bg-[#14042f]/82 shadow-[0_22px_50px_rgba(5,2,18,0.38)] backdrop-blur-2xl"
                : "border-white/12 bg-white/[0.05] backdrop-blur-xl"
            )}
          >
            <Link href="#home" className="flex min-w-0 items-center gap-2.5 sm:gap-3">
              <span className="relative flex h-9 w-9 shrink-0 items-center justify-center overflow-hidden rounded-full border border-white/14 bg-white/[0.07] text-white shadow-[0_0_0_1px_rgba(255,255,255,0.04),0_10px_28px_rgba(8,2,26,0.24)] sm:h-10 sm:w-10">
                <Image
                  src={headerAvatar}
                  alt={`${name} avatar`}
                  fill
                  sizes="40px"
                  className="object-cover"
                  priority
                />
                <span className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.22),transparent_34%)]" />
              </span>
              <div className="min-w-0">
                <p className="truncate text-xs font-semibold text-white sm:text-sm">{name}</p>
                <p className="hidden text-[10px] uppercase tracking-[0.18em] text-white/45 min-[360px]:block sm:text-xs sm:tracking-[0.24em]">
                  Portfolio
                </p>
              </div>
            </Link>

            <div className="hidden rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-xs uppercase tracking-[0.28em] text-white/58 md:block">
              Immersive frontend systems
            </div>

            <button
              type="button"
              onClick={() => setIsMenuOpen((current) => !current)}
              aria-expanded={isMenuOpen}
              aria-label="Toggle navigation menu"
              className="group inline-flex shrink-0 items-center gap-2 rounded-full border border-white/15 bg-white/[0.07] px-3 py-2 text-sm font-medium text-white hover:bg-white/[0.12] sm:gap-3 sm:px-4 sm:py-2.5"
            >
              <span className="hidden text-[11px] uppercase tracking-[0.18em] text-white/66 min-[390px]:inline sm:text-xs sm:tracking-[0.24em]">
                {isMenuOpen ? "Close" : "Menu"}
              </span>
              <span className="relative flex h-8 w-8 items-center justify-center rounded-full border border-white/12 bg-black/20 sm:h-9 sm:w-9">
                <span
                  className={cn(
                    "absolute h-[2px] w-4 rounded-full bg-white transition duration-300",
                    isMenuOpen ? "translate-y-0 rotate-45" : "-translate-y-[5px]"
                  )}
                />
                <span
                  className={cn(
                    "absolute h-[2px] w-4 rounded-full bg-white transition duration-300",
                    isMenuOpen ? "opacity-0" : "opacity-100"
                  )}
                />
                <span
                  className={cn(
                    "absolute h-[2px] w-4 rounded-full bg-white transition duration-300",
                    isMenuOpen ? "translate-y-0 -rotate-45" : "translate-y-[5px]"
                  )}
                />
              </span>
            </button>
          </div>
        </div>
      </header>

      <div ref={overlayRef} className="pointer-events-none fixed inset-0 z-[90] bg-[#070111]/58 backdrop-blur-xl">
        <div className="section-shell flex min-h-screen items-start pt-20 sm:pt-24">
          <div
            ref={panelRef}
            className="menu-grid relative w-full overflow-hidden rounded-[28px] border border-white/12 bg-[#0c021c]/94 p-5 shadow-[0_40px_120px_rgba(3,1,15,0.62)] sm:rounded-[34px] sm:p-6 md:p-8"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(168,85,247,0.18),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(103,232,249,0.12),transparent_22%)]" />

            <div className="relative grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
              <div>
                <p className="text-xs uppercase tracking-[0.32em] text-white/40">Navigation</p>
                <h2 className="mt-4 max-w-md text-3xl font-semibold leading-[0.95] text-white sm:text-4xl md:text-6xl">
                  Open the portfolio map and move with intent.
                </h2>
              </div>

              <nav className="grid gap-3">
                {navigation.map((item, index) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    ref={(element) => {
                      itemRefs.current[index] = element;
                    }}
                    onClick={() => setIsMenuOpen(false)}
                    className="group flex items-center justify-between gap-3 rounded-[20px] border border-white/10 bg-white/[0.04] px-4 py-4 text-white/78 hover:bg-white/[0.08] hover:text-white sm:rounded-[24px] sm:px-5"
                  >
                    <span className="text-xs uppercase tracking-[0.3em] text-white/38">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="text-right text-xl font-semibold tracking-[-0.04em] sm:text-2xl">{item.label}</span>
                    <ArrowUpRight className="h-5 w-5 transition duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" />
                  </Link>
                ))}
              </nav>
            </div>

            <div
              ref={footerRef}
              className="relative mt-8 flex flex-col gap-4 rounded-[28px] border border-white/10 bg-white/[0.04] p-5 md:flex-row md:items-center md:justify-between"
            >
              <div>
                <p className="text-xs uppercase tracking-[0.28em] text-white/40">Direct Contact</p>
                <p className="mt-2 text-sm leading-7 text-white/66">
                  Open the project sections or jump straight to LinkedIn from the contact block.
                </p>
              </div>

              <Link
                href="#contact"
                onClick={() => setIsMenuOpen(false)}
                className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-[#13032b] hover:bg-white/90"
              >
                Open Contact
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
