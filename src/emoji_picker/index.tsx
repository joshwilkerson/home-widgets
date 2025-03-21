import React from "react"
import { Box } from "@planningcenter/tapestry-react"
import data from "@emoji-mart/data"
import Picker from "@emoji-mart/react"
import { customEmojis } from "./custom_emojis"
import { baseURL } from "../config"

export type Emoji = {
  id: string
  name: string
  native?: string
  keywords?: string[]
  src?: string
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
        searchPosition="static"
        previewPosition="none"
        noCountryFlags={true}
        noResultsEmoji="thinking_face"
        theme="light"
        autoFocus={true}
        custom={customEmojis}
        categoryIcons={{
          web: {
            src: `${baseURL}/custom-tab.svg`,
          },
        }}
        categories={[
          "planning-center",
          "web",
          "people",
          "nature",
          "foods",
          "activity",
          "places",
          "objects",
          "symbols",
          "flags",
        ]}
      />
    </Box>
  )
}
