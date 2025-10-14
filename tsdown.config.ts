import { defineConfig } from 'tsdown';
import { injectCssPlugin } from '@bosh-code/tsdown-plugin-inject-css';
import { tailwindPlugin } from '@bosh-code/tsdown-plugin-tailwindcss';

export default defineConfig([
  {
    entry: ['./src/index.ts'],
    external: ['react', 'react/jsx-runtime'],
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
    tsconfig: './tsconfig.lib.json',
  }
]);
