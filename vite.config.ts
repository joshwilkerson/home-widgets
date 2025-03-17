import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import path from "path"
import { fileURLToPath } from "url"

const __dirname = path.dirname(fileURLToPath(import.meta.url))

const baseURL =
  process.env.NODE_ENV === "production"
    ? "https://joshwilkerson.github.io/home-widgets/"
    : "./"

export default defineConfig({
  base: baseURL,
  plugins: [react()],
  resolve: {
    alias: {
      "@planningcenter/tapestry": path.resolve(
        __dirname,
        "node_modules/@planningcenter/tapestry"
      ),
    },
  },
  publicDir: "public",
})
