<script setup lang="ts">
import { experience, companySlug } from '../data/resume'
</script>

<template>
  <section id="experience" class="section">
    <div class="container">
      <h2 class="section__title">Experience</h2>
      <ol class="timeline">
        <li
          v-for="job in experience"
          :key="job.company + job.period"
          class="timeline__item"
        >
          <div class="timeline__head">
            <h3 class="timeline__role">{{ job.role }}</h3>
            <span class="timeline__period">{{ job.period }}</span>
          </div>
          <p class="timeline__company">
            <router-link
              class="timeline__companylink"
              :to="{ name: 'company', params: { slug: companySlug(job.company) } }"
            >
              {{ job.company }}
            </router-link>
            <span v-if="job.location" class="timeline__location"> · {{ job.location }}</span>
          </p>
          <ul class="timeline__highlights">
            <li v-for="(point, j) in job.highlights" :key="j">{{ point }}</li>
          </ul>
          <router-link
            class="timeline__details"
            :to="{ name: 'company', params: { slug: companySlug(job.company) } }"
          >
            View details →
          </router-link>
        </li>
      </ol>
    </div>
  </section>
</template>

<style scoped>
.timeline {
  list-style: none;
  margin-top: 32px;
  border-left: 2px solid var(--border);
  padding-left: 28px;
}

.timeline__item {
  position: relative;
  padding-bottom: 38px;
}

.timeline__item:last-child {
  padding-bottom: 0;
}

.timeline__item::before {
  content: '';
  position: absolute;
  left: -36px;
  top: 6px;
  width: 14px;
  height: 14px;
  border-radius: 50%;
  background: var(--accent-light);
  box-shadow: 0 0 0 4px var(--accent-ring);
}

.timeline__head {
  display: flex;
  flex-wrap: wrap;
  align-items: baseline;
  justify-content: space-between;
  gap: 6px;
}

.timeline__role {
  font-size: 1.15rem;
  font-weight: 700;
}

.timeline__period {
  font-size: 0.85rem;
  color: var(--text-muted);
  white-space: nowrap;
}

.timeline__company {
  color: var(--accent-light);
  font-weight: 500;
  margin-bottom: 12px;
}

.timeline__location {
  color: var(--text-muted);
  font-weight: 400;
}

.timeline__companylink {
  color: var(--accent-light);
  font-weight: 500;
}

.timeline__companylink:hover {
  color: var(--text);
}

.timeline__details {
  display: inline-block;
  margin-top: 12px;
  font-size: 0.88rem;
  font-weight: 600;
  color: var(--accent);
}

.timeline__details:hover {
  color: var(--accent-light);
}

.timeline__highlights {
  list-style: none;
  display: grid;
  gap: 8px;
}

.timeline__highlights li {
  position: relative;
  padding-left: 20px;
  color: var(--text-muted);
  font-size: 0.97rem;
}

.timeline__highlights li::before {
  content: '▹';
  position: absolute;
  left: 0;
  color: var(--accent-light);
}
</style>
