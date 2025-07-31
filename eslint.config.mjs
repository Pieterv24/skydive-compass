import { defineConfig } from 'eslint/config';
import { includeIgnoreFile } from '@eslint/compat';
import { fileURLToPath } from 'node:url';

import openWcConfig from '@open-wc/eslint-config';
import prettierConfig from 'eslint-config-prettier';

const gitignorePath = fileURLToPath(new URL('.gitignore', import.meta.url));

export default defineConfig([
  includeIgnoreFile(gitignorePath, 'Imported .gitignore patterns'),
  {
    extends: [openWcConfig, prettierConfig],
  },
]);
