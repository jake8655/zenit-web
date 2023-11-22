import { type Config } from 'tailwindcss';

export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
        patua: ['Patua One', 'cursive'],
      },
      colors: {
        bg: '#E4E2E0',
        text: '#525B64',
        icon: '#617391',
        'colorful-text': '#FFFFFF',
        'colorful-bg': '#DDDDDD',
        'colorful-text-hover': '#111111',
        'colorful-bg-hover': '#999999',
      },
    },
  },
  plugins: [],
} satisfies Config;
