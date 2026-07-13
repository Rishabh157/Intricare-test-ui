import { useParams, Navigate } from "react-router-dom";
import { useState } from "react";
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
import { useCampaigns } from "../context/CampaignsContext";

export default function CampaignStatsPage() {
  const { slug } = useParams<{ slug: string }>();
  const { campaigns } = useCampaigns();
  const campaign =
    (slug ? campaigns.find((c) => c.slug === slug) : undefined) ??
    (slug ? getCampaignBySlug(slug) : undefined);
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

        <div className="grid grid-cols-1 gap-4 xl:grid-cols-3">
          {/* Main column */}
          <div className="space-y-4 xl:col-span-2">
            <CampaignStatusCard campaign={campaign} />
            <CampaignOverviewCard />

            <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
              <CampaignActionsCard />
              <ReplyPerformanceCard />
            </div>
          </div>

          {/* Right sidebar */}
          <div className="space-y-4">
            <ReplyAnalysisCard />
            <RecentActivityCard />
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
