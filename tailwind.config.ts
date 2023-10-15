import { type Config } from 'tailwindcss';

export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        lato: ['Lato', 'sans-serif'],
      },
      colors: {
        primary: '#FF8013',
        secondary: '#282828',
        ['primary-foreground']: '#FFFFFF',
      },
    },
  },
  plugins: [],
} satisfies Config;
