<script setup>
import { RouterLink } from 'vue-router';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
</script>

<template>
  <section class="section section--dark section--tight">
    <div class="container">
      <Card class="cta-banner border-border/60 bg-card/85 backdrop-blur">
        <CardContent class="grid gap-5 p-7">
        <div>
          <Badge variant="outline" class="eyebrow">Ready to build momentum?</Badge>
          <h2>Ready to grow your business with Zepra Tech?</h2>
          <p>
            Let’s shape a website, campaign, or growth plan that fits your goals and moves quickly.
          </p>
        </div>

        <div class="cta-banner__actions">
          <Button :as="RouterLink" to="/contact#contact-form">Contact Us</Button>
          <Button :as="RouterLink" to="/contact#contact-form" variant="outline">
            Request a Quote
          </Button>
        </div>
        </CardContent>
      </Card>
    </div>
  </section>
</template>
