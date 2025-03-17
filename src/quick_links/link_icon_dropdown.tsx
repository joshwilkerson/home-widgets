import React, { useState, useEffect, useRef } from "react"
import { Button, StackView, Popover, Box } from "@planningcenter/tapestry-react"
import { token } from "@planningcenter/tapestry"
import { EmojiPicker } from "../emoji_picker"
import type { Emoji } from "../emoji_picker"
import { DisplayImage } from "../display_image"

interface LinkIconDropdownProps {
  icon: { name: string; type: "emoji" | "image"; file?: string }
  setIcon: (icon: {
    name: string
    type: "emoji" | "image"
    file?: string
  }) => void
}

const useOutsideClick = (
  refs: React.RefObject<HTMLElement | null>[],
  callback: () => void
) => {
  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      if (
        refs.every(
          (ref) => !ref.current || !ref.current.contains(event.target as Node)
        )
      ) {
        callback()
      }
    }
    document.addEventListener("click", handleClick, true)
    return () => document.removeEventListener("click", handleClick, true)
  }, [refs, callback])
}

export const LinkIconDropdown = ({ icon, setIcon }: LinkIconDropdownProps) => {
  const [isOpen, setIsOpen] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)
  const popoverRef = useRef<HTMLDivElement>(null)

  useOutsideClick([containerRef, popoverRef], () => setIsOpen(false))

  const handleEmojiSelect = (e: Emoji) => {
    console.dir(e)
    if (e.native !== undefined) {
      setIcon({ name: e.native, type: "emoji" })
    } else {
      setIcon({ name: e.name, type: "image", file: e.src })
    }
    setIsOpen(false)
  }

  React.useEffect(() => {
    console.dir(icon)
  }, [icon])

  return (
    <Box ref={containerRef}>
      <Popover
        anchorElement={
          <Button
            onClick={() => setIsOpen(!isOpen)}
            theme="default"
            variant="outline"
            iconRight={{
              name: isOpen ? "general.upCaret" : "general.downCaret",
            }}
            height={4}
          >
            {icon.type === "emoji" ? (
              <Box>{icon.name}</Box>
            ) : (
              <DisplayImage
                src={icon.file ? icon.file : ""}
                alt={icon.name}
                size="16px"
              />
            )}
          </Button>
        }
        open={isOpen}
        placement="bottom-start"
        zIndex={1000002}
      >
        <Box ref={popoverRef}>
          <StackView
            backgroundColor={token("--t-surface-color-card")}
            elevation={1}
          >
            <EmojiPicker onChange={handleEmojiSelect} />
          </StackView>
        </Box>
      </Popover>
    </Box>
  )
}
