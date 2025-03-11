import React, { useState } from "react"
import {
  Button,
  GridView,
  Heading,
  StackView,
  Logo,
  Box,
} from "@planningcenter/tapestry-react"
import { token } from "@planningcenter/tapestry"
import { Modal } from "./modal"
import { useDashboard } from "./dashboard_context" // import the dashboard context

const Wrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <StackView
      marginHorizontal="auto"
      padding={2}
      maxWidth="100%"
      axis="vertical"
      alignment="start"
      distribution="start"
    >
      {children}
    </StackView>
  )
}

const Header = ({ onOpenModal }: { onOpenModal: () => void }) => {
  return (
    <StackView
      axis="horizontal"
      alignment="start"
      distribution="end"
      width="100%"
      paddingVertical={2}
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
        onClick={onOpenModal}
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

const Widget = ({
  children,
  id,
  onEdit,
  title,
}: {
  children: React.ReactNode
  id: string
  onEdit: (id: string) => void
  title: string
}) => {
  const WidgetHeader = () => {
    return (
      <StackView
        axis="horizontal"
        alignment="center"
        distribution="space-between"
        padding={2}
      >
        <StackView axis="horizontal" spacing={1} alignment="center" flex={1}>
          <Logo name="home" size="lg" markOnly theme="color" />
          <Heading size={1} level={2} fontWeight={600} truncate>
            {title}
          </Heading>
        </StackView>
        <StackView axis="horizontal">
          <Button
            title="Settings"
            icon={{
              name: "general.cog",
              size: "16px",
              color: token("--t-fill-color-neutral-030"),
            }}
            variant="naked"
            onClick={() => onEdit(id)}
          />
          <Button
            title="Rearrange Widget"
            icon={{
              name: "general.dragHandle",
              size: "16px",
              color: token("--t-icon-color-default-dim"),
            }}
            variant="naked"
            disabled={true}
          />
        </StackView>
      </StackView>
    )
  }

  return (
    <StackView
      backgroundColor="#fff"
      radius={4}
      boxShadow="0 0 0 1px rgba(0, 0, 0, 0.04), 0 4px 3px 0 rgba(0, 0, 0, 0.04);"
    >
      <WidgetHeader />
      <Box padding={2}>{children}</Box>
    </StackView>
  )
}

function App() {
  const { widgets } = useDashboard()
  const [isModalOpen, setIsModalOpen] = useState(true)
  const [selectedWidget, setSelectedWidget] = useState<string | null>(null)

  const openModalForNewWidget = () => {
    setSelectedWidget(null)
    setIsModalOpen(true)
  }

  const openModalForEdit = (widgetId: string) => {
    setSelectedWidget(String(widgetId))
    setIsModalOpen(true)
  }

  return (
    <>
      {isModalOpen && (
        <Modal
          onClose={() => {
            setIsModalOpen(false)
            setSelectedWidget(null)
          }}
          widgetId={selectedWidget || ""}
        />
      )}
      <Wrapper>
        <Header onOpenModal={openModalForNewWidget} />
        <WidgetContainer>
          {widgets.map((widget) => (
            <Widget
              key={widget.id}
              id={widget.id}
              onEdit={openModalForEdit}
              title={widget.title}
            >
              {widget.content}
            </Widget>
          ))}
        </WidgetContainer>
      </Wrapper>
    </>
  )
}

export default App
