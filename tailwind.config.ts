import { type Config } from 'tailwindcss';

export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        lato: ['Lato', 'sans-serif'],
      },
      colors: {
        primary: '#06a3da',
        secondary: '#091e3e',
        banner: '#eef9ff',
        'secondary-light': '#6b6a75',
        third: '#f57e57',
      },
    },
  },
  plugins: [],
} satisfies Config;
