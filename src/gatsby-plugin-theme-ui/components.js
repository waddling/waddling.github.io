/* eslint react/prop-types: 0 */
import React from "react"
import { Heading, Text } from "@theme-ui/components"

const components = {
  Heading: ({ children, ...props }) => <Heading {...props}>{children}</Heading>,
  Text: ({ children, ...props }) => <Text {...props}>{children}</Text>,
  wrapper: ({ children }) => <>{children}</>,
}

export default components
