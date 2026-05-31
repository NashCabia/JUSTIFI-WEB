import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/JUSTIFI-WEB/',
  server: {
    port: 3000
  }
});