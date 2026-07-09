import { useState } from "react";
import { ChannelToggle } from "../CampaignBadges";
import { overviewMetrics } from "../../../data/campaigns";

export default function CampaignOverviewCard() {
  const [channel, setChannel] = useState<"linkedin" | "email">("linkedin");
  const maxValue = Math.max(...overviewMetrics.map((m) => m.value));

  return (
    <div className="rounded-xl border border-[#e8ecf4] bg-white p-5">
      <div className="mb-5 flex items-center justify-between">
        <h3 className="text-sm font-semibold text-[#1e293b]">Campaign Overview</h3>
        <ChannelToggle active={channel} onChange={setChannel} />
      </div>

      <div className="space-y-4">
        {overviewMetrics.map((metric) => (
          <div key={metric.label}>
            <div className="mb-1.5 flex items-center justify-between text-sm">
              <span className="text-[#64748b]">{metric.label}</span>
              <span className="font-semibold text-[#1e293b]">
                {metric.value.toLocaleString()}
                {metric.pct !== undefined && (
                  <span className="ml-2 text-xs font-normal text-[#94a3b8]">{metric.pct}%</span>
                )}
              </span>
            </div>
            <div className="h-2 overflow-hidden rounded-full bg-[#f1f5f9]">
              <div
                className="h-full rounded-full transition-all"
                style={{
                  width: `${(metric.value / maxValue) * 100}%`,
                  backgroundColor: metric.color,
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
