
require("dotenv").config({
  path: `.env`,
})
module.exports = {
  plugins: [
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-source-sanity`,
      options: {
        projectId: `rqpnfakb`,
        dataset: `production`,
        watchMode: true,
        token: process.env.SANITY_TOKEN
      }
    }, 
  ],
}
