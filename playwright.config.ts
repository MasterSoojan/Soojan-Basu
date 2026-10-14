import { defineConfig } from "@playwright/test";

const production = process.env.PLAYWRIGHT_USE_PRODUCTION === "true";

export default defineConfig({
  testDir: "./tests",
  fullyParallel: true,
  use: {
    baseURL: "http://127.0.0.1:4173",
    browserName: "chromium",
    trace: "retain-on-failure",
  },
  webServer: {
    command: `npm run ${production ? "preview" : "dev"} -- --host 127.0.0.1 --port 4173 --strictPort`,
    url: "http://127.0.0.1:4173",
    reuseExistingServer: false,
  },
});
