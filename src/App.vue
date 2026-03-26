<script setup>
import { onBeforeUnmount, onMounted, ref } from 'vue';
import { RouterView, useRoute } from 'vue-router';
import Navbar from '@/components/layout/Navbar.vue';
import SiteFooter from '@/components/layout/SiteFooter.vue';
import ScrollTopButton from '@/components/layout/ScrollTopButton.vue';
import LoadingOverlay from '@/components/ui/LoadingOverlay.vue';
import NewsletterSection from '@/components/sections/NewsletterSection.vue';

const route = useRoute();
const isLoading = ref(true);
let loadingTimer;

onMounted(() => {
  loadingTimer = window.setTimeout(() => {
    isLoading.value = false;
  }, 900);
});

onBeforeUnmount(() => {
  window.clearTimeout(loadingTimer);
});
</script>

<template>
  <div class="site-shell">
    <a class="skip-link" href="#main-content">Skip to content</a>

    <div class="ambient-glow ambient-glow--one"></div>
    <div class="ambient-glow ambient-glow--two"></div>

    <LoadingOverlay :visible="isLoading" />
    <Navbar />

    <main id="main-content">
      <RouterView v-slot="{ Component }">
        <transition name="page-fade" mode="out-in">
          <component :is="Component" :key="route.fullPath" />
        </transition>
      </RouterView>
    </main>

    <NewsletterSection />
    <SiteFooter />
    <ScrollTopButton />
  </div>
</template>
