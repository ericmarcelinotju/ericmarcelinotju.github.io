<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue'
import { profile } from '../data/resume'

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Education', href: '#education' },
]

const scrolled = ref(false)
const menuOpen = ref(false)

function onScroll() {
  scrolled.value = window.scrollY > 12
}

onMounted(() => window.addEventListener('scroll', onScroll, { passive: true }))
onUnmounted(() => window.removeEventListener('scroll', onScroll))

function initials(name: string) {
  return name
    .split(' ')
    .map((part) => part[0])
    .join('')
    .slice(0, 2)
    .toUpperCase()
}
</script>

<template>
  <header class="header" :class="{ 'header--scrolled': scrolled }">
    <div class="container header__inner">
      <a class="header__brand" href="#top" @click="menuOpen = false">
        <span class="header__mark">{{ initials(profile.name) }}</span>
        <span class="header__name">{{ profile.name }}</span>
      </a>

      <button
        class="header__toggle"
        :aria-expanded="menuOpen"
        aria-label="Toggle navigation"
        @click="menuOpen = !menuOpen"
      >
        <span></span><span></span><span></span>
      </button>

      <nav class="header__nav" :class="{ 'header__nav--open': menuOpen }">
        <a
          v-for="link in navLinks"
          :key="link.href"
          :href="link.href"
          @click="menuOpen = false"
          >{{ link.label }}</a
        >
      </nav>
    </div>
  </header>
</template>

<style scoped>
.header {
  position: sticky;
  top: 0;
  z-index: 50;
  background: rgba(15, 23, 42, 0.7);
  backdrop-filter: blur(12px);
  transition: background 0.25s ease, box-shadow 0.25s ease;
}

.header--scrolled {
  background: rgba(15, 23, 42, 0.92);
  box-shadow: 0 1px 0 var(--border);
}

.header__inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 64px;
}

.header__brand {
  display: flex;
  align-items: center;
  gap: 10px;
  color: var(--text);
  font-weight: 700;
}

.header__mark {
  display: grid;
  place-items: center;
  width: 34px;
  height: 34px;
  border-radius: 9px;
  font-size: 0.85rem;
  background: linear-gradient(135deg, var(--accent), var(--accent-light));
  color: #fff;
}

.header__nav {
  display: flex;
  gap: 26px;
}

.header__nav a {
  color: var(--text-muted);
  font-size: 0.95rem;
  font-weight: 500;
}

.header__nav a:hover {
  color: var(--text);
}

.header__toggle {
  display: none;
  flex-direction: column;
  gap: 5px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 6px;
}

.header__toggle span {
  width: 24px;
  height: 2px;
  background: var(--text);
  border-radius: 2px;
}

@media (max-width: 640px) {
  .header__toggle {
    display: flex;
  }

  .header__nav {
    position: absolute;
    top: 64px;
    left: 0;
    right: 0;
    flex-direction: column;
    gap: 0;
    background: rgba(15, 23, 42, 0.98);
    border-top: 1px solid var(--border);
    max-height: 0;
    overflow: hidden;
    transition: max-height 0.25s ease;
  }

  .header__nav--open {
    max-height: 320px;
  }

  .header__nav a {
    padding: 14px 24px;
    border-bottom: 1px solid var(--border);
  }
}
</style>
