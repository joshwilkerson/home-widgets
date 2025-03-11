import React from "react"
import { Modal } from "../modal"
import { useDashboard } from "../dashboard_context/use_dashboard"
import { Widget } from "../widget/index"
import { DashboardHeader } from "./dashboard_header"
import { DashboardWidgetContainer } from "./dashboard_widget_container"

export const Dashboard = () => {
  const { widgets, isModalOpen, selectedWidget, closeModal } = useDashboard()

  return (
    <>
      {isModalOpen && (
        <Modal onClose={closeModal} widgetId={selectedWidget || ""} />
      )}

      <DashboardHeader />
      <DashboardWidgetContainer>
        {widgets.map((widget) => (
          <Widget
            key={widget.id}
            id={widget.id}
            title={widget.title}
            content={widget.content}
            type={widget.type}
          />
        ))}
      </DashboardWidgetContainer>
    </>
  )
}
