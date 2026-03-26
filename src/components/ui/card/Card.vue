<script setup>
import { computed, useAttrs } from 'vue';
import { cn } from '@/lib/utils';

const attrs = useAttrs();
const classes = computed(() =>
  cn('rounded-xl border border-border/60 bg-card text-card-foreground shadow-sm', attrs.class),
);
</script>

<template>
  <div v-bind="{ ...attrs, class: undefined }" :class="classes">
    <slot />
  </div>
</template>
