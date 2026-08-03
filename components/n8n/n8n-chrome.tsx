"use client";

import {
  ArrowRight,
  Mail,
  Menu,
  X,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";

type N8nNavigationItem = {
  label: string;
  href: string;
};

type N8nHeaderProps = {
  navigation: readonly N8nNavigationItem[];
  site: {
    email: string;
  };
};

export function N8nHeader({ navigation, site }: N8nHeaderProps) {
  const [activeHref, setActiveHref] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const firstMobileLinkRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    const updateHeader = () => setIsScrolled(window.scrollY > 20);

    updateHeader();
    window.addEventListener("scroll", updateHeader, { passive: true });

    return () => window.removeEventListener("scroll", updateHeader);
  }, []);

  useEffect(() => {
    const sectionLinks = navigation.filter((item) => item.href.startsWith("#"));
    const observedSections = sectionLinks
      .map((item) => document.getElementById(item.href.slice(1)))
      .filter((section): section is HTMLElement => section !== null);

    if (observedSections.length === 0) {
      return;
    }

    const visibleSections = new Map<string, number>();
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const href = `#${entry.target.id}`;

          if (entry.isIntersecting) {
            visibleSections.set(href, entry.intersectionRatio);
          } else {
            visibleSections.delete(href);
          }
        });

        const mostVisible = [...visibleSections.entries()].sort(
          ([, firstRatio], [, secondRatio]) => secondRatio - firstRatio,
        )[0];

        if (mostVisible) {
          setActiveHref(mostVisible[0]);
        }
      },
      {
        rootMargin: "-24% 0px -62% 0px",
        threshold: [0, 0.15, 0.35, 0.6],
      },
    );

    observedSections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, [navigation]);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    firstMobileLinkRef.current?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
        menuButtonRef.current?.focus();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  useEffect(() => {
    const desktopQuery = window.matchMedia("(min-width: 960px)");
    const closeDesktopMenu = (event: MediaQueryListEvent) => {
      if (event.matches) {
        setIsOpen(false);
      }
    };

    desktopQuery.addEventListener("change", closeDesktopMenu);
    return () => desktopQuery.removeEventListener("change", closeDesktopMenu);
  }, []);

  const selectSection = (href: string) => {
    setActiveHref(href);
    setIsOpen(false);
  };

  return (
    <header
      className="n8n-header"
      data-menu-open={isOpen ? "true" : "false"}
      data-scrolled={isScrolled ? "true" : "false"}
    >
      <div className="n8n-header__inner">
        <nav className="n8n-header__desktop-nav" aria-label="Automation page sections">
          {navigation.map((item) => {
            const isCurrent = activeHref === item.href;

            return (
              <a
                className="n8n-header__nav-link"
                data-current={isCurrent ? "true" : undefined}
                href={item.href}
                key={item.href}
                aria-current={isCurrent ? "location" : undefined}
                onClick={() => selectSection(item.href)}
              >
                {item.label}
              </a>
            );
          })}
        </nav>

        <div className="n8n-header__actions">
          <a className="n8n-header__email" href={`mailto:${site.email}`}>
            <Mail aria-hidden="true" size={16} strokeWidth={1.9} />
            <span>Project details</span>
          </a>
          <a className="n8n-header__cta" href="#contact" onClick={() => selectSection("#contact")}>
            Build my automation
            <ArrowRight aria-hidden="true" size={16} strokeWidth={1.9} />
          </a>
        </div>

        <button
          className="n8n-header__menu-button"
          type="button"
          aria-expanded={isOpen}
          aria-controls="n8n-mobile-navigation"
          aria-label={isOpen ? "Close automation navigation" : "Open automation navigation"}
          onClick={() => setIsOpen((current) => !current)}
          ref={menuButtonRef}
        >
          {isOpen ? (
            <X aria-hidden="true" size={22} strokeWidth={1.9} />
          ) : (
            <Menu aria-hidden="true" size={22} strokeWidth={1.9} />
          )}
        </button>
      </div>

      <div className="n8n-header__mobile-shell" id="n8n-mobile-navigation" hidden={!isOpen}>
        <nav className="n8n-header__mobile-nav" aria-label="Mobile automation page sections">
          {navigation.map((item, index) => {
            const isCurrent = activeHref === item.href;

            return (
              <a
                className="n8n-header__mobile-link"
                data-current={isCurrent ? "true" : undefined}
                href={item.href}
                key={item.href}
                aria-current={isCurrent ? "location" : undefined}
                onClick={() => selectSection(item.href)}
                ref={index === 0 ? firstMobileLinkRef : undefined}
              >
                <span>{item.label}</span>
                <ArrowRight aria-hidden="true" size={16} strokeWidth={1.8} />
              </a>
            );
          })}
          <a
            className="n8n-header__mobile-cta"
            href="#contact"
            onClick={() => selectSection("#contact")}
          >
            Build my automation
            <ArrowRight aria-hidden="true" size={17} strokeWidth={1.9} />
          </a>
        </nav>
      </div>
    </header>
  );
}
