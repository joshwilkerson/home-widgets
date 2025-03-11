import React from "react"
import { Button, GridView, StackView } from "@planningcenter/tapestry-react"
import { token } from "@planningcenter/tapestry"
import { Modal } from "./modal"
import { useDashboard } from "./dashboard_context/use_dashboard"
import { Widget } from "./widget/index"

const Header = () => {
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

const WidgetContainer = ({ children }: { children: React.ReactNode }) => {
  return (
    <GridView
      gridAutoColumns="auto"
      gridTemplateColumns="1fr"
      marginBottom={4}
      marginHorizontal="auto"
      marginTop={2}
      maxWidth="100%"
      paddingHorizontal={3.5}
      spacing={3}
      tabIndex={-1}
      width="100%"
      mediaQueries={{
        sm: {
          paddingHorizontal: 4,
        },
        md: {
          gridTemplateColumns: "repeat(auto-fill, minmax(48%, 1fr))",
        },
        lg: {
          gridTemplateColumns: "repeat(auto-fill, minmax(32%, 1fr))",
          paddingHorizontal: 3,
        },
        xxl: {
          gridTemplateColumns: "repeat(auto-fill, minmax(22%, 1fr))",
        },
      }}
      css={{
        "@media (min-width: 2200px)": {
          gridTemplateColumns: "repeat(auto-fill, minmax(18%, 1fr))",
        },
      }}
    >
      {children}
    </GridView>
  )
}

export const Dashboard = () => {
  const { widgets, isModalOpen, selectedWidget, closeModal } = useDashboard()

  React.useEffect(() => {
    console.dir(widgets)
  }, [widgets])

  return (
    <>
      {isModalOpen && (
        <Modal onClose={closeModal} widgetId={selectedWidget || ""} />
      )}

      <Header />
      <WidgetContainer>
        {widgets.map((widget) => (
          <Widget
            key={widget.id}
            id={widget.id}
            title={widget.title}
            content={widget.content}
            type={widget.type}
          />
        ))}
      </WidgetContainer>
    </>
  )
}
