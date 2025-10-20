import type { APIRoute } from 'astro';

const getRobotsTxt = (sitemapURL: URL) => `\
User-agent: *
Allow: /

Sitemap: ${sitemapURL.href}
`;

export const GET: APIRoute = ({ site }) => {
  const sitemapURL = new URL(import.meta.env.BASE_URL, site?.href);
  sitemapURL.pathname += '/sitemap-index.xml';
  sitemapURL.pathname = sitemapURL.pathname
    .replace(/\/{2,}/g, '/')
    .replace(/\/$/, '');
  return new Response(getRobotsTxt(sitemapURL));
};
