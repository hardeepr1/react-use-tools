import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    environment: 'jsdom', // ✅ THIS FIXES THE ERROR
    globals: true,
  },
});
