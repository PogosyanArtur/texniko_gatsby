module.exports = {
  siteMetadata: {
    title: `Gatsby Default Starter`,
    description: ``,
    author: `@gatsbyjs`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`
      }
    },
    {
      resolve: `gatsby-source-strapi`,
      options: {
        apiURL: `http://localhost:1337`
        // queryLimit: 100, // Default to 0
        // contentTypes: [`article`, `user`],
        // Possibility to login with a strapi user, when content types are not publically available (optional).
        // loginData: {
        //   identifier: "",
        //   password: ""
        // }
      }
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
        display: `minimal-ui`
      }
    },
    {
      resolve: `gatsby-plugin-root-import`,
      options: {
        src: `${__dirname}/src`,
        assets: `${__dirname}/src/assets`,
        components: `${__dirname}/src/components`,
        data: `${__dirname}/src/data`,
        layout: `${__dirname}/src/layout`,
        pages: `${__dirname}/src/pages`
      }
    }
  ]
};
