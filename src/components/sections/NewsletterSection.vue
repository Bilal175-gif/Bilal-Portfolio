<script setup>
import { ref } from 'vue';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { useRevealOnScroll } from '@/composables/useRevealOnScroll';
import { postNewsletterSubscription } from '@/lib/api';

const { sectionRef } = useRevealOnScroll();
const email = ref('');
const error = ref('');
const success = ref('');

const validateEmail = (value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);

const handleSubmit = async () => {
  error.value = '';
  success.value = '';

  if (!validateEmail(email.value.trim())) {
    error.value = 'Please enter a valid email address.';
    return;
  }

  try {
    const response = await postNewsletterSubscription({ email: email.value });
    success.value = response.message;
    email.value = '';
  } catch (requestError) {
    error.value = requestError.details?.email || requestError.message || 'Unable to subscribe right now.';
  }
};
</script>

<template>
  <section ref="sectionRef" class="newsletter-section">
    <div class="container">
      <Card class="newsletter-card glass-card border-border/60 bg-card/85 backdrop-blur" data-reveal>
        <CardContent class="grid gap-6 p-6">
        <div>
          <Badge variant="outline" class="eyebrow">Newsletter</Badge>
          <h2>Get useful digital growth insights from Zepra Tech.</h2>
          <p>
            Subscribe for website ideas, SEO notes, campaign tips, and practical strategies
            you can apply to your business.
          </p>
        </div>

        <form class="newsletter-form" novalidate @submit.prevent="handleSubmit">
          <label class="form-field">
            <span class="sr-only">Email address</span>
            <Input v-model.trim="email" type="email" placeholder="Enter your email address" />
          </label>
          <Button type="submit">Subscribe</Button>
        </form>

        <p v-if="error" class="error-text newsletter-card__message">{{ error }}</p>
        <p v-if="success" class="success-text newsletter-card__message">{{ success }}</p>
        </CardContent>
      </Card>
    </div>
  </section>
</template>
