// tailwind.config.mjs
// ─────────────────────────────────────────────
// Tailwind configuration.
// Tailwind scans your source files and only includes the CSS classes
// you actually use. This means the final CSS file is tiny.
// ─────────────────────────────────────────────

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],

  // Dark mode uses a class on <html> so we can toggle it with JavaScript.
  darkMode: "class",

  theme: {
    extend: {
      // We use system fonts — no web font downloads, no privacy leaks.
      fontFamily: {
        sans: [
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Roboto",
          "Helvetica Neue",
          "Arial",
          "sans-serif",
        ],
      },
      // Custom color palette — primary accent, neutrals, backgrounds.
      colors: {
        primary: {
          50: "#eff6ff",
          100: "#dbeafe",
          200: "#bfdbfe",
          300: "#93c5fd",
          400: "#60a5fa",
          500: "#3b82f6",
          600: "#2563eb",
          700: "#1d4ed8",
          800: "#1e40af",
          900: "#1e3a8a",
          950: "#172554",
        },
      },
      // Max content width for readability.
      maxWidth: {
        content: "1200px",
      },
    },
  },

  plugins: [],
};
