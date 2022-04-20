module.exports = {
  pathPrefix: "/OTA",
  siteMetadata: {
    title: `One Twelve Agency - Music-led Brand Partnerships Agency`,
    description: `Music-led brand partnerships agency properly representing real and diverse lifestyles and cultures`,
    author: `AX99`,
  },
  plugins: [
    `gatsby-plugin-theme-ui`,
    'gatsby-plugin-resolve-src',
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/assets/images/icons/favicon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        google: {
          families: ['DM Sans', 'Josefin Sans', 'Julius Sans One'],
        },
      },
    },
    // {
    //   resolve: 'gatsby-plugin-mailchimp',
    //   options: {
    //     endpoint: '', // add your MC list endpoint here; see instructions from gatsby's website
    //   },
    // },
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: 'https://www.onetwelveagency.com',
        sitemap: 'https://www.onetwelveagency.com/sitemap.xml',
        policy: [{ userAgent: '*', allow: '/' }],
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
};
