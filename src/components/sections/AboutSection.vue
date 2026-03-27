<script setup>
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import SectionHeading from '@/components/ui/SectionHeading.vue';
import IconSymbol from '@/components/ui/IconSymbol.vue';
import { useRevealOnScroll } from '@/composables/useRevealOnScroll';
import { aboutHighlights, missionVisionValues } from '@/data/siteContent';

const { sectionRef } = useRevealOnScroll();
</script>

<template>
  <section id="about" ref="sectionRef" class="section section--light">
    <div class="container about-section">
      <div class="about-section__intro">
        <SectionHeading
        class="text-white"
          eyebrow="About Zepra Tech"
          title="A growth partner for businesses that need more than a basic online presence."
          description="We blend strategy, design, development, and performance thinking to help brands grow with clarity and confidence."
        />

        <p class="about-section__lead" data-reveal>
          Zepra Tech is a modern digital agency built for businesses that want sharper positioning,
          better customer experiences, and digital systems that actually support growth.
        </p>

        <div class="about-section__values">
          <article
            v-for="item in missionVisionValues"
            :key="item.title"
            class="about-value-card"
            data-reveal
          >
            <Card class="glass-card h-full border-border/60 bg-card/80 backdrop-blur">
              <CardContent class="grid gap-4 p-6 md:grid-cols-[auto_1fr]">
            <span class="icon-badge">
              <IconSymbol :name="item.icon" :size="20" />
            </span>
            <div>
              <h3>{{ item.title }}</h3>
              <p>{{ item.description }}</p>
            </div>
              </CardContent>
            </Card>
          </article>
        </div>
      </div>

      <div class="about-section__details">
        <Card class="glass-card about-story-card border-border/60 bg-card/80 backdrop-blur" data-reveal>
          <CardContent class="p-6">
          <Badge variant="outline" class="card-tag">What we bring</Badge>
          <h3>Creative thinking, clean execution, and business-first decisions.</h3>
          <p>
            Whether you need a fresh website, stronger SEO, a better Shopify experience,
            or ongoing marketing support, we focus on work that moves the business forward.
          </p>
          </CardContent>
        </Card>

        <div class="about-section__highlights">
          <article
            v-for="highlight in aboutHighlights"
            :key="highlight.title"
            class="highlight-card"
            data-reveal
          >
            <span class="icon-badge icon-badge--soft">
              <IconSymbol :name="highlight.icon" :size="18" />
            </span>
            <h3>{{ highlight.title }}</h3>
            <p>{{ highlight.description }}</p>
          </article>
        </div>
      </div>
    </div>
  </section>
</template>
