<script setup>
import { Badge } from '@/components/ui/badge';

defineProps({
  eyebrow: {
    type: String,
    default: '',
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    default: '',
  },
  align: {
    type: String,
    default: 'left',
  },
});
</script>

<template>
  <div class="section-heading" :class="`section-heading--${align}`">
    <Badge v-if="eyebrow" variant="outline" class="eyebrow">
      {{ eyebrow }}
    </Badge>
    <h2>{{ title }}</h2>
    <p v-if="description">{{ description }}</p>
  </div>
</template>
