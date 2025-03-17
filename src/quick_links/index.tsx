export interface Link {
  id: string
  displayName: string
  url: string
  icon: {
    name: string
    type: "emoji" | "icon" | "image" | "logo"
  }
}

export interface QuickLinks {
  content: Link[]
  setContent: (newContent: Link[]) => void
}
