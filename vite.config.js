import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src') // Optional, lets you import like "@/components/Button"
    }
  },
  build: {
    outDir: 'build' // Matches CRA's output folder
  },
  server: {
    open: true // Auto-opens browser on dev server start
  }
});
