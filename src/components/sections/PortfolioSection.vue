<script setup>
import { computed, nextTick, onBeforeUnmount, onMounted, ref, watch } from 'vue';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import SectionHeading from '@/components/ui/SectionHeading.vue';
import IconSymbol from '@/components/ui/IconSymbol.vue';
import { projects } from '@/data/siteContent';

const sectionRef = ref(null);
const activeCategory = ref('All');
let observer;

const categories = computed(() => ['All', ...new Set(projects.map((project) => project.category))]);
const filteredProjects = computed(() =>
  activeCategory.value === 'All'
    ? projects
    : projects.filter((project) => project.category === activeCategory.value),
);

const observeCards = async () => {
  await nextTick();

  if (!sectionRef.value || !observer) {
    return;
  }

  const nodes = sectionRef.value.querySelectorAll('[data-portfolio-reveal]');
  nodes.forEach((node, index) => {
    if (node.dataset.observed === 'true') {
      return;
    }

    node.style.setProperty('--reveal-delay', `${index * 80}ms`);
    observer.observe(node);
    node.dataset.observed = 'true';
  });
};

onMounted(() => {
  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer?.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.15,
      rootMargin: '0px 0px -10% 0px',
    },
  );

  observeCards();
});

watch(filteredProjects, () => {
  observeCards();
});

onBeforeUnmount(() => {
  observer?.disconnect();
});
</script>

<template>
  <section id="work" ref="sectionRef" class="section section--light">
    <div class="container">
      <SectionHeading
        eyebrow="Featured Work"
        title="Selected projects built for visibility, credibility, and conversion."
        description="A sample portfolio that shows how Zepra Tech can support websites, ecommerce brands, and growth campaigns."
      />

      <div class="filter-row">
        <Button
          v-for="category in categories"
          :key="category"
          class="filter-chip"
          :class="{ 'is-active': category === activeCategory }"
          variant="outline"
          size="sm"
          @click="activeCategory = category"
        >
          {{ category }}
        </Button>
      </div>

      <div class="portfolio-grid">
        <article
          v-for="project in filteredProjects"
          :key="project.title"
          class="project-card"
          data-portfolio-reveal
        >
          <Card class="h-full overflow-hidden border-border/60 bg-background/80">
            <div class="project-card__image-wrap">
            <img :src="project.image" :alt="`${project.title} project preview`" class="project-card__image" />
            </div>

            <CardContent class="project-card__content p-5">
            <Badge variant="outline" class="card-tag">{{ project.category }}</Badge>
            <h3>{{ project.title }}</h3>
            <p>{{ project.description }}</p>

            <div class="project-card__footer">
              <strong>{{ project.result }}</strong>
              <span class="project-card__link">
                View concept
                <IconSymbol name="arrow-up-right" :size="16" />
              </span>
            </div>
            </CardContent>
          </Card>
        </article>
      </div>
    </div>
  </section>
</template>
