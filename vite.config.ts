import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { fileURLToPath, URL } from 'node:url';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],

  // Development server configuration
  server: {
    port: 5173,
    host: true,
    open: false,
    cors: true,
  },

  // Build configuration
  build: {
    target: 'es2022',
    outDir: 'dist',
    sourcemap: true,
    minify: 'esbuild',
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
        },
        chunkFileNames: 'assets/[name]-[hash].js',
        entryFileNames: 'assets/[name]-[hash].js',
        assetFileNames: 'assets/[name]-[hash].[ext]',
      },
    },
    chunkSizeWarningLimit: 1000,
  },

  // Path resolution
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      '@/components': fileURLToPath(
        new URL('./src/components', import.meta.url)
      ),
      '@/styles': fileURLToPath(new URL('./src/styles', import.meta.url)),
      '@/types': fileURLToPath(new URL('./src/types', import.meta.url)),
      '@/utils': fileURLToPath(new URL('./src/utils', import.meta.url)),
    },
  },

  // CSS configuration
  css: {
    postcss: './postcss.config.js',
    devSourcemap: true,
  },

  // Optimize dependencies
  optimizeDeps: {
    include: ['react', 'react-dom'],
    exclude: [],
  },

  // Preview configuration
  preview: {
    port: 4173,
    host: true,
  },
});
