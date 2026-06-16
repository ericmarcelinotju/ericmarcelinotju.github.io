<script setup lang="ts">
import { ref } from 'vue'

withDefaults(defineProps<{ name: string; logo?: string; size?: number }>(), {
  size: 48,
})

const failed = ref(false)

// Compact monogram from the company name, ignoring legal noise like "PT." / "Tbk".
function initials(name: string): string {
  const clean = name
    .replace(/\bPT\b\.?/gi, '')
    .replace(/\bTbk\b/gi, '')
    .replace(/\.com\b/gi, '')
  // Split on any non-alphanumeric run so dots/ampersands don't become "words".
  const words = clean.split(/[^A-Za-z0-9]+/).filter(Boolean)
  if (words.length >= 2) return (words[0][0] + words[1][0]).toUpperCase()
  return (words[0] ?? '').slice(0, 2).toUpperCase()
}
</script>

<template>
  <span class="clogo" :style="{ width: size + 'px', height: size + 'px' }">
    <img
      v-if="logo && !failed"
      class="clogo__img"
      :src="logo"
      :alt="`${name} logo`"
      loading="lazy"
      @error="failed = true"
    />
    <span v-else class="clogo__monogram" :style="{ fontSize: size * 0.36 + 'px' }">
      {{ initials(name) }}
    </span>
  </span>
</template>

<style scoped>
.clogo {
  display: inline-grid;
  place-items: center;
  flex: none;
  border-radius: 10px;
  overflow: hidden;
  border: 1px solid var(--border);
  background: var(--surface-2);
}

.clogo__img {
  width: 100%;
  height: 100%;
  object-fit: contain;
  background: #fff;
}

.clogo__monogram {
  display: grid;
  place-items: center;
  width: 100%;
  height: 100%;
  font-weight: 700;
  color: #fff;
  background: linear-gradient(135deg, var(--accent), var(--accent-light));
}
</style>
