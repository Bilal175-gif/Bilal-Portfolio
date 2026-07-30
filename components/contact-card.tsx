import {
  ArrowUpRight,
  Code2,
  Download,
  Link2,
  Mail,
  Phone,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

const icons: Record<string, LucideIcon> = {
  email: Mail,
  phone: Phone,
  linkedin: Link2,
  github: Code2,
  cv: Download,
};

type ContactCardProps = {
  item: {
    key: string;
    label: string;
    value: string;
    href: string;
    external?: boolean;
    download?: boolean;
  };
};

export function ContactCard({ item }: ContactCardProps) {
  const Icon = icons[item.key] ?? Mail;

  return (
    <a
      className="contact-card"
      href={item.href}
      target={item.external ? "_blank" : undefined}
      rel={item.external ? "noreferrer" : undefined}
      download={item.download || undefined}
    >
      <span className="contact-card__icon">
        <Icon aria-hidden="true" size={20} strokeWidth={1.55} />
      </span>
      <span className="contact-card__copy">
        <small>{item.label}</small>
        <strong>{item.value}</strong>
      </span>
      {item.download ? (
        <Download className="contact-card__arrow" aria-hidden="true" size={17} />
      ) : (
        <ArrowUpRight className="contact-card__arrow" aria-hidden="true" size={17} />
      )}
    </a>
  );
}
