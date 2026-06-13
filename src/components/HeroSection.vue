<script setup lang="ts">
import { profile, languages } from '../data/resume'
</script>

<template>
  <section id="top" class="hero">
    <div class="container hero__inner" id="about">
      <p class="hero__eyebrow">Hi, I'm</p>
      <h1 class="hero__name">{{ profile.name }}</h1>
      <h2 class="hero__title">{{ profile.title }}</h2>
      <p class="hero__tagline">{{ profile.tagline }}</p>

      <div class="hero__actions">
        <a class="btn btn--primary" :href="`mailto:${profile.email}`">
          Get in touch
        </a>
        <a
          class="btn btn--ghost"
          :href="profile.links.github"
          target="_blank"
          rel="noopener"
        >
          GitHub
        </a>
        <a
          class="btn btn--ghost"
          :href="profile.links.linkedin"
          target="_blank"
          rel="noopener"
        >
          LinkedIn
        </a>
      </div>

      <ul class="hero__meta">
        <li><span>Location</span>{{ profile.location }}</li>
        <li><span>Email</span>{{ profile.email }}</li>
        <li v-for="lang in languages" :key="lang.name">
          <span>{{ lang.name }}</span>{{ lang.level }}
        </li>
      </ul>
    </div>
  </section>
</template>

<style scoped>
.hero {
  position: relative;
  overflow: hidden;
  background: radial-gradient(
      1200px 600px at 80% -10%,
      rgba(79, 127, 214, 0.25),
      transparent 60%
    ),
    radial-gradient(
      900px 500px at -10% 10%,
      rgba(42, 82, 152, 0.3),
      transparent 55%
    );
}

.hero__inner {
  padding: 96px 24px 88px;
}

.hero__eyebrow {
  color: var(--accent-light);
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  font-size: 0.85rem;
}

.hero__name {
  font-size: clamp(2.4rem, 6vw, 3.8rem);
  font-weight: 800;
  letter-spacing: -0.03em;
  margin: 6px 0 4px;
  line-height: 1.05;
}

.hero__title {
  font-size: clamp(1.1rem, 3vw, 1.5rem);
  font-weight: 600;
  color: var(--accent-light);
  margin-bottom: 16px;
}

.hero__tagline {
  max-width: 560px;
  color: var(--text-muted);
  font-size: 1.1rem;
}

.hero__actions {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin: 28px 0 36px;
}

.btn {
  padding: 11px 22px;
  border-radius: 50px;
  font-weight: 600;
  font-size: 0.95rem;
  border: 1px solid transparent;
  transition: transform 0.2s ease, background 0.2s ease, border-color 0.2s ease;
}

.btn:hover {
  transform: translateY(-2px);
}

.btn--primary {
  background: linear-gradient(135deg, var(--accent), var(--accent-light));
  color: #fff;
}

.btn--ghost {
  border-color: var(--border);
  color: var(--text);
  background: rgba(255, 255, 255, 0.03);
}

.btn--ghost:hover {
  border-color: var(--accent-light);
}

.hero__meta {
  display: flex;
  flex-wrap: wrap;
  gap: 14px 32px;
  list-style: none;
}

.hero__meta li {
  display: flex;
  flex-direction: column;
  font-size: 0.95rem;
  color: var(--text);
}

.hero__meta span {
  font-size: 0.72rem;
  text-transform: uppercase;
  letter-spacing: 0.07em;
  color: var(--text-muted);
  margin-bottom: 2px;
}
</style>
