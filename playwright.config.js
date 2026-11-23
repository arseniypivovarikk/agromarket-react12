import { defineConfig, devices } from '@playwright/test';
const baseURL = process.env.BASE_URL || 'http://localhost:5173';
const isRemote = Boolean(process.env.BASE_URL);
export default defineConfig({
  testDir: './e2e', timeout: 30000, retries: process.env.CI ? 2 : 0,
  reporter: [['list'], ['html', { open: 'never' }]],
  use: { baseURL, trace: 'on-first-retry', screenshot: 'only-on-failure' },
  projects: [{ name: 'chromium', use: { ...devices['Desktop Chrome'] } }],
  webServer: isRemote ? undefined : { command: 'npm run dev', url: 'http://localhost:5173', reuseExistingServer: true },
});
