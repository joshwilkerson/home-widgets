import React, { useState, useEffect } from "react"
import {
  Modal as TRModal,
  Box,
  StackView,
  Text,
  Heading,
  Button,
  Logo,
  Spinner,
  Input,
} from "@planningcenter/tapestry-react"
import { token } from "@planningcenter/tapestry"
import { useDashboard } from "../dashboard_context/use_dashboard"
import type { WidgetProps } from "../types"
import { v4 as uuid } from "uuid"
import { BlankState } from "../blank_state"
import { ModalHeader } from "./modal_header"
import { ModalFooter } from "./modal_footer"
import { NotepadForm } from "../notepad/form"
import { QuickLinksForm } from "../quick_links/form"

const ModalBody = ({ children }: React.HTMLAttributes<HTMLDivElement>) => (
  <Box
    backgroundColor={token("--t-surface-color-card")}
    padding={4}
    data-modal-body
  >
    {children}
  </Box>
)

export const Modal = ({
  onClose,
  widgetId,
}: {
  onClose: () => void
  widgetId?: string
}) => {
  const { widgets, addWidget, updateWidget, removeWidget } = useDashboard()
  const [widgetType, setWidgetType] = useState<WidgetProps["type"]>(undefined)
  const [widgetTitle, setWidgetTitle] = useState<string>("")
  const [widgetContent, setWidgetContent] = useState<WidgetProps["content"]>("")
  const [isLoading, setIsLoading] = useState<boolean>(widgetId ? true : false)
  const newWidgetId = uuid()

  useEffect(() => {
    if (widgetId) {
      const existingWidget = widgets.find((w) => w.id === widgetId)
      setTimeout(() => {
        if (existingWidget) {
          setWidgetType(existingWidget.type)
          setWidgetTitle(existingWidget.title)
          setWidgetContent(existingWidget.content)
        }
        setIsLoading(false)
      }, 300)
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

  const renderWidgetContent = () => {
    if (isLoading)
      return (
        <StackView paddingVertical={10}>
          <Spinner size="xl" thickness={3} />
        </StackView>
      )
    if (!widgetType)
      return (
        <BlankState>
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
        </BlankState>
      )
    return widgetType === "notepad" ? (
      <NotepadForm
        content={widgetContent as string}
        setContent={setWidgetContent}
      />
    ) : (
      <QuickLinksForm
        content={Array.isArray(widgetContent) ? widgetContent : []}
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
                onClick={() => {
                  setWidgetTitle("")
                  setWidgetType("notepad")
                }}
              />
              <Button
                title="Quick Links"
                theme="default"
                variant="outline"
                size="sm"
                onClick={() => {
                  setWidgetTitle("")
                  setWidgetType("quick_links")
                }}
              />
            </StackView>
          )}
        </StackView>
      </ModalHeader>
      <ModalBody>
        <StackView>
          {widgetType && (
            <StackView axis="vertical" spacing={0.5} marginBottom={3}>
              <Input.InputLabel size="14px" fontWeight={500}>
                Title
              </Input.InputLabel>
              <Input
                autoFocus={true}
                value={widgetTitle}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setWidgetTitle(e.target.value)
                }
              />
            </StackView>
          )}
          {renderWidgetContent()}
        </StackView>
      </ModalBody>
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
          disabled={!widgetType || isLoading || !widgetTitle || !widgetContent}
        />
      </ModalFooter>
    </TRModal>
  )
}
