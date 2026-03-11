// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://staplesandstatements.com',
  output: 'static',
  integrations: [
    sitemap({
      // Exclude redirect and transaction pages from sitemap
      filter: (page) =>
        !page.includes('/style-quiz') &&
        !page.includes('/booking-confirmed'),
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
