import React, { useState, ReactNode } from "react"
import { DashboardContext } from "."
import { initialWidgetData } from "./initial_widget_data"
import type { Widget } from "../types"

export const DashboardProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [widgets, setWidgets] = useState<Widget[]>(
    initialWidgetData as Widget[]
  )
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false)
  const [selectedWidget, setSelectedWidget] = useState<string | null>(null)

  const addWidget = (widget: Widget) => {
    setWidgets((prevWidgets) => [...prevWidgets, widget])
  }

  const updateWidget = (widget: Widget) => {
    setWidgets((prevWidgets) =>
      prevWidgets.map((w) => (w.id === widget.id ? widget : w))
    )
  }

  const removeWidget = (id: string) => {
    setWidgets((prevWidgets) =>
      prevWidgets.filter((widget) => widget.id !== id)
    )
  }

  const openModalForNewWidget = () => {
    setSelectedWidget(null)
    setIsModalOpen(true)
  }

  const openModalForEdit = (widgetId: string) => {
    setSelectedWidget(widgetId)
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setSelectedWidget(null)
    setIsModalOpen(false)
  }

  return (
    <DashboardContext.Provider
      value={{
        widgets,
        addWidget,
        updateWidget,
        removeWidget,
        isModalOpen,
        selectedWidget,
        openModalForNewWidget,
        openModalForEdit,
        closeModal,
      }}
    >
      {children}
    </DashboardContext.Provider>
  )
}
