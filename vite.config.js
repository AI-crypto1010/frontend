import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// Get HMR host from environment variable or use default
const hmrHost = process.env.VITE_HMR_HOST || process.env.VITE_SERVER_HOST;

// https://vitejs.dev/config/
export default defineConfig({
  base: '/',
  server: {
    port: 3000,
    host: '0.0.0.0', // Listen on all network interfaces
    strictPort: false,
    // Configure HMR for remote access
    // Set VITE_HMR_HOST environment variable to your VPS IP or domain
    // Example: VITE_HMR_HOST=203.0.113.1 npm run dev
    hmr: hmrHost ? {
      host: hmrHost,
      port: 3000,
    } : undefined,
    cors: true,
  },
  preview: {
    port: 3000,
    host: '0.0.0.0',
    cors: true,
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  plugins: [react()],
})
