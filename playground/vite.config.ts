import preactPlugin from '@preact/preset-vite'
import { defineConfig } from 'vite'

export default defineConfig({
  root: './playground',
  plugins: [preactPlugin()],
})
