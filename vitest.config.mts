import { coverageConfigDefaults, defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  test: {
    include: ['test/**/*Spec.ts', 'test/**/*Spec.tsx'],
    environment: 'jsdom',
    setupFiles: ['test/setup.ts'],
    browser: {
      enabled: true,
      provider: 'playwright',
      instances: [{ browser: 'chromium' }, { browser: 'firefox' }],
    },
    coverage: {
      provider: 'istanbul',
      reporter: ['text', 'lcov'], // lcov & json for VSCode
      reportsDirectory: './coverage',
      exclude: [...coverageConfigDefaults.exclude, 'www/**', '**/*.js'],
    },
  },
});
