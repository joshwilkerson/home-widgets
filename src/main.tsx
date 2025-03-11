import React, { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import { Dashboard } from "./dashboard"
import { ThemeProvider } from "@planningcenter/tapestry-react"
import theme from "./theme"

import "@planningcenter/tapestry/dist/tokens.css"
import "./main.css"
import { DashboardProvider } from "./dashboard_context/provider"

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <DashboardProvider>
      <ThemeProvider theme={theme}>
        <Dashboard />
      </ThemeProvider>
    </DashboardProvider>
  </StrictMode>
)
