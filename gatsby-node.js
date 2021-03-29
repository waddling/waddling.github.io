const { createFilePath } = require(`gatsby-source-filesystem`)
const path = require(`path`)

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions
  if (node.internal.type === `Mdx`) {
    const value = createFilePath({ node, getNode })
    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions
  const postTemplate = path.resolve(
    'src/components/post.tsx'
  )

  return graphql(`
    {
      allMdx {
        posts: nodes {
          fields {
            slug
          }
          frontmatter {
            title
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      throw result.errors
    }

    const posts = result.data.allMdx.posts

    // create page for each mdx file
    posts.forEach(post => {
      createPage({
        path: "/blog" + post.fields.slug,
        component: postTemplate,
        context: {
          slug: post.fields.slug
        },
      })
    })
  })
}
