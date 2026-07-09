import { useParams, Navigate } from "react-router-dom";
import DashboardLayout from "../components/layout/DashboardLayout";
import CampaignStepper from "../components/campaign/CampaignStepper";
import CampaignActionsCard from "../components/campaign/stats/CampaignActionsCard";
import CampaignOverviewCard from "../components/campaign/stats/CampaignOverviewCard";
import CampaignStatusCard from "../components/campaign/stats/CampaignStatusCard";
import RecentActivityCard from "../components/campaign/stats/RecentActivityCard";
import ReplyAnalysisCard from "../components/campaign/stats/ReplyAnalysisCard";
import ReplyPerformanceCard from "../components/campaign/stats/ReplyPerformanceCard";
import SearchInput from "../components/ui/SearchInput";
import Select from "../components/ui/Select";
import { campaignSteps } from "../data/campaignSteps";
import { getCampaignBySlug } from "../data/campaigns";
import { useState } from "react";

export default function CampaignStatsPage() {
  const { slug } = useParams<{ slug: string }>();
  const campaign = slug ? getCampaignBySlug(slug) : undefined;
  const [filter, setFilter] = useState("All");

  if (!campaign) {
    return <Navigate to="/campaign" replace />;
  }

  return (
    <DashboardLayout
      breadcrumbs={[
        { label: "Campaign", href: "/campaign" },
        { label: campaign.name },
      ]}
    >
      <div className="space-y-6 p-4 sm:p-6">
        <CampaignStepper steps={campaignSteps} activeStep="stats" />

        <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
          <Select
            value={filter}
            options={["All", "Last 7 days", "Last 30 days"]}
            onChange={setFilter}
            className="w-full sm:w-36"
          />
          <SearchInput placeholder="Search" className="sm:max-w-xs" />
        </div>

        <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
          <div className="space-y-4 lg:col-span-2">
            <CampaignStatusCard campaign={campaign} />
            <CampaignOverviewCard />
            <CampaignActionsCard />
          </div>

          <div className="space-y-4">
            <ReplyAnalysisCard />
            <ReplyPerformanceCard />
            <RecentActivityCard />
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
