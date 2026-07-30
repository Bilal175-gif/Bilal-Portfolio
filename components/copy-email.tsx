"use client";

import { Check, Copy } from "lucide-react";
import { useState } from "react";

export function CopyEmail({ email }: { email: string }) {
  const [copied, setCopied] = useState(false);

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      const field = document.createElement("textarea");
      field.value = email;
      field.setAttribute("readonly", "");
      field.style.position = "fixed";
      field.style.opacity = "0";
      document.body.appendChild(field);
      field.select();
      document.execCommand("copy");
      field.remove();
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    }
  }

  return (
    <button
      className="copy-email"
      type="button"
      onClick={copyEmail}
      aria-label={`Copy ${email}`}
    >
      <span>
        <small>Email</small>
        <strong>{email}</strong>
      </span>
      <span className="copy-email__action" aria-live="polite">
        {copied ? (
          <>
            <Check aria-hidden="true" size={16} />
            Copied
          </>
        ) : (
          <>
            <Copy aria-hidden="true" size={16} />
            Copy
          </>
        )}
      </span>
    </button>
  );
}
