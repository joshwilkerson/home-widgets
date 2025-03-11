import React from "react"
import { useDashboard } from "../dashboard_context/use_dashboard"
import type { WidgetProps } from "../types"
import { QuickLinksWidget } from "../quick_links/widget"
import { NotepadWidget } from "../notepad/widget"
import { WidgetHeader } from "./widget_header"
import { WidgetWrapper } from "./widget_wrapper"
import { WidgetBody } from "./widget_body"

export const Widget = ({ content, id, title, type }: WidgetProps) => {
  const { openModalForEdit } = useDashboard()

  return (
    <WidgetWrapper>
      <WidgetHeader title={title} onEditClick={() => openModalForEdit(id)} />

      <WidgetBody>
        {type === "notepad" ? (
          <NotepadWidget content={content as string} />
        ) : (
          <QuickLinksWidget content={Array.isArray(content) ? content : []} />
        )}
      </WidgetBody>
    </WidgetWrapper>
  )
}
