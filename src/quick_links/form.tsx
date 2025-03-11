import React, { useState } from "react"
import {
  DndContext,
  closestCenter,
  PointerSensor,
  useSensor,
  useSensors,
  DragEndEvent,
} from "@dnd-kit/core"
import {
  SortableContext,
  verticalListSortingStrategy,
  arrayMove,
} from "@dnd-kit/sortable"
import { LinkDisplay } from "./link_display"
import { LinkForm } from "./link_form"
import { SortableItem } from "./sortable_item"
import type { QuickLinksProps, Link } from "../types"
import {
  Button,
  Heading,
  StackView,
  Input,
} from "@planningcenter/tapestry-react"
import { BlankState } from "../blank_state"
import { token } from "@planningcenter/tapestry"

export const QuickLinksForm = ({ content, setContent }: QuickLinksProps) => {
  const [editingIndex, setEditingIndex] = useState<number | null>(null)
  const sensors = useSensors(
    useSensor(PointerSensor, { activationConstraint: { distance: 5 } })
  )

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event
    if (over && active.id !== over.id) {
      const oldIndex = content.findIndex((link) => link.id === active.id)
      const newIndex = content.findIndex((link) => link.id === over.id)
      setContent(arrayMove(content, oldIndex, newIndex))
    }
  }

  const handleAddNew = () => {
    setEditingIndex(-1)
  }

  const handleSaveLink = (link: Link) => {
    if (editingIndex === -1) {
      setContent([link, ...content])
    } else if (editingIndex !== null) {
      const updatedLinks = content.map((l, i) =>
        i === editingIndex ? link : l
      )
      setContent(updatedLinks)
    }
    setEditingIndex(null)
  }

  const handleCancel = () => {
    setEditingIndex(null)
  }

  const handleEdit = (index: number) => {
    setEditingIndex(index)
  }

  const handleRemove = (index: number) => {
    const updatedLinks = content.filter((_, i) => i !== index)
    setContent(updatedLinks)
  }

  return (
    <StackView axis="vertical" spacing={2}>
      <StackView
        axis="horizontal"
        spacing={2}
        alignment="end"
        distribution="space-between"
      >
        <Input.InputLabel size="14px" fontWeight={500}>
          Links
        </Input.InputLabel>
        <Button
          onClick={handleAddNew}
          disabled={editingIndex !== null}
          size="sm"
          theme="primary"
          variant="outline"
          iconLeft={{ name: "general.plus" }}
        >
          Add a link
        </Button>
      </StackView>
      <StackView
        backgroundColor={token("--t-fill-color-neutral-090")}
        padding={2}
        radius={4}
        spacing={1}
      >
        <DndContext
          sensors={sensors}
          collisionDetection={closestCenter}
          onDragEnd={handleDragEnd}
        >
          <SortableContext
            items={content.map((link) => link.id)}
            strategy={verticalListSortingStrategy}
          >
            {editingIndex === -1 && (
              <LinkForm onSave={handleSaveLink} onCancel={handleCancel} />
            )}
            {content.length > 0 &&
              content.map((link, index) => (
                <SortableItem key={link.id} link={link}>
                  {(dragHandleProps) =>
                    editingIndex === index ? (
                      <LinkForm
                        initialLink={link}
                        onSave={handleSaveLink}
                        onCancel={handleCancel}
                      />
                    ) : (
                      <LinkDisplay
                        link={link}
                        onEdit={() => handleEdit(index)}
                        onRemove={() => handleRemove(index)}
                        dragHandleProps={
                          dragHandleProps as React.ButtonHTMLAttributes<HTMLButtonElement>
                        }
                      />
                    )
                  }
                </SortableItem>
              ))}
            {content.length === 0 && editingIndex === null && (
              <BlankState
                icon={{ name: "general.link", size: "60px" }}
                height="180px"
              >
                <Heading
                  level={3}
                  fontWeight={400}
                  color={token("--t-text-color-default-secondary")}
                >
                  Add a link to get started
                </Heading>
              </BlankState>
            )}
          </SortableContext>
        </DndContext>
      </StackView>
    </StackView>
  )
}
