// @ts-check
import { defineConfig } from 'astro/config';

import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  site: 'https://static.pieterv24.dev/skydivekompas',
  integrations: [react()],
});
