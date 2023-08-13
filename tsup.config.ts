import { defineConfig } from 'tsup';

export default defineConfig({
  entry: [
    'src/components/index.ts',
    'src/components/**/*.ts',
    'src/components/**/*.tsx',
    '!src/components/**/*.stories.tsx',
  ],
  clean: true,
  bundle: false,
  dts: false,
  format: ['cjs', 'esm'],
  splitting: false,
  sourcemap: true,
  outDir: 'dist/',
});
