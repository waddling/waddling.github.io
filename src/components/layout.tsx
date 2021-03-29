import React from "react"
import { Global } from "@emotion/react"
import { Box, Container } from "theme-ui"
import useSiteMetadata from "../hooks/use-site-metadata"
import SEO from "./seo"
import Header from "./header"
import Footer from "./footer"
import "@fontsource/quicksand"
import "@fontsource/lato"

type LayoutProps = { children: React.ReactNode; className?: string }

const Layout = ({ children, className = `` }: LayoutProps) => {
  const { siteTitle } = useSiteMetadata()

  return (
    <React.Fragment>
      <Global
        styles={(theme: any) => ({
          "*": {
            boxSizing: `inherit`,
          },
          html: {
            WebkitTextSizeAdjust: `100%`,
          },
          img: {
            borderStyle: `none`,
          },
          pre: {
            fontFamily: `monospace`,
            fontSize: `1em`,
          },
          "[hidden]": {
            display: `none`,
          },
          "::selection": {
            backgroundColor: theme.colors.text,
            color: theme.colors.background,
          },
          a: {
            transition: `all 0.3s ease-in-out`,
            color: `text`,
          },
        })}
      />
      <SEO />
      <Container>
        <Header siteTitle={siteTitle || `Title`} />
          <Box className={className}>
            <main>{children}</main>  
          </Box>
        <Footer />
      </Container>
    </React.Fragment>
  )
}

export default Layout
