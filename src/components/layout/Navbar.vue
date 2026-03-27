<script setup>
import { onBeforeUnmount, onMounted, ref, watch } from 'vue';
import { RouterLink, useRoute } from 'vue-router';
import { Menu } from 'lucide-vue-next';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { company, navLinks } from '@/data/siteContent';
import logoImage from '@/assets/logo.png';

const route = useRoute();
const isScrolled = ref(false);
const mobileOpen = ref(false);

const handleScroll = () => {
  isScrolled.value = window.scrollY > 18;
};

const closeMenu = () => {
  mobileOpen.value = false;
};

watch(
  () => route.fullPath,
  () => {
    closeMenu();
  },
);

onMounted(() => {
  handleScroll();
  window.addEventListener('scroll', handleScroll, { passive: true });
});

onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>

<template>
  <header class="navbar" :class="{ 'is-scrolled': isScrolled }">
    <div class="container navbar__inner">
      <RouterLink class="brand" to="/" @click="closeMenu">
        <img :src="logoImage" alt="Zepra Tech logo" class="brand__logo" />
        <span class="brand__meta">
          <strong>{{ company.name }}</strong>
          <small>Digital Growth Agency</small>
        </span>
      </RouterLink>

      <nav class="navbar__nav hidden md:flex" aria-label="Primary">
        <RouterLink
          v-for="link in navLinks"
          :key="link.to"
          class="nav-link"
          :to="link.to"
          active-class="is-active"
          exact-active-class="is-active"
          @click="closeMenu"
        >
          {{ link.label }}
        </RouterLink>

        <Button as="span" size="sm" class="navbar__mobile-cta hidden">Book a Consultation</Button>
      </nav>

      <div class="navbar__actions">
        <Button :as="RouterLink" to="/contact#contact-form" variant="outline" size="sm" class="navbar__desktop-cta hidden md:inline-flex">
          Book a Consultation
        </Button>

        <Sheet v-model:open="mobileOpen">
          <SheetTrigger as-child>
            <Button
              variant="outline"
              size="icon"
              class="navbar__toggle md:hidden"
              aria-label="Toggle navigation"
            >
              <Menu class="h-5 w-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" class="border-border/60 bg-background/95">
            <SheetHeader>
              <SheetTitle>{{ company.name }}</SheetTitle>
            </SheetHeader>

            <div class="mt-8 grid gap-4">
              <RouterLink
                v-for="link in navLinks"
                :key="`${link.to}-mobile`"
                class="nav-link text-base"
                :to="link.to"
                active-class="is-active"
                exact-active-class="is-active"
                @click="closeMenu"
              >
                {{ link.label }}
              </RouterLink>

              <Button :as="RouterLink" to="/contact#contact-form" class="mt-3 w-full" @click="closeMenu">
                Book a Consultation
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  </header>
</template>
