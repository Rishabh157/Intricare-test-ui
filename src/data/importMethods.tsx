import type { ReactNode } from "react"
import type { ImportMethodId } from "../types"
import LinkedInIcon from "../assets/linkedin-icon.svg"
import UploadIcon from "../assets/calendar-icon.svg"
import LeadIcon from "../assets/lead-icon.svg"

export interface ImportMethodConfig {
  id: ImportMethodId
  title: string
  description: string
  icon: ReactNode
  linkText?: string
}

export const importMethods: ImportMethodConfig[] = [
  {
    id: "linkedin",
    title: "LinkedIn Search",
    description: "(Basic, Sales Nav, Post, Group or Event URL)",
    icon: <img src={LinkedInIcon} className="h-5 w-5" />,
  },
  {
    id: "csv",
    title: "Upload CSV File",
    description: "Upload LinkedIn profiles via CSV.",
    linkText: "Download Sample",
    icon: <img src={UploadIcon} className="h-5 w-5" />,
  },
  {
    id: "lookalike",
    title: "Lookalike Audience",
    description: "Use Lead Finder to find audience.",
    icon: <img src={LeadIcon} className="h-5 w-5" />,
  },
  {
    id: "webhook",
    title: "Inbound Webhook",
    description: "Sync leads from zapier, n8n make in real time",
    icon: <img src={LinkedInIcon} className="h-5 w-5" />,
  },
]

export function getSecondPanelTitle(method: ImportMethodId): string {
  switch (method) {
    case "linkedin":
      return "Paste LinkedIn Search URL"
    case "csv":
      return "Upload CSV File"
    case "lookalike":
      return "Lookalike Audience"
    case "webhook":
      return "Inbound Webhook Setup"
    default:
      return "Configure Import"
  }
}
