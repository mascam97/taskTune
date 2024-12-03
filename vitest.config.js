import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    environment: 'jsdom',
    testMatch: ['**/*.test.js'],
    globals: true,
    setupFiles: ['./src/setupTest.js'],
  }
})