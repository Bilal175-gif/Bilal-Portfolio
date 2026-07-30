import type { Metadata } from "next";

import { TimelineItem } from "@/components/timeline-item";
import { PageIntro } from "@/components/ui";
import { timeline } from "@/content/site";

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
        title="Generative AI learning backed by practical software engineering."
        description="A factual timeline covering my current LLM learning track, professional web-development exposure, shipped product work, and Computer Science education."
        tags={[
          "Generative AI learning",
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

    </>
  );
}
