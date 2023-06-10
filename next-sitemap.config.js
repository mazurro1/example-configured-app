/** @type {import('next-sitemap').IConfig} */

module.exports = {
  siteUrl: process.env.SITE_URL || "https://flex.orange.pl",
  generateRobotsTxt: true,
  sitemapSize: 7000,
  outDir: "out",
};
