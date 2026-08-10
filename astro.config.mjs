import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: process.env.URL || process.env.SITE_URL || 'https://bharat-fm.com',
  integrations: [tailwind()],
});
