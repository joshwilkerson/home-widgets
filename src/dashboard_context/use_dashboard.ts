import { useContext } from "react"
import { DashboardContext } from "../dashboard_context"
import type { DashboardContextType } from "../types"

export const useDashboard = (): DashboardContextType => {
  const context = useContext(DashboardContext)
  if (!context) {
    throw new Error("useDashboard must be used within a DashboardProvider")
  }
  return context
}
