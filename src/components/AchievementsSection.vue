<script setup lang="ts">
import { achievements } from '../data/resume'
</script>

<template>
  <section id="achievements" class="section">
    <div class="container">
      <h2 class="section__title">Achievements</h2>
      <div class="achievements">
        <div v-for="item in achievements" :key="item.name" class="achievement">
          <h3 class="achievement__name">{{ item.name }}</h3>
          <p class="achievement__desc">{{ item.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.achievements {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 20px;
  margin-top: 32px;
}

.achievement {
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  padding: 22px;
  border-left: 3px solid var(--accent);
}

.achievement__name {
  font-size: 1.05rem;
  font-weight: 700;
  margin-bottom: 6px;
}

.achievement__desc {
  color: var(--text-muted);
  font-size: 0.95rem;
}
</style>
