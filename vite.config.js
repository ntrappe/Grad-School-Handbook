import { defineConfig } from 'vite';
import legacy from '@vitejs/plugin-legacy';
import react from '@vitejs/plugin-react';

export default defineConfig({
  /* set if getting websocket issue when developing */
  server: {
    port: '5173',
    history: {
      /* Enable history API fallback
       * This will rewrite all URLs to index.html rather than trying to 
       * fetch individual html files for each href change. Allows client-side
       * routing to work correctly. Single-page support.
       */
      fallback: 'index.html',
    },
  },
  plugins: [
    react(),
    legacy({
      targets: ['chrome >= 60', 'firefox >= 60', 'safari >= 10', 'edge >= 60', 'ios >= 10'],
      polyfills: ['es.promise.finally'],
    }),
  ],
  /* set base to '/' for .github.io or custom website */
  /* set base to '/<repo>/' name otherwise */
  base: '/',
});
