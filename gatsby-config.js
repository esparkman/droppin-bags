module.exports = {
  pathPrefix: '/',
  siteMetadata: {
    siteUrl: 'https://droppinbags.com',
    author: 'Evan Sparkman',
    title: "Droppin' Bags",
    description: 'Your #1 Source for Cornhole News, Reviews and Player Information.',
    keywords: [
      'Cornhole',
      'Droppin Bags',
      'Cornhole Information',
      'How to play Cornhole',
    ],
  },
  plugins: [
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/content/blog`,
        name: 'blog',
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: ['.mdx', '.md'],
        gatsbyRemarkPlugins: [
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 1035,
              sizeByPixelDensity: true,
            },
          },
        ],
      },
    },
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-postcss',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Your #1 Source for Cornhole News, Reviews and Player Information.',
        short_name: 'Droppin Bags',
        start_url: '/',
        background_color: '#fff',
        theme_color: '#525dce',
        display: 'standalone',
        icon: 'assets/logo.png',
      },
    },
    'gatsby-plugin-offline',
  ],
};
