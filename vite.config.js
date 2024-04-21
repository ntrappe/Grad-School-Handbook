import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  /* set if getting websocket issue when developing */
  server: {
    port: '5173'
  },
  plugins: [react()],
  /* set base to '/' for .github.io or custom website */
  /* set base to '/<repo>/' name otherwise */
  base: '/',
});
