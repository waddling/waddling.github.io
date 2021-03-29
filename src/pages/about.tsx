/** @jsx jsx */
import { jsx, Heading } from "theme-ui"
import SEO from "../components/seo"
import Layout from "../components/layout"
// @ts-ignore
import About from "../content/about"

const AboutPage = () => {
  return (
    <Layout>
      <SEO title="About" />
      <Heading as="h1" variant="styles.h1">
        about.
      </Heading>
      <section sx={{ mb: [5, 6, 7], p: { fontSize: [1, 2, 2], mt: 2 }, variant: `about` }}>
        <About />
      </section>
    </Layout>
  )
}

export default AboutPage
