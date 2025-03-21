import React, { useState, useRef, useEffect } from "react"
import { Button, StackView, Input, Text } from "@planningcenter/tapestry-react"
import { LinkIconDropdown } from "./link_icon_dropdown"
import { token } from "@planningcenter/tapestry"
import { v4 as uuid } from "uuid"
import { defaultLinkIcon, type Link } from "../quick_links"
import { logosWeb, logosPlanningCenter } from "../emoji_picker/custom_emojis"
import { baseURL } from "../config"

interface LinkFormProps {
  initialLink?: Link
  onSave: (link: Link) => void
  onCancel: () => void
}

export const LinkForm = ({ initialLink, onSave, onCancel }: LinkFormProps) => {
  const [icon, setIcon] = useState<Link["icon"]>(
    initialLink?.icon || { name: "", type: "emoji" }
  )
  const [displayName, setDisplayName] = useState(initialLink?.displayName || "")
  const [url, setUrl] = useState(initialLink?.url || "")
  const [attemptedSubmit, setAttemptedSubmit] = useState(false)
  const [iconLoading, setIconLoading] = useState(false)
  const prevUrlRef = useRef<string>("")
  const generatedId = uuid()

  useEffect(() => {
    if (initialLink) {
      setIcon(initialLink.icon)
      setDisplayName(initialLink.displayName)
      setUrl(initialLink.url)
    }
  }, [initialLink])

  const canSave = displayName !== "" && url !== ""

  const urlPattern =
    /^(https?:\/\/)([\da-z.-]+)\.([a-z.]{2,6})([/\w .-]*)*\/?$/i
  const protocolPattern = /^(https?:\/\/)/

  const isValidUrl = urlPattern.test(url)
  const isFullUrl = protocolPattern.test(url)

  const attemptToMatchLogoFromUrl = (urlString: string) => {
    setIconLoading(true)
    const allLogos = [logosWeb, logosPlanningCenter].flatMap((group) => group)
    allLogos.forEach((logo) => {
      if (logo.domains.some((domain) => urlString.includes(domain.trim()))) {
        setIcon({
          name: logo.name,
          type: "image",
          file: `${baseURL}${logo.file}`,
        })
      }
    })
    setTimeout(() => {
      setIconLoading(false)
    }, 200)
  }

  return (
    <StackView
      axis="horizontal"
      alignment="start"
      backgroundColor={token("--t-fill-color-neutral-100")}
      css={{ border: "1px solid var(--t-fill-color-neutral-050)" }}
      padding={2}
      spacing={2}
      radius={4}
    >
      <StackView axis="vertical" spacing={0.5}>
        <Input.InputLabel size="14px" fontWeight={500}>
          Icon
        </Input.InputLabel>
        <LinkIconDropdown
          icon={icon}
          setIcon={setIcon}
          isLoading={iconLoading}
        />
      </StackView>
      <StackView axis="vertical" spacing={2} flex={1}>
        <StackView axis="vertical" spacing={0.5}>
          <Input.InputLabel size="14px" fontWeight={500}>
            URL
          </Input.InputLabel>
          <Input.InputBox
            state={attemptedSubmit && !isValidUrl ? "error" : undefined}
          >
            <Input.InputField
              placeholder="Link URL"
              autoFocus={true}
              value={url}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                setUrl(e.target.value)
                if (attemptedSubmit) {
                  setAttemptedSubmit(false)
                }
              }}
              onBlur={(e: React.FocusEvent<HTMLInputElement>) => {
                if (!icon.name && e.target.value !== prevUrlRef.current) {
                  prevUrlRef.current = e.target.value
                  attemptToMatchLogoFromUrl(e.target.value)
                }
              }}
            />
          </Input.InputBox>
          {attemptedSubmit && !isValidUrl && (
            <Text size={4} color={token("--t-text-color-status-error")}>
              {!isFullUrl
                ? "URL must start with https:// or http://"
                : "Must be a valid url"}
            </Text>
          )}
        </StackView>
        <StackView axis="vertical" spacing={0.5}>
          <Input.InputLabel size="14px" fontWeight={500}>
            Display Name
          </Input.InputLabel>
          <Input
            value={displayName}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setDisplayName(e.target.value)
            }
            placeholder="Link display name"
          />
        </StackView>
      </StackView>
      <StackView axis="horizontal" spacing={1} paddingTop={3}>
        <Button
          title="Cancel"
          tooltip={{ title: "Cancel", placement: "top" }}
          onClick={onCancel}
          icon={{ name: "general.x" }}
        />
        <Button
          title="Save"
          tooltip={
            canSave
              ? {
                  title: initialLink ? "Update link" : "Add link",
                  placement: "top",
                }
              : undefined
          }
          theme="primary"
          disabled={!canSave}
          icon={{ name: "general.check" }}
          onClick={() => {
            if (!isValidUrl) {
              setAttemptedSubmit(true)
              return
            }
            const newLink: Link = {
              id: initialLink?.id || generatedId,
              icon: icon.name
                ? (icon as Link["icon"])
                : {
                    name: defaultLinkIcon.name,
                    type: defaultLinkIcon.type as "emoji" | "image",
                  },
              displayName,
              url,
            }
            onSave(newLink)
          }}
        />
      </StackView>
    </StackView>
  )
}
