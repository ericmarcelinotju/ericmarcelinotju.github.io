<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, ref } from 'vue'

const props = withDefaults(
  defineProps<{ images: string[]; alt: string; placeholderCount?: number }>(),
  { placeholderCount: 3 },
)

// With no real screenshots yet, render a few placeholder slides so the carousel
// is visible and animates; real images replace them once dropped into
// src/assets/projects/ (see resume.ts for the naming convention).
const hasImages = computed(() => props.images.length > 0)
const slideCount = computed(() =>
  hasImages.value ? props.images.length : props.placeholderCount,
)

const index = ref(0)
function go(i: number) {
  const n = slideCount.value
  index.value = ((i % n) + n) % n // wrap around in both directions
}
const next = () => go(index.value + 1)
const prev = () => go(index.value - 1)

// --- Autoplay ---------------------------------------------------------------
// Advances every few seconds, paused while the pointer/focus is inside, and
// disabled entirely under reduced-motion or with a single slide.
let timer: ReturnType<typeof setInterval> | undefined
const paused = ref(false)
const reduce =
  typeof window !== 'undefined' &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches

function start() {
  stop()
  if (reduce || slideCount.value < 2) return
  timer = setInterval(() => {
    if (!paused.value) next()
  }, 4500)
}
function stop() {
  if (timer) clearInterval(timer)
  timer = undefined
}

onMounted(start)
onBeforeUnmount(stop)
</script>

<template>
  <div
    class="carousel"
    @mouseenter="paused = true"
    @mouseleave="paused = false"
    @focusin="paused = true"
    @focusout="paused = false"
  >
    <div class="carousel__viewport">
      <div
        class="carousel__track"
        :style="{ transform: `translateX(-${index * 100}%)` }"
      >
        <template v-if="hasImages">
          <div v-for="(src, i) in images" :key="i" class="carousel__slide">
            <img
              class="carousel__img"
              :src="src"
              :alt="`${alt} screenshot ${i + 1}`"
              draggable="false"
            />
          </div>
        </template>
        <template v-else>
          <div v-for="i in placeholderCount" :key="i" class="carousel__slide">
            <div class="carousel__placeholder">
              <svg
                class="carousel__icon"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
                aria-hidden="true"
              >
                <rect x="3" y="4" width="18" height="16" rx="2" />
                <circle cx="8.5" cy="9.5" r="1.5" />
                <path d="m4 16 4.5-4.5a1.5 1.5 0 0 1 2.1 0L17 18" />
                <path d="m14 15 1.8-1.8a1.5 1.5 0 0 1 2.1 0L21 16" />
              </svg>
              <span class="carousel__label">Screenshot {{ i }} coming soon</span>
            </div>
          </div>
        </template>
      </div>
    </div>

    <template v-if="slideCount > 1">
      <button
        type="button"
        class="carousel__arrow carousel__arrow--prev"
        @click="prev"
        aria-label="Previous slide"
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
          stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
          <path d="m15 18-6-6 6-6" />
        </svg>
      </button>
      <button
        type="button"
        class="carousel__arrow carousel__arrow--next"
        @click="next"
        aria-label="Next slide"
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
          stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
          <path d="m9 18 6-6-6-6" />
        </svg>
      </button>

      <div class="carousel__dots">
        <button
          v-for="i in slideCount"
          :key="i"
          type="button"
          class="carousel__dot"
          :class="{ 'is-active': index === i - 1 }"
          @click="go(i - 1)"
          :aria-label="`Go to slide ${i}`"
          :aria-current="index === i - 1 ? 'true' : undefined"
        />
      </div>
    </template>
  </div>
</template>

<style scoped>
.carousel {
  position: relative;
  border-radius: var(--radius);
  overflow: hidden;
  border: 1px solid var(--border);
  box-shadow: var(--shadow);
}

.carousel__viewport {
  overflow: hidden;
}

.carousel__track {
  display: flex;
  transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
}

.carousel__slide {
  flex: 0 0 100%;
  min-width: 0;
}

.carousel__img {
  width: 100%;
  aspect-ratio: 16 / 9;
  object-fit: cover;
  display: block;
  user-select: none;
}

.carousel__placeholder {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 12px;
  aspect-ratio: 16 / 9;
  background: radial-gradient(
      120% 120% at 70% 10%,
      var(--hero-glow-1),
      transparent 60%
    ),
    var(--surface-2);
  color: var(--text-faint);
}

.carousel__icon {
  width: 46px;
  height: 46px;
  opacity: 0.7;
}

.carousel__label {
  font-family: var(--font-mono);
  font-size: 0.82rem;
  letter-spacing: 0.03em;
}

/* Prev/next controls, vertically centered over the image. */
.carousel__arrow {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  display: grid;
  place-items: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 1px solid var(--border-strong);
  background: color-mix(in srgb, var(--surface) 82%, transparent);
  backdrop-filter: blur(6px);
  color: var(--text);
  cursor: pointer;
  opacity: 0.85;
  transition: background 0.2s ease, color 0.2s ease, border-color 0.2s ease,
    opacity 0.2s ease, transform 0.2s ease;
}

.carousel__arrow svg {
  width: 22px;
  height: 22px;
}

.carousel__arrow--prev {
  left: 14px;
}

.carousel__arrow--next {
  right: 14px;
}

.carousel__arrow:hover {
  opacity: 1;
  color: var(--accent);
  border-color: var(--accent);
}

.carousel__arrow--prev:hover {
  transform: translateY(-50%) translateX(-2px);
}

.carousel__arrow--next:hover {
  transform: translateY(-50%) translateX(2px);
}

.carousel__arrow:focus-visible {
  outline: 2px solid var(--accent);
  outline-offset: 2px;
}

/* Indicator dots. */
.carousel__dots {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 14px;
  display: flex;
  justify-content: center;
  gap: 8px;
}

.carousel__dot {
  width: 8px;
  height: 8px;
  padding: 0;
  border-radius: 50%;
  border: none;
  cursor: pointer;
  background: color-mix(in srgb, var(--text) 35%, transparent);
  box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.15);
  transition: width 0.3s ease, background 0.2s ease;
}

.carousel__dot.is-active {
  width: 22px;
  border-radius: 5px;
  background: var(--accent);
}

.carousel__dot:focus-visible {
  outline: 2px solid var(--accent);
  outline-offset: 2px;
}

@media (prefers-reduced-motion: reduce) {
  .carousel__track {
    transition: none;
  }
}
</style>
