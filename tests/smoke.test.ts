/**
 * smoke.test.ts
 * ─────────────────────────────────────────────
 * The simplest possible test: does the site build without errors?
 *
 * Why this matters:
 * - Catches broken imports, syntax errors, and config issues
 * - Runs in CI before every deploy
 * - More tests will be added when there's actual logic to test
 * ─────────────────────────────────────────────
 */

import { describe, it, expect } from "vitest";
import { execSync } from "child_process";

describe("Build", () => {
  it("should complete the Astro build without errors", () => {
    // Run the build command. If it fails, execSync throws an error
    // and the test fails automatically.
    const result = execSync("npm run build", {
      cwd: process.cwd(),
      encoding: "utf-8",
      timeout: 60000, // 60 second timeout for the build
    });

    // If we get here, the build succeeded
    expect(result).toBeDefined();
  });
});
