// eslint.config.mjs
// ─────────────────────────────────────────────
// ESLint catches common JavaScript/TypeScript mistakes before they ship.
// This uses the new flat config format (eslint v9+).
// ─────────────────────────────────────────────

import js from "@eslint/js";
import tseslint from "typescript-eslint";
import eslintPluginAstro from "eslint-plugin-astro";

export default [
  js.configs.recommended,
  ...tseslint.configs.recommended,
  ...eslintPluginAstro.configs.recommended,
  {
    ignores: ["dist/", "node_modules/", ".astro/"],
  },
];
