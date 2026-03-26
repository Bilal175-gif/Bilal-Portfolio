<script setup>
import { computed } from 'vue';
import {
  ArrowRight,
  ArrowUpRight,
  Clock3,
  Code2,
  Facebook,
  Instagram,
  Layers3,
  Linkedin,
  Mail,
  MapPin,
  Megaphone,
  Menu,
  Phone,
  Quote,
  Rocket,
  Search,
  ShieldCheck,
  Share2,
  Sparkles,
  Star,
  Store,
  Target,
  TrendingUp,
  Users,
  X,
  Headset,
  ChevronDown,
} from 'lucide-vue-next';

const props = defineProps({
  name: {
    type: String,
    required: true,
  },
  size: {
    type: Number,
    default: 24,
  },
  strokeWidth: {
    type: Number,
    default: 1.8,
  },
});

const iconMap = {
  code: Code2,
  search: Search,
  megaphone: Megaphone,
  store: Store,
  share: Share2,
  growth: TrendingUp,
  target: Target,
  spark: Sparkles,
  users: Users,
  rocket: Rocket,
  layers: Layers3,
  shield: ShieldCheck,
  support: Headset,
  arrowRight: ArrowRight,
  arrowUpRight: ArrowUpRight,
  menu: Menu,
  x: X,
  instagram: Instagram,
  linkedin: Linkedin,
  facebook: Facebook,
  mail: Mail,
  phone: Phone,
  mapPin: MapPin,
  clock: Clock3,
  star: Star,
  quote: Quote,
  chevronDown: ChevronDown,
};

const normalizedName = computed(() =>
  props.name.replace(/-([a-z])/g, (_, character) => character.toUpperCase()),
);

const currentIcon = computed(() => iconMap[normalizedName.value] || Sparkles);
</script>

<template>
  <component :is="currentIcon" :size="size" :stroke-width="strokeWidth" />
</template>
