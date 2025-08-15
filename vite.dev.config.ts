import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { fileURLToPath, URL } from 'node:url';

// Development-specific Vite configuration
export default defineConfig({
  plugins: [
    react({
      // Enable Fast Refresh for React components
      jsxRuntime: 'automatic',
    }),
  ],

  // Development server configuration
  server: {
    port: 5173,
    host: true,
    open: false,
    cors: true,

    // Enhanced Hot Module Replacement (HMR)
    hmr: {
      overlay: true,
      port: 5173,
    },

    // File watching for hot reload
    watch: {
      usePolling: false,
      interval: 100,
      // Watch additional directories
      ignored: ['**/node_modules/**', '**/dist/**', '**/build/**'],
    },

    // Development optimizations
    strictPort: false,
  },

  // Development-specific build options
  build: {
    target: 'es2022',
    outDir: 'dist',
    sourcemap: true,
    minify: false, // Disable minification in development
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

  // CSS configuration with development optimizations
  css: {
    postcss: './postcss.config.js',
    devSourcemap: true,
    // Enable CSS HMR
    modules: {
      localsConvention: 'camelCase',
    },
  },

  // Optimize dependencies for development
  optimizeDeps: {
    include: ['react', 'react-dom'],
    exclude: [],
    // Force dependency optimization in development
    force: true,
    // Enable esbuild for faster development
    esbuildOptions: {
      target: 'es2022',
    },
  },

  // Preview configuration
  preview: {
    port: 4173,
    host: true,
  },

  // Development environment variables
  define: {
    __DEV__: true,
    __VERSION__: JSON.stringify('1.0.0-dev'),
  },

  // Development optimizations
  clearScreen: false,

  // Enable detailed logging in development
  logLevel: 'info',
});
