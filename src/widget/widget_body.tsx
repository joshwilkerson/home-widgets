import React from "react"
import { Box } from "@planningcenter/tapestry-react"

export const WidgetBody = ({ children }: { children: React.ReactNode }) => {
  return (
    <Box
      marginVertical={2}
      paddingHorizontal={2}
      height="340px"
      maxHeight="340px"
      overflow="auto"
    >
      {children}
    </Box>
  )
}
