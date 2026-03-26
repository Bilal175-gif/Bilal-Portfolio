<script setup>
import SectionHeading from '@/components/ui/SectionHeading.vue';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { useRevealOnScroll } from '@/composables/useRevealOnScroll';
import { faqs } from '@/data/siteContent';

const { sectionRef } = useRevealOnScroll();
</script>

<template>
  <section id="faq" ref="sectionRef" class="section section--light">
    <div class="container faq-section">
      <SectionHeading
        eyebrow="FAQ"
        title="Answers to common questions before we start."
        description="A few quick points that help set expectations around scope, process, and support."
      />

      <Accordion
        type="single"
        collapsible
        default-value="faq-0"
        class="faq-list"
      >
        <AccordionItem
          v-for="(item, index) in faqs"
          :value="`faq-${index}`"
          :key="item.question"
          class="faq-item"
          data-reveal
        >
          <AccordionTrigger class="faq-item__button no-underline hover:no-underline">
            {{ item.question }}
          </AccordionTrigger>
          <AccordionContent class="faq-item__content">
            <p>{{ item.answer }}</p>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  </section>
</template>
