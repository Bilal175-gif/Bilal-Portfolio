"use client";

import { useEffect, useState } from "react";
import { ArrowRight, Mail, Menu, X } from "lucide-react";

import { BrandMark } from "@/components/brand-mark";

type N8nHeaderProps = {
  site: {
    email: string;
    name: string;
  };
};

const navigation = [
  { href: "#solutions", label: "Solutions" },
  { href: "#services", label: "Services" },
  { href: "#faq", label: "FAQ" },
] as const;

export function N8nHeader({ site }: N8nHeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const updateHeader = () => setScrolled(window.scrollY > 12);
    updateHeader();
    window.addEventListener("scroll", updateHeader, { passive: true });
    return () => window.removeEventListener("scroll", updateHeader);
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, [menuOpen]);

  return (
    <header className="n8n-header" data-scrolled={scrolled} data-menu-open={menuOpen}>
      <div className="n8n-header__inner">
        <a className="n8n-header__brand" href="/" aria-label="Visit Muhammad Bilal's portfolio">
          <BrandMark compact name={site.name} />
        </a>

        <nav className="n8n-header__desktop-nav" aria-label="Automation page navigation">
          {navigation.map((item) => (
            <a className="n8n-header__nav-link" href={item.href} key={item.href}>
              {item.label}
            </a>
          ))}
        </nav>

        <div className="n8n-header__actions">
          <a className="n8n-header__email" href={`mailto:${site.email}`}>
            <Mail aria-hidden="true" size={16} strokeWidth={1.9} />
            <span>Project details</span>
          </a>
          <a className="n8n-header__cta" href="#contact">
            Build my automation
            <ArrowRight aria-hidden="true" size={16} strokeWidth={1.9} />
          </a>
          <button
            className="n8n-header__menu-button"
            type="button"
            aria-expanded={menuOpen}
            aria-controls="n8n-mobile-navigation"
            aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
            onClick={() => setMenuOpen((current) => !current)}
          >
            {menuOpen ? <X aria-hidden="true" size={20} /> : <Menu aria-hidden="true" size={20} />}
          </button>
        </div>
      </div>

      <div className="n8n-header__mobile-shell" data-open={menuOpen}>
        <nav className="n8n-header__mobile-nav" id="n8n-mobile-navigation" aria-label="Mobile navigation">
          {navigation.map((item, index) => (
            <a href={item.href} key={item.href} onClick={() => setMenuOpen(false)}>
              <span>0{index + 1}</span>
              {item.label}
              <ArrowRight aria-hidden="true" size={15} />
            </a>
          ))}
          <a className="n8n-header__mobile-email" href={`mailto:${site.email}`} onClick={() => setMenuOpen(false)}>
            <Mail aria-hidden="true" size={15} />
            Discuss a project
          </a>
        </nav>
      </div>
    </header>
  );
}
