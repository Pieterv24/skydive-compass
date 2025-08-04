/**
 * @filename lint-staged.config.js
 * @type {import('lint-staged').Configuration}
 */
export default {
  '**/*.{js,jsx,ts,tsx,astro}': (filenames) => [
    `eslint -c eslint.config.js --fix ${filenames.join(' ')}`,
    `prettier --write ${filenames.join(' ')}`,
  ],
  '**/*.{json,md,yml,yaml}': (filenames) => [
    `prettier --write ${filenames.join(' ')}`,
  ],
};
