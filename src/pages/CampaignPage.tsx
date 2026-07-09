import { useState } from "react";
import DashboardLayout from "../components/layout/DashboardLayout";
import CampaignEmptyState from "../components/campaign/CampaignEmptyState";
import WorkflowModal from "../components/campaign/WorkflowModal";
import SearchInput from "../components/ui/SearchInput";
import Select from "../components/ui/Select";

export default function CampaignPage() {
  const [filter, setFilter] = useState("All");
  const [modalOpen, setModalOpen] = useState(false);

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
