import { useState } from "react";
import { ChevronDown } from "lucide-react";
import DashboardLayout from "../components/layout/DashboardLayout";
import CampaignEmptyState from "../components/campaign/CampaignEmptyState";
import CampaignTableRow from "../components/campaign/CampaignTableRow";
import WorkflowModal from "../components/campaign/WorkflowModal";
import Button from "../components/ui/Button";
import SearchInput from "../components/ui/SearchInput";
import Select from "../components/ui/Select";
import { useCampaigns } from "../context/CampaignsContext";
import ExportIcon from "../assets/export.svg";

export default function CampaignPage() {
  const { campaigns, hasCampaigns } = useCampaigns();
  const [modalOpen, setModalOpen] = useState(false);
  const [filter, setFilter] = useState("All");
  const [channelFilter, setChannelFilter] = useState("Channel");
  const [statusFilter, setStatusFilter] = useState("Status");

  // First screen — blank empty state
  if (!hasCampaigns) {
    return (
      <DashboardLayout breadcrumbs={[{ label: "Campaign" }]}>
        <div className="p-6">
          <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Select
              value={filter}
              options={["All", "Active", "Draft", "Completed"]}
              onChange={setFilter}
              className="w-full sm:w-36"
            />
            <SearchInput placeholder="Search" className="sm:max-w-xs" />
          </div>

          <CampaignEmptyState onNewCampaign={() => setModalOpen(true)} />
        </div>

        <WorkflowModal open={modalOpen} onClose={() => setModalOpen(false)} />
      </DashboardLayout>
    );
  }

  // Same screen again — with campaigns table data
  return (
    <DashboardLayout breadcrumbs={[{ label: "Campaign" }]}>
      <div className="p-4 sm:p-6">
        <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <h1 className="text-lg font-semibold text-[#444050] sm:text-2xl">All Campaigns List</h1>
            <p className="mt-1 text-sm text-[#6E6B7B]">
              A quick look at all of your outreach initiatives
            </p>
          </div>
          <Button onClick={() => setModalOpen(true)}>New Campaign</Button>
        </div>

        <div className="mb-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-wrap items-center gap-2">
            <FilterSelect
              value={channelFilter}
              onChange={setChannelFilter}
              options={["Channel", "LinkedIn", "Email"]}
            />
            <FilterSelect
              value={statusFilter}
              onChange={setStatusFilter}
              options={["Status", "Running", "Paused", "Draft"]}
            />
            <button type="button" className="hover:text-[#334155] cursor-pointer rounded-lg border border-[#e2e8f0] bg-white  py-2 pl-3 pr-8 text-sm text-[#334155]">
              Clear All
            </button>
          </div>
          <button
            type="button"
            className="flex items-center cursor-pointer gap-1.5 text-sm text-[#64748B] font-medium hover:underline"
          >
            <img src={ExportIcon} alt="btn" className="h-4 w-4" />
            Export List
          </button>
        </div>

        <div className="overflow-hidden rounded-xl border border-[#e8ecf4] bg-white">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[1100px] text-left text-sm">
              <thead>
                <tr className="border-b border-[#EBE9F1] bg-[#F3F2F7] text-xs font-medium uppercase tracking-wide text-[#6E6B7B]">
                  <th className="px-4 py-3">
                    <input type="checkbox" className="h-4 w-4 rounded border-[#cbd5e1] accent-[#3762EE]" />
                  </th>
                  <th className="px-4 py-3 text-left">All Campaigns</th>
                  <th className="px-4 py-3 text-left">CRM</th>
                  <th className="px-4 py-3 text-left">Invites Sent</th>
                  <th className="px-4 py-3 text-left">Reply Rate</th>
                  <th className="px-4 py-3 text-left">Email Sent</th>
                  <th className="px-4 py-3 text-left">Sender</th>
                  <th className="px-4 py-3 text-left">Status</th>
                  <th className="px-4 py-3 text-left">Daily Limit</th>
                  <th className="px-4 py-3" />
                </tr>
              </thead>
              <tbody>
                {campaigns.map((campaign) => (
                  <CampaignTableRow key={campaign.id} campaign={campaign} />
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <WorkflowModal open={modalOpen} onClose={() => setModalOpen(false)} />
    </DashboardLayout>
  );
}

function FilterSelect({
  value,
  onChange,
  options,
}: {
  value: string;
  onChange: (v: string) => void;
  options: string[];
}) {
  return (
    <div className="relative">
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="appearance-none rounded-lg border border-[#e2e8f0] bg-white py-2 pl-3 pr-8 text-sm text-[#334155]"
      >
        {options.map((opt) => (
          <option key={opt} value={opt}>
            {opt}
          </option>
        ))}
      </select>
      <ChevronDown className="pointer-events-none absolute right-2 top-1/2 h-4 w-4 -translate-y-1/2 text-[#5E5873]" />
    </div>
  );
}
