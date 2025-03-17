export interface Link {
  id: string
  displayName: string
  url: string
  icon: {
    name: string
    type: "emoji" | "image"
  }
}

export interface QuickLinks {
  content: Link[]
  setContent: (newContent: Link[]) => void
}
