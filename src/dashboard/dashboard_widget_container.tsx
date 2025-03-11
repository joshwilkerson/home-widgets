import React from "react"
import { GridView } from "@planningcenter/tapestry-react"

export const DashboardWidgetContainer = ({
  children,
}: {
  children: React.ReactNode
}) => {
  return (
    <GridView
      gridAutoColumns="auto"
      gridTemplateColumns="1fr"
      marginBottom={4}
      marginHorizontal="auto"
      marginTop={2}
      maxWidth="100%"
      paddingHorizontal={3.5}
      spacing={3}
      tabIndex={-1}
      width="100%"
      mediaQueries={{
        sm: {
          paddingHorizontal: 4,
        },
        md: {
          gridTemplateColumns: "repeat(auto-fill, minmax(48%, 1fr))",
        },
        lg: {
          gridTemplateColumns: "repeat(auto-fill, minmax(32%, 1fr))",
          paddingHorizontal: 3,
        },
        xxl: {
          gridTemplateColumns: "repeat(auto-fill, minmax(22%, 1fr))",
        },
      }}
      css={{
        "@media (min-width: 2200px)": {
          gridTemplateColumns: "repeat(auto-fill, minmax(18%, 1fr))",
        },
      }}
    >
      {children}
    </GridView>
  )
}
