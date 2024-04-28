import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

const acceptedRoutes = [
  '/',
  '/choose-degree',
];

export default defineConfig({
  // set if getting websocket issue when developing
  server: {
    port: '5173',
    // Use the configureServer hook to customize server behavior
    configureServer: ({ app }) => {
      // Intercept request for specific routes and service index.html
      // We want a single-page application, not to serve up an html page per url request
      app.use((req, res, next) => {
        if (acceptedRoutes.includes(req.url)) {
          res.sendFile(resolve(__dirname, 'index.html'));
        } else {
          next();
        }
      });
    }
  },
  plugins: [react()],
  /* set base to '/' for .github.io or custom website */
  /* set base to '/<repo>/' name otherwise */
  base: '/',
});
