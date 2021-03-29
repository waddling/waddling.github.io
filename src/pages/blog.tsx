/** @jsx jsx */
import { jsx, Heading } from "theme-ui"
import { Box, Link } from "@theme-ui/components"
import { Link as GatsbyLink } from "gatsby"
import { graphql, useStaticQuery } from 'gatsby'
import SEO from "../components/seo"
import Layout from "../components/layout"
// @ts-ignore
import Blog from "../content/blog"

const BlogPage = ({ data }) => {
  return (
    <Layout>
      <SEO title="Blog" />
      <Heading as="h1" variant="styles.h1">
        blog.
      </Heading>
      <section sx={{ mb: [5, 6, 7], p: { fontSize: [1, 2, 2], mt: 2 }, variant: `blog` }}>
        <Blog />
      </section>
      {data.allMdx.posts.map(({ id, excerpt, frontmatter, fields }) => (
        <Box mb={4} key={id}>
          <Link as={GatsbyLink} to={"/blog" + fields.slug} sx={{ fontSize: [1, 2, 3], color: `text` }}>
            {frontmatter.title}  
          </Link>
          <p sx={{ color: `secondary`, mt: 1, a: { color: `secondary` }, fontSize: [1, 1, 2] }}>
            <time>{frontmatter.date}</time>
          </p>
        </Box>
      ))}
    </Layout>
  )
}

export const query = graphql`
  query {
    allMdx(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { published: { eq: true } } }
    ) {
      posts: nodes { 
        id
        excerpt(pruneLength: 250)
        frontmatter {
          title
          date(formatString: "MMMM Do, YYYY")
        }
        fields {
          slug
        }
      }
    }
  }
`

export default BlogPage
