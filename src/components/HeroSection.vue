<script setup lang="ts">
import { profile, languages } from '../data/resume'

// Initials for the monogram shown until a real portrait is added.
const mark = profile.name
  .split(' ')
  .map((p) => p[0])
  .join('')
  .slice(0, 2)
  .toUpperCase()

// Auto-detect an optional portrait. Drop a file at one of:
//   src/assets/portrait.jpg | .jpeg | .png | .webp
// and the hero upgrades from the monogram placeholder to the photo. No code
// change needed (mirrors the company-logo auto-detect in resume.ts).
const portraitFiles = import.meta.glob(
  '../assets/portrait.{jpg,jpeg,png,webp}',
  { eager: true, import: 'default' },
) as Record<string, string>
const portrait = Object.values(portraitFiles)[0]
</script>

<template>
  <section id="top" class="hero">
    <div class="container hero__inner" id="about">
      <div class="hero__content">
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

      <div class="hero__visual" aria-hidden="true">
        <img
          v-if="portrait"
          class="hero__portrait"
          :src="portrait"
          :alt="profile.name"
        />
        <div v-else class="hero__placeholder">
          <span class="hero__mark">{{ mark }}</span>
        </div>
      </div>
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

.hero__inner {
  position: relative;
  display: grid;
  grid-template-columns: 1.15fr 0.85fr;
  gap: 56px;
  align-items: center;
  padding: 112px 24px 96px;
}

.hero__eyebrow {
  font-family: var(--font-mono);
  color: var(--accent);
  font-size: 0.84rem;
  letter-spacing: 0.02em;
  margin-bottom: 14px;
}

.hero__name {
  font-size: clamp(2.6rem, 6vw, 4.2rem);
  font-weight: 800;
  letter-spacing: -0.035em;
  line-height: 1.02;
  margin-bottom: 22px;
}

.hero__tagline {
  max-width: 52ch;
  color: var(--text-muted);
  font-size: 1.12rem;
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

/* Right column: portrait, or a branded monogram panel until one is added. */
.hero__visual {
  justify-self: end;
  width: 100%;
  max-width: 380px;
}

.hero__portrait {
  width: 100%;
  aspect-ratio: 4 / 5;
  object-fit: cover;
  border-radius: var(--radius);
  border: 1px solid var(--border);
  box-shadow: var(--shadow-lift);
}

.hero__placeholder {
  position: relative;
  display: grid;
  place-items: center;
  aspect-ratio: 4 / 5;
  overflow: hidden;
  border-radius: var(--radius);
  border: 1px solid var(--border);
  background: radial-gradient(
      120% 90% at 70% 10%,
      var(--hero-glow-1),
      transparent 60%
    ),
    var(--surface-2);
}

.hero__mark {
  font-family: var(--font-mono);
  font-weight: 700;
  font-size: clamp(5rem, 12vw, 8rem);
  letter-spacing: -0.04em;
  color: var(--accent);
  opacity: 0.32;
  user-select: none;
}

@media (max-width: 820px) {
  .hero__inner {
    grid-template-columns: 1fr;
    gap: 40px;
    padding: 96px 24px 72px;
  }

  /* Photo follows the copy on mobile so the value prop leads. */
  .hero__visual {
    order: 2;
    justify-self: start;
    max-width: 300px;
  }
}
</style>
