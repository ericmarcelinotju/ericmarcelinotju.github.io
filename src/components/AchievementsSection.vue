<script setup lang="ts">
import { achievements } from '../data/resume'
</script>

<template>
  <section id="achievements" class="section">
    <div class="container" v-reveal>
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
  margin-top: 40px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 14px 48px;
}

/* Box-free, left-rule highlights — deliberately not the bordered-card treatment
   used by Projects, so adjacent sections don't share a layout family. */
.achievement {
  position: relative;
  padding: 6px 0 6px 24px;
}

.achievement::before {
  content: '';
  position: absolute;
  left: 0;
  top: 4px;
  bottom: 4px;
  width: 3px;
  border-radius: 3px;
  background: linear-gradient(180deg, var(--accent), var(--highlight));
}

.achievement__name {
  font-size: 1.18rem;
  font-weight: 700;
  letter-spacing: -0.01em;
  margin-bottom: 6px;
}

.achievement__desc {
  color: var(--text-muted);
  font-size: 0.96rem;
}
</style>
