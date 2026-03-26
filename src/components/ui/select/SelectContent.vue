<script setup>
import { SelectContent, SelectPortal, SelectViewport } from 'reka-ui';
import { cn } from '@/lib/utils';
</script>

<template>
  <SelectPortal>
    <SelectContent
      v-bind="$attrs"
      :class="
        cn(
          'relative z-50 max-h-96 min-w-[8rem] overflow-hidden rounded-md border border-border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out',
          $attrs.class,
        )
      "
      position="popper"
    >
      <SelectViewport class="p-1">
        <slot />
      </SelectViewport>
    </SelectContent>
  </SelectPortal>
</template>
