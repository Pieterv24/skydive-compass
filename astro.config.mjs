// @ts-check
import { defineConfig } from 'astro/config';

import react from '@astrojs/react';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://static.pieterv24.dev/skydivekompas/', // Ensure a trailing slash is present
  trailingSlash: 'never',
  integrations: [react(), sitemap()],
});
