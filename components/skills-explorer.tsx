"use client";

import { ArrowUpRight, Check, MousePointer2, X } from "lucide-react";
import { useEffect, useState } from "react";
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
  const activeSkill = skills.find((skill) => skill.id === activeId) ?? skills[0];

  useEffect(() => {
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setDetailOpen(false);
      }
    };

    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, []);

  if (!activeSkill) {
    return null;
  }

  return (
    <div className="skills-explorer">
      <div className="skills-explorer__hint">
        <MousePointer2 aria-hidden="true" size={16} />
        <span>Select any skill to explore how it fits into my work.</span>
      </div>

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
                <span className="skill-tile__logo">
                  {/* Brand SVGs are decorative because the visible label names each skill. */}
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img alt="" height="34" src={skill.logo} width="34" />
                </span>
                <span className="skill-tile__copy">
                  <small>{skill.category}</small>
                  <strong>{skill.name}</strong>
                  <span>{skill.status}</span>
                </span>
                <span className="skill-tile__arrow" aria-hidden="true">
                  <ArrowUpRight size={17} strokeWidth={1.8} />
                </span>
              </button>
            );
          })}
        </div>

        <button
          aria-label="Close selected skill details"
          className="skill-detail-backdrop"
          data-open={detailOpen}
          onClick={() => setDetailOpen(false)}
          type="button"
        />

        <article
          aria-live="polite"
          className="skill-detail"
          data-open={detailOpen}
          data-skill-id={activeSkill.id}
          id="selected-skill-detail"
          key={activeSkill.id}
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
            onClick={() => setDetailOpen(false)}
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
