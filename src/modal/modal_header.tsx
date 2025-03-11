import React from "react"
import {
  Box,
  StackView,
  Text,
  Heading,
  Button,
} from "@planningcenter/tapestry-react"
import { token } from "@planningcenter/tapestry"
import type { ModalHeaderProps } from "../types"

const ModalTitle = ({ children }: { children: string }) => {
  return (
    <Heading
      level={1}
      margin={0}
      css={{
        color: token("--t-text-color-default-headline"),
        fontWeight: "400",
        lineHeight: "2rem",
        overflow: "hidden",
        textOverflow: "ellipsis",
        whiteSpace: "nowrap",
      }}
    >
      {children}
    </Heading>
  )
}

const ModalSubTitle = ({ children }: { children: string }) => {
  return (
    <Text
      fontSize={3}
      css={{
        color: token("--t-text-color-default-secondary"),
        fontWeight: 500,
        lineHeight: 1.5,
      }}
    >
      {children}
    </Text>
  )
}

export const ModalHeader = ({
  onClose,
  title,
  subTitle,
  children,
}: ModalHeaderProps) => (
  <Box paddingHorizontal={4} paddingTop={4}>
    <StackView
      axis="horizontal"
      alignment="center"
      distribution="space-between"
      spacing={1}
    >
      <ModalTitle>{title}</ModalTitle>
      {onClose && (
        <Button
          variant="naked"
          icon={{
            name: "general.x",
            size: "md",
            color: token("--t-icon-color-status-neutral-primary"),
          }}
          title="Close modal"
          marginRight={-1}
          onClick={onClose}
        />
      )}
    </StackView>
    <Box paddingTop={subTitle || children ? 0.5 : 0}>
      {subTitle && <ModalSubTitle>{subTitle}</ModalSubTitle>}
      {children}
    </Box>
  </Box>
)
