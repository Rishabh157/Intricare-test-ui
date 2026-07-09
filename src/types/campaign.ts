export type CampaignStatus = "Running" | "Paused" | "Draft";

export interface Campaign {
  id: string;
  slug: string;
  name: string;
  channels: ("LinkedIn" | "Email")[];
  createdOn: string;
  crmSynced: boolean;
  crmSyncedAgo?: string;
  invitesSent: number;
  invitesAcceptedPct: number;
  replyRate: number;
  replyReceivedPct: number;
  emailSent: number;
  emailOpenedPct: number;
  senders: string[];
  status: CampaignStatus;
  dailyLimit: string;
}

export interface ActivityItem {
  id: string;
  time: string;
  text: string;
  color: string;
}

export interface OverviewMetric {
  label: string;
  value: number;
  pct?: number;
  color: string;
}
