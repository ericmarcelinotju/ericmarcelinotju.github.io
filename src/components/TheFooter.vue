<script setup lang="ts">
import { profile } from '../data/resume'

const year = new Date().getFullYear()
</script>

<template>
  <footer class="footer">
    <div class="container footer__inner">
      <div class="footer__cta">
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
  padding: 56px 24px 40px;
  text-align: center;
}

.footer__title {
  font-size: clamp(1.4rem, 4vw, 2rem);
  font-weight: 800;
  letter-spacing: -0.02em;
  margin-bottom: 12px;
}

.footer__email {
  font-size: 1.1rem;
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
