import React from "react"
import { Box, StackView } from "@planningcenter/tapestry-react"
import { token } from "@planningcenter/tapestry"

export const ModalFooter = ({ children }: { children: React.ReactNode }) => (
  <Box
    paddingHorizontal={4}
    paddingTop={3}
    backgroundColor={token("--t-surface-color-card")}
    css={{
      borderTop: `solid 1px ${token("--t-border-color-default-base")}`,
    }}
  >
    <StackView
      axis="horizontal"
      alignment="center"
      distribution="end"
      spacing={2}
    >
      {children}
    </StackView>
  </Box>
)
