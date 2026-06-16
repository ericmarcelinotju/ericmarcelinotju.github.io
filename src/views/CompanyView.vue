<script setup lang="ts">
import { computed, watchEffect } from 'vue'
import { useRoute } from 'vue-router'
import { companyLogo, findCompany, profile } from '../data/resume'
import CompanyLogo from '../components/CompanyLogo.vue'

const route = useRoute()
const company = computed(() => findCompany(String(route.params.slug)))

watchEffect(() => {
  document.title = company.value
    ? `${company.value.name} — ${profile.name}`
    : `Not found — ${profile.name}`
})
</script>

<template>
  <main class="container company">
    <router-link class="company__back" :to="{ path: '/', hash: '#experience' }">
      ← Back to experience
    </router-link>

    <template v-if="company">
      <header class="company__header">
        <CompanyLogo
          :name="company.name"
          :logo="companyLogo(company.slug)"
          :size="96"
        />
        <div>
          <h1 class="company__name">{{ company.name }}</h1>
          <p class="company__meta">
            <span v-if="company.location">{{ company.location }}</span>
            <span class="company__dot" v-if="company.location">·</span>
            <span>{{ company.period }}</span>
          </p>
        </div>
      </header>

      <section v-for="(role, i) in company.roles" :key="i" class="role" v-reveal>
        <div class="role__head">
          <h2 class="role__title">{{ role.role }}</h2>
          <span class="role__period">{{ role.period }}</span>
        </div>
        <p class="role__summary">{{ role.summary }}</p>
        <ul class="role__highlights">
          <li v-for="(point, j) in role.highlights" :key="j">{{ point }}</li>
        </ul>
      </section>
    </template>

    <div v-else class="company__notfound">
      <h1>Company not found</h1>
      <p>That company page doesn’t exist.</p>
      <router-link :to="{ path: '/', hash: '#experience' }">
        ← Back to experience
      </router-link>
    </div>
  </main>
</template>

<style scoped>
.company {
  padding-top: 96px;
  padding-bottom: 72px;
  min-height: 70vh;
}

.company__back {
  display: inline-block;
  font-size: 0.9rem;
  font-weight: 500;
  margin-bottom: 28px;
}

.company__header {
  display: flex;
  align-items: center;
  gap: 18px;
  padding-bottom: 24px;
  margin-bottom: 12px;
  border-bottom: 1px solid var(--border);
}

.company__name {
  font-size: clamp(1.8rem, 5vw, 2.6rem);
  font-weight: 800;
  letter-spacing: -0.02em;
}

.company__meta {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 8px;
  color: var(--text-muted);
  font-size: 0.98rem;
}

.company__dot {
  opacity: 0.6;
}

.role {
  padding: 26px 0;
  border-bottom: 1px solid var(--border);
}

.role:last-child {
  border-bottom: none;
}

.role__head {
  display: flex;
  flex-wrap: wrap;
  align-items: baseline;
  justify-content: space-between;
  gap: 6px;
  margin-bottom: 10px;
}

.role__summary {
  color: var(--text);
  font-size: 1.02rem;
  margin-bottom: 16px;
}

.role__title {
  font-size: 1.25rem;
  font-weight: 700;
}

.role__period {
  font-family: var(--font-mono);
  font-size: 0.82rem;
  color: var(--text-muted);
  white-space: nowrap;
}

.role__highlights {
  list-style: none;
  display: grid;
  gap: 10px;
}

.role__highlights li {
  position: relative;
  padding-left: 20px;
  color: var(--text-muted);
}

.role__highlights li::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0.65em;
  width: 11px;
  height: 2px;
  border-radius: 2px;
  background: var(--accent);
}

.company__notfound {
  padding: 40px 0;
  display: grid;
  gap: 10px;
}
</style>
