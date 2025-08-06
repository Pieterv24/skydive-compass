import { defineConfig } from '@pandacss/dev';

import pandaBase from '@pandacss/preset-base';
import pandaPreset from '@pandacss/preset-panda';
import radixColorsPreset from 'pandacss-preset-radix-colors';

import globalCss from '@styles/panda/globalCss';
import colorTokens from '@styles/panda/tokens/colors';
import shadowTokens from '@styles/panda/tokens/shadows';

const pandaConfig = defineConfig({
  // Whether to use css reset
  preflight: true,
  presets: [
    radixColorsPreset({
      darkMode: true,
      colorScales: ['gray', 'sky', 'amber', 'black', 'white', 'blue'],
    }),
    pandaBase,
    pandaPreset,
  ],
  theme: {
    extend: {
      tokens: {
        fonts: {
          body: { value: ['Inter Variable', 'sans-serif'] },
          heading: { value: ['Lexend Variable', 'sans-serif'] },
        },
      },
    },
    semanticTokens: {
      colors: colorTokens,
      shadows: shadowTokens,
    },
  },
  globalCss,

  // Where to look for your css declarations
  include: [
    './src/**/*.{js,jsx,ts,tsx,astro}',
    './pages/**/*.{js,jsx,ts,tsx,astro}',
  ],
  // Files to exclude
  exclude: [],
  // The output directory for your css system
  outdir: 'styled-system',
  jsxFramework: 'react',
  jsxFactory: 'panda',
});

export default pandaConfig;
