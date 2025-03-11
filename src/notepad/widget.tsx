import React from "react"

export const NotepadWidget = ({ content }: { content: string }) => {
  return (
    <div
      dangerouslySetInnerHTML={{
        __html: content,
      }}
    />
  )
}
