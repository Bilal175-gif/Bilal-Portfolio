import type { Metadata } from "next";

import { TimelineItem } from "@/components/timeline-item";
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
    <section
      aria-labelledby="experience-page-title"
      className="section-block direct-page-section"
    >
      <h1 className="visually-hidden" id="experience-page-title">
        Experience and education
      </h1>
      <div className="container timeline">
        {timeline.map((item, index) => (
          <TimelineItem item={item} index={index} key={item.id} />
        ))}
      </div>
    </section>
  );
}
