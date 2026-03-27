"use client";

import { useEffect, useRef } from "react";

const palette = [
  [215, 190, 255],
  [116, 225, 255],
  [255, 159, 214],
];

const emitterSeeds = [
  {
    xFactor: 0.76,
    yFactor: 0.28,
    radiusDesktop: 260,
    radiusMobile: 176,
    color: [116, 225, 255],
    speed: 0.38,
    offset: 0.4,
    driftX: 18,
    driftY: 12,
  },
  {
    xFactor: 0.18,
    yFactor: 0.72,
    radiusDesktop: 190,
    radiusMobile: 132,
    color: [255, 159, 214],
    speed: -0.26,
    offset: 2.1,
    driftX: 14,
    driftY: 10,
  },
];

function normalizeAngle(angle) {
  return Math.atan2(Math.sin(angle), Math.cos(angle));
}

export function InteractiveDotBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;

    if (!canvas) {
      return undefined;
    }

    const context = canvas.getContext("2d", { alpha: true });
    if (!context) {
      return undefined;
    }

    let animationFrame = 0;
    let width = 0;
    let height = 0;
    let dots = [];
    let emitters = [];
    let time = 0;
    const pointer = {
      x: 0,
      y: 0,
      active: false,
    };

    const buildDots = () => {
      const spacing = width < 768 ? 34 : 40;
      dots = [];

      for (let y = spacing / 2; y < height + spacing; y += spacing) {
        for (let x = spacing / 2; x < width + spacing; x += spacing) {
          dots.push({
            baseX: x,
            baseY: y,
            seed: Math.random() * Math.PI * 2,
            amplitudeX: 1.5 + Math.random() * 4.5,
            amplitudeY: 1.5 + Math.random() * 5,
            velocity: 0.22 + Math.random() * 0.35,
            color: palette[(Math.floor(x / spacing) + Math.floor(y / spacing)) % palette.length],
          });
        }
      }

      emitters = emitterSeeds.map((emitter) => ({
        ...emitter,
        x: width * emitter.xFactor,
        y: height * emitter.yFactor,
        radius: width < 768 ? emitter.radiusMobile : emitter.radiusDesktop,
      }));
    };

    const resize = () => {
      const dpr = window.devicePixelRatio || 1;
      width = window.innerWidth;
      height = window.innerHeight;

      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      context.setTransform(dpr, 0, 0, dpr, 0, 0);

      if (!pointer.active) {
        pointer.x = width * 0.68;
        pointer.y = height * 0.34;
      }

      buildDots();
    };

    const onMove = (event) => {
      pointer.x = event.clientX;
      pointer.y = event.clientY;
      pointer.active = true;
    };

    const onLeave = () => {
      pointer.active = false;
    };

    const drawEmitter = (emitter, elapsed) => {
      const x = emitter.x + Math.sin(elapsed * 0.22 + emitter.offset) * emitter.driftX;
      const y = emitter.y + Math.cos(elapsed * 0.18 + emitter.offset) * emitter.driftY;
      const sweepAngle = elapsed * emitter.speed + emitter.offset;
      const [r, g, b] = emitter.color;

      context.save();
      context.translate(x, y);

      for (let ring = 1; ring <= 4; ring += 1) {
        const ringRadius = (emitter.radius / 4) * ring;
        context.beginPath();
        context.strokeStyle = `rgba(${r}, ${g}, ${b}, ${0.035 + ring * 0.012})`;
        context.lineWidth = 1;
        context.arc(0, 0, ringRadius, 0, Math.PI * 2);
        context.stroke();
      }

      context.beginPath();
      context.strokeStyle = `rgba(${r}, ${g}, ${b}, 0.18)`;
      context.moveTo(-emitter.radius, 0);
      context.lineTo(emitter.radius, 0);
      context.moveTo(0, -emitter.radius);
      context.lineTo(0, emitter.radius);
      context.stroke();

      const beamGradient = context.createRadialGradient(0, 0, emitter.radius * 0.08, 0, 0, emitter.radius);
      beamGradient.addColorStop(0, `rgba(${r}, ${g}, ${b}, 0.2)`);
      beamGradient.addColorStop(0.42, `rgba(${r}, ${g}, ${b}, 0.1)`);
      beamGradient.addColorStop(1, `rgba(${r}, ${g}, ${b}, 0)`);
      context.fillStyle = beamGradient;
      context.beginPath();
      context.moveTo(0, 0);
      context.arc(0, 0, emitter.radius, sweepAngle - 0.18, sweepAngle + 0.18);
      context.closePath();
      context.fill();

      context.beginPath();
      context.fillStyle = `rgba(${r}, ${g}, ${b}, 0.55)`;
      context.arc(0, 0, 4.5, 0, Math.PI * 2);
      context.fill();

      context.restore();

      return {
        x,
        y,
        radius: emitter.radius,
        sweepAngle,
        color: emitter.color,
      };
    };

    const render = () => {
      time += 0.014;
      context.clearRect(0, 0, width, height);

      if (!pointer.active) {
        const idleX = width * 0.66 + Math.sin(time * 0.42) * width * 0.1;
        const idleY = height * 0.32 + Math.cos(time * 0.34) * height * 0.06;
        pointer.x += (idleX - pointer.x) * 0.025;
        pointer.y += (idleY - pointer.y) * 0.025;
      }

      const emitterStates = emitters.map((emitter) => drawEmitter(emitter, time));
      const activeNodes = [];

      dots.forEach((dot, index) => {
        const x = dot.baseX + Math.sin(time * dot.velocity + dot.seed) * dot.amplitudeX;
        const y = dot.baseY + Math.cos(time * (dot.velocity * 0.92) + dot.seed * 1.3) * dot.amplitudeY;
        const dx = pointer.x - x;
        const dy = pointer.y - y;
        const distance = Math.hypot(dx, dy);
        const influence = Math.max(0, 1 - distance / 240);
        const wave = 0.5 + 0.5 * Math.sin(time * 1.8 + dot.seed + index * 0.002);
        const driftX = distance > 0 ? (dx / distance) * influence * 11 : 0;
        const driftY = distance > 0 ? (dy / distance) * influence * 11 : 0;
        let radarBoost = 0;

        for (const emitter of emitterStates) {
          const emitterDx = x - emitter.x;
          const emitterDy = y - emitter.y;
          const emitterDistance = Math.hypot(emitterDx, emitterDy);

          if (emitterDistance > emitter.radius) {
            continue;
          }

          const angle = Math.atan2(emitterDy, emitterDx);
          const angleDifference = Math.abs(normalizeAngle(angle - emitter.sweepAngle));
          const sweepStrength =
            Math.max(0, 1 - angleDifference / 0.34) * Math.pow(1 - emitterDistance / emitter.radius, 1.2);

          radarBoost = Math.max(radarBoost, sweepStrength);
        }

        const size = 1 + wave * 0.8 + influence * 6.6 + radarBoost * 5.5;
        const alpha = 0.06 + wave * 0.06 + influence * 0.34 + radarBoost * 0.48;
        const [r, g, b] = dot.color;

        context.fillStyle = `rgba(${r}, ${g}, ${b}, ${alpha})`;
        context.fillRect(x + driftX - size / 2, y + driftY - size / 2, size, size);

        if ((radarBoost > 0.55 || influence > 0.48) && activeNodes.length < 56) {
          activeNodes.push({
            x: x + driftX,
            y: y + driftY,
            alpha: Math.max(radarBoost, influence),
          });
        }
      });

      for (let index = 0; index < activeNodes.length; index += 1) {
        const source = activeNodes[index];

        for (let next = index + 1; next < Math.min(activeNodes.length, index + 5); next += 1) {
          const target = activeNodes[next];
          const distance = Math.hypot(source.x - target.x, source.y - target.y);

          if (distance > 88) {
            continue;
          }

          context.beginPath();
          context.strokeStyle = `rgba(170, 220, 255, ${0.04 + Math.min(source.alpha, target.alpha) * 0.18})`;
          context.lineWidth = 1;
          context.moveTo(source.x, source.y);
          context.lineTo(target.x, target.y);
          context.stroke();
        }
      }

      const pointerGlow = context.createRadialGradient(pointer.x, pointer.y, 0, pointer.x, pointer.y, 180);
      pointerGlow.addColorStop(0, "rgba(255,255,255,0.12)");
      pointerGlow.addColorStop(0.35, "rgba(116,225,255,0.08)");
      pointerGlow.addColorStop(1, "rgba(116,225,255,0)");
      context.fillStyle = pointerGlow;
      context.fillRect(pointer.x - 180, pointer.y - 180, 360, 360);

      animationFrame = window.requestAnimationFrame(render);
    };

    resize();
    render();

    window.addEventListener("resize", resize);
    window.addEventListener("pointermove", onMove, { passive: true });
    window.addEventListener("pointerleave", onLeave);
    window.addEventListener("blur", onLeave);

    return () => {
      window.cancelAnimationFrame(animationFrame);
      window.removeEventListener("resize", resize);
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerleave", onLeave);
      window.removeEventListener("blur", onLeave);
    };
  }, []);

  return <canvas ref={canvasRef} className="pointer-events-none absolute inset-0 h-full w-full opacity-80 mix-blend-screen" />;
}
