import { BarChart3, List, Settings, Users } from "lucide-react";
import type { CampaignStepId } from "../types";

export const campaignSteps = [
  { id: "audience" as CampaignStepId, label: "Define Target Audience", icon: <List className="h-4 w-4" /> },
  { id: "senders" as CampaignStepId, label: "Sender Profiles", icon: <Users className="h-4 w-4" /> },
  { id: "settings" as CampaignStepId, label: "Settings", icon: <Settings className="h-4 w-4" /> },
  { id: "stats" as CampaignStepId, label: "Stats", icon: <BarChart3 className="h-4 w-4" /> },
];

export const stepOrder: CampaignStepId[] = ["audience", "senders", "settings", "stats"];

export function getNextStep(current: CampaignStepId): CampaignStepId | null {
  const idx = stepOrder.indexOf(current);
  return idx < stepOrder.length - 1 ? stepOrder[idx + 1] : null;
}

export function getPrevStep(current: CampaignStepId): CampaignStepId | null {
  const idx = stepOrder.indexOf(current);
  return idx > 0 ? stepOrder[idx - 1] : null;
}
