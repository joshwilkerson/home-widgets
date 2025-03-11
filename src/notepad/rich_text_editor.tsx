import React from "react"
import { TrixEditor } from "react-trix"
import "trix/dist/trix"
import "trix/dist/trix.css"
import "./rich_text_editor.css"

import { Box } from "@planningcenter/tapestry-react"
import { token } from "@planningcenter/tapestry"

export const RichTextEditor = ({
  onChange,
  value,
}: {
  onChange: (html: string) => void
  value?: string
}) => {
  const mergeTags = React.useMemo(() => [], [])
  const handleChange = React.useCallback(
    (html: string) => {
      onChange(html)
    },
    [onChange]
  )

  return (
    <Box
      padding={2}
      css={{ border: `1px solid ${token("--t-fill-color-neutral-040")}` }}
      radius={4}
    >
      <TrixEditor
        placeholder="Click here to add your own notes..."
        value={value || ""}
        onChange={handleChange}
        mergeTags={mergeTags}
      />
    </Box>
  )
}
