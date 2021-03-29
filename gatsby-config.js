module.exports = {
  siteMetadata: {
    siteTitle: `waddling`,
    siteUrl: `https://waddling.github.io`,
    siteDescription: `Website for random things and learning purposes.`,
    siteLanguage: `en`,
    author: `@waddling`,
    name: `Yeon Kim`,
  },
plugins: [
  `gatsby-plugin-theme-ui`,
  {
    resolve: `gatsby-plugin-typescript`,
    options: {
      isTSX: true,
      jsxPragma: `jsx`,
      allExtensions: true,
    }
  },
  {
    resolve: `gatsby-plugin-mdx`,
    options: {
      extensions: [`.mdx`, `.md`],
    },
  },
  {
    resolve: `gatsby-source-filesystem`,
    options: {
      path: `${__dirname}/posts`,
      name: `posts`,
    },
  },
  `gatsby-plugin-react-helmet`,
  {
    resolve: `gatsby-plugin-manifest`,
    options: {
      name: `waddling`,
      short_name: `waddling`,
      start_url: `/`,
      background_color: `#663399`,
      theme_color: `#663399`,
      display: `minimal-ui`,
      icon: `src/images/waddling-icon.png`,
    },
  },
  ],
}
