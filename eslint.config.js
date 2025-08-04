import { defineConfig } from 'eslint/config';

import js from '@eslint/js';
import ts from 'typescript-eslint';
import pluginAstro from 'eslint-plugin-astro';
import pluginReact from 'eslint-plugin-react';
import configPrettier from 'eslint-config-prettier/flat';

const config = defineConfig([
  {
    ignores: ['dist/*', 'node_modules/*'],
    settings: {
      react: {
        version: 'detect', // Automatically detect the version of React to use
      },
    },
  },
  js.configs.recommended,
  ...ts.configs.strict,
  ...pluginAstro.configs.recommended,
  {
    files: ['**/*.{jsx,tsx}'],
    ...pluginReact.configs.flat.recommended,
  },
  {
    files: ['**/*.{jsx,tsx}'],
    ...pluginReact.configs.flat['jsx-runtime'],
  },
  configPrettier,
  {
    rules: {
      '@typescript-eslint/triple-slash-reference': 'off',
    },
  },
]);

// eslint-disable-next-line
console.log(config);
export default config;
