import React, { useState, useEffect, useRef } from "react"
import { Button, StackView, Popover, Box } from "@planningcenter/tapestry-react"
import { token } from "@planningcenter/tapestry"
import { EmojiPicker } from "../emoji_picker"
import type { Emoji } from "../emoji_picker"

interface LinkIconDropdownProps {
  icon: { name: string; type: "emoji" | "image" }
  setIcon: (icon: { name: string; type: "emoji" | "image" }) => void
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
    if (e.native !== undefined) {
      setIcon({ name: e.native, type: "emoji" })
    } else {
      setIcon({ name: e.id, type: "image" })
    }
    setIsOpen(false)
  }

  return (
    <Box ref={containerRef}>
      <Popover
        anchorElement={
          <Button
            onClick={() => setIsOpen(!isOpen)}
            title={icon.name || "🔗"}
            theme="default"
            variant="outline"
            iconRight={{
              name: isOpen ? "general.upCaret" : "general.downCaret",
            }}
          />
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
