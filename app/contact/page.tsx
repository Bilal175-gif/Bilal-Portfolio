import type { Metadata } from "next";

import { ContactCard } from "@/components/contact-card";
import { PageIntro } from "@/components/ui";
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
    <>
      <PageIntro
        eyebrow="Contact / Opportunities"
        title={siteConfig.contact.heading}
        description={siteConfig.contact.description}
        tags={[
          siteConfig.profile.location,
          "Available for remote collaboration",
          "Internships and junior roles",
        ]}
      />

      <section className="section-block">
        <div className="container contact-layout">
          <div className="contact-list">
            {siteConfig.contact.methods.map((item) => (
              <ContactCard item={item} key={item.label} />
            ))}
          </div>

          <aside className="contact-aside">
            <h2>What I&apos;m open to</h2>
            <p>
              Frontend development, web development internships, junior
              software engineering roles, product-interface work, dashboard
              development, and API-connected application projects.
            </p>
            <ul className="check-list">
              <li>Based in Lahore, Pakistan</li>
              <li>Available for remote collaboration</li>
              <li>Strongest in React, Next.js, and TypeScript</li>
              <li>
                Practical Node.js, FastAPI, MongoDB, PostgreSQL, and Postman
                experience
              </li>
            </ul>
          </aside>
        </div>
      </section>
    </>
  );
}
