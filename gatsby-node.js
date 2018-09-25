const path = require(`path`);
const { createFilePath } = require(`gatsby-source-filesystem`);

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === `MarkdownRemark`) {
    var base = ``;
    var template = ``;
    if (node.fileAbsolutePath.includes("blog")) {
      base = `blog`;
      template = `./src/templates/blog-post.js`;
    }
    else if (node.fileAbsolutePath.includes("projects")) {
      base = `projects`;
      template = `./src/templates/project-post.js`;
    }
    const slug = createFilePath({ node, getNode, basePath: base })
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    })
    createNodeField({
      node,
      name: `template`,
      value: template,
    })
  }
};

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  return new Promise((resolve, reject) => {
    graphql(`
      {
        allMarkdownRemark {
          edges {
            node {
              fields {
                slug
                template
              }
            }
          }
        }
      }
    `).then(result => {
      result.data.allMarkdownRemark.edges.forEach(({ node }) => {
        createPage({
          path: node.fields.slug,
          component: path.resolve(node.fields.template),
          context: {
            // Data passed to context is available in page queries as GraphQL variables.
            slug: node.fields.slug,
          },
        })
      })
      resolve()
    })
  })
};
