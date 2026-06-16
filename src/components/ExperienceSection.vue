<script setup lang="ts">
import { experience, companySlug, companyLogo } from '../data/resume'
import CompanyLogo from './CompanyLogo.vue'
</script>

<template>
  <section id="experience" class="section">
    <div class="container" v-reveal>
      <h2 class="section__title">Experience</h2>
      <ol class="timeline">
        <li
          v-for="job in experience"
          :key="job.company + job.period"
          class="timeline__item"
        >
          <span class="timeline__period">{{ job.period }}</span>
          <div class="timeline__card">
            <h3 class="timeline__role">{{ job.role }}</h3>
            <p class="timeline__company">
              <CompanyLogo
                :name="job.company"
                :logo="companyLogo(companySlug(job.company))"
                :size="36"
              />
              <router-link
                class="timeline__companylink"
                :to="{ name: 'company', params: { slug: companySlug(job.company) } }"
              >
                {{ job.company }}
              </router-link>
              <span v-if="job.location" class="timeline__location"> · {{ job.location }}</span>
            </p>
            <p class="timeline__summary">{{ job.summary }}</p>
            <router-link
              class="timeline__details"
              :to="{ name: 'company', params: { slug: companySlug(job.company) } }"
            >
              View details →
            </router-link>
          </div>
        </li>
      </ol>
    </div>
  </section>
</template>

<style scoped>
.timeline {
  position: relative;
  list-style: none;
  margin-top: 48px;
}

/* Center spine the cards hang off of. */
.timeline::before {
  content: '';
  position: absolute;
  top: 6px;
  bottom: 6px;
  left: 50%;
  width: 2px;
  transform: translateX(-50%);
  background: var(--border);
}

.timeline__item {
  position: relative;
  width: 50%;
  padding-bottom: 40px;
  box-sizing: border-box;
}

.timeline__item:last-child {
  padding-bottom: 0;
}

/* Alternate each entry to opposite sides of the spine. */
.timeline__item:nth-child(odd) {
  left: 0;
  padding-right: 48px;
}

.timeline__item:nth-child(even) {
  left: 50%;
  padding-left: 48px;
}

/* Node dot, centered on the spine. */
.timeline__item::before {
  content: '';
  position: absolute;
  top: 8px;
  width: 14px;
  height: 14px;
  border-radius: 50%;
  background: var(--accent-light);
  box-shadow: 0 0 0 4px var(--accent-ring);
  z-index: 1;
}

.timeline__item:nth-child(odd)::before {
  right: -7px;
}

.timeline__item:nth-child(even)::before {
  left: -7px;
}

/* Connector from the spine to the card. */
.timeline__item::after {
  content: '';
  position: absolute;
  top: 14px;
  width: 34px;
  height: 2px;
  background: var(--border);
}

.timeline__item:nth-child(odd)::after {
  right: 0;
}

.timeline__item:nth-child(even)::after {
  left: 0;
}

.timeline__card {
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  padding: 20px 22px;
  transition: border-color 0.2s ease, box-shadow 0.2s ease;
}

.timeline__card:hover {
  border-color: var(--accent);
  box-shadow: var(--shadow-lift);
}

.timeline__role {
  font-size: 1.12rem;
  font-weight: 700;
  line-height: 1.3;
}

/* Date range floats on the empty half of the timeline, opposite its card,
   vertically centered on the node dot (top 8px + 14px tall = center at 15px). */
.timeline__period {
  position: absolute;
  top: 8px;
  font-family: var(--font-mono);
  font-size: 0.88rem;
  line-height: 14px;
  color: var(--text-muted);
  white-space: nowrap;
}

.timeline__item:nth-child(odd) .timeline__period {
  left: 100%;
  padding-left: 48px;
  text-align: left;
}

.timeline__item:nth-child(even) .timeline__period {
  right: 100%;
  padding-right: 48px;
  text-align: right;
}

.timeline__company {
  display: flex;
  align-items: center;
  gap: 9px;
  color: var(--accent-light);
  font-weight: 500;
  margin: 8px 0 14px;
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

.timeline__summary {
  color: var(--text-muted);
  font-size: 0.95rem;
}

.timeline__details {
  display: inline-block;
  margin-top: 14px;
  font-size: 0.86rem;
  font-weight: 600;
  color: var(--accent);
}

.timeline__details:hover {
  color: var(--accent-light);
}

/* Collapse to a single left-aligned column on narrow viewports. */
@media (max-width: 760px) {
  .timeline::before {
    left: 7px;
    transform: none;
  }

  .timeline__item,
  .timeline__item:nth-child(odd),
  .timeline__item:nth-child(even) {
    width: 100%;
    left: 0;
    padding: 0 0 28px 40px;
  }

  .timeline__item:last-child {
    padding-bottom: 0;
  }

  .timeline__item:nth-child(odd)::before,
  .timeline__item:nth-child(even)::before {
    left: 0;
    right: auto;
  }

  .timeline__item:nth-child(odd)::after,
  .timeline__item:nth-child(even)::after {
    left: 14px;
    right: auto;
    width: 22px;
  }

  .timeline__item:nth-child(odd) .timeline__period,
  .timeline__item:nth-child(even) .timeline__period {
    position: static;
    display: block;
    left: auto;
    right: auto;
    padding: 0 0 6px;
    text-align: left;
  }
}
</style>
