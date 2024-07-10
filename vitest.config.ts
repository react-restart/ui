import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    include: ['test/*.test.*'],
    setupFiles: ['test/setup.ts'],
    environment: 'jsdom',
    browser: {
      provider: 'playwright',
      enabled: true,
      name: 'chromium',
    },
  },
});
