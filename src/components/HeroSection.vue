<script setup lang="ts">
import { profile, languages } from '../data/resume'

// Initials for the oversized ghost mark behind the hero copy.
const mark = profile.name
  .split(' ')
  .map((p) => p[0])
  .join('')
  .slice(0, 2)
  .toUpperCase()
</script>

<template>
  <section id="top" class="hero">
    <span class="hero__ghost" aria-hidden="true">{{ mark }}</span>

    <div class="container hero__inner" id="about">
      <p class="hero__eyebrow">{{ profile.title }} · {{ profile.location }}</p>
      <h1 class="hero__name">{{ profile.name }}</h1>
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
        <li>
          <span>Email</span>
          <a :href="`mailto:${profile.email}`">{{ profile.email }}</a>
        </li>
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
      1100px 560px at 85% -15%,
      var(--hero-glow-1),
      transparent 60%
    ),
    radial-gradient(820px 460px at -10% 0%, var(--hero-glow-2), transparent 55%);
}

/* Oversized initials sitting behind the copy — an intentional brand mark, not
   a fake screenshot. Clipped by the hero's overflow, very low contrast. */
.hero__ghost {
  position: absolute;
  top: 50%;
  right: -2vw;
  transform: translateY(-46%);
  font-family: var(--font-mono);
  font-weight: 700;
  font-size: clamp(14rem, 34vw, 30rem);
  line-height: 0.8;
  letter-spacing: -0.04em;
  color: var(--ghost-mark);
  user-select: none;
  pointer-events: none;
}

.hero__inner {
  position: relative;
  z-index: 1;
  padding: 120px 24px 96px;
}

.hero__eyebrow {
  font-family: var(--font-mono);
  color: var(--accent);
  font-size: 0.84rem;
  letter-spacing: 0.02em;
  margin-bottom: 14px;
}

.hero__name {
  font-size: clamp(2.6rem, 7vw, 4.4rem);
  font-weight: 800;
  letter-spacing: -0.035em;
  line-height: 1.02;
  margin-bottom: 22px;
}

.hero__tagline {
  max-width: 60ch;
  color: var(--text-muted);
  font-size: 1.14rem;
}

.hero__actions {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin: 32px 0 40px;
}

.btn {
  padding: 12px 24px;
  border-radius: 50px;
  font-weight: 600;
  font-size: 0.95rem;
  border: 1px solid transparent;
  transition: transform 0.18s ease, background 0.2s ease, border-color 0.2s ease,
    box-shadow 0.2s ease;
}

.btn:hover {
  transform: translateY(-2px);
}

.btn:active {
  transform: translateY(0) scale(0.985);
}

.btn--primary {
  background: var(--accent);
  color: #fff;
  box-shadow: 0 8px 20px var(--accent-ring);
}

.btn--primary:hover {
  background: var(--accent-strong);
  color: #fff;
  box-shadow: var(--shadow-lift);
}

.btn--ghost {
  border-color: var(--border-strong);
  color: var(--text);
  background: var(--surface);
}

.btn--ghost:hover {
  border-color: var(--accent);
  color: var(--accent);
}

.hero__meta {
  display: flex;
  flex-wrap: wrap;
  gap: 16px 36px;
  list-style: none;
  padding-top: 28px;
  border-top: 1px solid var(--border);
}

.hero__meta li {
  display: flex;
  flex-direction: column;
  font-size: 0.96rem;
  color: var(--text);
}

.hero__meta span {
  font-family: var(--font-mono);
  font-size: 0.72rem;
  letter-spacing: 0.03em;
  color: var(--text-faint);
  margin-bottom: 4px;
}

@media (max-width: 640px) {
  .hero__inner {
    padding: 96px 24px 72px;
  }
}
</style>
