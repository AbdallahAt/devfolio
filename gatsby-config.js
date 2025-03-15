module.exports = {
  siteMetadata: {
    // Site URL for when it goes live
    siteUrl: `https://www.abdallah.at/`,
    // Your Name
    name: 'Abdallah Atouani',
    // Main Site Title
    title: `Abdallah Atouani | Senior Software Engineer`,

    email: `hello@abdallah.at`,
    // Description that goes under your name in main bio
    description: `Senior Software Engineer @ Zalando`,
    // Optional: Twitter account handle
    // author: `@rfitzio`,
    // Optional: Github account URL
    github: `https://github.com/abdallahat`,

    gitlab: `https://git.rwth-aachen.de/abdallah.atouani`,
    // Optional: LinkedIn account URL
    linkedin: `https://www.linkedin.com/in/abdallahat/`,
    // Content of the About Me section
    about: `Hey 👋🏼, I’m Abdallah, a Senior Software Engineer passionate about building scalable systems that drive business impact. I work in the Transport & Logistics department at Zalando, designing high-performance software solutions to optimize operations. With an M.Sc. in Computer Science from RWTH Aachen, I focus on backend engineering, distributed systems, and cloud technologies—bridging tech and business goals. \n

Let’s connect and build something impactful! 🚀`,
    // Optional: List your experience, they must have `name` and `description`. `link` is optional.
    experience: [
      {
        company: 'Zalando SE',
        position: 'Senior Software Engineer',
        time: 'Juli 2021 - Present',
        location: 'Germany',
        link: 'https://corporate.zalando.com',
      },
      {
        company: 'Trifacta',
        position: 'Software Engineer Intern',
        time: 'Oct 2019 - Jan 2020',
        location: 'Berlin, Germany',
        link: 'https://www.trifacta.com/',
      },
      {
        company: 'VEDA GmbH',
        position: 'Working Student - Software Engineer',
        time: 'Apr 2018 - Apr 2019',
        location: 'Aachen, Germany',
        link: 'https://www.veda.net/',
      },
    ],
    publications: [
      {
        name: 'Artifact and reference models for generative machine learning frameworks and build systems',
        description: 'Proceedings of the 20th ACM SIGPLAN International Conference on Generative Programming: Concepts and Experiences · 1. Okt. 2021',
        link: 'https://doi.org/10.1145/3486609.3487199'
      }
    ]
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
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `ADD YOUR TRACKING ID HERE`, // Optional Google Analytics
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Abdallah Atouani`,
        short_name: `abdallah.at`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#ffffff`, // This color appears on mobile
        display: `standalone`,
        icon: `src/images/logo_small.png`,
      },
    },
  ],
};
