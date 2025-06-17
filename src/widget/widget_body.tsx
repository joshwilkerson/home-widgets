import React from "react"
import { Box } from "@planningcenter/tapestry-react"
import { ScrollWrapper } from "../scroll_wrapper"

export const WidgetBody = ({
  children,
  isScrollable,
}: {
  children: React.ReactNode
  isScrollable?: boolean
}) => {
  return (
    <Box maxHeight="320px" paddingHorizontal={!isScrollable ? 2 : 0} flex={1}>
      {isScrollable ? <ScrollWrapper>{children}</ScrollWrapper> : children}
    </Box>
  )
}
