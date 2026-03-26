<script setup>
import { computed, onMounted, ref } from 'vue';
import { Database, Mail, RefreshCcw, Server, ShieldCheck } from 'lucide-vue-next';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { getAdminDashboard } from '@/lib/api';

const defaultDevKey = import.meta.env.DEV ? 'zepra-admin-dev-key' : '';
const apiKey = ref(window.localStorage.getItem('zepra-admin-key') || defaultDevKey);
const isLoading = ref(false);
const error = ref('');
const dashboard = ref(null);

const contactCount = computed(() => dashboard.value?.counts?.contacts || 0);
const newsletterCount = computed(() => dashboard.value?.counts?.newsletter || 0);

const loadDashboard = async () => {
  error.value = '';

  if (!apiKey.value.trim()) {
    error.value = 'Enter your admin API key first.';
    return;
  }

  isLoading.value = true;

  try {
    const response = await getAdminDashboard(apiKey.value.trim());
    dashboard.value = response;
    window.localStorage.setItem('zepra-admin-key', apiKey.value.trim());
  } catch (requestError) {
    dashboard.value = null;
    error.value = requestError.message || 'Unable to load admin dashboard.';
  } finally {
    isLoading.value = false;
  }
};

onMounted(() => {
  if (apiKey.value) {
    loadDashboard();
  }
});
</script>

<template>
  <div class="page">
    <section class="page-hero">
      <div class="container space-y-8">
        <div class="max-w-3xl space-y-4">
          <Badge variant="outline" class="eyebrow">Admin Panel</Badge>
          <h1 class="text-4xl font-semibold tracking-tight text-white md:text-6xl">
            Monitor leads, subscribers, and backend services.
          </h1>
          <p class="max-w-2xl text-base text-slate-300 md:text-lg">
            This panel reads protected admin endpoints from the Node backend. Enter your admin API key to unlock submission data.
          </p>
          <p class="text-sm text-slate-400">
            Development default key: <code>zepra-admin-dev-key</code>
          </p>
        </div>

        <Card class="border-border/60 bg-card/85 backdrop-blur">
          <CardContent class="grid gap-4 p-6 md:grid-cols-[1fr_auto]">
            <div class="space-y-2">
              <label class="text-sm font-medium text-white" for="admin-key">Admin API Key</label>
              <Input id="admin-key" v-model.trim="apiKey" type="password" placeholder="Enter admin key" />
            </div>
            <div class="flex items-end">
              <Button class="w-full md:w-auto" :disabled="isLoading" @click="loadDashboard">
                <RefreshCcw class="h-4 w-4" />
                {{ isLoading ? 'Loading...' : 'Load Dashboard' }}
              </Button>
            </div>
          </CardContent>
        </Card>

        <p v-if="error" class="text-sm text-red-400">{{ error }}</p>
      </div>
    </section>

    <section v-if="dashboard" class="section section--light">
      <div class="container space-y-6">
        <div class="grid gap-4 md:grid-cols-3">
          <Card class="border-border/60 bg-background/80">
            <CardHeader class="flex flex-row items-center justify-between space-y-0">
              <CardTitle class="text-base">Contact Leads</CardTitle>
              <ShieldCheck class="h-5 w-5 text-primary" />
            </CardHeader>
            <CardContent class="pt-0">
              <p class="text-4xl font-semibold text-slate-950">{{ contactCount }}</p>
            </CardContent>
          </Card>

          <Card class="border-border/60 bg-background/80">
            <CardHeader class="flex flex-row items-center justify-between space-y-0">
              <CardTitle class="text-base">Subscribers</CardTitle>
              <Mail class="h-5 w-5 text-primary" />
            </CardHeader>
            <CardContent class="pt-0">
              <p class="text-4xl font-semibold text-slate-950">{{ newsletterCount }}</p>
            </CardContent>
          </Card>

          <Card class="border-border/60 bg-background/80">
            <CardHeader class="flex flex-row items-center justify-between space-y-0">
              <CardTitle class="text-base">Services</CardTitle>
              <Server class="h-5 w-5 text-primary" />
            </CardHeader>
            <CardContent class="pt-0">
              <div class="flex flex-wrap gap-2">
                <Badge variant="outline">
                  Mongo {{ dashboard.environment.mongoEnabled ? 'configured' : 'fallback' }}
                </Badge>
                <Badge variant="outline">
                  Mail {{ dashboard.environment.mailEnabled ? 'configured' : 'disabled' }}
                </Badge>
              </div>
            </CardContent>
          </Card>
        </div>

        <div class="grid gap-4 xl:grid-cols-2">
          <Card class="border-border/60 bg-background/80">
            <CardHeader>
              <CardTitle class="flex items-center gap-2 text-slate-950">
                <Database class="h-5 w-5 text-primary" />
                Recent Contact Leads
              </CardTitle>
            </CardHeader>
            <CardContent class="space-y-4">
              <div
                v-for="lead in dashboard.contacts"
                :key="lead.id"
                class="rounded-lg border border-border/60 bg-white/70 p-4"
              >
                <div class="flex flex-wrap items-center justify-between gap-2">
                  <strong class="text-slate-950">{{ lead.name }}</strong>
                  <Badge variant="outline">{{ lead.service }}</Badge>
                </div>
                <p class="mt-2 text-sm text-slate-600">{{ lead.email }} · {{ lead.phone }}</p>
                <p class="mt-3 text-sm text-slate-700">{{ lead.message }}</p>
              </div>
              <p v-if="!dashboard.contacts.length" class="text-sm text-slate-500">No leads yet.</p>
            </CardContent>
          </Card>

          <Card class="border-border/60 bg-background/80">
            <CardHeader>
              <CardTitle class="flex items-center gap-2 text-slate-950">
                <Mail class="h-5 w-5 text-primary" />
                Newsletter Subscribers
              </CardTitle>
            </CardHeader>
            <CardContent class="space-y-4">
              <div
                v-for="subscriber in dashboard.newsletter"
                :key="subscriber.id"
                class="rounded-lg border border-border/60 bg-white/70 p-4"
              >
                <strong class="text-slate-950">{{ subscriber.email }}</strong>
                <p class="mt-2 text-sm text-slate-500">{{ subscriber.createdAt }}</p>
              </div>
              <p v-if="!dashboard.newsletter.length" class="text-sm text-slate-500">No subscribers yet.</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  </div>
</template>
