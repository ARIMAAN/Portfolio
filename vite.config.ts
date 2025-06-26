import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
// import path from 'path';
// import { fileURLToPath } from 'url';

// const __dirname = path.dirname(fileURLToPath(import.meta.url));

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      // Add this alias to resolve imports starting with '@/' to the 'src' directory
      '@': '/src',
    },
  },
})
