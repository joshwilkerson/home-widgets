import React, { createContext, useContext, useState, ReactNode } from "react"

export interface Widget {
  id: string
  title: string
  type: "notepad" | "quick_links" | undefined
  content: ReactNode
}

interface DashboardContextType {
  widgets: Widget[]
  addWidget: (widget: Widget) => void
  updateWidget: (widget: Widget) => void
  removeWidget: (id: string) => void
}

const DashboardContext = createContext<DashboardContextType | undefined>(
  undefined
)

export const DashboardProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [widgets, setWidgets] = useState<Widget[]>([])

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

  return (
    <DashboardContext.Provider
      value={{ widgets, addWidget, updateWidget, removeWidget }}
    >
      {children}
    </DashboardContext.Provider>
  )
}

export const useDashboard = (): DashboardContextType => {
  const context = useContext(DashboardContext)
  if (!context) {
    throw new Error("useDashboard must be used within a DashboardProvider")
  }
  return context
}
