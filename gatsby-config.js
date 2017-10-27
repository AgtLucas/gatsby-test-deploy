module.exports = {
  siteMetadata: {
    title: `Gatsby Default Starter`,
  },
  plugins: [`gatsby-plugin-react-helmet`],
  pathPrefix: `/gatsby-test-deploy`,
  "deploy": `gatsby build --prefix-paths && gh-pages -d public`
}
