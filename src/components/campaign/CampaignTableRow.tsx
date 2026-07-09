import { useEffect, useRef, useState } from "react";
import { Copy, ExternalLink, MoreVertical, Pencil } from "lucide-react";
import { Link } from "react-router-dom";
import { ChannelBadge, StatusBadge } from "./CampaignBadges";
import type { Campaign } from "../../types/campaign";

interface CampaignRowMenuProps {
  campaignSlug: string;
  onClose: () => void;
}

function CampaignRowMenu({ campaignSlug, onClose }: CampaignRowMenuProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) onClose();
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [onClose]);

  return (
    <div
      ref={ref}
      className="absolute right-0 top-8 z-20 w-44 rounded-xl border border-[#e8ecf4] bg-white py-1 shadow-lg"
    >
      <Link
        to={`/campaign/${campaignSlug}`}
        className="flex items-center gap-2 px-4 py-2.5 text-sm text-[#334155] hover:bg-[#f8fafc]"
        onClick={onClose}
      >
        <ExternalLink className="h-4 w-4 text-[#64748b]" />
        View Analytics
      </Link>
      <button
        type="button"
        className="flex w-full items-center gap-2 px-4 py-2.5 text-sm text-[#334155] hover:bg-[#f8fafc]"
      >
        <Pencil className="h-4 w-4 text-[#64748b]" />
        Edit Sequence
      </button>
      <button
        type="button"
        className="flex w-full items-center gap-2 px-4 py-2.5 text-sm text-[#334155] hover:bg-[#f8fafc]"
      >
        <Copy className="h-4 w-4 text-[#64748b]" />
        Duplicate
      </button>
    </div>
  );
}

interface CampaignTableRowProps {
  campaign: Campaign;
}

export default function CampaignTableRow({ campaign }: CampaignTableRowProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <tr className="border-b border-[#f1f5f9] hover:bg-[#fafbfc]">
      <td className="px-4 py-4">
        <input type="checkbox" className="rounded border-[#cbd5e1]" />
      </td>
      <td className="px-4 py-4">
        <Link to={`/campaign/${campaign.slug}`} className="group">
          <p className="font-semibold text-[#1e293b] group-hover:text-[#4f6ef7]">
            {campaign.name}
          </p>
          <div className="mt-1 flex flex-wrap gap-1">
            {campaign.channels.map((ch) => (
              <ChannelBadge key={ch} label={ch} />
            ))}
          </div>
          <p className="mt-1 text-xs text-[#94a3b8]">Created On: {campaign.createdOn}</p>
        </Link>
      </td>
      <td className="px-4 py-4">
        {campaign.crmSynced ? (
          <div className="flex items-center gap-2">
            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#ffedd5] text-xs text-[#ea580c]">
              C
            </span>
            <div>
              <p className="text-xs font-medium text-[#334155]">Synced</p>
              <p className="text-xs text-[#94a3b8]">{campaign.crmSyncedAgo}</p>
            </div>
          </div>
        ) : (
          <button
            type="button"
            className="rounded-lg border border-[#e2e8f0] px-3 py-1.5 text-xs font-medium text-[#475569] hover:bg-[#f8fafc]"
          >
            Sync to CRM
          </button>
        )}
      </td>
      <td className="px-4 py-4">
        <p className="text-lg font-semibold text-[#1e293b]">{campaign.invitesSent}</p>
        <p className="text-xs text-[#94a3b8]">{campaign.invitesAcceptedPct}% Accepted</p>
      </td>
      <td className="px-4 py-4">
        <p className="text-lg font-semibold text-[#1e293b]">{campaign.replyRate}</p>
        <p className="text-xs text-[#94a3b8]">{campaign.replyReceivedPct}% Received</p>
      </td>
      <td className="px-4 py-4">
        <p className="text-lg font-semibold text-[#1e293b]">{campaign.emailSent}</p>
        <p className="text-xs text-[#94a3b8]">{campaign.emailOpenedPct}% Mail Opened</p>
      </td>
      <td className="px-4 py-4">
        <div className="flex -space-x-2">
          {campaign.senders.map((s, i) => (
            <div
              key={s}
              className="flex h-7 w-7 items-center justify-center rounded-full border-2 border-white bg-gradient-to-br from-[#c4b5fd] to-[#93c5fd] text-[10px] font-semibold text-white"
              style={{ zIndex: campaign.senders.length - i }}
            >
              {s}
            </div>
          ))}
        </div>
      </td>
      <td className="px-4 py-4">
        <StatusBadge status={campaign.status} />
      </td>
      <td className="px-4 py-4">
        <span className="rounded-full bg-[#f1f5f9] px-3 py-1 text-xs text-[#64748b]">
          {campaign.dailyLimit}
        </span>
      </td>
      <td className="relative px-4 py-4">
        <button
          type="button"
          onClick={() => setMenuOpen((v) => !v)}
          className="rounded-md p-1.5 text-[#94a3b8] hover:bg-[#f1f5f9] hover:text-[#64748b]"
        >
          <MoreVertical className="h-4 w-4" />
        </button>
        {menuOpen && (
          <CampaignRowMenu campaignSlug={campaign.slug} onClose={() => setMenuOpen(false)} />
        )}
      </td>
    </tr>
  );
}
