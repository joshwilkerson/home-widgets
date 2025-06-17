import React from "react"
import { Box } from "@planningcenter/tapestry-react"

type ShadowSize = "sm" | "md" | "lg"

export interface ScrollWrapperProps {
  children: React.ReactNode
  scrollShadow?:
    | boolean
    | {
        size: ShadowSize
        opacity: number
      }
}

const DEFAULT_SHADOW_SIZE: ShadowSize = "sm"
const DEFAULT_SHADOW_OPACITY = 0.25

const sizeMap: Record<ShadowSize, number> = {
  sm: 30,
  md: 60,
  lg: 100,
}

export const ScrollWrapper = ({
  children,
  scrollShadow = { size: DEFAULT_SHADOW_SIZE, opacity: DEFAULT_SHADOW_OPACITY },
}: ScrollWrapperProps) => {
  const shadow =
    scrollShadow === true
      ? { size: DEFAULT_SHADOW_SIZE, opacity: DEFAULT_SHADOW_OPACITY }
      : scrollShadow || null

  const shadowSize = shadow ? sizeMap[shadow.size] : 0

  const scrollShadowStyles = shadow
    ? {
        background: `linear-gradient(#fff 33%, rgba(255,255,255,0)), 
                     linear-gradient(rgba(255,255,255, 0), #fff 66%) 0 100%, 
                     radial-gradient(farthest-side at 50% 0, rgba(34,34,34, ${shadow.opacity}), rgba(0,0,0,0)), 
                     radial-gradient(farthest-side at 50% 100%, rgba(34,34,34, ${shadow.opacity}), rgba(0,0,0,0)) 0 100%`,
        backgroundColor: "#ffffff",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "local, local, scroll, scroll",
        backgroundSize: `100% ${shadowSize}px, 100% ${shadowSize}px, 100% ${
          shadowSize / 3
        }px, 100% ${shadowSize / 3}px`,
      }
    : undefined

  return (
    <Box
      height="100%"
      overflow="scroll"
      paddingHorizontal={2}
      css={scrollShadowStyles}
    >
      {children}
    </Box>
  )
}
