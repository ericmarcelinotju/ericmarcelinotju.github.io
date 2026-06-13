import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// User GitHub Pages site (ericmarcelinotju.github.io) is served from the
// domain root, so the base path stays at '/'.
export default defineConfig({
  base: '/',
  plugins: [vue()],
})
