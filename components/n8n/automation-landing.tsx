import { N8nHeader } from "@/components/n8n/n8n-chrome";
import {
  AutomationContact,
  AutomationFaqSection,
  ClientDelivery,
} from "@/components/n8n/sections/delivery-contact";
import {
  AutomationHero,
  AutomationServices,
  BusinessProblems,
  CapabilitiesStrip,
} from "@/components/n8n/sections/hero-solutions";
import {
  AutomationProjects,
  AutomationTeam,
} from "@/components/n8n/sections/projects-team";
import {
  AutomationArchitecture,
  IntegrationsGrid,
  InteractiveWorkflowPreview,
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
      <AutomationArchitecture />
      <IntegrationsGrid />
      <AutomationProjects />
      <AutomationTeam />
      <ClientDelivery />
      <AutomationFaqSection />
      <AutomationContact />
    </div>
  );
}
