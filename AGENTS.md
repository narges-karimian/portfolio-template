# Project Guidelines

- Use Nuxt 4, Vue 3, and TypeScript. Write Vue components with `<script setup lang="ts">` unless a file has no script logic.
- Style with Tailwind CSS utilities. Keep the existing `@tailwindcss/vite` integration and global stylesheet at `app/assets/css/main.css`.
- Follow the existing Nuxt app structure under `app/`; place shared UI in `app/components/` and shared logic in `app/composables/` when those directories are needed.
- Reuse an existing component when it already fits. Extract a component when UI or behavior is meaningfully repeated; avoid premature abstractions.
- Consult `PRD.md` before implementing product behavior, content, sections, accessibility, localization, or design requirements.
- Keep changes scoped to the request. Do not make unrelated edits or add dependencies when Nuxt, Vue, TypeScript, or CSS already provides a reasonable solution.
- Do not run the app, build, test, lint, or type-check unless explicitly authorized. When authorized, run only relevant checks and report each command and result; otherwise state that checks were not run.
