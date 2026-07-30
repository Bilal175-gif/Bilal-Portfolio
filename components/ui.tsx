import { ArrowRight, Download } from "lucide-react";
import Link from "next/link";
import type { ReactNode } from "react";

export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <p className="eyebrow">
      <span aria-hidden="true" />
      {children}
    </p>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "start",
}: {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "start" | "center";
}) {
  return (
    <header className="section-heading" data-align={align}>
      <Eyebrow>{eyebrow}</Eyebrow>
      <h2>{title}</h2>
      {description && <p>{description}</p>}
    </header>
  );
}

export function PageIntro({
  eyebrow,
  title,
  description,
  tags,
}: {
  eyebrow: string;
  title: string;
  description: string;
  tags?: readonly string[];
}) {
  return (
    <section className="page-intro">
      <div className="container">
        <Eyebrow>{eyebrow}</Eyebrow>
        <h1>{title}</h1>
        <p>{description}</p>
        {tags && <TagList items={tags} className="page-intro__tags" />}
      </div>
    </section>
  );
}

export function TagList({
  items,
  className = "",
}: {
  items: readonly string[];
  className?: string;
}) {
  return (
    <ul
      className={`tag-list ${className}`.trim()}
      aria-label="Related technologies and details"
    >
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}

type ButtonLinkProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "quiet";
  external?: boolean;
  download?: boolean;
  arrow?: boolean;
  className?: string;
};

export function ButtonLink({
  href,
  children,
  variant = "primary",
  external = false,
  download = false,
  arrow = false,
  className = "",
}: ButtonLinkProps) {
  const classes = `button button--${variant} ${className}`.trim();
  const icon = download ? (
    <Download aria-hidden="true" size={17} strokeWidth={1.8} />
  ) : arrow ? (
    <ArrowRight aria-hidden="true" size={17} strokeWidth={1.8} />
  ) : null;

  if (external || download) {
    return (
      <a
        className={classes}
        href={href}
        target={external ? "_blank" : undefined}
        rel={external ? "noreferrer" : undefined}
        download={download || undefined}
      >
        {children}
        {icon}
      </a>
    );
  }

  return (
    <Link className={classes} href={href}>
      {children}
      {icon}
    </Link>
  );
}

export function CtaPanel({
  eyebrow = "Open to opportunities",
  title,
  description,
  primary,
  secondary,
}: {
  eyebrow?: string;
  title: string;
  description: string;
  primary: { label: string; href: string; external?: boolean };
  secondary: { label: string; href: string; download?: boolean };
}) {
  return (
    <section className="section-block section-block--compact">
      <div className="container">
        <div className="cta-panel">
          <div className="cta-panel__glow" aria-hidden="true" />
          <div className="cta-panel__copy">
            <Eyebrow>{eyebrow}</Eyebrow>
            <h2>{title}</h2>
            <p>{description}</p>
          </div>
          <div className="cta-panel__actions">
            <ButtonLink
              href={primary.href}
              external={primary.external}
              variant="primary"
              arrow={!primary.external}
            >
              {primary.label}
            </ButtonLink>
            <ButtonLink
              href={secondary.href}
              download={secondary.download}
              variant="secondary"
            >
              {secondary.label}
            </ButtonLink>
          </div>
        </div>
      </div>
    </section>
  );
}
