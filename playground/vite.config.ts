import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import tsConfigPaths from 'vite-plugin-tsconfig-paths';

export default defineConfig({
  root: './playground',
  plugins: [
    react(),
    tailwindcss(),
    tsConfigPaths()
  ],
})
