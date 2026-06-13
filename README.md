# ericmarcelinotju.github.io

Personal profile website for **Eric Marcelino**, built with [Vue 3](https://vuejs.org/),
[TypeScript](https://www.typescriptlang.org/), and [Vite](https://vitejs.dev/).

## Tech stack

- **Vue 3** with `<script setup>` single-file components
- **TypeScript** in strict mode
- **Vite** for dev server and production builds
- Hand-written CSS (no UI framework) with a single-page, responsive layout

## Project structure

```
src/
├── components/        # Header, hero, and section components
├── data/resume.ts     # Typed profile content (the single source of truth)
├── App.vue            # Page composition
├── main.ts            # App entry point
└── style.css          # Global styles and design tokens
```

All page content lives in `src/data/resume.ts`. Update that file to change the
text, skills, experience, projects, or education shown on the site.

## Local development

```bash
npm install      # install dependencies
npm run dev      # start the dev server (http://localhost:5173)
npm run build    # type-check and build to dist/
npm run preview  # preview the production build
```

## Deployment

Pushing to `main` triggers the **Deploy to GitHub Pages** GitHub Actions workflow
(`.github/workflows/deploy.yml`), which builds the site and publishes `dist/` to
GitHub Pages.

> One-time setup: in the repository's **Settings → Pages**, set **Source** to
> **GitHub Actions**.
