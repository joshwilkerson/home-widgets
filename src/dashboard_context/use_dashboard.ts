import { useContext } from "react"
import { DashboardContext } from "../dashboard_context"
import type { DashboardContext as DashboardContextType } from "../dashboard_context"

export const useDashboard = (): DashboardContextType => {
  const context = useContext(DashboardContext)
  if (!context) {
    throw new Error("useDashboard must be used within a DashboardProvider")
  }
  return context
}
