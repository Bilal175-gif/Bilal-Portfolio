import { ArrowRight, ArrowUpRight } from "lucide-react";
import type { ReactNode } from "react";

export function N8nEyebrow({ children }: { children: ReactNode }) {
  return (
    <p className="n8n-eyebrow">
      <span aria-hidden="true" />
      {children}
    </p>
  );
}

export function N8nSectionHeading({
  id,
  eyebrow,
  title,
  description,
  align = "start",
}: {
  id?: string;
  eyebrow: string;
  title: string;
  description?: string;
  align?: "start" | "center";
}) {
  return (
    <header className="n8n-section-heading" data-align={align}>
      <N8nEyebrow>{eyebrow}</N8nEyebrow>
      <h2 id={id}>{title}</h2>
      {description && <p>{description}</p>}
    </header>
  );
}

export function N8nButtonLink({
  href,
  children,
  variant = "primary",
  external = false,
}: {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "quiet";
  external?: boolean;
}) {
  return (
    <a
      className={`n8n-button n8n-button--${variant}`}
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noreferrer" : undefined}
    >
      <span>{children}</span>
      {external ? (
        <ArrowUpRight aria-hidden="true" size={17} />
      ) : (
        <ArrowRight aria-hidden="true" size={17} />
      )}
    </a>
  );
}
