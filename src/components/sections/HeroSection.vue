<script setup>
import { RouterLink } from 'vue-router';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { useRevealOnScroll } from '@/composables/useRevealOnScroll';
import { company } from '@/data/siteContent';

const { sectionRef } = useRevealOnScroll();
</script>

<template>
  <section id="home" ref="sectionRef" class="hero-section">
    <div class="container hero-section__grid">
      <div class="hero-section__content">
        <Badge variant="outline" class="eyebrow" data-reveal>Premium Digital Agency</Badge>
        <h1 data-reveal>Where Ideas Turn Into Impact</h1>
        <p data-reveal>
          Zepra Tech helps businesses grow online through modern websites, SEO strategy,
          digital marketing, Shopify launches, and growth-focused execution.
        </p>

        <div class="hero-section__actions" data-reveal>
          <Button :as="RouterLink" :to="{ path: '/', hash: '#services' }">Get Started</Button>
          <Button :as="RouterLink" to="/contact#contact-form" variant="outline">
            Book a Consultation
          </Button>
        </div>

        <div class="hero-section__trust" data-reveal>
          <span>Modern builds</span>
          <span>Clear strategy</span>
          <span>Growth-first delivery</span>
        </div>
      </div>

      <div class="hero-section__visual" data-reveal>
        <Card class="glass-card hero-card hero-card--primary border-border/60 bg-card/80 backdrop-blur">
          <CardContent class="p-6">
          <Badge variant="outline" class="card-tag">Growth snapshot</Badge>
          <h2>Clean execution for brands that want premium positioning.</h2>
          <ul class="hero-metrics">
            <li>
              <strong>Web + SEO</strong>
              <span>High-performing foundations that support every campaign.</span>
            </li>
            <li>
              <strong>Marketing Systems</strong>
              <span>Messaging, funnels, and social touchpoints that convert attention.</span>
            </li>
            <li>
              <strong>Business Support</strong>
              <span>{{ company.responseTime }}</span>
            </li>
          </ul>
          </CardContent>
        </Card>

        <Card class="glass-card hero-card hero-card--floating border-border/60 bg-card/80 backdrop-blur">
          <CardContent class="p-6">
          <Badge variant="outline" class="card-tag">Trusted Growth Partner</Badge>
          <p>Strategy, design, development, launch, and optimization under one process.</p>
          </CardContent>
        </Card>
      </div>
    </div>
  </section>
</template>
