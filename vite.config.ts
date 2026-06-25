import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: './',
  build: {
    // Optimize chunk splitting for better caching
    rollupOptions: {
      output: {
        manualChunks: {
          'router': ['@tanstack/react-router'],
          'vendor': ['react', 'react-dom'],
        },
      },
    },
    // Reduce CSS inlining threshold for better caching
    cssCodeSplit: true,
    // Enable minification
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
      },
    },
    // Optimize asset inlining
    assetsInlineLimit: 4096,
  },
  // Optimize dev server
  server: {
    middlewareMode: false,
    hmr: true,
  },
})
