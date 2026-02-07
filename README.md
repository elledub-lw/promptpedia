# Promptpedia

A personal app for managing, versioning, and organizing the best AI prompts you use every day.

---

<!-- PHILOSOPHY
This site follows 5 core principles:

1. Static-first: plain HTML/CSS/JS, no server unless we need one
2. You own everything: code in your repo, deployed to your infrastructure
3. No surprise dependencies: every package is justified in this README
4. Privacy by default: no tracking, no data collection
5. Learning over magic: every file has explanatory comments
-->

## Core Principles

1. **Static-first** — Plain HTML/CSS/JS, no server unless we need one.
2. **You own everything** — Code in your repo, deployed to your infrastructure.
3. **No surprise dependencies** — Every package is justified below.
4. **Privacy by default** — No tracking, no data collection.
5. **Learning over magic** — Every file has explanatory comments.

## How It Works

Promptpedia is built with [Astro](https://astro.build), a static site generator. Here's what that means:

- **Astro builds the site to plain HTML** — When you run `npm run build`, Astro takes your components and pages and outputs a folder of `.html`, `.css`, and minimal `.js` files. No server runs in production.
- **GitHub Actions deploys to GitHub Pages on every push** — When you push to `main`, a GitHub Actions workflow builds the site and deploys it to GitHub Pages automatically.
- **No server is running** — The deployed site is just static files served by GitHub's CDN. Fast, free, and secure.

## Local Setup

```bash
git clone <your-repo-url>
cd promptpedia
npm install
npm run dev
# Open http://localhost:4321
```

## Available Commands

| Command           | What it does                                    |
| ----------------- | ----------------------------------------------- |
| `npm run dev`     | Starts the local dev server at `localhost:4321` |
| `npm run build`   | Builds the production site to `./dist`          |
| `npm run preview` | Previews the built site locally                 |
| `npm run check`   | Runs Astro's TypeScript checker                 |
| `npm run lint`    | Runs ESLint on all files                        |
| `npm run format`  | Formats all files with Prettier                 |
| `npm run test`    | Runs the test suite (Vitest)                    |

## Dependency Manifest

Every package used, with justification. No undocumented dependencies allowed.

| Package                 | Why it's here                         | Could we remove it?   |
| ----------------------- | ------------------------------------- | --------------------- |
| `astro`                 | Static site generator framework       | No (core)             |
| `@astrojs/sitemap`      | Auto-generates sitemap.xml for SEO    | Yes, write manually   |
| `@astrojs/tailwind`     | Integrates Tailwind CSS with Astro    | Yes, use plain CSS    |
| `tailwindcss`           | Build-time utility CSS framework      | Yes, use plain CSS    |
| `typescript`            | Type safety for catching errors early | No (core)             |
| `@astrojs/check`        | Astro-specific TypeScript checking    | Yes, use tsc directly |
| `eslint`                | Catches common code mistakes          | Yes, manual review    |
| `@eslint/js`            | ESLint base config for JavaScript     | Yes, with ESLint      |
| `typescript-eslint`     | ESLint rules for TypeScript           | Yes, with ESLint      |
| `eslint-plugin-astro`   | ESLint rules for Astro files          | Yes, with ESLint      |
| `prettier`              | Consistent code formatting            | Yes, manual format    |
| `prettier-plugin-astro` | Prettier support for `.astro` files   | Yes, with Prettier    |
| `vitest`                | Fast test runner                      | Yes, if no tests      |
| `husky`                 | Git hooks to run checks before commit | Yes, run manually     |

## Project Structure

```
/
├── .github/workflows/deploy.yml  ← Auto-deploys to GitHub Pages on push
├── public/                       ← Static files (copied as-is to output)
│   ├── favicon.ico
│   └── robots.txt
├── src/
│   ├── components/
│   │   ├── Layout.astro          ← Page wrapper with nav, footer, SEO tags
│   │   ├── ThemeToggle.astro     ← Light/dark mode toggle button
│   │   ├── Button.astro          ← Reusable button (primary/secondary/outline)
│   │   └── Card.astro            ← Container with background and border
│   ├── pages/
│   │   ├── index.astro           ← Homepage with hero, features, CTA
│   │   ├── about.astro           ← About page with prose layout
│   │   ├── contact.astro         ← Contact info (no form yet)
│   │   └── 404.astro             ← Friendly 404 error page
│   └── styles/
│       └── global.css            ← Tailwind imports + CSS custom properties
├── tests/
│   └── smoke.test.ts             ← Verifies the build succeeds
├── astro.config.mjs              ← Astro configuration (output: static)
├── tailwind.config.mjs           ← Tailwind config (dark mode, colors, fonts)
├── tsconfig.json                 ← TypeScript strict mode config
├── eslint.config.mjs             ← ESLint flat config
└── package.json                  ← Scripts and dependencies
```

## Design System

- **Typography**: System font stack (`ui-sans-serif`, `system-ui`, etc.) — no web font downloads
- **Colors**: Blue primary accent (`#2563eb`), slate neutrals, with full dark mode support
- **Theming**: CSS custom properties — colors change by toggling a `.dark` class on `<html>`
- **Accessibility**: WCAG AA contrast ratios, visible focus rings, `prefers-reduced-motion` respected

## Deployment

The site auto-deploys via GitHub Actions when you push to `main`. To set it up:

1. Push this repo to GitHub
2. Go to **Settings → Pages**
3. Set **Source** to **GitHub Actions**
4. Push to `main` — the workflow handles the rest

## Accessibility

- All images have `alt` text
- Theme toggle has `aria-label="Toggle dark mode"`
- Navigation is fully keyboard-accessible
- Focus rings are visible on all interactive elements
- Color is never the only way information is conveyed

For a full audit, install [axe DevTools](https://www.deque.com/axe/devtools/) browser extension and run it on each page.

## Performance Targets

- Lighthouse: 95+ on Performance, Accessibility, Best Practices, SEO
- First Contentful Paint: under 1 second
- Total page weight (homepage): under 100KB
- No JavaScript except theme toggle and mobile menu
- System fonts (no web font downloads)
- Tailwind purges unused CSS automatically
