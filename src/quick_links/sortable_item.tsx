import React from "react"
import { useSortable } from "@dnd-kit/sortable"
import { CSS } from "@dnd-kit/utilities"
import type { SortableItemProps } from "../types"

export const SortableItem = ({ link, children }: SortableItemProps) => {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id: link.id })

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    marginBottom: "8px",
    ...(isDragging ? { zIndex: 10000 } : {}),
  }

  return (
    <div ref={setNodeRef} style={style} {...attributes}>
      {children(listeners as React.HTMLAttributes<HTMLDivElement>)}
    </div>
  )
}
