import React, { useState, useEffect } from "react"
import {
  Modal as TRModal,
  Box,
  StackView,
  Text,
  Heading,
  Button,
  Logo,
  Input,
  TextArea,
  Icon,
} from "@planningcenter/tapestry-react"
import { token, computedToken } from "@planningcenter/tapestry"
import { useDashboard } from "./dashboard_context"
import type { Widget } from "./dashboard_context"
import { v4 as uuid } from "uuid"
import Color from "color"

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

const Notepad = ({
  title,
  setTitle,
  content,
  setContent,
}: {
  title: string
  setTitle: (title: string) => void
  content: React.ReactNode
  setContent: (content: React.ReactNode) => void
}) => {
  return (
    <StackView axis="vertical" spacing={1}>
      <Input.InputLabel>Title</Input.InputLabel>
      <Input
        value={title}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setTitle(e.target.value)
        }
      />
      <Input.InputLabel>Content</Input.InputLabel>
      <TextArea
        value={content}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setContent(e.target.value)
        }
      />
    </StackView>
  )
}

const QuickLinks = ({
  title,
  setTitle,
  content,
  setContent,
}: {
  title: string
  setTitle: (title: string) => void
  content: React.ReactNode
  setContent: (content: React.ReactNode) => void
}) => {
  return (
    <StackView axis="vertical" spacing={1}>
      <Input.InputLabel>Title</Input.InputLabel>
      <Input
        value={title}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setTitle(e.target.value)
        }
      />
      <Input.InputLabel>Content</Input.InputLabel>
      <TextArea
        value={content}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setContent(e.target.value)
        }
      />
    </StackView>
  )
}

export const Modal = ({
  onClose,
  widgetId,
}: {
  onClose: () => void
  widgetId?: string
}) => {
  const { widgets, addWidget, updateWidget, removeWidget } = useDashboard()
  const [widgetType, setWidgetType] = useState<Widget["type"]>(undefined)
  const [widgetTitle, setWidgetTitle] = useState<string>("")
  const [widgetContent, setWidgetContent] = useState<React.ReactNode>("")
  const newWidgetId = uuid()

  useEffect(() => {
    if (widgetId) {
      const existingWidget = widgets.find((w) => w.id === widgetId)
      if (existingWidget) {
        setWidgetType(existingWidget.type)
        setWidgetTitle(existingWidget.title)
        setWidgetContent(existingWidget.content)
      }
    }
  }, [widgetId, widgets])

  const handleSave = () => {
    if (widgetId) {
      updateWidget({
        id: widgetId,
        title: widgetTitle,
        type: widgetType,
        content: widgetContent,
      })
    } else {
      const newWidget = {
        id: newWidgetId,
        title: widgetTitle,
        type: widgetType,
        content: widgetContent,
      }
      addWidget(newWidget)
    }
    onClose()
  }

  const WidgetBlankState = () => {
    const blobBackgroundColor = computedToken(
      "--t-fill-color-status-info-ghost"
    )
    const convertHSLtoEncodedHex = (hsl: string) =>
      encodeURIComponent(`"${Color(hsl).hex()}"`)

    return (
      <StackView padding={4} alignment="center">
        <Box css={{ position: "relative", width: "100%", height: "280px" }}>
          <Box
            css={{
              position: "absolute",
              width: "100%",
              height: "100%",
              backgroundSize: "contain",
              backgroundPosition: "center center",
              backgroundRepeat: "no-repeat",
              backgroundImage: `url('data:image/svg+xml;utf8,%3Csvg viewBox=%220 0 1000 1000%22 xmlns=%22http:%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cdefs%3E%3CclipPath id=%22a%22%3E%3Cpath fill=%22currentColor%22 d=%22M720 714.5q-220 214.5-468 0t0-452q248-237.5 468 0t0 452Z%22%2F%3E%3C%2FclipPath%3E%3C%2Fdefs%3E%3Cg clip-path=%22url(%23a)%22%3E%3Cpath fill=${convertHSLtoEncodedHex(
                blobBackgroundColor
              )} d=%22M720 714.5q-220 214.5-468 0t0-452q248-237.5 468 0t0 452Z%22%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E')`,
            }}
          >
            <Icon
              name="general.search"
              size="82px"
              color={token("--t-icon-color-status-info-primary")}
              css={{
                position: "absolute",
                top: "50%",
                left: "49%",
                transform: "translate(-50%, -50%)",
              }}
            />
          </Box>
        </Box>
        <Heading level={2} size="24px" fontWeight={400}>
          Add a new widget to your dashboard
        </Heading>
        <Text
          marginTop={1}
          size={3}
          color={token("--t-fill-color-neutral-020")}
          fontWeight={400}
        >
          Select a product above to see available widgets
        </Text>
      </StackView>
    )
  }

  const renderWidgetContent = () => {
    if (!widgetType) return <WidgetBlankState />
    return widgetType === "notepad" ? (
      <Notepad
        title={widgetTitle}
        setTitle={setWidgetTitle}
        content={widgetContent}
        setContent={setWidgetContent}
      />
    ) : (
      <QuickLinks
        title={widgetTitle}
        setTitle={setWidgetTitle}
        content={widgetContent}
        setContent={setWidgetContent}
      />
    )
  }

  return (
    <TRModal open={true} onRequestClose={onClose} maxWidth="800px">
      <ModalHeader onClose={onClose} title="Configure widget">
        <StackView
          axis="horizontal"
          alignment="center"
          spacing={0.75}
          marginTop={0.5}
        >
          {widgetId ? (
            <StackView axis="horizontal" spacing={0.75}>
              <Logo size="md" name="home" theme="color" markOnly />
              <Text size={3} color={token("--t-fill-color-neutral-020")}>
                {widgetType === "notepad" ? "Notepad" : "Quick Links"}
              </Text>
            </StackView>
          ) : (
            <StackView axis="horizontal" alignment="baseline" spacing={0.5}>
              <Text size={4} color={token("--t-fill-color-neutral-010")}>
                Add new:
              </Text>
              <Button
                title="Notepad"
                theme="default"
                variant="outline"
                size="sm"
                onClick={() => setWidgetType("notepad")}
              />
              <Button
                title="Quick Links"
                theme="default"
                variant="outline"
                size="sm"
                onClick={() => setWidgetType("quick_links")}
              />
            </StackView>
          )}
        </StackView>
      </ModalHeader>
      <ModalBody>{renderWidgetContent()}</ModalBody>
      <ModalFooter>
        {widgetId && (
          <Button
            title="Remove widget"
            theme="delete"
            variant="outline"
            marginRight="auto"
            onClick={() => {
              removeWidget(widgetId)
              onClose()
            }}
          />
        )}
        <Button
          title="Cancel"
          theme="default"
          variant="naked"
          onClick={onClose}
        />
        <Button
          title={`${widgetId ? "Update" : "Add"} widget`}
          theme="primary"
          onClick={handleSave}
          disabled={!widgetType}
        />
      </ModalFooter>
    </TRModal>
  )
}
