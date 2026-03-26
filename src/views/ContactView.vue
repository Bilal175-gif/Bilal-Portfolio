<script setup>
import PageHero from '@/components/ui/PageHero.vue';
import ContactSection from '@/components/sections/ContactSection.vue';
import FAQSection from '@/components/sections/FAQSection.vue';
</script>

<template>
  <div class="page">
    <PageHero
      eyebrow="Contact"
      title="Tell us what you need and we'll help shape the right digital path forward."
      description="Share your goals, timeline, and the type of support you need. We'll come back with practical next steps."
      primary-label="Send a Project Brief"
      primary-to="/contact#contact-form"
      secondary-label="See Our Work"
      secondary-to="/work"
      :highlights="['Fast first response', 'Clear recommendations', 'Flexible project scopes']"
    />
    <ContactSection />
    <FAQSection />
  </div>
</template>
