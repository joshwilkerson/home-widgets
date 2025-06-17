import React from "react"
import { StackView, Button, Text } from "@planningcenter/tapestry-react"
import { token } from "@planningcenter/tapestry"

export const WidgetFooter = () => {
  return (
    <StackView
      paddingHorizontal={2}
      paddingBottom={2}
      paddingTop={1.5}
      axis="horizontal"
      alignment="center"
      distribution="space-between"
      backgroundColor={token("--t-fill-color-neutral-100")}
    >
      <Button
        title="Refresh widget"
        icon={{ name: "general.refresh" }}
        variant="outline"
        size="sm"
        tooltip={{ title: "Refresh widget", placement: "top" }}
      />
      <Text size="11px" color={token("--t-text-color-default-secondary")}>
        Updated 3/17/2025, 3:31pm CDT
      </Text>
    </StackView>
  )
}
