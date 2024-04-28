import { defineConfig } from 'vite';
import legacy from '@vitejs/plugin-legacy';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

export default defineConfig({
  /* set if getting websocket issue when developing */
  server: {
    port: '5173',
    configureServer: ({ app }) => {
      app.use((req, res, next) => {
        // If the request path is not root, serve index.html
        if (req.url !== '/') {
          console.log('url not / is ' + req.url + ' so give index.html');
          res.sendFile(resolve(__dirname, 'dist', 'index.html'));
        } else {
          console.log('url is /');
          next();
        }
      });
    }
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
