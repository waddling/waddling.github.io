/** @jsx jsx */
import { jsx } from "theme-ui"
import { Link } from "gatsby"
import Navigation from "./navigation"
import HeaderExternalLinks from "./header-external-links"

interface Props {
  siteTitle?: string
}

const Header = ({ siteTitle }: Props) => {
  return (
    <header sx={{ mb: [5, 6] }}>
      <Link
        to="/"
        aria-label={`${siteTitle} - Back to home`}
        sx={{ color: `heading`, textDecoration: `none` }}
      >
        <div sx={{ my: 0, fontFamily: `Quicksand`, fontWeight: `normal`, fontSize: [3, 4] }}>{siteTitle}</div>
      </Link>
      <div
        sx={{
          boxSizing: `border-box`,
          display: `flex`,
          variant: `dividers.bottom`,
          alignItems: `center`,
          justifyContent: `space-between`,
          mt: 3,
          color: `secondary`,
          a: { color: `secondary`, ":hover": { color: `heading` } },
          flexFlow: `wrap`,
        }}
      >
        <Navigation />
        <HeaderExternalLinks />
      </div>
    </header>
  )
}

export default Header
