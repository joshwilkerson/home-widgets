import React from "react"
import { Box } from "@planningcenter/tapestry-react"

export const WidgetBody = ({ children }: { children: React.ReactNode }) => {
  return (
    <Box
      paddingHorizontal={2}
      paddingRight={4}
      height="340px"
      maxHeight="340px"
      overflow="auto"
      className="scrollable-widget"
    >
      {children}
    </Box>
  )
}
