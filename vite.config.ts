import { defineConfig, type Plugin } from 'vite'
import vue from '@vitejs/plugin-vue'
import fs from 'node:fs'
import path from 'node:path'

// GitHub Pages has no SPA server-side routing. Copying index.html to 404.html
// makes deep links (e.g. /company/pt-temas-tbk) and refreshes resolve to the
// app, which then renders the correct route client-side.
function spa404Fallback(): Plugin {
  let outDir = 'dist'
  return {
    name: 'spa-404-fallback',
    configResolved(config) {
      outDir = config.build.outDir
    },
    closeBundle() {
      const index = path.resolve(outDir, 'index.html')
      const fallback = path.resolve(outDir, '404.html')
      if (fs.existsSync(index)) fs.copyFileSync(index, fallback)
    },
  }
}

// User GitHub Pages site (ericmarcelinotju.github.io) is served from the
// domain root, so the base path stays at '/'.
export default defineConfig({
  base: '/',
  plugins: [vue(), spa404Fallback()],
})
