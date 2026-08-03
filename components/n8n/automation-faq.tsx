"use client";

import { ChevronDown } from "lucide-react";
import { useState } from "react";

export type AutomationFaqItem = {
  readonly id: string;
  readonly question: string;
  readonly answer: string;
};

export function AutomationFaq({ items }: { items: readonly AutomationFaqItem[] }) {
  const [openId, setOpenId] = useState(items[0]?.id ?? "");

  return (
    <div className="n8n-faq-list">
      {items.map((item, index) => {
        const isOpen = item.id === openId;
        const panelId = `automation-faq-panel-${item.id}`;
        const buttonId = `automation-faq-button-${item.id}`;

        return (
          <article className="n8n-faq-item" data-open={isOpen ? "true" : undefined} key={item.id}>
            <h3>
              <button
                aria-controls={panelId}
                aria-expanded={isOpen}
                id={buttonId}
                onClick={() => setOpenId((current) => (current === item.id ? "" : item.id))}
                type="button"
              >
                <span className="n8n-faq-item__number">{String(index + 1).padStart(2, "0")}</span>
                <span>{item.question}</span>
                <ChevronDown aria-hidden="true" size={20} />
              </button>
            </h3>
            <div
              aria-labelledby={buttonId}
              className="n8n-faq-item__answer"
              id={panelId}
              role="region"
              hidden={!isOpen}
            >
              <p>{item.answer}</p>
            </div>
          </article>
        );
      })}
    </div>
  );
}
