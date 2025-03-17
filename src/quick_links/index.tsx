export interface Link {
  id: string
  displayName: string
  url: string
  icon: {
    name: string
    type: "emoji" | "image"
    file?: string
  }
}

export interface QuickLinks {
  content: Link[]
  setContent: (newContent: Link[]) => void
}

export const defaultLinkIcon = { name: "🔗", type: "emoji" }
