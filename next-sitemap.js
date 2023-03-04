module.exports = {
  siteUrl: process.env.SITE_URL,
  generateRobotsTxt: true,
  exclude: ['/server-sitemap.xml'], // <= exclude here
  robotsTxtOptions: {
    policies: [],
    additionalSitemaps: [
      process.env.SITE_URL + '/server-sitemap.xml', // <==== Add here
    ],
  },
}
