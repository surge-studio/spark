import { tailwindConfig } from './src/components/config';
import type { Config } from 'tailwindcss';

const config: Config = {
  presets: [tailwindConfig],
  content: ['./src/**/*.{js,jsx,ts,tsx}', './app/**/*.{js,jsx,ts,tsx}'],
};

export default config;
