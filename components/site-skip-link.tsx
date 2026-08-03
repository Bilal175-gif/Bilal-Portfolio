"use client";

import { usePathname } from "next/navigation";

export function SiteSkipLink() {
  const pathname = usePathname();
  const contentTarget = pathname === "/n8n" ? "#n8n-content" : "#main-content";

  return (
    <a className="skip-link" href={contentTarget}>
      Skip to content
    </a>
  );
}
