<script setup>
import { AccordionItem } from 'reka-ui';
</script>

<template>
  <AccordionItem v-bind="$attrs">
    <slot />
  </AccordionItem>
</template>
