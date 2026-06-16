<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue'
import { profile } from '../data/resume'

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Achievements', href: '#achievements' },
  { label: 'Education', href: '#education' },
]

const scrolled = ref(false)
const menuOpen = ref(false)
const theme = ref<'light' | 'dark'>('light')

function onScroll() {
  scrolled.value = window.scrollY > 12
}

function systemPrefersDark() {
  return (
    typeof window.matchMedia === 'function' &&
    window.matchMedia('(prefers-color-scheme: dark)').matches
  )
}

function toggleTheme() {
  theme.value = theme.value === 'dark' ? 'light' : 'dark'
  document.documentElement.setAttribute('data-theme', theme.value)
  try {
    localStorage.setItem('theme', theme.value)
  } catch (e) {
    /* ignore storage failures (e.g. private mode) */
  }
}

onMounted(() => {
  const stored = (() => {
    try {
      return localStorage.getItem('theme') as 'light' | 'dark' | null
    } catch (e) {
      return null
    }
  })()
  theme.value = stored ?? (systemPrefersDark() ? 'dark' : 'light')
  window.addEventListener('scroll', onScroll, { passive: true })
})

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

      <div class="header__right">
        <nav class="header__nav" :class="{ 'header__nav--open': menuOpen }">
          <a
            v-for="link in navLinks"
            :key="link.href"
            :href="link.href"
            @click="menuOpen = false"
            >{{ link.label }}</a
          >
        </nav>

        <button
          class="header__theme"
          type="button"
          :aria-label="`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`"
          :title="`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`"
          @click="toggleTheme"
        >
          <svg
            v-if="theme === 'dark'"
            viewBox="0 0 24 24"
            width="20"
            height="20"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            aria-hidden="true"
          >
            <circle cx="12" cy="12" r="4" />
            <path
              d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"
            />
          </svg>
          <svg
            v-else
            viewBox="0 0 24 24"
            width="20"
            height="20"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            aria-hidden="true"
          >
            <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z" />
          </svg>
        </button>

        <button
          class="header__toggle"
          :aria-expanded="menuOpen"
          aria-label="Toggle navigation"
          @click="menuOpen = !menuOpen"
        >
          <span></span><span></span><span></span>
        </button>
      </div>
    </div>
  </header>
</template>

<style scoped>
.header {
  position: sticky;
  top: 0;
  z-index: 50;
  background: color-mix(in srgb, var(--bg) 72%, transparent);
  backdrop-filter: blur(12px);
  transition: background 0.25s ease, box-shadow 0.25s ease;
}

.header--scrolled {
  background: color-mix(in srgb, var(--bg) 92%, transparent);
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

.header__brand:hover {
  color: var(--text);
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

.header__right {
  display: flex;
  align-items: center;
  gap: 18px;
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

.header__theme {
  display: grid;
  place-items: center;
  width: 38px;
  height: 38px;
  border-radius: 10px;
  border: 1px solid var(--border);
  background: var(--surface);
  color: var(--text);
  cursor: pointer;
  transition: border-color 0.2s ease, color 0.2s ease, transform 0.2s ease;
}

.header__theme:hover {
  color: var(--accent);
  border-color: var(--accent);
  transform: translateY(-1px);
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
    background: var(--bg);
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
