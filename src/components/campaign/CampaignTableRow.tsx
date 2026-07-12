import { useEffect, useRef, useState } from "react"
import { Link } from "react-router-dom"
import { ChannelBadge, StatusBadge } from "./CampaignBadges"
import type { Campaign } from "../../types/campaign"
import TableAvatar from "../../assets/table-avatar.png"
import TableIcon from "../../assets/table-icon.svg"
import AnalyticsIcon from "../../assets/analytics-01.svg"
import CellsIcon from "../../assets/cells.svg"
import DuplicateIcon from "../../assets/duplicate.svg"
import MenuIcon from "../../assets/menu-icon.svg"

interface CampaignRowMenuProps {
  campaignSlug: string
  onClose: () => void
}``

function CampaignRowMenu({ campaignSlug, onClose }: CampaignRowMenuProps) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) onClose()
    }
    document.addEventListener("mousedown", handler)
    return () => document.removeEventListener("mousedown", handler)
  }, [onClose])

  return (
    <div
      ref={ref}
      className="absolute right-0 top-8 z-20 w-48 rounded-xl border border-[#e8ecf4] bg-white py-1.5 shadow-lg"
    >
      <Link
        to={`/campaign/${campaignSlug}`}
        className="flex items-center cursor-pointer gap-2.5 px-4 py-2.5 text-sm text-[#6D6B77] hover:bg-[#f8fafc]"
        onClick={onClose}
      >
        <img src={AnalyticsIcon} alt="btn" className="h-4 w-4 text-[#6E6B7B]" />
        View Analytics
      </Link>
      <button
        type="button"
        className="flex w-full items-center cursor-pointer gap-2.5 px-4 py-2.5 text-sm text-[#6D6B77] hover:bg-[#f8fafc]"
      >
        <img src={CellsIcon} className="h-4 w-4 text-[#6E6B7B]" />
        Edit Sequence
      </button>
      <button
        type="button"
        className="flex w-full items-center cursor-pointer gap-2.5 px-4 py-2.5 text-sm text-[#6D6B77] hover:bg-[#f8fafc]"
      >
        <img src={DuplicateIcon} className="h-4 w-4 text-[#6E6B7B]" />
        Duplicate
      </button>
    </div>
  )
}

interface CampaignTableRowProps {
  campaign: Campaign
}

export default function CampaignTableRow({ campaign }: CampaignTableRowProps) {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <tr className="border-b border-[#EBE9F1] hover:bg-[#fafbfc]">
      <td className="px-4 py-4 align-middle">
        <input
          type="checkbox"
          className="h-4 w-4 rounded border-[#D8D6DE] accent-[#3762EE]"
        />
      </td>

      <td className="px-4 py-4 align-middle">
        <Link
          to={`/campaign/${campaign.slug}`}
          className="group block min-w-[200px]"
        >
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-sm font-semibold text-[#6D6B77] group-hover:text-[#3762EE]">
              {campaign.name}
            </span>
            {campaign.channels.map((ch) => (
              <ChannelBadge key={ch} label={ch} />
            ))}
          </div>
          <p className="mt-1 text-xs text-[#6D6B77]">
            Created On: {campaign.createdOn}
          </p>
        </Link>
      </td>

      <td className="px-4 py-4 align-middle">
        {campaign.crmSynced ? (
          <div className="flex gap-2">
            <div>
              <div className="flex gap-x-1">
                <img src={TableIcon} alt="btn" className="h-4 w-4" />
                <p className="text-sm font-semibold text-[#6D6B77]">Synced</p>
              </div>
              <p className="text-xs text-[#6D6B77]">{campaign.crmSyncedAgo}</p>
            </div>
          </div>
        ) : (
          <button
            type="button"
            className="rounded-md border border-[#EBE9F1] bg-white px-3 py-1.5 text-xs font-medium text-[#6D6B77] hover:bg-[#f8fafc]"
          >
            Sync to CRM
          </button>
        )}
      </td>

      <td className="px-4 py-4 align-middle">
        <p className="text-base font-semibold text-[#5E5873]">
          {campaign.invitesSent}
        </p>
        <p className="text-xs text-[#6D6B77]">
          {campaign.invitesAcceptedPct}% Accepted
        </p>
      </td>

      <td className="px-4 py-4 align-middle">
        <p className="text-base font-semibold text-[#5E5873]">
          {campaign.replyRate}
        </p>
        <p className="text-xs text-[#6D6B77]">
          {campaign.replyReceivedPct}% Received
        </p>
      </td>

      <td className="px-4 py-4 align-middle">
        <p className="text-base font-semibold text-[#5E5873]">
          {campaign.emailSent}
        </p>
        <p className="text-xs text-[#6D6B77]">
          {campaign.emailOpenedPct}% Mail Opened
        </p>
      </td>

      <td className="px-4 py-4 align-middle">
        <div className="flex -space-x-2">
          {campaign.senders.slice(0, 2).map((s, i) => (
            <img
              key={`${s}-${i}`}
              src={TableAvatar}
              alt={s}
              className="h-8 w-8 rounded-full border-2 border-white object-cover"
              style={{ zIndex: campaign.senders.length - i }}
            />
          ))}
        </div>
      </td>

      <td className="px-4 py-4 align-middle">
        <StatusBadge status={campaign.status} />
      </td>

      <td className="px-4 py-4 align-middle">
        <span className="inline-flex rounded-md border border-[#EBE9F1] bg-white px-3 py-1.5 text-xs font-medium text-[#6D6B77]">
          {campaign.dailyLimit}
        </span>
      </td>

      <td className="relative px-2 py-2 align-middle">
        <button
          type="button"
          onClick={() => setMenuOpen((v) => !v)}
          className="rounded-md cursor-pointer text-[#B9B9C3] hover:bg-[#f1f5f9] hover:text-[#6E6B7B]"
        >
          <img src={MenuIcon} alt="btn" className="" />
        </button>
        {menuOpen && (
          <CampaignRowMenu
            campaignSlug={campaign.slug}
            onClose={() => setMenuOpen(false)}
          />
        )}
      </td>
    </tr>
  )
}
