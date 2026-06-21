<script setup lang="ts">
import { skillGroups } from '../data/resume'
</script>

<template>
  <section id="skills" class="section">
    <div class="container" v-reveal>
      <h2 class="section__title">Skills &amp; tooling</h2>
      <dl class="skills">
        <div v-for="group in skillGroups" :key="group.category" class="skills__row">
          <dt class="skills__category">{{ group.category }}</dt>
          <dd class="skills__items">
            <ul class="skills__list">
              <li v-for="item in group.items" :key="item" class="skills__chip">
                {{ item }}
              </li>
            </ul>
          </dd>
        </div>
      </dl>
    </div>
  </section>
</template>

<style scoped>
.skills {
  margin-top: 40px;
  border-top: 1px solid var(--border);
}

/* Label-left, chips-right rows separated by hairlines — deliberately box-free
   so this section reads differently from the card grids further down. */
.skills__row {
  display: grid;
  grid-template-columns: minmax(140px, 200px) 1fr;
  gap: 24px;
  padding: 26px 0;
  border-bottom: 1px solid var(--border);
}

.skills__category {
  font-family: var(--font-mono);
  font-size: 0.82rem;
  letter-spacing: 0.02em;
  color: var(--accent);
  padding-top: 4px;
}

.skills__list {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  list-style: none;
}

.skills__chip {
  font-size: 0.9rem;
  padding: 6px 13px;
  border-radius: var(--radius-sm);
  background: var(--surface-2);
  border: 1px solid var(--border);
  color: var(--text);
  transition: border-color 0.2s ease, color 0.2s ease;
}

.skills__chip:hover {
  border-color: var(--highlight);
  background: var(--highlight-tint);
  color: var(--accent);
}

@media (max-width: 640px) {
  .skills__row {
    grid-template-columns: 1fr;
    gap: 12px;
    padding: 22px 0;
  }
}
</style>
