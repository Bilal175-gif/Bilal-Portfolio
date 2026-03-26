<script setup>
import { reactive, ref, watch } from 'vue';
import { useRoute } from 'vue-router';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import SectionHeading from '@/components/ui/SectionHeading.vue';
import IconSymbol from '@/components/ui/IconSymbol.vue';
import { useRevealOnScroll } from '@/composables/useRevealOnScroll';
import { company, services, socialLinks } from '@/data/siteContent';
import { postContactLead } from '@/lib/api';

const route = useRoute();
const { sectionRef } = useRevealOnScroll();

const fields = reactive({
  name: '',
  email: '',
  phone: '',
  service: '',
  message: '',
});

const errors = reactive({
  name: '',
  email: '',
  phone: '',
  service: '',
  message: '',
});

const isSubmitting = ref(false);
const submitMessage = ref('');
const submitError = ref('');

const applyServicePrefill = (serviceName) => {
  const match = services.find((service) => service.title === serviceName);
  if (match) {
    fields.service = match.title;
  }
};

watch(
  () => route.query.service,
  (serviceName) => {
    if (typeof serviceName === 'string') {
      applyServicePrefill(serviceName);
    }
  },
  { immediate: true },
);

const resetErrors = () => {
  Object.keys(errors).forEach((key) => {
    errors[key] = '';
  });
};

const validateEmail = (value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
const validatePhone = (value) => /^[\d+\-\s()]{7,}$/.test(value);

const validateForm = () => {
  resetErrors();

  if (!fields.name.trim()) {
    errors.name = 'Please enter your name.';
  }

  if (!validateEmail(fields.email.trim())) {
    errors.email = 'Please enter a valid email address.';
  }

  if (!validatePhone(fields.phone.trim())) {
    errors.phone = 'Please enter a valid phone number.';
  }

  if (!fields.service) {
    errors.service = 'Please choose a service.';
  }

  if (fields.message.trim().length < 20) {
    errors.message = 'Please share a few more details about your project.';
  }

  return !Object.values(errors).some(Boolean);
};

const applyServerErrors = (serverErrors = {}) => {
  Object.entries(serverErrors).forEach(([key, value]) => {
    if (key in errors) {
      errors[key] = value;
    }
  });
};

const handleSubmit = async () => {
  submitMessage.value = '';
  submitError.value = '';

  if (!validateForm()) {
    return;
  }

  isSubmitting.value = true;

  try {
    const response = await postContactLead({
      name: fields.name,
      email: fields.email,
      phone: fields.phone,
      service: fields.service,
      message: fields.message,
    });

    submitMessage.value = response.message;
    isSubmitting.value = false;

    fields.name = '';
    fields.email = '';
    fields.phone = '';
    fields.service = '';
    fields.message = '';
  } catch (error) {
    applyServerErrors(error.details);
    submitError.value = error.message || 'Something went wrong. Please try again.';
    isSubmitting.value = false;
  }
};
</script>

<template>
  <section id="contact" ref="sectionRef" class="section section--light">
    <div class="container contact-section">
      <div class="contact-section__intro">
        <SectionHeading
          eyebrow="Contact"
          title="Let’s plan the next stage of your digital growth."
          description="Share what you need and we will recommend the best path forward for your business."
        />

        <div class="contact-detail-list">
          <article class="contact-detail-card" data-reveal>
            <span class="icon-badge icon-badge--soft">
              <IconSymbol name="mail" :size="18" />
            </span>
            <div>
              <strong>Email</strong>
              <a :href="`mailto:${company.email}`">{{ company.email }}</a>
            </div>
          </article>

          <article class="contact-detail-card" data-reveal>
            <span class="icon-badge icon-badge--soft">
              <IconSymbol name="phone" :size="18" />
            </span>
            <div>
              <strong>Phone</strong>
              <a :href="`tel:${company.phone.replace(/\s+/g, '')}`">{{ company.phone }}</a>
            </div>
          </article>

          <article class="contact-detail-card" data-reveal>
            <span class="icon-badge icon-badge--soft">
              <IconSymbol name="map-pin" :size="18" />
            </span>
            <div>
              <strong>Location</strong>
              <span>{{ company.location }}</span>
            </div>
          </article>

          <article class="contact-detail-card" data-reveal>
            <span class="icon-badge icon-badge--soft">
              <IconSymbol name="clock" :size="18" />
            </span>
            <div>
              <strong>Support</strong>
              <span>{{ company.responseTime }}</span>
            </div>
          </article>
        </div>

        <div class="contact-section__socials" data-reveal>
          <a
            v-for="social in socialLinks"
            :key="social.label"
            class="social-pill"
            :href="social.href"
            target="_blank"
            rel="noreferrer"
          >
            <IconSymbol :name="social.icon" :size="16" />
            {{ social.label }}
          </a>
        </div>
      </div>

      <Card class="contact-section__form-wrap glass-card border-border/60 bg-card/80 backdrop-blur" data-reveal>
        <CardContent class="p-6">
        <Badge variant="outline" class="card-tag">Start your project</Badge>
        <form id="contact-form" class="contact-form" novalidate @submit.prevent="handleSubmit">
          <div class="form-grid">
            <label class="form-field">
              <span>Name</span>
              <Input v-model.trim="fields.name" type="text" placeholder="Your full name" />
              <small v-if="errors.name" class="error-text">{{ errors.name }}</small>
            </label>

            <label class="form-field">
              <span>Email</span>
              <Input v-model.trim="fields.email" type="email" placeholder="name@company.com" />
              <small v-if="errors.email" class="error-text">{{ errors.email }}</small>
            </label>

            <label class="form-field">
              <span>Phone</span>
              <Input v-model.trim="fields.phone" type="tel" placeholder="+92 300 000 0000" />
              <small v-if="errors.phone" class="error-text">{{ errors.phone }}</small>
            </label>

            <label class="form-field">
              <span>Service Needed</span>
              <Select v-model="fields.service">
                <SelectTrigger placeholder="Select a service" />
                <SelectContent>
                  <SelectItem v-for="service in services" :key="service.slug" :value="service.title">
                    {{ service.title }}
                  </SelectItem>
                </SelectContent>
              </Select>
              <small v-if="errors.service" class="error-text">{{ errors.service }}</small>
            </label>
          </div>

          <label class="form-field">
            <span>Message</span>
            <Textarea
              v-model.trim="fields.message"
              rows="6"
              placeholder="Tell us about your business, goals, timeline, or the kind of help you need."
            />
            <small v-if="errors.message" class="error-text">{{ errors.message }}</small>
          </label>

          <div class="contact-form__actions">
            <Button type="submit" :disabled="isSubmitting" class="w-fit">
              {{ isSubmitting ? 'Sending...' : 'Send Message' }}
            </Button>
            <p v-if="submitMessage" class="success-text">{{ submitMessage }}</p>
            <p v-if="submitError" class="error-text">{{ submitError }}</p>
          </div>
        </form>
        </CardContent>
      </Card>
    </div>
  </section>
</template>
