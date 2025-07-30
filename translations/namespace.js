import { getLocalizeManager } from '@lion/ui/localize-no-side-effects.js';

const localize = getLocalizeManager();

localize.setupNamespaceLoader('skydive-compass', locale => {
  switch (locale) {
    case 'en-GB':
    case 'en-US':
    case 'en':
      return import('./en-GB.js');
    case 'nl-NL':
    case 'nl-BE':
    case 'nl':
      return import('./nl-NL.js');
    default:
      return import('./en-GB.js'); // Fallback to English if no translation is available
  }
});

export const msg = key => localize.msg(`skydive-compass:${key}`);
