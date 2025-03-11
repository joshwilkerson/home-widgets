import React from "react"
import { StackView, Input } from "@planningcenter/tapestry-react"
import { RichTextEditor } from "./rich_text_editor"

export const NotepadForm = ({
  content,
  setContent,
}: {
  content: string
  setContent: (content: string) => void
}) => {
  return (
    <StackView axis="vertical" spacing={0.5}>
      <Input.InputLabel size="14px" fontWeight={500}>
        Content
      </Input.InputLabel>
      <RichTextEditor
        value={typeof content === "string" ? content : ""}
        onChange={(html: string) => setContent(html)}
      />
    </StackView>
  )
}
