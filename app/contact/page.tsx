import type { Metadata } from "next";

import { ContactCard } from "@/components/contact-card";
import { siteConfig } from "@/content/site";

const description =
  "Contact Muhammad Bilal by email, phone, LinkedIn, or GitHub, and download his current CV.";

export const metadata: Metadata = {
  title: "Contact",
  description,
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Contact | Muhammad Bilal",
    description,
    url: "/contact",
  },
  twitter: {
    title: "Contact | Muhammad Bilal",
    description,
  },
};

export default function ContactPage() {
  return (
    <section
      aria-labelledby="contact-page-title"
      className="section-block direct-page-section"
    >
      <h1 className="visually-hidden" id="contact-page-title">
        Contact Muhammad Bilal
      </h1>
      <div className="container contact-layout">
        <div className="contact-list">
          {siteConfig.contact.methods.map((item) => (
            <ContactCard item={item} key={item.label} />
          ))}
        </div>

        <aside className="contact-aside">
          <h2>What I&apos;m open to</h2>
          <p>
            Generative AI internships, junior AI engineering roles,
            LLM-powered application work, retrieval workflows, and
            full-stack AI product collaboration.
          </p>
          <ul className="check-list">
            <li>Based in Lahore, Pakistan</li>
            <li>Available for remote collaboration</li>
            <li>
              Current focus: OpenAI, Gemini, LangChain, Hugging Face, and
              vector databases
            </li>
            <li>
              Supporting foundation in Python, FastAPI, React, Next.js,
              TypeScript, APIs, and databases
            </li>
          </ul>
        </aside>
      </div>
    </section>
  );
}
