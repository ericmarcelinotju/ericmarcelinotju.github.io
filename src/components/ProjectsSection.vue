<script setup lang="ts">
import { projects } from '../data/resume'
</script>

<template>
  <section id="projects" class="section">
    <div class="container">
      <h2 class="section__title">Side Projects</h2>
      <div class="projects">
        <component
          :is="project.url ? 'a' : 'div'"
          v-for="project in projects"
          :key="project.name"
          class="project"
          :href="project.url"
          :target="project.url ? '_blank' : undefined"
          :rel="project.url ? 'noopener' : undefined"
        >
          <h3 class="project__name">
            {{ project.name }}
            <span v-if="project.url" class="project__link" aria-hidden="true">↗</span>
          </h3>
          <p class="project__desc">{{ project.description }}</p>
        </component>
      </div>
    </div>
  </section>
</template>

<style scoped>
.projects {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 20px;
  margin-top: 32px;
}

.project {
  display: block;
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  padding: 22px;
  transition: transform 0.2s ease, border-color 0.2s ease;
  color: var(--text);
}

a.project:hover {
  transform: translateY(-4px);
  border-color: var(--accent-light);
}

.project__name {
  font-size: 1.1rem;
  font-weight: 700;
  margin-bottom: 8px;
  display: flex;
  align-items: center;
  gap: 6px;
}

.project__link {
  color: var(--accent-light);
  font-size: 0.9rem;
}

.project__desc {
  color: var(--text-muted);
  font-size: 0.95rem;
}
</style>
