<script setup lang="ts">
import { skillGroups } from '../data/resume'
</script>

<template>
  <section id="skills" class="section">
    <div class="container">
      <h2 class="section__title">Skills</h2>
      <div class="skills">
        <div v-for="group in skillGroups" :key="group.category" class="skills__group">
          <h3 class="skills__category">{{ group.category }}</h3>
          <ul class="skills__list">
            <li v-for="item in group.items" :key="item" class="skills__chip">
              {{ item }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.skills {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 22px;
  margin-top: 32px;
}

.skills__group {
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  padding: 22px;
}

.skills__category {
  font-size: 0.95rem;
  font-weight: 600;
  color: var(--accent-light);
  margin-bottom: 14px;
}

.skills__list {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  list-style: none;
}

.skills__chip {
  font-size: 0.85rem;
  padding: 6px 12px;
  border-radius: 8px;
  background: var(--surface-2);
  border: 1px solid var(--border);
  color: var(--text);
}
</style>
