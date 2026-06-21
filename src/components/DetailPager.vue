<script setup lang="ts">
import type { RouteLocationRaw } from 'vue-router'

// A prev/next pager shown at the foot of a detail page. Either side may be
// absent (at the first/last item); the layout keeps the remaining link aligned
// to its edge.
defineProps<{
  prev?: { name: string; to: RouteLocationRaw }
  next?: { name: string; to: RouteLocationRaw }
  /** Word for the kind of item being paged, e.g. "project" or "role". */
  label?: string
}>()
</script>

<template>
  <nav class="pager" aria-label="Pagination">
    <router-link
      v-if="prev"
      :to="prev.to"
      class="pager__link pager__link--prev"
    >
      <span class="pager__dir">
        <span class="pager__arrow" aria-hidden="true">←</span>
        Previous {{ label ?? 'item' }}
      </span>
      <span class="pager__name">{{ prev.name }}</span>
    </router-link>
    <span v-else class="pager__spacer" aria-hidden="true"></span>

    <router-link
      v-if="next"
      :to="next.to"
      class="pager__link pager__link--next"
    >
      <span class="pager__dir">
        Next {{ label ?? 'item' }}
        <span class="pager__arrow" aria-hidden="true">→</span>
      </span>
      <span class="pager__name">{{ next.name }}</span>
    </router-link>
    <span v-else class="pager__spacer" aria-hidden="true"></span>
  </nav>
</template>

<style scoped>
.pager {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
  margin-top: 48px;
  padding-top: 28px;
  border-top: 1px solid var(--border);
}

.pager__link {
  display: flex;
  flex-direction: column;
  gap: 5px;
  padding: 16px 18px;
  border: 1px solid var(--border);
  border-radius: var(--radius);
  color: var(--text);
  background: var(--surface);
  transition: border-color 0.2s ease, box-shadow 0.2s ease, transform 0.2s ease;
}

.pager__link--next {
  text-align: right;
  align-items: flex-end;
}

.pager__link:hover {
  border-color: var(--accent);
  box-shadow: var(--shadow);
  transform: translateY(-2px);
}

.pager__dir {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-family: var(--font-mono);
  font-size: 0.74rem;
  letter-spacing: 0.03em;
  color: var(--text-muted);
}

.pager__arrow {
  transition: transform 0.2s ease;
}

.pager__link--prev:hover .pager__arrow {
  transform: translateX(-3px);
}

.pager__link--next:hover .pager__arrow {
  transform: translateX(3px);
}

.pager__name {
  font-weight: 700;
  font-size: 1.02rem;
  color: var(--accent);
}

.pager__spacer {
  display: block;
}

@media (max-width: 560px) {
  .pager {
    grid-template-columns: 1fr;
  }

  /* Keep the next link left-aligned when stacked. */
  .pager__link--next {
    text-align: left;
    align-items: flex-start;
  }
}
</style>
