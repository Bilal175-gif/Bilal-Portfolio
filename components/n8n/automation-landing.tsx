import { N8nHeader } from "@/components/n8n/n8n-chrome";
import {
  AutomationContact,
  AutomationFaqSection,
  ClientDelivery,
} from "@/components/n8n/sections/delivery-contact";
import { AutomationHero, AutomationServices, BusinessProblems } from "@/components/n8n/sections/hero-solutions";
import { AutomationTeam } from "@/components/n8n/sections/projects-team";
import { AutomationArchitecture, IntegrationsGrid } from "@/components/n8n/sections/workflow-architecture";
import { siteConfig } from "@/content/site";

export function AutomationLanding() {
  return (
    <div className="n8n-page">
      <N8nHeader site={siteConfig} />
      <AutomationHero />
      <BusinessProblems />
      <AutomationServices />
      <AutomationArchitecture />
      <IntegrationsGrid />
      <AutomationTeam />
      <ClientDelivery />
      <AutomationFaqSection />
      <AutomationContact />
    </div>
  );
}
