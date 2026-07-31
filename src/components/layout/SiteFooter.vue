<script setup>
import { RouterLink } from 'vue-router';
import IconSymbol from '@/components/ui/IconSymbol.vue';
import { Badge } from '@/components/ui/badge';
import { company, navLinks, services, socialLinks } from '@/data/siteContent';

const year = new Date().getFullYear();
</script>

<template>
  <footer class="site-footer">
    <div class="container site-footer__grid">
      <div class="site-footer__brand">
        <div class="brand brand--footer">
          <span class="brand__signal brand__signal--footer" aria-hidden="true">
            <i />
            <i />
            <i />
          </span>
          <span class="brand__meta">
            <strong>{{ company.name }}</strong>
            <small>{{ company.tagline }}</small>
          </span>
        </div>

        <p>
          Zepra Tech helps businesses grow online through modern websites, smart campaigns,
          and practical digital strategy.
        </p>
        <Badge variant="outline" class="w-fit border-primary/30 bg-primary/10 text-primary">
          Built with shadcn-vue
        </Badge>

        <div class="site-footer__socials">
          <a
            v-for="social in socialLinks"
            :key="social.label"
            :href="social.href"
            target="_blank"
            rel="noreferrer"
            :aria-label="social.label"
          >
            <IconSymbol :name="social.icon" :size="18" />
          </a>
        </div>
      </div>

      <div>
        <h4>Quick Links</h4>
        <ul class="footer-links">
          <li v-for="link in navLinks" :key="link.to">
            <RouterLink :to="link.to">{{ link.label }}</RouterLink>
          </li>
        </ul>
      </div>

      <div>
        <h4>Services</h4>
        <ul class="footer-links">
          <li v-for="service in services" :key="service.slug">
            <RouterLink :to="{ path: '/services', hash: `#${service.slug}` }">
              {{ service.title }}
            </RouterLink>
          </li>
        </ul>
      </div>

      <div>
        <h4>Contact</h4>
        <ul class="footer-links footer-links--contact">
          <li>
            <IconSymbol name="mail" :size="16" />
            <a :href="`mailto:${company.email}`">{{ company.email }}</a>
          </li>
          <li>
            <IconSymbol name="phone" :size="16" />
            <a :href="`tel:${company.phone.replace(/\s+/g, '')}`">{{ company.phone }}</a>
          </li>
          <li>
            <IconSymbol name="map-pin" :size="16" />
            <span>{{ company.location }}</span>
          </li>
        </ul>
      </div>
    </div>

    <div class="container site-footer__bottom">
      <span>Copyright {{ year }} {{ company.name }}. All rights reserved.</span>
      <RouterLink to="/contact#contact-form">Request a Quote</RouterLink>
    </div>
  </footer>
</template>
