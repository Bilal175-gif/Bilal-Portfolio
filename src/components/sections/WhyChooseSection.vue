<script setup>
import { Card, CardContent } from '@/components/ui/card';
import SectionHeading from '@/components/ui/SectionHeading.vue';
import IconSymbol from '@/components/ui/IconSymbol.vue';
import { useRevealOnScroll } from '@/composables/useRevealOnScroll';
import { whyChooseUs } from '@/data/siteContent';

const { sectionRef } = useRevealOnScroll();
</script>

<template>
  <section id="why-us" ref="sectionRef" class="section section--light">
    <div class="container">
      <SectionHeading
        eyebrow="Why Choose Us"
        title="A practical, modern approach built for service businesses and fast-moving brands."
        description="We focus on execution that feels premium, performs well, and supports the broader business."
      />

      <div class="feature-grid">
        <article v-for="item in whyChooseUs" :key="item.title" class="feature-card" data-reveal>
          <Card class="h-full border-border/60 bg-background/70 shadow-sm">
            <CardContent class="p-6">
          <span class="icon-badge icon-badge--soft">
            <IconSymbol :name="item.icon" :size="20" />
          </span>
          <h3>{{ item.title }}</h3>
          <p>{{ item.description }}</p>
            </CardContent>
          </Card>
        </article>
      </div>
    </div>
  </section>
</template>
