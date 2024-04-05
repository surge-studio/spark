import animate from 'tailwindcss-animate';
import typography from '@tailwindcss/typography';
import colors from 'tailwindcss/colors';
import defaultConfig from 'tailwindcss/defaultConfig';
import defaultTheme from 'tailwindcss/defaultTheme';
import type { Config } from 'tailwindcss';

export const tailwindConfig: Config = {
  presets: [defaultConfig],
  darkMode: 'class',
  content: [
    './src/**/*.{js,jsx,ts,tsx,mdx}',
    './app/**/*.{js,jsx,ts,tsx,mdx}',
    './pages/**/*.{js,jsx,ts,tsx,mdx}',
    './components/**/*.{js,jsx,ts,tsx,mdx}',
    './node_modules/@surge-studio/spark/**/*.js',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Inter"', ...defaultTheme.fontFamily.sans],
        mono: [...defaultTheme.fontFamily.mono],
      },
      colors: {
        primary: {
          DEFAULT: colors.blue[600],
          ...colors.blue,
        },
        gray: {
          DEFAULT: '#4F545F',
          '50': '#FAFAFB',
          '100': '#F4F4F6',
          '200': '#E5E6E9',
          '300': '#D3D5DA',
          '400': '#9FA2AD',
          '500': '#6E727D',
          '600': '#4F545F',
          '700': '#3B404C',
          '800': '#232831',
          '900': '#151821',
          '950': '#06080F',
        },
        success: {
          DEFAULT: '#0E9D5A',
          '50': '#EEFDF5',
          '100': '#D7FBE6',
          '200': '#B1F5D0',
          '300': '#7AEBB2',
          '400': '#3FD98D',
          '500': '#19BF70',
          '600': '#0E9D5A',
          '700': '#0D7C4A',
          '800': '#0E623D',
          '900': '#0D5134',
          '950': '#042D1C',
        },
        error: {
          DEFAULT: '#DF2237',
          '50': '#FFF2F2',
          '100': '#FFE3E4',
          '200': '#FECCCF',
          '300': '#FDA5AA',
          '400': '#FA717B',
          '500': '#F24251',
          '600': '#DF2237',
          '700': '#BC172C',
          '800': '#9C172A',
          '900': '#84182A',
          '950': '#490812',
        },
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
    },
  },
  plugins: [animate, typography],
};
