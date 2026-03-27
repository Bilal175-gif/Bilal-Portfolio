"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export function AnimatedTextLoop({ items, className = "" }) {
  const textRef = useRef(null);

  useEffect(() => {
    const element = textRef.current;

    if (!element || !items?.length) {
      return undefined;
    }

    let index = 0;

    const timeline = gsap.timeline({ repeat: -1, repeatDelay: 0.2 });

    timeline
      .fromTo(
        element,
        { y: 22, autoAlpha: 0 },
        { y: 0, autoAlpha: 1, duration: 0.7, ease: "power3.out" }
      )
      .to(element, {
        y: -22,
        autoAlpha: 0,
        duration: 0.45,
        delay: 1.3,
        ease: "power3.in",
        onComplete: () => {
          index = (index + 1) % items.length;
          element.textContent = items[index];
        },
      });

    return () => {
      timeline.kill();
    };
  }, [items]);

  return (
    <span className={`relative inline-flex overflow-hidden align-middle ${className}`}>
      <span ref={textRef} className="block will-change-transform">
        {items[0]}
      </span>
    </span>
  );
}
