import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import federation from '@originjs/vite-plugin-federation';
import path from 'path';

export default defineConfig({
  root: __dirname,
  plugins: [
    react(),
    federation({
      name: 'settings',
      filename: 'remoteEntry.js',
      exposes: {
        './App': path.resolve(__dirname, './src/App.tsx'),
      },
      shared: {
        react: { singleton: true },
        'react-dom': { singleton: true },
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
    port: 5003,
    strictPort: true,
    cors: true,
    fs: {
      allow: ['../..'],
    },
  },
  preview: {
    port: 5003,
    strictPort: true,
    cors: true,
  },
});
