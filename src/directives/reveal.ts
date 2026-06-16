import type { Directive } from 'vue'

// A lightweight scroll-reveal directive. Adds the `is-visible` class the first
// time an element scrolls into view, using IntersectionObserver (never a scroll
// listener). Honors prefers-reduced-motion by revealing immediately.
//
// Usage:  <section v-reveal> ... </section>
//         <section v-reveal="120"> ... </section>   // optional delay in ms

const prefersReducedMotion = () =>
  typeof window.matchMedia === 'function' &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches

const observers = new WeakMap<HTMLElement, IntersectionObserver>()

export const vReveal: Directive<HTMLElement, number | undefined> = {
  mounted(el, binding) {
    el.classList.add('reveal')

    const reveal = () => {
      const delay = binding.value
      if (delay) el.style.transitionDelay = `${delay}ms`
      el.classList.add('is-visible')
    }

    // No IntersectionObserver support or reduced motion: show right away.
    if (prefersReducedMotion() || typeof IntersectionObserver === 'undefined') {
      reveal()
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            reveal()
            observer.disconnect()
            observers.delete(el)
            break
          }
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -8% 0px' },
    )

    observer.observe(el)
    observers.set(el, observer)
  },
  unmounted(el) {
    observers.get(el)?.disconnect()
    observers.delete(el)
  },
}
