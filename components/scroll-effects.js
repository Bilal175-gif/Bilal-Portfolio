"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function ScrollEffects() {
  useGSAP(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const mm = gsap.matchMedia();

    ScrollTrigger.config({ ignoreMobileResize: true });

    const heroTimeline = gsap.timeline({
      defaults: {
        duration: 1,
        ease: "power3.out",
      },
    });

    heroTimeline
      .from("[data-hero-badge]", { autoAlpha: 0, y: 22, scale: 0.94 })
      .from("[data-hero-kicker]", { autoAlpha: 0, y: 24 }, "-=0.72")
      .from("[data-hero-title]", { autoAlpha: 0, yPercent: 110, stagger: 0.1 }, "-=0.64")
      .from("[data-hero-copy]", { autoAlpha: 0, y: 34, filter: "blur(12px)" }, "-=0.58")
      .from("[data-hero-actions]", { autoAlpha: 0, y: 28 }, "-=0.52")
      .from("[data-hero-card]", { autoAlpha: 0, y: 40, scale: 0.95, stagger: 0.08 }, "-=0.45")
      .from(
        "[data-hero-stage]",
        { autoAlpha: 0, scale: 0.92, rotateY: -8, transformOrigin: "center center" },
        "-=1.0"
      )
      .from("[data-stage-chip]", { autoAlpha: 0, y: -18, x: 18, scale: 0.9 }, "-=0.78")
      .from(
        "[data-stage-panel]",
        {
          autoAlpha: 0,
          y: 24,
          x: (index) => (index % 2 === 0 ? -18 : 18),
          scale: 0.92,
          stagger: 0.07,
        },
        "-=0.72"
      );

    gsap.utils.toArray("[data-reveal]").forEach((element) => {
      gsap.from(element, {
        autoAlpha: 0,
        y: 72,
        scale: 0.96,
        filter: "blur(12px)",
        duration: 1.05,
        ease: "power3.out",
        scrollTrigger: {
          trigger: element,
          start: "top 82%",
          once: true,
        },
      });
    });

    gsap.utils.toArray("[data-meter-fill]").forEach((element) => {
      gsap.fromTo(
        element,
        { scaleX: 0 },
        {
          scaleX: 1,
          duration: 1.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: element,
            start: "top 92%",
            once: true,
          },
        }
      );
    });

    const progressLine = document.querySelector("[data-progress-line]");
    if (progressLine) {
      gsap.set(progressLine, { transformOrigin: "left center", scaleX: 0 });

      ScrollTrigger.create({
        start: 0,
        end: "max",
        onUpdate: (self) => {
          gsap.to(progressLine, {
            scaleX: self.progress,
            overwrite: true,
            duration: 0.18,
            ease: "power2.out",
          });
        },
      });
    }

    const ribbonTrack = document.querySelector("[data-ribbon-track]");
    if (ribbonTrack) {
      gsap.fromTo(
        ribbonTrack,
        { xPercent: 0 },
        {
          xPercent: -18,
          ease: "none",
          scrollTrigger: {
            trigger: ribbonTrack,
            start: "top bottom",
            end: "bottom top",
            scrub: prefersReducedMotion ? false : 1.2,
          },
        }
      );
    }

    const skillSummary = document.querySelector("[data-skill-summary]");
    if (skillSummary) {
      gsap.from(skillSummary.children, {
        autoAlpha: 0,
        y: 48,
        scale: 0.96,
        stagger: 0.08,
        duration: 0.95,
        ease: "power3.out",
        scrollTrigger: {
          trigger: skillSummary,
          start: "top 84%",
          once: true,
        },
      });
    }

    gsap.utils.toArray("[data-skill-card]").forEach((card, index) => {
      gsap.from(card, {
        autoAlpha: 0,
        y: 72,
        scale: 0.94,
        rotateX: index % 2 === 0 ? 7 : -7,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: card,
          start: "top 84%",
          once: true,
        },
      });
    });

    mm.add("(min-width: 1024px)", () => {
      if (!prefersReducedMotion) {
        const heroScrub = gsap.timeline({
          scrollTrigger: {
            trigger: "#home",
            start: "top top",
            end: "bottom top",
            scrub: 1.1,
          },
        });

        heroScrub
          .to("[data-hero-copy-block]", { yPercent: -8 }, 0)
          .to(
            "[data-hero-stage]",
            {
              yPercent: 14,
              scale: 0.95,
              rotateY: -8,
              rotateX: 4,
              transformOrigin: "center center",
            },
            0
          )
          .to(
            "[data-stage-panel]",
            {
              yPercent: (index) => (index % 2 === 0 ? 12 : -14),
              xPercent: (index) => (index % 2 === 0 ? -4 : 4),
            },
            0
          )
          .to(
            "[data-hero-card]",
            {
              yPercent: (index) => index * 4 - 4,
            },
            0
          );
      }

      gsap.utils.toArray("[data-project-card]").forEach((card, index) => {
        gsap.from(card, {
          autoAlpha: 0,
          y: 80,
          rotateX: 8,
          rotateY: index % 2 === 0 ? -5 : 5,
          scale: 0.95,
          duration: 1.05,
          ease: "power3.out",
          scrollTrigger: {
            trigger: card,
            start: "top 84%",
            once: true,
          },
        });
      });
    });

    mm.add("(max-width: 1023px)", () => {
      gsap.to("[data-hero-stage]", {
        yPercent: 8,
        ease: "none",
        scrollTrigger: {
          trigger: "#home",
          start: "top top",
          end: "bottom top",
          scrub: prefersReducedMotion ? false : 1,
        },
      });
    });

    const experienceLine = document.querySelector("[data-experience-line]");
    if (experienceLine) {
      gsap.fromTo(
        experienceLine,
        { scaleY: 0 },
        {
          scaleY: 1,
          ease: "none",
          scrollTrigger: {
            trigger: "#experience",
            start: "top 72%",
            end: "bottom 70%",
            scrub: true,
          },
        }
      );
    }

    return () => {
      mm.revert();
    };
  }, []);

  return null;
}
