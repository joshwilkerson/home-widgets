import { createContext } from "react"
import type { Widget } from "../widget"

export interface DashboardContext {
  widgets: Widget[]
  addWidget: (widget: Widget) => void
  updateWidget: (widget: Widget) => void
  removeWidget: (id: string) => void
  isModalOpen: boolean
  selectedWidget: string | null
  openModalForNewWidget: () => void
  openModalForEdit: (widgetId: string) => void
  closeModal: () => void
}

export const DashboardContext = createContext<DashboardContext | undefined>(
  undefined
)
