import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 3000,
    host: '0.0.0.0', // Listen on all network interfaces
    strictPort: false,
    // For remote access from your local computer to VPS:
    // Option 1: Access VPS via IP address - uncomment and set your VPS IP
    // Option 2: Access VPS via domain name - uncomment and set your domain
    // Option 3: If HMR doesn't work, disable it: hmr: false
    hmr: {
      // Uncomment one of these based on how you access your VPS:
      // host: 'your-vps-ip-address',  // e.g., '192.168.1.100' or '203.0.113.1'
      // host: 'your-vps-domain.com',  // e.g., 'example.com'
      // If left undefined, Vite will try to auto-detect
    },
  },
  preview: {
    port: 3000,
    host: '0.0.0.0',
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  plugins: [react()],
})
