<script setup>
import { computed, useAttrs } from 'vue';
import { cn } from '@/lib/utils';

const props = defineProps({
  modelValue: {
    type: [String, Number],
    default: '',
  },
  modelModifiers: {
    type: Object,
    default: () => ({}),
  },
});

const emit = defineEmits(['update:modelValue']);
const attrs = useAttrs();

const classes = computed(() =>
  cn(
    'flex h-10 w-full rounded-md border border-input bg-background/70 px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
    attrs.class,
  ),
);

const handleInput = (event) => {
  let value = event.target.value;

  if (props.modelModifiers.trim) {
    value = value.trim();
  }

  emit('update:modelValue', value);
};
</script>

<template>
  <input
    v-bind="{ ...attrs, class: undefined }"
    :class="classes"
    :value="modelValue"
    @input="handleInput"
  />
</template>
