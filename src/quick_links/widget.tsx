import React from "react"
import { StackView, Link as TRLink } from "@planningcenter/tapestry-react"
import type { Link } from "../quick_links"
import { token } from "@planningcenter/tapestry"

export const QuickLinksWidget = ({ content }: { content: Link[] }) => {
  return (
    <StackView axis="vertical" spacing={2}>
      {content.map((link, index) => (
        <StackView key={index} axis="horizontal" alignment="center" spacing={1}>
          <StackView fontSize="24px">{link.icon.name}</StackView>
          <TRLink
            to={link.url}
            color={token("--t-text-color-default-primary")}
            fontWeight={500}
            external
          >
            {link.displayName}
          </TRLink>
        </StackView>
      ))}
    </StackView>
  )
}
