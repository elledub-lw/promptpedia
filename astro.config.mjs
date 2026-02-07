// astro.config.mjs
// ─────────────────────────────────────────────
// Main Astro configuration file.
// Astro is a static site generator — it takes your components and pages
// and builds them into plain HTML files. No server runs in production.
// ─────────────────────────────────────────────

import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  // 'static' means Astro builds plain HTML files — no server needed.
  output: "static",

  site: "https://elledub-lw.github.io/promptpedia",

  integrations: [
    // Tailwind handles CSS at build time — zero runtime cost.
    tailwind(),
    // Generates /sitemap.xml automatically from your pages.
    sitemap(),
  ],
});
