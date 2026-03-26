import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '@/views/HomeView.vue';
import AboutView from '@/views/AboutView.vue';
import ServicesView from '@/views/ServicesView.vue';
import WorkView from '@/views/WorkView.vue';
import ContactView from '@/views/ContactView.vue';
import AdminView from '@/views/AdminView.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    meta: {
      title: 'Zepra Tech | Where Ideas Turn Into Impact',
      description:
        'Grow your business with Zepra Tech through web development, SEO, Shopify, marketing, and smart digital growth solutions.',
    },
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView,
    meta: {
      title: 'About Zepra Tech | Modern Digital Agency',
      description:
        'Learn how Zepra Tech combines strategy, design, and technology to help service brands scale online with clarity.',
    },
  },
  {
    path: '/services',
    name: 'services',
    component: ServicesView,
    meta: {
      title: 'Services | Zepra Tech',
      description:
        'Explore Zepra Tech services including web development, SEO, digital marketing, Shopify store setup, and social media growth.',
    },
  },
  {
    path: '/work',
    name: 'work',
    component: WorkView,
    meta: {
      title: 'Portfolio | Zepra Tech',
      description:
        'Browse featured Zepra Tech projects across websites, ecommerce, branding, and digital marketing campaigns.',
    },
  },
  {
    path: '/contact',
    name: 'contact',
    component: ContactView,
    meta: {
      title: 'Contact Zepra Tech | Start Your Growth Project',
      description:
        'Request a quote, book a consultation, or contact Zepra Tech to build your next website or growth campaign.',
    },
  },
  {
    path: '/admin',
    name: 'admin',
    component: AdminView,
    meta: {
      title: 'Admin Panel | Zepra Tech',
      description:
        'Protected admin dashboard for Zepra Tech submissions, subscribers, and backend service status.',
    },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    }

    if (to.hash) {
      return {
        el: to.hash,
        top: 92,
        behavior: 'smooth',
      };
    }

    if (to.path !== from.path) {
      return {
        top: 0,
        behavior: 'smooth',
      };
    }

    return {};
  },
});

const ensureMetaTag = (name) => {
  let tag = document.head.querySelector(`meta[name="${name}"]`);

  if (!tag) {
    tag = document.createElement('meta');
    tag.setAttribute('name', name);
    document.head.appendChild(tag);
  }

  return tag;
};

router.afterEach((to) => {
  document.title = to.meta.title || 'Zepra Tech | Digital Growth Agency';
  ensureMetaTag('description').setAttribute(
    'content',
    to.meta.description ||
      'Zepra Tech is a digital agency helping businesses grow with web, SEO, marketing, and ecommerce solutions.',
  );
});

export default router;
