import React from "react"
import { Button, StackView, Text } from "@planningcenter/tapestry-react"
import { token } from "@planningcenter/tapestry"
import type { LinkDisplayProps } from "../types"

export const LinkDisplay = ({
  link,
  onEdit,
  onRemove,
  dragHandleProps,
}: LinkDisplayProps) => {
  return (
    <StackView
      axis="horizontal"
      spacing={2}
      alignment="center"
      background={token("--t-fill-color-neutral-100")}
      padding={2}
      radius={4}
      css={{ border: "1px solid var(--t-fill-color-neutral-050)" }}
    >
      <StackView>
        <Button
          title="Rearrange Widget"
          icon={{ name: "general.dragHandle", size: "16px" }}
          variant="naked"
          css={{
            cursor: "grab",
            "&:hover": { background: "transparent" },
          }}
          {...dragHandleProps}
        />
      </StackView>
      <Text size="32px" inline>
        {link.icon}
      </Text>
      <StackView flex={1}>
        <Text
          inline
          fontWeight={600}
          color={token("--t-text-color-default-primary")}
        >
          {link.displayName}
        </Text>
        <Text
          inline
          fontWeight={400}
          color={token("--t-text-color-default-secondary")}
        >
          {link.url}
        </Text>
      </StackView>
      <StackView axis="horizontal" spacing={1}>
        <Button
          title="Edit link"
          icon={{ name: "general.pencil" }}
          onClick={onEdit}
          tooltip={{ title: "Edit link", placement: "top" }}
        />
        <Button
          title="Delete link"
          icon={{ name: "general.trash" }}
          onClick={onRemove}
          tooltip={{ title: "Remove link", placement: "top" }}
        />
      </StackView>
    </StackView>
  )
}
