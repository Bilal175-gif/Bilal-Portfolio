<script setup>
import { AccordionHeader, AccordionTrigger } from 'reka-ui';
import { ChevronDown } from 'lucide-vue-next';
import { cn } from '@/lib/utils';
</script>

<template>
  <AccordionHeader class="flex">
    <AccordionTrigger
      v-bind="$attrs"
      :class="
        cn(
          'flex flex-1 items-center justify-between py-4 text-left text-sm font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-180',
          $attrs.class,
        )
      "
    >
      <slot />
      <ChevronDown class="h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200" />
    </AccordionTrigger>
  </AccordionHeader>
</template>
