import React from "react"
import { StackView, Link } from "@planningcenter/tapestry-react"
import type { Link as LinkProps } from "../types"
import { token } from "@planningcenter/tapestry"

export const QuickLinksWidget = ({ content }: { content: LinkProps[] }) => {
  return (
    <StackView axis="vertical" spacing={2}>
      {content.map((link, index) => (
        <StackView key={index} axis="horizontal" alignment="center" spacing={1}>
          <StackView fontSize="24px">{link.icon}</StackView>
          <Link
            to={link.url}
            color={token("--t-text-color-default-primary")}
            fontWeight={500}
            external
          >
            {link.displayName}
          </Link>
        </StackView>
      ))}
    </StackView>
  )
}
