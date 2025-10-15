import { defineConfig } from 'tsdown';
import { injectCssPlugin } from '@bosh-code/tsdown-plugin-inject-css';
import { tailwindPlugin } from '@bosh-code/tsdown-plugin-tailwindcss';

export default defineConfig([
  {
    entry: ['./src/index.ts'],
    external: [
      '@radix-ui/react-slot',
      'class-variance-authority',
      'clsx',
      'preact',
      'preact-compat',
      'preact/jsx-runtime',
      'preact/jsx-runtime/*',
      'tailwind-merge'
    ],
    platform: 'browser',
    target: 'esnext',
    dts: true,
    minify: process.env.NODE_ENV === 'prod',
    sourcemap: true,
    plugins: [
      injectCssPlugin(),
      tailwindPlugin({
          minify: process.env.NODE_ENV === 'prod'
        }
      )
    ],
    tsconfig: './tsconfig.lib.json'
  }
]);
