import React from "react"
import { Helmet } from "react-helmet"
import useSiteMetadata from "../hooks/use-site-metadata"

interface SEOProps {
  description?: string
  pathname?: string
  lang?: string
  meta?: Array<any>
  title?: string
  children?: React.ReactNode
}

const SEO = ({ 
  description = ``, 
  pathname = ``,
  lang = `en`, 
  meta, 
  title = ``,
  children = null,
}: SEOProps) => {
  const site = useSiteMetadata()

  const {
    siteTitle: defaultTitle,
    siteUrl,
    siteDescription: metaDescription,
    siteLanguage,
    author,
    name,
  } = site

  const seo = {
    title: title || defaultTitle,
    description: description || metaDescription,
    url: `${siteUrl}${pathname || ``}`,
    lang: lang || siteLanguage,
  }

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={defaultTitle ? `%s | ${defaultTitle}` : undefined}
      meta={[
        {
          name: `description`,
          content: seo.description,
        },
        {
          property: `og:title`,
          content: seo.title,
        },
        {
          property: `og:url`,
          content: seo.url,
        },
        {
          property: `og:description`,
          content: seo.description,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: author || ``,
        },
        {
          name: `twitter:title`,
          content: seo.title,
        },
        {
          name: `twitter:description`,
          content: seo.description,
        },
      ].concat(meta || [])}
    >
      {children}
    </Helmet>
  )
}

export default SEO
