<script setup>
import { Card, CardContent } from '@/components/ui/card';
import SectionHeading from '@/components/ui/SectionHeading.vue';
import { useRevealOnScroll } from '@/composables/useRevealOnScroll';
import { processSteps } from '@/data/siteContent';

const { sectionRef } = useRevealOnScroll();
</script>

<template>
  <section id="process" ref="sectionRef" class="section section--light">
    <div class="container">
      <SectionHeading
        eyebrow="Our Process"
        title="A simple workflow that keeps projects focused, collaborative, and launch-ready."
        description="From first conversation to post-launch support, the process is designed to move fast without losing clarity."
      />

      <div class="process-grid">
        <article
          v-for="item in processSteps"
          :key="item.step"
          class="process-card"
          data-reveal
        >
          <Card class="h-full overflow-hidden border-border/60 bg-background/70">
            <CardContent class="p-6">
          <span class="process-card__step">{{ item.step }}</span>
          <h3>{{ item.title }}</h3>
          <p>{{ item.description }}</p>
            </CardContent>
          </Card>
        </article>
      </div>
    </div>
  </section>
</template>
