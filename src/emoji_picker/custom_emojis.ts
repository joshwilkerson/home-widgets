import { baseURL } from "../config"

const logosPlanningCenter = [
  {
    name: "Planning Center",
    file: "/planning-center.png",
    keywords: ["planning-center", "groups"],
  },
  {
    name: "Planning Center Calendar",
    file: "/calendar.png",
    keywords: ["planning-center", "calendar"],
  },
  {
    name: "Planning Center Check-Ins",
    file: "/check-ins.png",
    keywords: ["planning-center", "check-ins"],
  },
  {
    name: "Church Center",
    file: "/church-center.png",
    keywords: ["planning-center", "church-center"],
  },
  {
    name: "Planning Center Giving",
    file: "/giving.png",
    keywords: ["planning-center", "giving"],
  },
  {
    name: "Planning Center Groups",
    file: "/groups.png",
    keywords: ["planning-center", "groups"],
  },
  {
    name: "Planning Center Home",
    file: "/home.png",
    keywords: ["planning-center", "home"],
  },
  {
    name: "Planning Center People",
    file: "/people.png",
    keywords: ["planning-center", "people"],
  },
  {
    name: "Planning Center Publishing",
    file: "/publishing.png",
    keywords: ["planning-center", "publishing"],
  },
  {
    name: "Planning Center Registrations",
    file: "/registrations.png",
    keywords: ["planning-center", "registrations"],
  },
  {
    name: "Planning Center Services",
    file: "/services.png",
    keywords: ["planning-center", "services"],
  },
]

const logosWeb = [
  {
    name: "Apple Music",
    file: "/apple-music.png",
    keywords: ["apple", "music"],
  },

  {
    name: "Dropbox",
    file: "/dropbox.png",
    keywords: ["dropbox"],
  },
  {
    name: "Facebook",
    file: "/facebook.png",
    keywords: ["facebook"],
  },
  {
    name: "Google Drive",
    file: "/google-drive.png",
    keywords: ["google drive", "google"],
  },
  {
    name: "Instagram",
    file: "/instagram.png",
    keywords: ["instagram"],
  },
  {
    name: "Microsoft 365",
    file: "/microsoft-365.png",
    keywords: ["microsoft", "365"],
  },
  {
    name: "Slack",
    file: "/slack.png",
    keywords: ["slack"],
  },
  {
    name: "Spotify",
    file: "/spotify.png",
    keywords: ["spotify"],
  },
  {
    name: "X",
    file: "/x.png",
    keywords: ["x"],
  },
  {
    name: "YouTube",
    file: "/youtube.png",
    keywords: ["youtube"],
  },
  {
    name: "Zoom",
    file: "/zoom.png",
    keywords: ["zoom"],
  },
]

export const customEmojis = [
  {
    id: "web",
    name: "Web",
    emojis: logosWeb.map((logo) => ({
      id: logo.name.toLowerCase().replace(/\s+/g, "-"),
      name: logo.name,
      keywords: logo.keywords,
      skins: [
        {
          src: `${baseURL}${logo.file}`,
        },
      ],
    })),
  },
  {
    id: "planning-center",
    name: "Planning Center",
    emojis: logosPlanningCenter.map((logo) => ({
      id: logo.name.toLowerCase().replace(/\s+/g, "-"),
      name: logo.name,
      keywords: logo.keywords,
      skins: [
        {
          src: `${baseURL}${logo.file}`,
        },
      ],
    })),
  },
]
