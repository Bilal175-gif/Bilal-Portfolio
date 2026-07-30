import type { Metadata } from "next";

import { TimelineItem } from "@/components/timeline-item";
import { CtaPanel, PageIntro } from "@/components/ui";
import { siteConfig, timeline } from "@/content/site";

const description =
  "Muhammad Bilal’s Rollitech internship, independent product development, and Computer Science education.";

export const metadata: Metadata = {
  title: "Experience",
  description,
  alternates: {
    canonical: "/experience",
  },
  openGraph: {
    title: "Experience | Muhammad Bilal",
    description,
    url: "/experience",
  },
  twitter: {
    title: "Experience | Muhammad Bilal",
    description,
  },
};

export default function ExperiencePage() {
  return (
    <>
      <PageIntro
        eyebrow="Experience / Education"
        title="Early-career experience grounded in real web development work."
        description="A clear timeline of professional exposure, project delivery, API practice, and formal Computer Science education."
        tags={[
          "Rollitech internship",
          "Independent product work",
          "BSCS expected 2029",
        ]}
      />

      <section className="section-block">
        <div className="container timeline">
          {timeline.map((item, index) => (
            <TimelineItem item={item} index={index} key={item.id} />
          ))}
        </div>
      </section>

      <CtaPanel
        title="Looking for an early-career engineer who cares about the complete product?"
        description="I bring frontend focus, practical API and database experience, an active learning mindset, and clear communication."
        primary={{ label: "Contact me", href: "/contact" }}
        secondary={{
          label: "Download CV",
          href: siteConfig.cvPath,
          download: true,
        }}
      />
    </>
  );
}
