import type { CampaignStepId } from "../types";
import CheckListIcon from "../assets/check-list.svg";
import UserIcon from "../assets/user-search-01.svg";
import SettingIcon from "../assets/settings.svg";
import StatsIcon from "../assets/dashboard-browsing.svg";

export interface CampaignStepConfig {
  id: CampaignStepId;
  label: string;
  iconSrc: string;
}

export const campaignSteps: CampaignStepConfig[] = [
  {
    id: "audience",
    label: "Define Target Audience",
    iconSrc: CheckListIcon,
  },
  {
    id: "senders",
    label: "Sender Profiles",
    iconSrc: UserIcon,
  },
  {
    id: "settings",
    label: "Settings",
    iconSrc: SettingIcon,
  },
  {
    id: "stats",
    label: "Stats",
    iconSrc: StatsIcon,
  },
];

export const stepOrder: CampaignStepId[] = [
  "audience",
  "senders",
  "settings",
  "stats",
];

export function getNextStep(current: CampaignStepId): CampaignStepId | null {
  const idx = stepOrder.indexOf(current);
  return idx < stepOrder.length - 1 ? stepOrder[idx + 1] : null;
}

export function getPrevStep(current: CampaignStepId): CampaignStepId | null {
  const idx = stepOrder.indexOf(current);
  return idx > 0 ? stepOrder[idx - 1] : null;
}
