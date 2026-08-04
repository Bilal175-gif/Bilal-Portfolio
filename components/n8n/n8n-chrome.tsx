import { ArrowRight, Mail } from "lucide-react";

import { BrandMark } from "@/components/brand-mark";

type N8nHeaderProps = {
  site: {
    email: string;
    name: string;
  };
};

export function N8nHeader({ site }: N8nHeaderProps) {
  return (
    <header className="n8n-header">
      <div className="n8n-header__inner">
        <a className="n8n-header__brand" href="#n8n-content" aria-label="Automation agency home">
          <BrandMark compact name={site.name} />
        </a>

        <div className="n8n-header__actions">
          <a className="n8n-header__email" href={`mailto:${site.email}`}>
            <Mail aria-hidden="true" size={16} strokeWidth={1.9} />
            <span>Project details</span>
          </a>
          <a className="n8n-header__cta" href="#contact">
            Build my automation
            <ArrowRight aria-hidden="true" size={16} strokeWidth={1.9} />
          </a>
        </div>
      </div>
    </header>
  );
}
