/** @jsx jsx */
import React from "react"
import { jsx, Link as ThemeUILink } from "theme-ui"
import { IconContext } from "react-icons"
import { FaTwitter, FaGithub, FaYoutube, FaLinkedin, FaQuestion, FaTwitch } from "react-icons/fa"

const HeaderExternalLinks = () => {
  const externalLinks  = [
    {
      name: "Github",
      url: "https://github.com/waddling",
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/yeonjunkim99/",
    },
    {
      name: "Twitch",
      url: "https://www.twitch.tv/waddlingwaddler",
    },
    { 
      name: "Twitter",
      url: "https://twitter.com/theYeonAndOnly",
    },
    {
      name: "YouTube",
      url: "https://www.youtube.com/channel/UCnEr9C1WqFSy0n94YxSJ5Vg",
    },
  ]

  const linkIcon = (name: string) => {
    switch (name) {
      case "Github":
        return <FaGithub />
      case "LinkedIn":
        return <FaLinkedin />
      case "Twitch":
        return <FaTwitch />
      case "Twitter":
        return <FaTwitter />
      case "YouTube":
        return <FaYoutube />
      default:
        return <FaQuestion />
    }
  }

  return (
    <React.Fragment>
      {externalLinks && externalLinks.length > 0 && (
        <div sx={{ "a:not(:first-of-type)": { ml: 3 }, fontSize: [1, `18px`] }}>
          {externalLinks.map((link) => (
            <ThemeUILink key={link.url} href={link.url}>
              <IconContext.Provider value={{ style: { verticalAlign: 'bottom'} }}>
                {linkIcon(link.name)}
              </IconContext.Provider>
            </ThemeUILink>
          ))}
        </div>
      )}
    </React.Fragment>
  )
}

export default HeaderExternalLinks
