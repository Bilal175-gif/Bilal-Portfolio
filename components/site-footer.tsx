import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

import { BrandMark } from "@/components/brand-mark";

type SiteFooterProps = {
  navigation: readonly {
    label: string;
    href: string;
  }[];
  site: {
    name: string;
    shortTitle: string;
    email: string;
    linkedin: string;
    github: string;
  };
};

export function SiteFooter({ navigation, site }: SiteFooterProps) {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="site-footer__top">
          <BrandMark name={site.name} title={site.shortTitle} />
          <nav className="site-footer__nav" aria-label="Footer navigation">
            {navigation.map((item) => (
              <Link href={item.href} key={item.href}>
                {item.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="site-footer__bottom">
          <p>Designed and built with clarity, accessibility, and practical performance in mind.</p>
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
      </div>
    </footer>
  );
}
