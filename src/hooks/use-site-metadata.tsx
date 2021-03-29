import { graphql, useStaticQuery } from 'gatsby';

type UseSiteMetadataProps = {
  site: {
    siteMetadata: {
      siteTitle: string
      siteUrl: string
      siteDescription: string
      siteLanguage: string
      author: string
      name: string
      [key: string]: unknown
    }
  }
}

const useSiteMetadata = () => {
  const data = useStaticQuery<UseSiteMetadataProps>(
    graphql`
      query {
        site {
          siteMetadata{
            siteTitle
            siteUrl
            siteDescription
            siteLanguage
            author
            name
          }
        }
      }
    `
  )

  return data.site.siteMetadata
}

export default useSiteMetadata
