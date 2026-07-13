import { useState } from "react";
import { Info } from "lucide-react";
import { ChannelToggle } from "../CampaignBadges";
import { overviewMetrics } from "../../../data/campaigns";

export default function CampaignOverviewCard() {
  const [channel, setChannel] = useState<"linkedin" | "email">("linkedin");
  const maxValue = Math.max(...overviewMetrics.map((m) => m.value));

  return (
    <div className="rounded-xl border border-[#EBE9F1] bg-white p-5">
      <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
        <h3 className="text-sm font-semibold text-[#5E5873]">Campaign Overview</h3>
        <ChannelToggle active={channel} onChange={setChannel} />
      </div>

      <div className="flex items-end justify-between gap-2 sm:gap-4">
        {overviewMetrics.map((metric) => {
          const heightPct = Math.max(12, (metric.value / maxValue) * 100);

          return (
            <div
              key={metric.label}
              className="flex min-w-0 flex-1 flex-col items-center text-center"
            >
              <p className="text-sm font-semibold text-[#5E5873]">
                {metric.value.toLocaleString()}
              </p>
              {metric.pct !== undefined && (
                <p className="text-[11px] text-[#B9B9C3]">{metric.pct}%</p>
              )}

              <div className="mt-2 flex h-36 w-full items-end justify-center sm:h-44">
                <div
                  className="w-full max-w-[52px] rounded-t-md transition-all"
                  style={{
                    height: `${heightPct}%`,
                    backgroundColor: metric.color,
                  }}
                />
              </div>

              <div className="mt-3 flex items-center justify-center gap-1">
                <span className="text-[11px] leading-tight text-[#6E6B7B] sm:text-xs">
                  {metric.label}
                </span>
                <Info className="hidden h-3 w-3 shrink-0 text-[#B9B9C3] sm:block" />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
