import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    fs: {
      allow: ['C:/Users/nl748/Documents/Login',
      'C:/Users/nl748/OneDrive/Imágenes/protector',],
    },
  },
});
