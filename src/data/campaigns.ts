import type { ActivityItem, Campaign, OverviewMetric } from "../types/campaign";

export const campaigns: Campaign[] = [
  {
    id: "1",
    slug: "tech-founder",
    name: "Tech Founder",
    channels: ["LinkedIn", "Email"],
    createdOn: "21 Jan, 2026",
    crmSynced: true,
    crmSyncedAgo: "2h ago",
    invitesSent: 265,
    invitesAcceptedPct: 15,
    replyRate: 125,
    replyReceivedPct: 10,
    emailSent: 400,
    emailOpenedPct: 10,
    senders: ["AS", "JD", "MK"],
    status: "Running",
    dailyLimit: "40 invites/day",
  },
  {
    id: "2",
    slug: "saas-outreach",
    name: "SaaS Outreach",
    channels: ["LinkedIn"],
    createdOn: "18 Jan, 2026",
    crmSynced: false,
    invitesSent: 180,
    invitesAcceptedPct: 22,
    replyRate: 89,
    replyReceivedPct: 14,
    emailSent: 0,
    emailOpenedPct: 0,
    senders: ["JD"],
    status: "Running",
    dailyLimit: "30 invites/day",
  },
  {
    id: "3",
    slug: "enterprise-leads",
    name: "Enterprise Leads",
    channels: ["LinkedIn", "Email"],
    createdOn: "15 Jan, 2026",
    crmSynced: true,
    crmSyncedAgo: "1d ago",
    invitesSent: 420,
    invitesAcceptedPct: 18,
    replyRate: 210,
    replyReceivedPct: 12,
    emailSent: 650,
    emailOpenedPct: 8,
    senders: ["AS", "JD", "MK", "RP"],
    status: "Paused",
    dailyLimit: "50 invites/day",
  },
];

export const overviewMetrics: OverviewMetric[] = [
  { label: "New Leads", value: 1628, color: "#4f6ef7" },
  { label: "Invites Sent", value: 988, pct: 61, color: "#60a5fa" },
  { label: "Invites Accepted", value: 507, pct: 49, color: "#38bdf8" },
  { label: "Messages Sent", value: 460, pct: 91, color: "#4ade80" },
  { label: "Replies", value: 202, pct: 44, color: "#86efac" },
];

export const campaignActions = {
  left: [
    { label: "Remaining Leads", value: 110 },
    { label: "Follow-up message", value: 10 },
    { label: "InMails Sent", value: 20 },
    { label: "Emails", value: 89 },
  ],
  right: [
    { label: "Profile Viewed", value: 45 },
    { label: "Profile Followed", value: 140 },
    { label: "Skills Endorsed", value: 50 },
    { label: "Comments Added", value: 54 },
  ],
};

export const replyPerformance = [
  { label: "Follow-up", pct: 80, color: "#4f6ef7" },
  { label: "InMail", pct: 32, color: "#22c55e" },
  { label: "Email", pct: 11, color: "#ef4444" },
  { label: "Connection Message", pct: 79, color: "#6366f1" },
];

export const recentActivity: ActivityItem[] = [
  { id: "1", time: "2h ago", text: "Campaign started by Aman S.", color: "#4f6ef7" },
  { id: "2", time: "1h ago", text: "Reply received from Suresh K.", color: "#a855f7" },
  { id: "3", time: "45m ago", text: "Follow-up message sent by System", color: "#ef4444" },
  { id: "4", time: "30m ago", text: "Connection accepted by Suresh K. (Prospect)", color: "#94a3b8" },
  { id: "5", time: "15m ago", text: "Campaign paused by Aman S.", color: "#f59e0b" },
];

export function getCampaignBySlug(slug: string): Campaign | undefined {
  return campaigns.find((c) => c.slug === slug);
}
