module.exports = {
  siteMetadata: {
    title: `A blog i write to teach myself`,
    name: `Gangaprasad Mohite`,
    siteUrl: `https://mohiteg.netlify.com`,
    description: `I read to know`,
    hero: {
      heading: `Welcome to Novela, the simplest way to start publishing with Gatsby.`,
      maxWidth: 652,
    },
    social: [
      {
        name: `twitter`,
        url: `https://twitter.com/shanky07`,
      },
      {
        name: `github`,
        url: `https://github.com/shanky31`,
      },
      {
        name: `instagram`,
        url: `https://instagram.com/shanky.codes`,
      },
    ],
  },
  plugins: [
    {
      resolve: "@narative/gatsby-theme-novela",
      options: {
        contentPosts: "content/posts",
        contentAuthors: "content/authors",
        basePath: "/",
        authorsPage: true,
        sources: {
          local: true,
          // contentful: true,
        },
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Novela by Narative`,
        short_name: `Novela`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#fff`,
        display: `standalone`,
        icon: `src/assets/favicon.png`,
      },
    },
  ],
};
