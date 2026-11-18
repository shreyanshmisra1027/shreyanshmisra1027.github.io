import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: process.env.SITE_URL || 'https://shreyanshmisra1027.github.io',
  base: process.env.BASE_PATH || '/',
  integrations: [mdx(), sitemap()],
  markdown: {
    shikiConfig: {
      theme: 'github-dark',
    },
  },
});