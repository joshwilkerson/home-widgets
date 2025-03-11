import React from "react"
import {
  Button,
  Heading,
  StackView,
  Logo,
} from "@planningcenter/tapestry-react"
import { token } from "@planningcenter/tapestry"

export const WidgetHeader = ({
  title,
  onEditClick,
}: {
  title: string
  onEditClick: () => void
}) => {
  return (
    <StackView
      axis="horizontal"
      alignment="center"
      distribution="space-between"
      padding={2}
    >
      <StackView axis="horizontal" spacing={1} alignment="center" flex={1}>
        <Logo name="home" size="lg" markOnly theme="color" />
        <Heading size={1} level={2} fontWeight={600} truncate>
          {title}
        </Heading>
      </StackView>
      <StackView axis="horizontal">
        <Button
          title="Settings"
          icon={{
            name: "general.cog",
            size: "16px",
            color: token("--t-fill-color-neutral-030"),
          }}
          variant="naked"
          onClick={onEditClick}
        />
        <Button
          title="Rearrange Widget"
          icon={{
            name: "general.dragHandle",
            size: "16px",
            color: token("--t-icon-color-default-dim"),
          }}
          variant="naked"
          disabled={true}
        />
      </StackView>
    </StackView>
  )
}
