<script setup lang="ts">
import { experience } from '../data/resume'
</script>

<template>
  <section id="experience" class="section">
    <div class="container">
      <h2 class="section__title">Experience</h2>
      <ol class="timeline">
        <li v-for="job in experience" :key="job.company" class="timeline__item">
          <div class="timeline__head">
            <h3 class="timeline__role">{{ job.role }}</h3>
            <span class="timeline__period">{{ job.period }}</span>
          </div>
          <p class="timeline__company">{{ job.company }}</p>
          <ul class="timeline__highlights">
            <li v-for="(point, i) in job.highlights" :key="i">{{ point }}</li>
          </ul>
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
  box-shadow: 0 0 0 4px rgba(79, 127, 214, 0.18);
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
