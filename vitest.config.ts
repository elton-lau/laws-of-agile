import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, '.'),
      'content-collections': path.resolve(__dirname, './.content-collections/generated')
    }
  },
  test: {
    globals: true,
    environment: 'jsdom'
  }
});
