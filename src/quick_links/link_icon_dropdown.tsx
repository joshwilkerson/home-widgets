import React, { useState, useEffect, useRef } from "react"
import {
  Button,
  StackView,
  GridView,
  Popover,
  Box,
} from "@planningcenter/tapestry-react"
import { token } from "@planningcenter/tapestry"
import { link_icons } from "./link_icons"

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

export const LinkIconDropdown = ({
  icon,
  setIcon,
}: {
  icon: string
  setIcon: (icon: string) => void
}) => {
  const [isOpen, setIsOpen] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)
  const popoverRef = useRef<HTMLDivElement>(null)

  useOutsideClick([containerRef, popoverRef], () => setIsOpen(false))

  return (
    <Box ref={containerRef}>
      <Popover
        anchorElement={
          <Button
            onClick={() => setIsOpen(!isOpen)}
            title={icon || link_icons[0]}
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
          <GridView
            columns="repeat(6, 24px)"
            rowSpacing={1}
            columnSpacing={1}
            padding={2}
            radius={4}
            css={{
              background: "#fff",
              boxShadow:
                "rgba(0, 0, 0, 0.2) 0px 4px 6px -1px, rgba(0, 0, 0, 0.16) 0px 2px 4px -1px;",
            }}
          >
            {link_icons.map((icon, index) => (
              <StackView
                as="button"
                cursor="pointer"
                key={index}
                radius={4}
                padding={0.5}
                height={4}
                width={4}
                alignment="center"
                distribution="center"
                css={{
                  fontSize: "18px",
                  "&:hover": {
                    backgroundColor: token("--t-fill-color-neutral-070"),
                  },
                }}
                onClick={(
                  e: React.MouseEvent<HTMLButtonElement, MouseEvent>
                ) => {
                  e.stopPropagation()
                  setIcon(icon)
                  setIsOpen(false)
                }}
              >
                {icon}
              </StackView>
            ))}
          </GridView>
        </Box>
      </Popover>
    </Box>
  )
}
