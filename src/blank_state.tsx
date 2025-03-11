import React from "react"
import { Box, StackView, Icon } from "@planningcenter/tapestry-react"
import { computedToken } from "@planningcenter/tapestry"
import Color from "color"

export const BlankState = ({
  height = "280px",
  icon = {},
  children,
}: {
  height?: string
  icon?: { name?: string; color?: string; size?: string }
  color?: { background?: string; icon: string }
  children: React.ReactNode
}) => {
  const defaultIcon = {
    name: "general.search",
    color: "var(--t-icon-color-status-info-primary)",
    size: "82px",
  }
  const mergedIcon = { ...defaultIcon, ...icon }

  const blobBackgroundColor = computedToken("--t-fill-color-status-info-ghost")
  const convertHSLtoEncodedHex = (hsl: string) =>
    encodeURIComponent(`"${Color(hsl).hex()}"`)

  return (
    <StackView padding={4} alignment="center">
      <Box css={{ position: "relative", width: "100%", height }}>
        <Box
          css={{
            position: "absolute",
            width: "100%",
            height: "100%",
            backgroundSize: "contain",
            backgroundPosition: "center center",
            backgroundRepeat: "no-repeat",
            backgroundImage: `url('data:image/svg+xml;utf8,%3Csvg viewBox=%220 0 1000 1000%22 xmlns=%22http:%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cdefs%3E%3CclipPath id=%22a%22%3E%3Cpath fill=%22currentColor%22 d=%22M720 714.5q-220 214.5-468 0t0-452q248-237.5 468 0t0 452Z%22%2F%3E%3C%2FclipPath%3E%3C%2Fdefs%3E%3Cg clip-path=%22url(%23a)%22%3E%3Cpath fill=${convertHSLtoEncodedHex(
              blobBackgroundColor
            )} d=%22M720 714.5q-220 214.5-468 0t0-452q248-237.5 468 0t0 452Z%22%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E')`,
          }}
        >
          <Icon
            size={mergedIcon.size}
            name={mergedIcon.name}
            color={mergedIcon.color}
            css={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
            }}
          />
        </Box>
      </Box>
      {children}
    </StackView>
  )
}
