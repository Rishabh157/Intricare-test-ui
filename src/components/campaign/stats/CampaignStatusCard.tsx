import { Megaphone, Pause, Pencil, Zap } from "lucide-react";
import { ChannelBadge, StatusBadge } from "../CampaignBadges";
import type { Campaign } from "../../../types/campaign";

interface CampaignStatusCardProps {
  campaign: Campaign;
}

export default function CampaignStatusCard({ campaign }: CampaignStatusCardProps) {
  const progress = 74;
  const total = 200;

  return (
    <div className="rounded-xl border border-[#e8ecf4] bg-white p-5">
      <div className="flex items-start justify-between">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#f0f4ff] text-[#4f6ef7]">
            <Megaphone className="h-5 w-5" />
          </div>
          <div>
            <h2 className="text-lg font-semibold text-[#1e293b]">{campaign.name}</h2>
            <div className="mt-1 flex gap-1">
              {campaign.channels.map((ch) => (
                <ChannelBadge key={ch} label={ch} />
              ))}
            </div>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <StatusBadge status={campaign.status} />
          <button type="button" className="rounded-md p-1.5 text-[#94a3b8] hover:bg-[#f1f5f9]">
            <Pause className="h-4 w-4" />
          </button>
          <button type="button" className="rounded-md p-1.5 text-[#94a3b8] hover:bg-[#f1f5f9]">
            <Pencil className="h-4 w-4" />
          </button>
        </div>
      </div>

      <div className="mt-5">
        <div className="mb-2 flex items-center justify-between text-sm">
          <span className="text-[#64748b]">
            {progress} / {total} prospects processed
          </span>
          <span className="font-medium text-[#4f6ef7]">{Math.round((progress / total) * 100)}%</span>
        </div>
        <div className="h-2 overflow-hidden rounded-full bg-[#e8ecf4]">
          <div
            className="h-full rounded-full bg-gradient-to-r from-[#4f6ef7] to-[#6b7ff7]"
            style={{ width: `${(progress / total) * 100}%` }}
          />
        </div>
      </div>

      <div className="mt-4 flex flex-wrap items-center justify-between gap-2 text-xs text-[#94a3b8]">
        <span>Created: 8 Jan, 2026</span>
        <span className="flex items-center gap-1.5 text-[#ea580c]">
          <Zap className="h-3.5 w-3.5" />
          CRM Connected
        </span>
      </div>
    </div>
  );
}
