module.exports = {
  siteMetadata: {
    // Site URL for when it goes live
    siteUrl: `https://elastic-meninsky-aa7c74.netlify.app/`,
    // Your Name
    name: 'Abdallah Atouani',
    // Main Site Title
    title: `Abdallah Atouani | Software Engineer`,

    email: `abdallah.atouani@rwth-aachen.de`,
    // Description that goes under your name in main bio
    description: `Software Engineer, CS Master Student @ RWTH Aachen University`,
    // Optional: Twitter account handle
    // author: `@rfitzio`,
    // Optional: Github account URL
    github: `https://github.com/abdallahat`,

    gitlab: `https://git.rwth-aachen.de/abdallah.atouani`,
    // Optional: LinkedIn account URL
    linkedin: `https://www.linkedin.com/in/abdallahat/`,
    // Content of the About Me section
    about: `Hey 👋🏼, my name is Abdallah and I´m a passionate software engineer. I am currently pursuing a masters degree 
    in computer science at the RWTH University in Aachen, Germany.`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
              wrapperStyle: `margin: 0 0 30px;`,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-postcss`,
    `gatsby-plugin-feed`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `ADD YOUR TRACKING ID HERE`, // Optional Google Analytics
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `devfolio`,
        short_name: `devfolio`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#ffffff`, // This color appears on mobile
        display: `minimal-ui`,
        icon: `src/images/logo_small.png`,
      },
    },
  ],
};
