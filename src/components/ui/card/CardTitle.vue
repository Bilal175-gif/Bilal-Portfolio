<script setup>
import { computed, useAttrs } from 'vue';
import { cn } from '@/lib/utils';

const attrs = useAttrs();
const classes = computed(() => cn('font-semibold leading-none tracking-tight', attrs.class));
</script>

<template>
  <h3 v-bind="{ ...attrs, class: undefined }" :class="classes">
    <slot />
  </h3>
</template>
