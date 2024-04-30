import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import reactRefresh from '@vitejs/plugin-react-refresh';
import { createServer } from 'vite';
import httpProxy from 'http-proxy';

const proxy = httpProxy.createProxyServer({});

proxy.on('proxyReq', (proxyReq, req, res, options) => {

});

export default defineConfig({
  plugins: [
    react(),
    reactRefresh(),
  ],
  server: {
    configureServer: ({ app }) => {
      app.use((req, res, next) => {
        const routesToServeIndex = ['/choose-degree', '/boost-profile'];

        if (routesToServeIndex.some((route) => req.url.startsWith(route))) {
          req.url = '/index.html';
        }

        proxy.web(req, res, {
          target: 'https://grad-school-handbook.com',
          changeOrigin: true,
        });
      });
    },
  },
  /* set base to '/' for .github.io or custom website */
  /* set base to '/<repo>/' name otherwise */
  base: '/',
});
