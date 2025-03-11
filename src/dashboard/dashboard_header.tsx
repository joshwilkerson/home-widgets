import React from "react"
import { Button, StackView } from "@planningcenter/tapestry-react"
import { token } from "@planningcenter/tapestry"
import { useDashboard } from "../dashboard_context/use_dashboard"

export const DashboardHeader = () => {
  const { openModalForNewWidget } = useDashboard()
  return (
    <StackView
      axis="horizontal"
      alignment="start"
      distribution="end"
      width="100%"
      padding={2}
      css={{ borderBottom: `1px solid ${token("--t-fill-color-neutral-040")}` }}
    >
      <Button
        title="Add widget"
        theme="primary"
        variant="fill"
        iconLeft={{
          name: "general.plus",
          size: "md",
        }}
        size="md"
        onClick={openModalForNewWidget}
      />
    </StackView>
  )
}
