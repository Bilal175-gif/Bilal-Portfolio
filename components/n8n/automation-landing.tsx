import { N8nFooter, N8nHeader } from "@/components/n8n/n8n-chrome";
import {
  AutomationContact,
  AutomationFaqSection,
  ClientDelivery,
  ClientExpectations,
  EngagementOptions,
} from "@/components/n8n/sections/delivery-contact";
import {
  AutomationHero,
  AutomationServices,
  BusinessProblems,
  CapabilitiesStrip,
} from "@/components/n8n/sections/hero-solutions";
import {
  AutomationProcess,
  AutomationProjects,
  AutomationTeam,
  WhyWorkWithUs,
} from "@/components/n8n/sections/projects-team";
import {
  AutomationArchitecture,
  IntegrationsGrid,
  InteractiveWorkflowPreview,
  WorkflowLibrary,
} from "@/components/n8n/sections/workflow-architecture";
import { n8nNavigation } from "@/content/n8n";
import { siteConfig } from "@/content/site";

export function AutomationLanding() {
  return (
    <div className="n8n-page">
      <N8nHeader navigation={n8nNavigation} site={siteConfig} />
      <AutomationHero />
      <CapabilitiesStrip />
      <BusinessProblems />
      <AutomationServices />
      <InteractiveWorkflowPreview />
      <WorkflowLibrary />
      <AutomationArchitecture />
      <IntegrationsGrid />
      <AutomationProjects />
      <AutomationTeam />
      <WhyWorkWithUs />
      <AutomationProcess />
      <ClientDelivery />
      <EngagementOptions />
      <ClientExpectations />
      <AutomationFaqSection />
      <AutomationContact />
      <N8nFooter site={siteConfig} />
    </div>
  );
}
