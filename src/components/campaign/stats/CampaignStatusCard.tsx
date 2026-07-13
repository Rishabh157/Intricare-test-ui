import { Megaphone, Pause, Pencil, Zap } from "lucide-react";
import { ChannelBadge, StatusBadge } from "../CampaignBadges";
import type { Campaign } from "../../../types/campaign";

interface CampaignStatusCardProps {
  campaign: Campaign;
}

export default function CampaignStatusCard({ campaign }: CampaignStatusCardProps) {
  const progress = 74;
  const total = 200;
  const pct = Math.round((progress / total) * 100);

  return (
    <div className="rounded-xl border border-[#EBE9F1] bg-white p-5">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#EEF2FF] text-[#3762EE]">
            <Megaphone className="h-5 w-5" />
          </div>
          <div>
            <div className="flex flex-wrap items-center gap-2">
              <h2 className="text-lg font-semibold text-[#5E5873]">{campaign.name}</h2>
              {campaign.channels.map((ch) => (
                <ChannelBadge key={ch} label={ch} />
              ))}
            </div>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <StatusBadge status={campaign.status} variant="stats" />
          <button
            type="button"
            className="rounded-md border border-[#EBE9F1] p-1.5 text-[#6E6B7B] hover:bg-[#f8fafc]"
            aria-label="Pause campaign"
          >
            <Pause className="h-4 w-4" />
          </button>
          <button
            type="button"
            className="rounded-md border border-[#EBE9F1] p-1.5 text-[#6E6B7B] hover:bg-[#f8fafc]"
            aria-label="Edit campaign"
          >
            <Pencil className="h-4 w-4" />
          </button>
        </div>
      </div>

      <div className="mt-5">
        <div className="h-2 overflow-hidden rounded-full bg-[#EBE9F1]">
          <div
            className="h-full rounded-full bg-[#3762EE]"
            style={{ width: `${pct}%` }}
          />
        </div>
      </div>

      <div className="mt-3 flex flex-wrap items-center justify-between gap-2 text-xs text-[#6E6B7B]">
        <span>Created: 8 Jan, 2026</span>
        <span className="inline-flex items-center gap-1.5 font-medium text-[#FF7A59]">
          <Zap className="h-3.5 w-3.5 fill-current" />
          CRM Connected
        </span>
        <span>
          {progress} / {total} prospects processed
        </span>
      </div>
    </div>
  );
}
