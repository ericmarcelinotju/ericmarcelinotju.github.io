<script setup lang="ts">
import { profile } from '../data/resume'

const year = new Date().getFullYear()
</script>

<template>
  <footer class="footer">
    <div class="container footer__inner">
      <div class="footer__cta">
        <p class="footer__kicker">Get in touch</p>
        <h2 class="footer__title">Let's build something together.</h2>
        <a class="footer__email" :href="`mailto:${profile.email}`">
          {{ profile.email }}
        </a>
      </div>

      <div class="footer__links">
        <a :href="profile.links.github" target="_blank" rel="noopener">GitHub</a>
        <a :href="profile.links.linkedin" target="_blank" rel="noopener">LinkedIn</a>
        <a :href="`tel:${profile.phone.replace(/\s/g, '')}`">{{ profile.phone }}</a>
      </div>

      <p class="footer__copy">
        © {{ year }} {{ profile.name }}. Built with Vue &amp; TypeScript.
      </p>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  border-top: 1px solid var(--border);
  background: var(--bg-alt);
}

.footer__inner {
  padding: 72px 24px 44px;
  text-align: center;
}

.footer__kicker {
  font-family: var(--font-mono);
  font-size: 0.8rem;
  letter-spacing: 0.04em;
  color: var(--accent);
  margin-bottom: 12px;
}

.footer__title {
  font-size: clamp(1.5rem, 4vw, 2.2rem);
  font-weight: 800;
  letter-spacing: -0.025em;
  margin-bottom: 14px;
}

.footer__email {
  font-family: var(--font-mono);
  font-size: 1.05rem;
  font-weight: 600;
}

.footer__links {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 24px;
  margin: 28px 0 20px;
}

.footer__links a {
  color: var(--text-muted);
  font-weight: 500;
}

.footer__links a:hover {
  color: var(--text);
}

.footer__copy {
  font-size: 0.85rem;
  color: var(--text-muted);
}
</style>
