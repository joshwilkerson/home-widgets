import { createContext } from "react"
import type { DashboardContextType } from "../types"

export const DashboardContext = createContext<DashboardContextType | undefined>(
  undefined
)
