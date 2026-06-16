<script setup lang="ts">
import { education } from '../data/resume'
</script>

<template>
  <section id="education" class="section">
    <div class="container">
      <h2 class="section__title">Education</h2>
      <div class="edu">
        <div v-for="item in education" :key="item.school" class="edu__card">
          <div class="edu__main">
            <h3 class="edu__degree">{{ item.degree }}</h3>
            <p class="edu__school">{{ item.school }}</p>
            <p v-if="item.gpa" class="edu__gpa">GPA: {{ item.gpa }}</p>
          </div>
          <span class="edu__period">{{ item.period }}</span>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.edu {
  margin-top: 32px;
  display: grid;
  gap: 16px;
}

.edu__card {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  padding: 22px;
}

.edu__degree {
  font-size: 1.1rem;
  font-weight: 700;
}

.edu__school {
  color: var(--accent-light);
}

.edu__gpa {
  color: var(--text-muted);
  font-size: 0.9rem;
  margin-top: 2px;
}

.edu__period {
  font-size: 0.9rem;
  color: var(--text-muted);
}
</style>
