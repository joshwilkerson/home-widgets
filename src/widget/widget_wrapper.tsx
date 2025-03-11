import React from "react"
import { StackView } from "@planningcenter/tapestry-react"

export const WidgetWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <StackView
      backgroundColor="#fff"
      radius={4}
      css={{
        boxShadow:
          "0 0 0 1px rgba(0, 0, 0, 0.04), 0 4px 3px 0 rgba(0, 0, 0, 0.04);",
      }}
    >
      {children}
    </StackView>
  )
}
