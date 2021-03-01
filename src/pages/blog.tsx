/** @jsx jsx */
import { jsx, Heading } from "theme-ui"
import { PageProps } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Blog from "../content/blog"

const BlogPage = (props :PageProps) => {
  return (
    <Layout>
      <SEO title="Blog" />
      <Heading as="h1" variant="styles.h1">
        blog.
      </Heading>
      <section sx={{ mb: [5, 6, 7], p: { fontSize: [1, 2, 2], mt: 2 }, variant: `about` }}>
        <Blog />
      </section>
    </Layout>
  )
}

export default BlogPage