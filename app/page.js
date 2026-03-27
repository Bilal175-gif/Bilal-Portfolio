import { AboutSection } from "@/components/about-section";
import { ContactSection } from "@/components/contact-section";
import { ExperienceSection } from "@/components/experience-section";
import { HeroSection } from "@/components/hero-section";
import { MotionRibbon } from "@/components/motion-ribbon";
import { PageLoader } from "@/components/page-loader";
import { PortfolioBackdrop } from "@/components/portfolio-backdrop";
import { ProjectsSection } from "@/components/projects-section";
import ScrollEffects from "@/components/scroll-effects";
import { SiteHeader } from "@/components/site-header";
import { SkillsSection } from "@/components/skills-section";
import { contact, experience, navigation, profile, projects, skillGroups } from "@/content/profile";

export default function HomePage() {
  return (
    <>
      <PageLoader />
      <ScrollEffects />
      <SiteHeader navigation={navigation} name={profile.name} />
      <main className="relative isolate overflow-x-clip pb-10">
        <PortfolioBackdrop />
        <HeroSection profile={profile} />
        <MotionRibbon />
        <AboutSection profile={profile} />
        <SkillsSection skillGroups={skillGroups} />
        <ProjectsSection projects={projects} />
        <ExperienceSection experience={experience} />
        <ContactSection contact={contact} profile={profile} />
        <footer className="section-shell pb-8 pt-2 text-sm text-white/45">
          Built to feel premium for recruiters, collaborators, and modern product teams.
        </footer>
      </main>
    </>
  );
}
