"use client";

import {
  ArrowRight,
  ArrowUpRight,
  Bot,
  CodeXml,
  ContactRound,
  Mail,
  Menu,
  Network,
  X,
} from "lucide-react";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

type N8nNavigationItem = {
  label: string;
  href: string;
};

type N8nHeaderProps = {
  navigation: readonly N8nNavigationItem[];
  site: {
    name: string;
    email: string;
  };
};

type N8nFooterProps = {
  site: {
    name: string;
    email: string;
    linkedin: string;
    github: string;
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
        <Link
          className="n8n-header__brand"
          href="/"
          prefetch={false}
          aria-label={`${site.name}, main portfolio`}
        >
          <span className="n8n-header__brand-mark" aria-hidden="true">
            <Network size={20} strokeWidth={1.9} />
            <span className="n8n-header__brand-pulse" />
          </span>
          <span className="n8n-header__brand-copy">
            <strong>{site.name}</strong>
            <span>Automation systems</span>
          </span>
        </Link>

        <nav className="n8n-header__desktop-nav" aria-label="Automation page sections">
          {navigation.map((item) => {
            const isCurrent = activeHref === item.href;

            return (
              <Link
                className="n8n-header__nav-link"
                data-current={isCurrent ? "true" : undefined}
                href={item.href}
                key={item.href}
                aria-current={isCurrent ? "location" : undefined}
                onClick={() => selectSection(item.href)}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="n8n-header__actions">
          <a className="n8n-header__email" href={`mailto:${site.email}`}>
            <Mail aria-hidden="true" size={16} strokeWidth={1.9} />
            <span>Project details</span>
          </a>
          <Link className="n8n-header__cta" href="#contact" onClick={() => selectSection("#contact")}>
            Build my automation
            <ArrowRight aria-hidden="true" size={16} strokeWidth={1.9} />
          </Link>
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
              <Link
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
              </Link>
            );
          })}
          <Link
            className="n8n-header__mobile-cta"
            href="#contact"
            onClick={() => selectSection("#contact")}
          >
            Build my automation
            <ArrowRight aria-hidden="true" size={17} strokeWidth={1.9} />
          </Link>
        </nav>
      </div>
    </header>
  );
}

export function N8nFooter({ site }: N8nFooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="n8n-footer">
      <div className="n8n-footer__inner">
        <div className="n8n-footer__lead">
          <Link
            className="n8n-footer__brand"
            href="/"
            prefetch={false}
            aria-label={`${site.name}, main portfolio`}
          >
            <span className="n8n-footer__brand-mark" aria-hidden="true">
              <Bot size={22} strokeWidth={1.8} />
            </span>
            <span>
              <strong>{site.name}</strong>
              <small>AI automation &amp; n8n services</small>
            </span>
          </Link>
          <p className="n8n-footer__summary">
            Muhammad Bilal and Abdur Rehman plan, build, test, and deliver practical workflow
            automation for business teams.
          </p>
        </div>

        <div className="n8n-footer__column">
          <h2 className="n8n-footer__heading">Explore</h2>
          <nav className="n8n-footer__links" aria-label="Automation footer navigation">
            <Link href="#services">Services</Link>
            <Link href="#workflows">Workflows</Link>
            <Link href="#process">Process</Link>
            <Link href="#team">Team</Link>
            <Link href="#faq">FAQ</Link>
            <Link href="/" prefetch={false}>
              Main portfolio
              <ArrowUpRight aria-hidden="true" size={14} strokeWidth={1.8} />
            </Link>
          </nav>
        </div>

        <div className="n8n-footer__column">
          <h2 className="n8n-footer__heading">Start a conversation</h2>
          <div className="n8n-footer__links">
            <a href={`mailto:${site.email}`}>
              <Mail aria-hidden="true" size={15} strokeWidth={1.8} />
              Email Muhammad Bilal
            </a>
            <a
              href={site.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Muhammad Bilal on LinkedIn (opens in a new tab)"
            >
              <ContactRound aria-hidden="true" size={15} strokeWidth={1.8} />
              LinkedIn
              <ArrowUpRight aria-hidden="true" size={13} />
            </a>
            <a
              href={site.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Muhammad Bilal on GitHub (opens in a new tab)"
            >
              <CodeXml aria-hidden="true" size={15} strokeWidth={1.8} />
              GitHub
              <ArrowUpRight aria-hidden="true" size={13} />
            </a>
          </div>
        </div>
      </div>

      <div className="n8n-footer__bottom">
        <p>© {currentYear} {site.name} &amp; Abdur Rehman.</p>
        <p>AI agents, n8n workflows, API integrations, and internal automation systems.</p>
      </div>
    </footer>
  );
}
