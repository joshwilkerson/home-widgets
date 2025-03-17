import { baseURL } from "../config"

export const logosPlanningCenter = [
  {
    name: "Planning Center",
    file: "/planning-center.png",
    keywords: ["planning-center", "groups"],
    domains: ["planningcenteronline.com", "planningcenter.com"],
  },
  {
    name: "Planning Center Calendar",
    file: "/calendar.png",
    keywords: ["planning-center", "calendar"],
    domains: ["calendar.planningcenteronline.com"],
  },
  {
    name: "Planning Center Check-Ins",
    file: "/check-ins.png",
    keywords: ["planning-center", "check-ins"],
    domains: ["check-ins.planningcenteronline.com"],
  },
  {
    name: "Church Center",
    file: "/church-center.png",
    keywords: ["planning-center", "church-center"],
    domains: ["churchcenter.com"],
  },
  {
    name: "Planning Center Giving",
    file: "/giving.png",
    keywords: ["planning-center", "giving"],
    domains: ["giving.planningcenteronline.com"],
  },
  {
    name: "Planning Center Groups",
    file: "/groups.png",
    keywords: ["planning-center", "groups"],
    domains: ["groups.planningcenteronline.com"],
  },
  {
    name: "Planning Center Home",
    file: "/home.png",
    keywords: ["planning-center", "home"],
    domains: ["home.planningcenteronline.com"],
  },
  {
    name: "Planning Center People",
    file: "/people.png",
    keywords: ["planning-center", "people"],
    domains: ["people.planningcenteronline.com"],
  },
  {
    name: "Planning Center Publishing",
    file: "/publishing.png",
    keywords: ["planning-center", "publishing"],
    domains: ["publishing.planningcenteronline.com"],
  },
  {
    name: "Planning Center Registrations",
    file: "/registrations.png",
    keywords: ["planning-center", "registrations"],
    domains: ["registrations.planningcenteronline.com"],
  },
  {
    name: "Planning Center Services",
    file: "/services.png",
    keywords: ["planning-center", "services"],
    domains: ["services.planningcenteronline.com"],
  },
]

export const logosWeb = [
  {
    name: "Apple Music",
    file: "/apple-music.png",
    keywords: ["apple", "music"],
    domains: ["music.apple.com"],
  },
  {
    name: "Basecamp",
    file: "/basecamp.png",
    keywords: ["basecamp"],
    domains: ["basecamp.com"],
  },
  {
    name: "Dropbox",
    file: "/dropbox.png",
    keywords: ["dropbox"],
    domains: ["dropbox.com"],
  },
  {
    name: "Facebook",
    file: "/facebook.png",
    keywords: ["facebook"],
    domains: ["facebook.com"],
  },
  {
    name: "Google Drive",
    file: "/google-drive.png",
    keywords: ["google drive", "google"],
    domains: ["drive.google.com", "docs.google.com"],
  },
  {
    name: "Instagram",
    file: "/instagram.png",
    keywords: ["instagram"],
    domains: ["instagram.com"],
  },
  {
    name: "Microsoft 365",
    file: "/microsoft-365.png",
    keywords: ["microsoft", "365"],
    domains: ["office.com"],
  },
  {
    name: "Slack",
    file: "/slack.png",
    keywords: ["slack"],
    domains: ["slack.com"],
  },
  {
    name: "Spotify",
    file: "/spotify.png",
    keywords: ["spotify"],
    domains: ["spotify.com"],
  },
  {
    name: "X",
    file: "/x.png",
    keywords: ["x"],
    domains: ["x.com", "twitter.com "],
  },
  {
    name: "YouTube",
    file: "/youtube.png",
    keywords: ["youtube"],
    domains: ["youtube.com"],
  },
  {
    name: "Wordpress",
    file: "/wordpress.png",
    keywords: ["wordpress"],
    domains: ["wordpress.com", "wordpress.org"],
  },
  {
    name: "Zoom",
    file: "/zoom.png",
    keywords: ["zoom"],
    domains: ["zoom.us"],
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
