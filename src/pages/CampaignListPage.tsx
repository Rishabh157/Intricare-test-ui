import { useState } from "react";
import { CloudDownload, ChevronDown } from "lucide-react";
import DashboardLayout from "../components/layout/DashboardLayout";
import CampaignTableRow from "../components/campaign/CampaignTableRow";
import WorkflowModal from "../components/campaign/WorkflowModal";
import Button from "../components/ui/Button";
import { campaigns } from "../data/campaigns";

export default function CampaignListPage() {
  const [modalOpen, setModalOpen] = useState(false);
  const [channelFilter, setChannelFilter] = useState("Channel");
  const [statusFilter, setStatusFilter] = useState("Status");

  return (
    <DashboardLayout breadcrumbs={[{ label: "Campaign" }]}>
      <div className="p-4 sm:p-6">
        <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <h1 className="text-xl font-semibold text-[#1e293b] sm:text-2xl">All Campaigns List</h1>
            <p className="mt-1 text-sm text-[#64748b]">
              A quick look at all of your outreach initiatives
            </p>
          </div>
          <Button onClick={() => setModalOpen(true)}>New Campaign</Button>
        </div>

        <div className="mb-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-wrap items-center gap-2">
            <FilterSelect value={channelFilter} onChange={setChannelFilter} options={["Channel", "LinkedIn", "Email"]} />
            <FilterSelect value={statusFilter} onChange={setStatusFilter} options={["Status", "Running", "Paused", "Draft"]} />
            <button type="button" className="text-sm text-[#64748b] hover:text-[#334155]">
              Clear All
            </button>
          </div>
          <button
            type="button"
            className="flex items-center gap-1.5 text-sm text-[#4f6ef7] hover:underline"
          >
            <CloudDownload className="h-4 w-4" />
            Export List
          </button>
        </div>

        <div className="overflow-hidden rounded-xl border border-[#e8ecf4] bg-white">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[1100px] text-left text-sm">
              <thead>
                <tr className="border-b border-[#e8ecf4] bg-[#f8fafc] text-xs font-medium uppercase tracking-wide text-[#94a3b8]">
                  <th className="px-4 py-3">
                    <input type="checkbox" className="rounded border-[#cbd5e1]" />
                  </th>
                  <th className="px-4 py-3">All Campaigns</th>
                  <th className="px-4 py-3">CRM</th>
                  <th className="px-4 py-3">Invites Sent</th>
                  <th className="px-4 py-3">Reply Rate</th>
                  <th className="px-4 py-3">Email Sent</th>
                  <th className="px-4 py-3">Sender</th>
                  <th className="px-4 py-3">Status</th>
                  <th className="px-4 py-3">Daily Limit</th>
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
      <ChevronDown className="pointer-events-none absolute right-2 top-1/2 h-4 w-4 -translate-y-1/2 text-[#94a3b8]" />
    </div>
  );
}
