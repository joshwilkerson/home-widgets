import React from "react"
import { StackView, Text } from "@planningcenter/tapestry-react"
import { DisplayImage } from "../display_image"
import type { Link } from "../quick_links"
import { token } from "@planningcenter/tapestry"

export const QuickLinksWidget = ({ content }: { content: Link[] }) => {
  return (
    <StackView axis="vertical" spacing={1} alignment="start">
      {content.map((link, index) => (
        <StackView
          key={index}
          axis="horizontal"
          alignment="center"
          spacing={1}
          as="a"
          href={link.url}
          paddingVertical={0.75}
          paddingHorizontal={1}
          radius={4}
          target="_blank"
          rel="noopener noreferrer"
          css={{
            textDecoration: "none",
            "&:hover": {
              backgroundColor: token("--t-fill-color-neutral-080"),
            },
          }}
        >
          <StackView fontSize="20px">
            {link.icon.type === "emoji" ? (
              <Text inline>{link.icon.name}</Text>
            ) : (
              <DisplayImage
                src={link.icon.file ? link.icon.file : ""}
                size="20px"
                alt={link.icon.name}
              />
            )}
          </StackView>
          <Text
            color={token("--t-text-color-default-primary")}
            fontWeight={500}
          >
            {link.displayName}
          </Text>
        </StackView>
      ))}
    </StackView>
  )
}
