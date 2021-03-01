/** @jsx jsx */
import { jsx, Heading } from "theme-ui"
import Layout from "../components/layout"
// @ts-ignore
import Landing from "../content/landing"

const IndexPage = () => {
  return (
    <Layout>
      <Heading as="h1" variant="styles.h1">
        hello.
      </Heading>
      <section sx={{ mb: [5, 6, 7], p: { fontSize: [1, 2, 2], mt: 2 }, variant: `landing` }}>
        <Landing />
      </section>
    </Layout>
  )
}

export default IndexPage
