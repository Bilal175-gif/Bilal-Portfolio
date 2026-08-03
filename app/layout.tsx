import type { Metadata, Viewport } from "next";

import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { SiteSkipLink } from "@/components/site-skip-link";
import { navigation, siteConfig } from "@/content/site";

import "./globals.css";

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: siteConfig.name,
  url: siteConfig.url,
  email: `mailto:${siteConfig.email}`,
  telephone: siteConfig.phone,
  jobTitle: siteConfig.shortTitle,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Lahore",
    addressCountry: "PK",
  },
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "Lahore Garrison University",
  },
  sameAs: [siteConfig.linkedin, siteConfig.github],
  knowsAbout: [
    "Generative AI",
    "Large Language Models",
    "LangChain",
    "Vector databases",
    "Python",
    "FastAPI",
  ],
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: `${siteConfig.name} — Portfolio`,
  url: siteConfig.url,
  description: siteConfig.description,
  author: {
    "@type": "Person",
    name: siteConfig.name,
  },
};

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} | Generative AI Engineer`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  applicationName: `${siteConfig.name} Portfolio`,
  authors: [{ name: siteConfig.name, url: siteConfig.url }],
  creator: siteConfig.name,
  icons: {
    icon: [{ url: "/favicon.svg", type: "image/svg+xml" }],
  },
  keywords: [
    "Muhammad Bilal",
    "Generative AI Engineer Lahore",
    "LLM application developer",
    "LangChain developer",
    "vector database developer",
    "Python FastAPI developer",
    "Generative AI portfolio",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_PK",
    url: "/",
    siteName: `${siteConfig.name} Portfolio`,
    title: `${siteConfig.name} | Generative AI Engineer`,
    description: siteConfig.description,
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} | Generative AI Engineer`,
    description: siteConfig.description,
  },
};

export const viewport: Viewport = {
  themeColor: "#070b10",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <SiteSkipLink />
        <div className="site-ambient" aria-hidden="true" />
        <SiteHeader navigation={navigation} site={siteConfig} />
        <main id="main-content">{children}</main>
        <SiteFooter navigation={navigation} site={siteConfig} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(personSchema).replace(/</g, "\\u003c"),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteSchema).replace(/</g, "\\u003c"),
          }}
        />
      </body>
    </html>
  );
}
