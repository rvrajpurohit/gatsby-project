/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [],
}
module.exports = {
  siteMetadata: {
    title: "My First Gatsby Site",
    description: "Vikram",
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    `gatsby-transformer-sharp`,
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `blog`,
        path: `${__dirname}/blog`,
      }
    },
    "gatsby-plugin-mdx",
  ],
};