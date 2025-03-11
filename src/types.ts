import React from "react"
import { Widget as WidgetComponent } from "./widget"

export type Widget = React.ComponentProps<typeof WidgetComponent>

export type DashboardContextType = {
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

type BaseModalHeaderProps = {
  onClose?: () => void
  title: string
}

export type ModalHeaderProps =
  | (BaseModalHeaderProps & { subTitle: string; children?: never })
  | (BaseModalHeaderProps & {
      subTitle?: never
      children: React.ReactElement | React.ReactElement[]
    })

export interface Link {
  id: string
  displayName: string
  url: string
  icon: string
}

export interface QuickLinksProps {
  content: Link[]
  setContent: (newContent: Link[]) => void
}

export interface LinkDisplayProps {
  link: Link
  onEdit: () => void
  onRemove: () => void
  dragHandleProps?: React.ButtonHTMLAttributes<HTMLButtonElement>
}

export interface LinkFormProps {
  initialLink?: Link
  onSave: (link: Link) => void
  onCancel: () => void
}

export interface SortableItemProps {
  link: Link
  children: (
    dragHandleProps: React.HTMLAttributes<HTMLDivElement>
  ) => React.ReactNode
}

export interface WidgetProps {
  content: string | Link[]
  id: string
  title: string
  type: "notepad" | "quick_links" | undefined
}
