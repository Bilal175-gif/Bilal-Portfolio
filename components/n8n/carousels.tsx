"use client";

import {
  ArrowRight,
  Check,
  ChevronLeft,
  ChevronRight,
  ShieldCheck,
} from "lucide-react";
import { useCallback, useRef, useState } from "react";

export type WorkflowSlide = {
  readonly id: string;
  readonly eyebrow: string;
  readonly title: string;
  readonly description: string;
  readonly steps: readonly string[];
  readonly integrations: readonly string[];
  readonly accent: "orange" | "violet" | "blue" | "amber" | "red" | "cyan";
};

export type ClientExpectation = {
  readonly id: string;
  readonly number: string;
  readonly title: string;
  readonly description: string;
  readonly proof: string;
};

function nextIndex(current: number, length: number, direction: 1 | -1) {
  return (current + direction + length) % length;
}

export function WorkflowCarousel({ slides }: { slides: readonly WorkflowSlide[] }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const touchStart = useRef<number | null>(null);
  const activeSlide = slides[activeIndex];

  const move = useCallback(
    (direction: 1 | -1) => {
      setActiveIndex((current) => nextIndex(current, slides.length, direction));
    },
    [slides.length],
  );

  if (!activeSlide) {
    return null;
  }

  return (
    <div
      className="n8n-workflow-carousel"
      onKeyDown={(event) => {
        if (event.key === "ArrowLeft") {
          event.preventDefault();
          move(-1);
        }
        if (event.key === "ArrowRight") {
          event.preventDefault();
          move(1);
        }
      }}
      onTouchEnd={(event) => {
        if (touchStart.current === null) return;
        const distance = event.changedTouches[0].clientX - touchStart.current;
        if (Math.abs(distance) > 48) move(distance > 0 ? -1 : 1);
        touchStart.current = null;
      }}
      onTouchStart={(event) => {
        touchStart.current = event.touches[0].clientX;
      }}
      role="region"
      aria-label="Automation workflow examples"
      aria-roledescription="carousel"
      tabIndex={0}
    >
      <div className="n8n-workflow-carousel__topbar">
        <p>
          Workflow {String(activeIndex + 1).padStart(2, "0")} / {String(slides.length).padStart(2, "0")}
        </p>
        <div className="n8n-carousel-controls">
          <button onClick={() => move(-1)} type="button" aria-label="Show previous workflow">
            <ChevronLeft aria-hidden="true" size={20} />
          </button>
          <button onClick={() => move(1)} type="button" aria-label="Show next workflow">
            <ChevronRight aria-hidden="true" size={20} />
          </button>
        </div>
      </div>

      <article
        className="n8n-workflow-slide"
        data-accent={activeSlide.accent}
        key={activeSlide.id}
        aria-live="polite"
      >
        <div className="n8n-workflow-slide__copy">
          <span className="n8n-panel-kicker">{activeSlide.eyebrow}</span>
          <h3>{activeSlide.title}</h3>
          <p>{activeSlide.description}</p>
          <ul className="n8n-inline-tags" aria-label="Example integrations">
            {activeSlide.integrations.map((integration) => (
              <li key={integration}>{integration}</li>
            ))}
          </ul>
        </div>

        <div className="n8n-slide-graphic" aria-label={`${activeSlide.title} workflow`} role="img">
          <div className="n8n-slide-graphic__status">
            <span><i aria-hidden="true" /> Workflow ready</span>
            <small>Human controls supported</small>
          </div>
          <ol>
            {activeSlide.steps.map((step, index) => (
              <li key={step}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <strong>{step}</strong>
                {index < activeSlide.steps.length - 1 && (
                  <ArrowRight aria-hidden="true" size={16} />
                )}
              </li>
            ))}
          </ol>
        </div>
      </article>

      <div className="n8n-carousel-dots" aria-label="Choose a workflow slide">
        {slides.map((slide, index) => (
          <button
            aria-label={`Show ${slide.title}`}
            aria-current={index === activeIndex ? "true" : undefined}
            data-active={index === activeIndex ? "true" : undefined}
            key={slide.id}
            onClick={() => setActiveIndex(index)}
            type="button"
          >
            <span />
          </button>
        ))}
      </div>
      <p className="n8n-carousel-hint">Use arrow keys or swipe to explore workflows.</p>
    </div>
  );
}

export function ExpectationsCarousel({
  items,
}: {
  items: readonly ClientExpectation[];
}) {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeItem = items[activeIndex];

  if (!activeItem) {
    return null;
  }

  return (
    <div className="n8n-expectations" role="region" aria-roledescription="carousel" aria-label="Client service commitments">
      <div className="n8n-expectations__rail" aria-label="Choose a service commitment">
        {items.map((item, index) => (
          <button
            aria-label={`Show ${item.title}`}
            aria-current={index === activeIndex ? "true" : undefined}
            data-active={index === activeIndex ? "true" : undefined}
            key={item.id}
            onClick={() => setActiveIndex(index)}
            type="button"
          >
            <span>{item.number}</span>
            <strong>{item.title}</strong>
          </button>
        ))}
      </div>

      <article className="n8n-expectation-card" key={activeItem.id} aria-live="polite">
        <div className="n8n-expectation-card__icon" aria-hidden="true">
          <ShieldCheck size={28} />
        </div>
        <span className="n8n-panel-kicker">Service commitment · {activeItem.number}</span>
        <h3>{activeItem.title}</h3>
        <p>{activeItem.description}</p>
        <div className="n8n-expectation-card__proof">
          <Check aria-hidden="true" size={16} />
          <span>{activeItem.proof}</span>
        </div>
        <div className="n8n-expectation-card__nav">
          <button
            onClick={() => setActiveIndex((current) => nextIndex(current, items.length, -1))}
            type="button"
          >
            <ChevronLeft aria-hidden="true" size={18} /> Previous
          </button>
          <button
            onClick={() => setActiveIndex((current) => nextIndex(current, items.length, 1))}
            type="button"
          >
            Next <ChevronRight aria-hidden="true" size={18} />
          </button>
        </div>
      </article>
    </div>
  );
}
