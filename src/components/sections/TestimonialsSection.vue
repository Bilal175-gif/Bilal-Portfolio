<script setup>
import { Card, CardContent } from '@/components/ui/card';
import SectionHeading from '@/components/ui/SectionHeading.vue';
import IconSymbol from '@/components/ui/IconSymbol.vue';
import { useRevealOnScroll } from '@/composables/useRevealOnScroll';
import { testimonials } from '@/data/siteContent';

const { sectionRef } = useRevealOnScroll();
</script>

<template>
  <section id="testimonials" ref="sectionRef" class="section section--dark">
    <div class="container">
      <SectionHeading
        class="text-[#172148] [&_.eyebrow]:border-[#0A1322]/20 [&_.eyebrow]:bg-[#0A1322]/10 [&_.eyebrow]:text-[#0A1322]"
        eyebrow="Testimonials"
        title="Client feedback centered on clarity, speed, and real results."
        description="Sample testimonials show the type of outcomes and experience Zepra Tech aims to deliver."
      />

      <div class="testimonial-grid">
        <article
          v-for="testimonial in testimonials"
          :key="testimonial.name"
          class="testimonial-card"
          data-reveal
        >
          <Card class="glass-card h-full border-border/60 bg-card/80 backdrop-blur">
            <CardContent class="p-6">
          <div class="testimonial-card__top">
            <span class="quote-icon">
              <IconSymbol name="quote" :size="24" />
            </span>
            <div class="rating-stars">
              <IconSymbol
                v-for="index in testimonial.rating"
                :key="`${testimonial.name}-${index}`"
                name="star"
                :size="14"
                :stroke-width="1"
              />
            </div>
          </div>
          <p>{{ testimonial.review }}</p>
          <div>
            <strong>{{ testimonial.name }}</strong>
            <span>{{ testimonial.role }}</span>
          </div>
            </CardContent>
          </Card>
        </article>
      </div>
    </div>
  </section>
</template>
