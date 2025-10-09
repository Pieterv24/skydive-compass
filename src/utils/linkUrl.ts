// Utility to convert a link type and id to a full URL

import type { Link } from '~/models/Link';

export function linkTypeToUrl(link: Link): string | undefined {
  switch (link.type) {
    case 'youtube':
      return link.id ? `https://youtube.com/watch?v=${link.id}` : undefined;
    case 'vimeo':
      return link.id ? `https://vimeo.com/${link.id}` : undefined;
    case 'skydivemag':
      return link.id ? `https://www.skydivemag.com/new/${link.id}` : undefined;
    case 'pdf':
      return link.id;
    default:
      return link.id;
  }
}
