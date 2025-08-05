import { defineConfig } from '@pandacss/dev';

import pandaBase from '@pandacss/preset-base';
import pandaPreset from '@pandacss/preset-panda';

const pandaConfig = defineConfig({
  // Whether to use css reset
  preflight: true,
  presets: [pandaBase, pandaPreset],
  theme: {
    tokens: {
      colors: {
        primary: { value: '#0070f3' },
      },
    },
  },

  // Where to look for your css declarations
  include: [
    './src/**/*.{js,jsx,ts,tsx,astro}',
    './pages/**/*.{js,jsx,ts,tsx,astro}',
  ],
  // Files to exclude
  exclude: [],
  // The output directory for your css system
  outdir: 'styled-system',
});

export default pandaConfig;
