import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import federation from '@originjs/vite-plugin-federation';
import path from 'path';

export default defineConfig({
  root: __dirname,
  plugins: [
    react(),
    federation({
      name: 'host',
      remotes: {
        auth: 'http://localhost:5001/assets/remoteEntry.js',
        dashboard: 'http://localhost:5002/assets/remoteEntry.js',
        settings: 'http://localhost:5003/assets/remoteEntry.js',
      },
      shared: {
        react: { singleton: true, requiredVersion: '^19.2.0' },
        'react-dom': { singleton: true, requiredVersion: '^19.2.0' },
        'react-router-dom': { singleton: true },
      },
    }),
  ],
  resolve: {
    alias: {
      '@mfe-workspace/shared-ui/styles': path.resolve(__dirname, '../../libs/shared-ui/src/index.css'),
      '@mfe-workspace/shared-ui': path.resolve(__dirname, '../../libs/shared-ui/src'),
      '@': path.resolve(__dirname, '../../libs/shared-ui/src'),
    },
  },
  build: {
    modulePreload: false,
    target: 'esnext',
    minify: false,
    cssCodeSplit: false,
  },
  server: {
    port: 5000,
    strictPort: true,
    fs: {
      allow: ['../..'],
    },
  },
  preview: {
    port: 5000,
    strictPort: true,
  },
});
