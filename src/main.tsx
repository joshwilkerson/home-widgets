import React, { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import { ThemeProvider } from "@planningcenter/tapestry-react"
import theme from "./theme"

import "@planningcenter/tapestry/dist/tokens.css"
import "./main.css"
import { DashboardProvider } from "./dashboard_context/provider"
import { Dashboard } from "./dashboard/"

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <DashboardProvider>
      <ThemeProvider theme={theme}>
        <Dashboard />
      </ThemeProvider>
    </DashboardProvider>
  </StrictMode>
)
