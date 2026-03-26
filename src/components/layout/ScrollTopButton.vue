<script setup>
import { onBeforeUnmount, onMounted, ref } from 'vue';
import IconSymbol from '@/components/ui/IconSymbol.vue';
import { Button } from '@/components/ui/button';

const visible = ref(false);

const handleScroll = () => {
  visible.value = window.scrollY > 420;
};

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

onMounted(() => {
  handleScroll();
  window.addEventListener('scroll', handleScroll, { passive: true });
});

onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>

<template>
  <transition name="float-in">
    <Button
      v-if="visible"
      class="scroll-top-button"
      size="icon"
      variant="default"
      aria-label="Scroll to top"
      @click="scrollToTop"
    >
      <IconSymbol name="arrow-up-right" :size="18" />
    </Button>
  </transition>
</template>
