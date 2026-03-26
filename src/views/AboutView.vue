<script setup>
import PageHero from '@/components/ui/PageHero.vue';
import AboutSection from '@/components/sections/AboutSection.vue';
import WhyChooseSection from '@/components/sections/WhyChooseSection.vue';
import ProcessSection from '@/components/sections/ProcessSection.vue';
import TestimonialsSection from '@/components/sections/TestimonialsSection.vue';
import CTASection from '@/components/sections/CTASection.vue';
</script>

<template>
  <div class="page">
    <PageHero
      eyebrow="About"
      title="A modern agency built to help ambitious businesses grow with confidence."
      description="Zepra Tech combines strategy, design quality, and delivery speed to create digital systems that feel premium and perform well."
      primary-label="Explore Services"
      primary-to="/services"
      secondary-label="Book a Consultation"
      secondary-to="/contact#contact-form"
      :highlights="['Business-first strategy', 'Design with intent', 'Flexible collaboration']"
    />
    <AboutSection />
    <WhyChooseSection />
    <ProcessSection />
    <TestimonialsSection />
    <CTASection />
  </div>
</template>
