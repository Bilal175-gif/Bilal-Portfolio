<script setup>
import PageHero from '@/components/ui/PageHero.vue';
import PortfolioSection from '@/components/sections/PortfolioSection.vue';
import TestimonialsSection from '@/components/sections/TestimonialsSection.vue';
import CTASection from '@/components/sections/CTASection.vue';
</script>

<template>
  <div class="page">
    <PageHero
      eyebrow="Portfolio"
      title="A snapshot of the kinds of websites, storefronts, and campaigns we can build."
      description="These featured concepts show how Zepra Tech approaches credibility, conversion, and brand growth across industries."
      primary-label="Start a Project"
      primary-to="/contact#contact-form"
      secondary-label="Explore Services"
      secondary-to="/services"
      :highlights="['Website concepts', 'Ecommerce experiences', 'Growth campaign systems']"
    />
    <PortfolioSection />
    <TestimonialsSection />
    <CTASection />
  </div>
</template>
