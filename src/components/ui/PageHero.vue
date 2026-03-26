<script setup>
import { RouterLink } from 'vue-router';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { company } from '@/data/siteContent';

defineProps({
  eyebrow: {
    type: String,
    default: 'Zepra Tech',
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  primaryLabel: {
    type: String,
    default: '',
  },
  primaryTo: {
    type: [String, Object],
    default: '',
  },
  secondaryLabel: {
    type: String,
    default: '',
  },
  secondaryTo: {
    type: [String, Object],
    default: '',
  },
  highlights: {
    type: Array,
    default: () => [],
  },
});
</script>

<template>
  <section class="page-hero">
    <div class="container page-hero__grid">
      <div class="page-hero__content">
        <Badge variant="outline" class="eyebrow">{{ eyebrow }}</Badge>
        <h1>{{ title }}</h1>
        <p>{{ description }}</p>

        <div class="page-hero__actions" v-if="primaryLabel || secondaryLabel">
          <Button v-if="primaryLabel" :as="RouterLink" :to="primaryTo">
            {{ primaryLabel }}
          </Button>
          <Button v-if="secondaryLabel" :as="RouterLink" :to="secondaryTo" variant="outline">
            {{ secondaryLabel }}
          </Button>
        </div>
      </div>

      <Card class="page-hero__aside border-border/60 bg-card/80 backdrop-blur">
        <CardContent class="p-6">
        <Badge variant="outline" class="card-tag">Inside Zepra Tech</Badge>
        <h3>Built to support brands that want cleaner positioning and faster growth.</h3>
        <ul class="page-hero__highlights">
          <li v-for="highlight in highlights" :key="highlight">{{ highlight }}</li>
          <li>{{ company.responseTime }}</li>
        </ul>
        </CardContent>
      </Card>
    </div>
  </section>
</template>
