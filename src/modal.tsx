import React from "react"
import {
  Modal as TRModal,
  Box,
  StackView,
  Text,
  Heading,
  Button,
  Logo,
} from "@planningcenter/tapestry-react"
import { token } from "@planningcenter/tapestry"

type BaseModalHeaderProps = {
  onClose?: () => void
  title: string
}

type ModalHeaderProps =
  | (BaseModalHeaderProps & { subTitle: string; children?: never })
  | (BaseModalHeaderProps & {
      subTitle?: never
      children: React.ReactElement | React.ReactElement[]
    })

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

export const ModalSubTitle = ({ children }: { children: string }) => {
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

const ModalHeader = ({
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

const ModalBody = ({ children }: React.HTMLAttributes<HTMLDivElement>) => (
  <Box
    backgroundColor={token("--t-surface-color-card")}
    padding={4}
    data-modal-body
  >
    {children}
  </Box>
)

const ModalFooter = ({ children }: React.HTMLAttributes<HTMLDivElement>) => (
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

export const Modal = ({
  onClose,
  widget,
}: {
  onClose: () => void
  widget: string
}) => {
  return (
    <TRModal open={true} onRequestClose={() => onClose} maxWidth="800px">
      <ModalHeader onClose={onClose} title="Configure widget">
        <StackView
          axis="horizontal"
          alignment="center"
          spacing={0.75}
          marginTop={0.5}
        >
          <Logo size="md" name="home" theme="color" markOnly />
          <Text color={token("--t-fill-color-neutral-020")}>{widget}</Text>
        </StackView>
      </ModalHeader>
      <ModalBody>
        <StackView axis="vertical" spacing={4}>
          <Text>Modal body</Text>
        </StackView>
      </ModalBody>
      <ModalFooter>
        <Button
          title="Remove widget"
          theme="delete"
          variant="outline"
          marginRight="auto"
        />
        <Button
          title="Cancel"
          theme="default"
          variant="naked"
          onClick={onClose}
        />
        <Button title="Save" theme="primary" />
      </ModalFooter>
    </TRModal>
  )
}
