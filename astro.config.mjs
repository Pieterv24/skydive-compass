// @ts-check
import { defineConfig } from 'astro/config';

import react from '@astrojs/react';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  base: '/',
  site: 'https://compass.funjump.ing',
  trailingSlash: 'ignore',
  integrations: [react(), sitemap()],
});
