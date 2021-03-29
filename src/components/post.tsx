/** @jsx jsx */
import { graphql, useStaticQuery } from "gatsby";
import { jsx, Heading } from "theme-ui";
import { MDXRenderer } from "gatsby-plugin-mdx";
import Layout from "./layout";
import SEO from "./seo";

const px = [`32px`, `16px`, `8px`, `4px`];
const shadow = px.map((v) => `rgba(0, 0, 0, 0.15) 0px ${v} ${v} 0px`);

const Post = ({ data }) => {
  const { frontmatter, slug, body } = data.mdx

  return (
    <Layout>
      <SEO title={frontmatter.title} pathname={slug} />
      <Heading as="h1" variant="styles.h1">
        {frontmatter.title}
      </Heading>
      <p
        sx={{
          color: `secondary`,
          mt: 3,
          a: { color: `secondary` },
          fontSize: [1, 1, 2],
        }}
      >
        <time>{frontmatter.date}</time>
      </p>
      <section
        sx={{
          my: 5,
          ".gatsby-resp-image-wrapper": {
            my: [4, 4, 5],
            boxShadow: shadow.join(`, `),
          },
          variant: `layout.content`,
        }}
      >
        <MDXRenderer>{body}</MDXRenderer>
      </section>
    </Layout>
  )
}

export const query = graphql`
  query PostsBySlug($slug: String!) {
    mdx(fields: { slug: { eq: $slug } }) {
      slug
      body
      frontmatter {
        title
        date(formatString: "MMMM Do, YYYY")
      }
    }
  }
`

export default Post
