import preactPlugin from '@preact/preset-vite'
import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import tsConfigPaths from 'vite-plugin-tsconfig-paths';

export default defineConfig({
  root: './playground',
  plugins: [
    preactPlugin(),
    tailwindcss(),
    tsConfigPaths()
  ],
})
