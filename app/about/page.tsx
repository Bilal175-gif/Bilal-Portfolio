import type { Metadata } from "next";
import { ArrowUpRight, Code2, Link2 } from "lucide-react";
import Image from "next/image";

import { CopyEmail } from "@/components/copy-email";
import { Eyebrow } from "@/components/ui";
import { siteConfig } from "@/content/site";

const description =
  "Meet Muhammad Bilal, a Generative AI Engineer and Computer Science undergraduate in Lahore.";

export const metadata: Metadata = {
  title: "About",
  description,
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "About | Muhammad Bilal",
    description,
    url: "/about",
  },
  twitter: {
    title: "About | Muhammad Bilal",
    description,
  },
};

export default function AboutPage() {
  return (
    <section className="about-profile">
      <div className="container about-profile__grid">
        <div className="portrait-frame">
          <div className="portrait-frame__glow" aria-hidden="true" />
          <Image
            alt="Muhammad Bilal at SOFTEC 2026"
            className="portrait-frame__image"
            height={1600}
            priority
            sizes="(max-width: 899px) calc(100vw - 2rem), 46vw"
            src="/muhammad-bilal-softec-2026.jpg"
            width={1200}
          />
          <span className="portrait-frame__caption">
            SOFTEC&apos;26 · Lahore
          </span>
        </div>

        <div className="about-profile__content">
          <Eyebrow>About / Connect</Eyebrow>
          <h1>Generative AI Engineer with a product-building foundation.</h1>
          <p>
            I&apos;m Muhammad Bilal, a Computer Science undergraduate focused on
            LLM applications, LangChain workflows, vector search, and the
            full-stack systems required to ship useful AI products.
          </p>

          <div className="about-links" aria-label="Contact and social links">
            <a href={siteConfig.github} target="_blank" rel="noreferrer">
              <Code2 aria-hidden="true" size={20} />
              <span>
                <small>GitHub</small>
                <strong>Bilal175-gif</strong>
              </span>
              <ArrowUpRight aria-hidden="true" size={17} />
            </a>
            <a href={siteConfig.linkedin} target="_blank" rel="noreferrer">
              <Link2 aria-hidden="true" size={20} />
              <span>
                <small>LinkedIn</small>
                <strong>Muhammad Bilal</strong>
              </span>
              <ArrowUpRight aria-hidden="true" size={17} />
            </a>
            <CopyEmail email={siteConfig.email} />
          </div>
        </div>
      </div>
    </section>
  );
}
