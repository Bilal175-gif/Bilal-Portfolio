import type { Metadata } from "next";

import { AutomationLanding } from "@/components/n8n/automation-landing";
import { automationServices, faqItems, n8nSeo } from "@/content/n8n";
import { siteConfig } from "@/content/site";

export const metadata: Metadata = {
  title: {
    absolute: n8nSeo.title,
  },
  description: n8nSeo.description,
  keywords: [...n8nSeo.keywords],
  alternates: {
    canonical: "/n8n",
  },
  openGraph: {
    type: "website",
    locale: "en_PK",
    url: "/n8n",
    siteName: `${siteConfig.name} — Automation Services`,
    title: n8nSeo.title,
    description: n8nSeo.description,
    images: [
      {
        url: "/n8n/opengraph-image",
        width: 1200,
        height: 630,
        alt: "n8n automation and AI agent workflow services by Muhammad Bilal and Abdur Rehman",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: n8nSeo.title,
    description: n8nSeo.description,
    images: ["/n8n/opengraph-image"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

const serviceProviderId = `${n8nSeo.canonical}#provider`;

const professionalServiceSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": serviceProviderId,
  name: "Muhammad Bilal & Abdur Rehman — Automation Services",
  url: n8nSeo.canonical,
  email: `mailto:${siteConfig.email}`,
  description: n8nSeo.description,
  knowsAbout: [
    "n8n workflow automation",
    "AI agent integration",
    "API and webhook integration",
    "Business process automation",
  ],
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "n8n Automation and AI Agent Development",
  url: n8nSeo.canonical,
  description: n8nSeo.description,
  provider: {
    "@id": serviceProviderId,
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Automation services",
    itemListElement: automationServices.map((service) => ({
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: service.title,
        description: service.description,
      },
    })),
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqItems.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
};

function safeJsonLd(value: object) {
  return JSON.stringify(value).replace(/</g, "\\u003c");
}

export default function N8nPage() {
  return (
    <>
      <AutomationLanding />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: safeJsonLd(professionalServiceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: safeJsonLd(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: safeJsonLd(faqSchema) }}
      />
    </>
  );
}
