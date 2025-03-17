import React from "react"
import { Box } from "@planningcenter/tapestry-react"
import data from "@emoji-mart/data"
import Picker from "@emoji-mart/react"

export type Emoji = {
  id: string
  name: string
  native: string
  unified: string
  keywords: string[]
  shortcodes: string
}

export const EmojiPicker = ({ onChange }: { onChange: (e: Emoji) => void }) => {
  return (
    <Box
      css={{
        "em-emoji-picker": {
          height: "auto",
          minHeight: "38vh",
          maxHeight: "42vh",
          boxShadow: "none",
          margin: 0,
        },
      }}
    >
      <Picker
        data={data}
        onEmojiSelect={onChange}
        categories={[
          "people",
          "nature",
          "foods",
          "activity",
          "places",
          "objects",
          "symbols",
          "flags",
        ]}
        noCountryFlags={true}
        noResultsEmoji="thinking_face"
        theme="light"
        autoFocus={true}
      />
    </Box>
  )
}
