import React, { useState } from "react"
import { Button, StackView, Input, Text } from "@planningcenter/tapestry-react"
import { LinkIconDropdown } from "./link_icon_dropdown"
import { token } from "@planningcenter/tapestry"
import { v4 as uuid } from "uuid"
import type { Link } from "../quick_links"

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
  const generatedId = uuid()

  const urlPattern =
    /^(https?:\/\/)([\da-z.-]+)\.([a-z.]{2,6})([/\w .-]*)*\/?$/i
  const isValidUrl = urlPattern.test(url)

  const canSave = displayName !== "" && url !== ""

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
        <LinkIconDropdown icon={icon} setIcon={setIcon} />
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
            />
          </Input.InputBox>
          {attemptedSubmit && !isValidUrl && (
            <Text size={4} color={token("--t-text-color-status-error")}>
              Must be a valid url
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
        <Button title="Cancel" onClick={onCancel} />
        <Button
          title="Save"
          theme="primary"
          disabled={!canSave}
          onClick={() => {
            if (!isValidUrl) {
              setAttemptedSubmit(true)
              return
            }
            const newLink: Link = {
              id: initialLink?.id || generatedId,
              icon,
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
