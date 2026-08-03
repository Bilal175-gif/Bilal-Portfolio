"use client";

import { ArrowUpRight } from "lucide-react";
import { usePathname } from "next/navigation";

type SiteFooterProps = {
  site: {
    name: string;
    shortTitle: string;
    email: string;
    linkedin: string;
    github: string;
  };
};

export function SiteFooter({ site }: SiteFooterProps) {
  const pathname = usePathname();

  // The automation service route intentionally has no footer.
  if (pathname === "/n8n") {
    return null;
  }

  return (
    <footer className="site-footer">
      <div className="container site-footer__inner">
        <div className="site-footer__identity">
          <strong>{site.name}</strong>
          <span>{site.shortTitle}</span>
        </div>
        <div className="site-footer__socials">
          <a href={`mailto:${site.email}`}>Email</a>
          <a href={site.linkedin} target="_blank" rel="noreferrer">
            LinkedIn <ArrowUpRight aria-hidden="true" size={13} />
          </a>
          <a href={site.github} target="_blank" rel="noreferrer">
            GitHub <ArrowUpRight aria-hidden="true" size={13} />
          </a>
        </div>
      </div>
    </footer>
  );
}
