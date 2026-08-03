"use client";

import { Download, Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

import { BrandMark } from "@/components/brand-mark";

type NavigationItem = {
  label: string;
  href: string;
};

type SiteHeaderProps = {
  navigation: readonly NavigationItem[];
  site: {
    name: string;
    shortTitle: string;
    cvPath: string;
  };
};

function isCurrentRoute(pathname: string, href: string) {
  if (href === "/") {
    return pathname === "/";
  }

  return pathname === href || pathname.startsWith(`${href}/`);
}

export function SiteHeader({ navigation, site }: SiteHeaderProps) {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
        menuButtonRef.current?.focus();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  // The automation service route provides its own section-based navigation.
  if (pathname === "/n8n") {
    return null;
  }

  return (
    <header className="site-header">
      <div className="container site-header__inner">
        <Link className="site-header__brand" href="/" aria-label={`${site.name}, home`}>
          <BrandMark compact name={site.name} title={site.shortTitle} />
        </Link>

        <nav className="desktop-nav" aria-label="Primary navigation">
          {navigation.map((item) => {
            const current = isCurrentRoute(pathname, item.href);

            return (
              <Link
                className="desktop-nav__link"
                data-current={current ? "true" : undefined}
                href={item.href}
                key={item.href}
                aria-current={current ? "page" : undefined}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <a className="button button--primary header-cv" href={site.cvPath} download>
          Download CV
          <Download aria-hidden="true" size={16} strokeWidth={1.8} />
        </a>

        <button
          className="menu-button"
          type="button"
          aria-expanded={isOpen}
          aria-controls="mobile-navigation"
          aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
          onClick={() => setIsOpen((value) => !value)}
          ref={menuButtonRef}
        >
          {isOpen ? <X aria-hidden="true" size={21} /> : <Menu aria-hidden="true" size={21} />}
        </button>
      </div>

      <div
        className="mobile-nav-shell"
        id="mobile-navigation"
        data-open={isOpen ? "true" : "false"}
      >
        <nav className="container mobile-nav" aria-label="Mobile navigation">
          {navigation.map((item) => {
            const current = isCurrentRoute(pathname, item.href);

            return (
              <Link
                className="mobile-nav__link"
                data-current={current ? "true" : undefined}
                href={item.href}
                key={item.href}
                aria-current={current ? "page" : undefined}
              >
                {item.label}
              </Link>
            );
          })}
          <a className="button button--primary mobile-nav__cv" href={site.cvPath} download>
            Download CV
            <Download aria-hidden="true" size={17} />
          </a>
        </nav>
      </div>
    </header>
  );
}
