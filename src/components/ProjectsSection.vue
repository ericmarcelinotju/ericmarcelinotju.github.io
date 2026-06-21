<script setup lang="ts">
import { projectList } from '../data/resume'

const pad = (n: number) => String(n + 1).padStart(2, '0')
</script>

<template>
  <section id="projects" class="section">
    <div class="container" v-reveal>
      <h2 class="section__title">Selected projects</h2>
      <div class="projects">
        <router-link
          v-for="(project, i) in projectList"
          :key="project.name"
          class="project project--link"
          :to="{ name: 'project', params: { slug: project.slug } }"
          :aria-label="`${project.name}, view details`"
        >
          <span class="project__index">{{ pad(i) }}</span>
          <h3 class="project__name">{{ project.name }}</h3>
          <p class="project__desc">{{ project.description }}</p>
          <ul v-if="project.tech" class="project__tech">
            <li v-for="t in project.tech" :key="t">{{ t }}</li>
          </ul>
          <span class="project__details">View details →</span>
        </router-link>
      </div>
    </div>
  </section>
</template>

<style scoped>
.projects {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(264px, 1fr));
  gap: 18px;
  margin-top: 40px;
}

.project {
  display: block;
  position: relative;
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  padding: 26px 24px 24px;
  color: var(--text);
  transition: transform 0.2s ease, border-color 0.2s ease, box-shadow 0.2s ease;
}

.project--link:hover {
  transform: translateY(-4px);
  border-color: var(--accent);
  box-shadow: var(--shadow-lift);
}

.project__index {
  font-family: var(--font-mono);
  font-size: 0.78rem;
  color: var(--text-faint);
}

.project__name {
  font-size: 1.12rem;
  font-weight: 700;
  margin: 10px 0 8px;
}

.project__desc {
  color: var(--text-muted);
  font-size: 0.96rem;
}

.project__details {
  display: inline-block;
  margin-top: 16px;
  font-size: 0.86rem;
  font-weight: 600;
  color: var(--accent);
  transition: color 0.2s ease, transform 0.2s ease;
}

.project--link:hover .project__details {
  color: var(--accent-light);
  transform: translateX(3px);
}

.project__tech {
  display: flex;
  flex-wrap: wrap;
  gap: 7px;
  list-style: none;
  margin-top: 16px;
}

.project__tech li {
  font-family: var(--font-mono);
  font-size: 0.74rem;
  padding: 3px 9px;
  border-radius: var(--radius-sm);
  border: 1px solid var(--border);
  background: var(--highlight-tint);
  color: var(--text-muted);
}
</style>
