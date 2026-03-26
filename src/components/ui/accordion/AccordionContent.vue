<script setup>
import { AccordionContent } from 'reka-ui';
import { cn } from '@/lib/utils';
</script>

<template>
  <AccordionContent
    v-bind="$attrs"
    :class="cn('overflow-hidden text-sm data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down', $attrs.class)"
  >
    <div class="pb-4 pt-0">
      <slot />
    </div>
  </AccordionContent>
</template>
