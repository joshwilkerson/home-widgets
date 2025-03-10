import React, { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import App from "./App"
import { ThemeProvider } from "@planningcenter/tapestry-react"
import theme from "./theme"

import "@planningcenter/tapestry/dist/tokens.css"
import "./main.css"

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </StrictMode>
)
