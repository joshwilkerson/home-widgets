import React from "react"
import { useDashboard } from "../dashboard_context/use_dashboard"
import type { Link } from "../quick_links"
import { QuickLinksWidget } from "../quick_links/widget"
import { NotepadWidget } from "../notepad/widget"
import { WidgetHeader } from "./widget_header"
import { WidgetWrapper } from "./widget_wrapper"
import { WidgetBody } from "./widget_body"
import { WidgetFooter } from "./widget_footer"

export interface Widget {
  content: string | Link[]
  id: string
  title: string
  type: "notepad" | "quick_links" | undefined
}

export const Widget = ({ content, id, title, type }: Widget) => {
  const { openModalForEdit } = useDashboard()

  return (
    <WidgetWrapper>
      <WidgetHeader title={title} onEditClick={() => openModalForEdit(id)} />

      <WidgetBody isScrollable={true}>
        {type === "notepad" ? (
          <NotepadWidget content={content as string} />
        ) : (
          <QuickLinksWidget content={Array.isArray(content) ? content : []} />
        )}
      </WidgetBody>
      <WidgetFooter />
    </WidgetWrapper>
  )
}
