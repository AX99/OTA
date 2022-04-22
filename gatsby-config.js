module.exports = {
  pathPrefix: '/OTA',
  siteMetadata: {
    title: `One Twelve Agency - Music-led Brand Partnerships Agency`,
    description: `Music-led brand partnerships agency properly representing real and diverse lifestyles and cultures`,
    author: `AX99`,
  },
  plugins: [
    `gatsby-plugin-theme-ui`,
    `gatsby-plugin-resolve-src`,
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
        name: `One Twelve Agency`,
        short_name: `OTa`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#C8ADA7`,
        display: `minimal-ui`,
        icon: `src/assets/images/icons/favicon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Josefin Sans`,
          `Julius Sans One\:300,400,500,700`, // you can also specify font weights and styles
        ],
        display: 'block',
      },
    },
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: 'https://www.onetwelveagency.com',
        sitemap: 'https://www.onetwelveagency.com/sitemap/sitemap-index.xml',
        policy: [{ userAgent: '*', allow: '/' }],
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
};
