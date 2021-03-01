import { graphql, useStaticQuery } from "gatsby"

type UseSiteConfigProps = {
  siteConfig: {
    navigation: {
      title: string
      slug: string
    }[]
    externalLinks: {
      name: string
      url: string
    }[]
  }
}

const useSiteConfig = () => {}

export default useSiteConfig
