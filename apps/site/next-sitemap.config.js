/** @type {import('next-sitemap').IConfig} */

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.druker.net';

module.exports = {
  siteUrl: siteUrl,
  exclude: ['/404'],
  generateRobotsTxt: true,
  sitemapSize: 7000,
  // robotsTxtOptions: {
  //   additionalSitemaps: [`${siteUrl}/server-sitemap.xml`],
  // },
  sourceDir: 'dist/apps/site/.next',
  outDir: 'dist/apps/site/public',
};
