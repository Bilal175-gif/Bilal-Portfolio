<script setup>
import PageHero from '@/components/ui/PageHero.vue';
import ServicesSection from '@/components/sections/ServicesSection.vue';
import ProcessSection from '@/components/sections/ProcessSection.vue';
import FAQSection from '@/components/sections/FAQSection.vue';
import CTASection from '@/components/sections/CTASection.vue';
</script>

<template>
  <div class="page">
    <PageHero
      eyebrow="Services"
      title="Flexible digital services that support visibility, conversion, and long-term growth."
      description="From web development to SEO, Shopify setup, and campaign support, Zepra Tech helps brands build a stronger digital foundation."
      primary-label="Request a Quote"
      primary-to="/contact#contact-form"
      secondary-label="View Work"
      secondary-to="/work"
      :highlights="['Web + landing pages', 'SEO + visibility', 'Marketing + growth systems']"
    />
    <ServicesSection />
    <ProcessSection />
    <FAQSection />
    <CTASection />
  </div>
</template>
