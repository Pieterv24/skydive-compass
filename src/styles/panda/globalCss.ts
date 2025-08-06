import { defineGlobalStyles } from '@pandacss/dev';

export default defineGlobalStyles({
  ':root': {
    '--global-font-body': 'Inter Variable, sans-serif',
    '--global-font-heading': 'Lexend Variable, sans-serif',
  },
  'html, body': {
    'h1, h2, h3, h4, h5, h6': {
      fontFamily: 'var(--global-font-heading)',
    },

    backgroundColor: 'background',
    color: 'text',

    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
  },
});
