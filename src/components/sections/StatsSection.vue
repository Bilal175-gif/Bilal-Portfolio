<script setup>
import { onBeforeUnmount, onMounted, ref } from 'vue';
import { Card, CardContent } from '@/components/ui/card';
import { stats } from '@/data/siteContent';

const sectionRef = ref(null);
const displayedStats = ref(stats.map(() => 0));
let observer;
let frameIds = [];
let hasAnimated = false;

const animateCounters = () => {
  if (hasAnimated) {
    return;
  }

  hasAnimated = true;

  stats.forEach((stat, index) => {
    const duration = 1400;
    const start = performance.now();

    const tick = (now) => {
      const progress = Math.min((now - start) / duration, 1);
      displayedStats.value[index] = Math.round(progress * stat.value);

      if (progress < 1) {
        frameIds[index] = window.requestAnimationFrame(tick);
      }
    };

    frameIds[index] = window.requestAnimationFrame(tick);
  });
};

onMounted(() => {
  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          animateCounters();
          entry.target.classList.add('is-visible');
          observer?.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.45 },
  );

  if (sectionRef.value) {
    observer.observe(sectionRef.value);
  }
});

onBeforeUnmount(() => {
  observer?.disconnect();
  frameIds.forEach((frameId) => window.cancelAnimationFrame(frameId));
});
</script>

<template>
  <section class="stats-section">
    <div ref="sectionRef" class="container stats-section__grid" data-reveal>
      <article v-for="(stat, index) in stats" :key="stat.label" class="stats-card">
        <Card class="h-full border-border/60 bg-background/90">
          <CardContent class="p-6">
        <strong>{{ displayedStats[index] }}{{ stat.suffix }}</strong>
        <span>{{ stat.label }}</span>
          </CardContent>
        </Card>
      </article>
    </div>
  </section>
</template>
