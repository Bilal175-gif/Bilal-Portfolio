<script setup>
import { computed, useAttrs } from 'vue';
import { cn } from '@/lib/utils';

const attrs = useAttrs();
const classes = computed(() => cn('p-6 pt-0', attrs.class));
</script>

<template>
  <div v-bind="{ ...attrs, class: undefined }" :class="classes">
    <slot />
  </div>
</template>
