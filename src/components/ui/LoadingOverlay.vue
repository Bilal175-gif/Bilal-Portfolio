<script setup>
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';

defineProps({
  visible: {
    type: Boolean,
    default: false,
  },
});
</script>

<template>
  <transition name="overlay-fade">
    <div v-if="visible" class="loading-overlay" aria-hidden="true">
      <Card class="loading-overlay__card border-border/60 bg-card/90">
        <CardContent class="flex flex-col items-center gap-4 p-8">
        <div class="brand-mark brand-mark--large">ZT</div>
        <Badge variant="outline" class="border-primary/30 bg-primary/10 text-primary">
          Zepra Tech
        </Badge>
        <p>Building digital momentum...</p>
        <div class="loading-overlay__bars">
          <span></span>
          <span></span>
          <span></span>
        </div>
        </CardContent>
      </Card>
    </div>
  </transition>
</template>
