<script setup lang="ts">
import { computed, watchEffect } from 'vue'
import { useRoute } from 'vue-router'
import { findProject, projectScreenshots, profile } from '../data/resume'
import ProjectCarousel from '../components/ProjectCarousel.vue'

const route = useRoute()
const project = computed(() => findProject(String(route.params.slug)))
const screenshots = computed(() =>
  project.value ? projectScreenshots(project.value.slug) : [],
)

watchEffect(() => {
  document.title = project.value
    ? `${project.value.name} — ${profile.name}`
    : `Not found — ${profile.name}`
})
</script>

<template>
  <main class="container project">
    <router-link class="project__back" :to="{ path: '/', hash: '#projects' }">
      ← Back to projects
    </router-link>

    <template v-if="project">
      <header class="project__header">
        <h1 class="project__name">{{ project.name }}</h1>
        <p class="project__meta">
          <span v-if="project.role">{{ project.role }}</span>
          <span class="project__dot" v-if="project.role && project.period">·</span>
          <span v-if="project.period">{{ project.period }}</span>
        </p>
        <ul v-if="project.tech" class="project__tech">
          <li v-for="t in project.tech" :key="t">{{ t }}</li>
        </ul>
        <a
          v-if="project.url"
          class="project__link"
          :href="project.url"
          target="_blank"
          rel="noopener"
        >
          Visit project
          <span class="project__link-arrow" aria-hidden="true">↗</span>
        </a>
      </header>

      <!-- Animated carousel of screenshots, or placeholder slides until images
           are dropped at src/assets/projects/<slug>-1.png, -2.png, … — see
           resume.ts for the naming convention. -->
      <div class="shot" v-reveal>
        <ProjectCarousel :images="screenshots" :alt="project.name" />
      </div>

      <section class="project__body" v-reveal>
        <p v-if="project.summary" class="project__summary">
          {{ project.summary }}
        </p>

        <template v-if="project.highlights">
          <h2 class="project__subtitle">Highlights</h2>
          <ul class="project__highlights">
            <li v-for="(point, i) in project.highlights" :key="i">{{ point }}</li>
          </ul>
        </template>
      </section>
    </template>

    <div v-else class="project__notfound">
      <h1>Project not found</h1>
      <p>That project page doesn’t exist.</p>
      <router-link :to="{ path: '/', hash: '#projects' }">
        ← Back to projects
      </router-link>
    </div>
  </main>
</template>

<style scoped>
.project {
  padding-top: 96px;
  padding-bottom: 72px;
  min-height: 70vh;
}

.project__back {
  display: inline-block;
  font-size: 0.9rem;
  font-weight: 500;
  margin-bottom: 28px;
}

.project__header {
  padding-bottom: 24px;
  margin-bottom: 28px;
  border-bottom: 1px solid var(--border);
}

.project__name {
  font-size: clamp(1.8rem, 5vw, 2.6rem);
  font-weight: 800;
  letter-spacing: -0.02em;
}

.project__meta {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 8px;
  color: var(--text-muted);
  font-size: 0.98rem;
}

.project__dot {
  opacity: 0.6;
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

.project__link {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  margin-top: 18px;
  font-size: 0.9rem;
  font-weight: 600;
  color: var(--accent);
}

.project__link:hover {
  color: var(--accent-light);
}

.project__link-arrow {
  transition: transform 0.2s ease;
}

.project__link:hover .project__link-arrow {
  transform: translate(2px, -2px);
}

/* Carousel wrapper — just spacing; the frame styling lives in the component. */
.shot {
  margin-bottom: 32px;
}

.project__summary {
  font-size: 1.08rem;
  color: var(--text);
  max-width: 70ch;
}

.project__subtitle {
  margin-top: 32px;
  margin-bottom: 16px;
  font-size: 1.25rem;
  font-weight: 700;
}

.project__highlights {
  list-style: none;
  display: grid;
  gap: 10px;
}

.project__highlights li {
  position: relative;
  padding-left: 20px;
  color: var(--text-muted);
  max-width: 70ch;
}

.project__highlights li::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0.65em;
  width: 11px;
  height: 2px;
  border-radius: 2px;
  background: var(--accent);
}

.project__notfound {
  padding: 40px 0;
  display: grid;
  gap: 10px;
}
</style>
