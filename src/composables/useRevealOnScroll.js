import { onBeforeUnmount, onMounted, ref } from 'vue';

export const useRevealOnScroll = (options = {}) => {
  const sectionRef = ref(null);
  let observer;

  onMounted(() => {
    if (!sectionRef.value) {
      return;
    }

    const nodes = sectionRef.value.querySelectorAll('[data-reveal]');

    if (!nodes.length) {
      return;
    }

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
        threshold: options.threshold ?? 0.14,
        rootMargin: '0px 0px -8% 0px',
      },
    );

    nodes.forEach((node, index) => {
      node.style.setProperty('--reveal-delay', `${index * 90}ms`);
      observer.observe(node);
    });
  });

  onBeforeUnmount(() => {
    observer?.disconnect();
  });

  return { sectionRef };
};
