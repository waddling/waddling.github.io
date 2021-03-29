/** @jsx jsx */
import React from "react"
import { jsx, Link } from "theme-ui"
import { Link as GatsbyLink } from "gatsby"

const Navigation = () => {
  const navigation = [
    {
      title: "About",
      slug: "/about",
    },
    {
      title: "Blog",
      slug: "/blog",
    },
  ]
  
  return (
    <React.Fragment>
      {navigation && navigation.length > 0 && (
        <nav sx={{ "a:not(:last-of-type)": { mr: 3 }, fontWeight: `300`, fontSize: [1, `18px`], ".active": { color: `heading` } }}>
          {navigation.map((item) => (
            <Link key={item.slug} as={GatsbyLink} activeClassName="active" to={item.slug}>
              {item.title}
            </Link>
          ))}
        </nav>
      )}
    </React.Fragment>
  )
}

export default Navigation
