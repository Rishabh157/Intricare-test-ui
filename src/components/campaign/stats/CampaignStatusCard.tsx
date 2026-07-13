import { Megaphone, Pause, Pencil, Zap } from "lucide-react"
import { ChannelBadge, StatusBadge } from "../CampaignBadges"
import type { Campaign } from "../../../types/campaign"
import BrandIcon from "../../../assets/table-icon.svg"
import PauseIcon from "../../../assets/pause-black.svg"
import EditIcon from "../../../assets/pencil-edit-black.svg"

interface CampaignStatusCardProps {
  campaign: Campaign
}

export default function CampaignStatusCard({
  campaign,
}: CampaignStatusCardProps) {
  const progress = 74
  const total = 200
  const pct = Math.round((progress / total) * 100)

  return (
    <div className="rounded-xl border border-[#EBE9F1] bg-white p-5">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#EEF2FF] text-[#3762EE]">
            <Megaphone className="h-5 w-5" />
          </div>
          <div>
            <div className="flex flex-col items-start gap-2">
              <h2 className="text-lg font-semibold text-[#444050]">
                {campaign.name}
              </h2>

              <div className="flex gap-x-2">
                {campaign.channels.map((ch) => (
                  <ChannelBadge key={ch} label={ch} />
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <StatusBadge status={campaign.status} variant="stats" />
          <button
            type="button"
            className="rounded-md border-[#EBE9F1] p-1.5 text-[#6E6B7B] hover:bg-[#f8fafc]"
            aria-label="Pause campaign"
          >
            <img src={PauseIcon} alt="btn" className="h-4 w-4" />
          </button>
          <button
            type="button"
            className="rounded-md border-[#EBE9F1] p-1.5 text-[#6E6B7B] hover:bg-[#f8fafc]"
            aria-label="Edit campaign"
          >
            <img src={EditIcon} alt="btn" className="h-4 w-4" />
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
        <span className="text-[#444050] font-semibold">
          Created: 8 Jan, 2026
        </span>
        <span className="inline-flex items-center gap-1.5 font-medium text-[#549A75] bg-[#E5F8EE] px-1 py-0.5 font-semibold">
          <img src={BrandIcon} alt="btn" className="h-3.5 w-3.5 fill-current" />
          CRM Connected
        </span>
        <span className="font-bold text-[#64748B]">
          {progress} / {total} prospects processed
        </span>
      </div>
    </div>
  )
}
