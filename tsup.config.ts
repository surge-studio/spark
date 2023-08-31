import { defineConfig } from 'tsup';

export default defineConfig({
  tsconfig: './tsconfig.base.json',
  entry: [
    'src/components/**/*.ts',
    'src/components/**/*.tsx',
    '!src/components/**/*.stories.tsx',
  ],
  clean: true,
  bundle: false,
  dts: true,
  format: ['cjs', 'esm'],
  splitting: false,
  sourcemap: true,
});
