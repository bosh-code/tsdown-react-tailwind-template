import { defineConfig } from 'tsdown';

export default defineConfig([
  {
    entry: ['./src/index.ts'],
    external: ['react', 'react/jsx-runtime'],
    platform: 'browser',
    dts: true,
    minify: process.env.NODE_ENV === 'prod',
    sourcemap: true
  }
]);
