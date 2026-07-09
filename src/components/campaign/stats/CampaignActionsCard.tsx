import { useState } from "react";
import { ChannelToggle } from "../CampaignBadges";
import { campaignActions } from "../../../data/campaigns";

export default function CampaignActionsCard() {
  const [channel, setChannel] = useState<"linkedin" | "email">("linkedin");

  return (
    <div className="rounded-xl border border-[#e8ecf4] bg-white p-5">
      <div className="mb-4 flex items-start justify-between">
        <div>
          <h3 className="text-sm font-semibold text-[#1e293b]">Campaign Actions</h3>
          <p className="text-xs text-[#94a3b8]">Execution stats & engagement signals</p>
        </div>
        <ChannelToggle active={channel} onChange={setChannel} />
      </div>

      <div className="grid grid-cols-2 gap-x-6 gap-y-3">
        <div className="space-y-3">
          {campaignActions.left.map((item) => (
            <div key={item.label} className="flex items-center justify-between text-sm">
              <span className="text-[#64748b]">{item.label}</span>
              <span className="font-semibold text-[#1e293b]">{item.value}</span>
            </div>
          ))}
        </div>
        <div className="space-y-3">
          {campaignActions.right.map((item) => (
            <div key={item.label} className="flex items-center justify-between text-sm">
              <span className="text-[#64748b]">{item.label}</span>
              <span className="font-semibold text-[#1e293b]">{item.value}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-5 flex items-center gap-2 border-t border-[#f1f5f9] pt-4">
        <span className="text-xs text-[#94a3b8]">Team:</span>
        <div className="flex -space-x-2">
          {["AS", "JD", "MK", "RP"].map((initials, i) => (
            <div
              key={initials}
              className="flex h-7 w-7 items-center justify-center rounded-full border-2 border-white bg-gradient-to-br from-[#c4b5fd] to-[#93c5fd] text-[10px] font-semibold text-white"
              style={{ zIndex: 4 - i }}
            >
              {initials}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
