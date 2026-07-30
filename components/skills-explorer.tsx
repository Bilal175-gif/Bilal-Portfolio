"use client";

import { ArrowUpRight, Check, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import type { CSSProperties } from "react";

import type { Skill } from "@/content/site";

type SkillStyle = CSSProperties & {
  "--skill-color": string;
  "--skill-glow": string;
  "--skill-index"?: number;
};

export function SkillsExplorer({ skills }: { skills: readonly Skill[] }) {
  const [activeId, setActiveId] = useState(skills[0]?.id ?? "");
  const [detailOpen, setDetailOpen] = useState(false);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const activeSkill = skills.find((skill) => skill.id === activeId) ?? skills[0];

  const closeDetail = () => {
    setDetailOpen(false);
    window.setTimeout(() => {
      document
        .querySelector<HTMLButtonElement>(
          `.skill-tile[data-skill-id="${activeId}"]`,
        )
        ?.focus();
    }, 0);
  };

  useEffect(() => {
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeDetail();
      }
    };

    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  });

  useEffect(() => {
    if (!detailOpen) return;

    closeButtonRef.current?.focus();
    const previousOverflow = document.documentElement.style.overflow;
    document.documentElement.style.overflow = "hidden";

    return () => {
      document.documentElement.style.overflow = previousOverflow;
    };
  }, [detailOpen]);

  if (!activeSkill) {
    return null;
  }

  return (
    <div className="skills-explorer">
      <div className="skills-explorer__layout">
        <div className="skill-picker" aria-label="Technology skills">
          {skills.map((skill, index) => {
            const isActive = skill.id === activeSkill.id;
            const style: SkillStyle = {
              "--skill-color": skill.color,
              "--skill-glow": skill.glow,
              "--skill-index": index,
            };

            return (
              <button
                aria-controls="selected-skill-detail"
                aria-pressed={isActive}
                className="skill-tile"
                data-active={isActive}
                data-skill-id={skill.id}
                key={skill.id}
                onClick={() => {
                  setActiveId(skill.id);
                  setDetailOpen(true);
                }}
                style={style}
                type="button"
              >
                <span className="skill-tile__top">
                  <span className="skill-tile__logo">
                    {/* Brand SVGs are decorative because the visible label names each skill. */}
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img alt="" height="64" src={skill.logo} width="64" />
                  </span>
                  {index < 2 ? (
                    <span className="skill-tile__badge">{skill.status}</span>
                  ) : null}
                </span>
                <span className="skill-tile__copy">
                  <strong>{skill.name}</strong>
                  <span>{skill.summary}</span>
                </span>
                <span className="skill-tile__action">
                  Check it now
                  <ArrowUpRight aria-hidden="true" size={18} strokeWidth={1.9} />
                </span>
              </button>
            );
          })}
        </div>

        <button
          aria-label="Close selected skill details"
          className="skill-detail-backdrop"
          data-open={detailOpen}
          onClick={closeDetail}
          type="button"
        />

        <article
          aria-label={`${activeSkill.name} details`}
          aria-live="polite"
          aria-modal="true"
          className="skill-detail"
          data-open={detailOpen}
          data-skill-id={activeSkill.id}
          id="selected-skill-detail"
          key={activeSkill.id}
          role="dialog"
          style={
            {
              "--skill-color": activeSkill.color,
              "--skill-glow": activeSkill.glow,
            } as SkillStyle
          }
        >
          <button
            aria-label="Close skill details"
            className="skill-detail__close"
            onClick={closeDetail}
            ref={closeButtonRef}
            type="button"
          >
            <X aria-hidden="true" size={18} />
          </button>

          <div className="skill-detail__top">
            <span className="skill-detail__logo">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img alt="" height="52" src={activeSkill.logo} width="52" />
            </span>
            <div>
              <p>{activeSkill.category}</p>
              <h2>{activeSkill.name}</h2>
            </div>
            <span className="skill-detail__status">
              <span aria-hidden="true" />
              {activeSkill.status}
            </span>
          </div>

          <p className="skill-detail__lead">{activeSkill.summary}</p>

          <div className="skill-detail__section">
            <span>What it is</span>
            <p>{activeSkill.description}</p>
          </div>

          <div className="skill-detail__section">
            <span>How it fits my work</span>
            <p>{activeSkill.application}</p>
          </div>

          <ul className="skill-detail__topics" aria-label={`${activeSkill.name} focus areas`}>
            {activeSkill.topics.map((topic) => (
              <li key={topic}>
                <Check aria-hidden="true" size={14} strokeWidth={2.2} />
                {topic}
              </li>
            ))}
          </ul>
        </article>
      </div>
    </div>
  );
}
