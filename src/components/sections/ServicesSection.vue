<script setup>
import { RouterLink } from 'vue-router';
import { ArrowRight } from 'lucide-vue-next';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import SectionHeading from '@/components/ui/SectionHeading.vue';
import IconSymbol from '@/components/ui/IconSymbol.vue';
import { useRevealOnScroll } from '@/composables/useRevealOnScroll';
import { services } from '@/data/siteContent';

const { sectionRef } = useRevealOnScroll();
</script>

<template>
  <section id="services" ref="sectionRef" class="section section--dark">
    <div class="container">
      <SectionHeading
        eyebrow="Services"
        title="Digital services designed to improve visibility, conversion, and long-term growth."
        description="Each service is built to work independently or as part of a full growth system."
      />

      <div class="services-grid">
        <article
          v-for="service in services"
          :id="service.slug"
          :key="service.slug"
          class="service-card"
          data-reveal
        >
          <Card class="glass-card h-full border-border/60 bg-card/80 backdrop-blur">
            <CardContent class="p-6">
          <span class="icon-badge">
            <IconSymbol :name="service.icon" :size="22" />
          </span>
          <h3>{{ service.title }}</h3>
          <p>{{ service.description }}</p>
          <Button
            :as="RouterLink"
            variant="ghost"
            size="sm"
            class="inline-link -ml-3 px-3"
            :to="{ path: '/contact', hash: '#contact-form', query: { service: service.title } }"
          >
            Learn more
            <ArrowRight class="h-4 w-4" />
          </Button>
            </CardContent>
          </Card>
        </article>
      </div>
    </div>
  </section>
</template>
