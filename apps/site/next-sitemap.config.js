/** @type {import('next-sitemap').IConfig} */

module.exports = {
  siteUrl: process.env.SITE_URL || 'https://www.druker.net',
  generateRobotsTxt: true, // (optional)
  changefreq: 'daily',
  priority: 0.7,
  // ...other options
};

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.druker.net';

module.exports = {
  siteUrl: siteUrl,
  generateRobotsTxt: true,
  sitemapSize: 7000,
  robotsTxtOptions: {
    additionalSitemaps: [`${siteUrl}/server-sitemap.xml`],
  },
  sourceDir: 'dist/apps/site/.next',
  outDir: 'dist/apps/site/public',
};
