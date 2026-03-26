<script setup>
import { AccordionRoot } from 'reka-ui';
</script>

<template>
  <AccordionRoot v-bind="$attrs">
    <slot />
  </AccordionRoot>
</template>
