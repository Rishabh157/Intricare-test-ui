import { useState } from "react";
import { Info } from "lucide-react";
import { ChannelToggle } from "../CampaignBadges";
import { overviewMetrics } from "../../../data/campaigns";

const INFO_LABELS = new Set(["Invites Sent", "Invites Accepted", "Replies"]);

export default function CampaignOverviewCard() {
  const [channel, setChannel] = useState<"linkedin" | "email">("linkedin");
  const maxValue = Math.max(...overviewMetrics.map((m) => m.value));

  return (
    <div className="overflow-hidden rounded-xl border border-[#EBE9F1] bg-white">
      <div className="flex flex-wrap items-center justify-between gap-3 px-5 py-4">
        <h3 className="text-base font-semibold text-[#5E5873]">
          Campaign Overview
        </h3>
        <ChannelToggle active={channel} onChange={setChannel} />
      </div>

      <div className="flex flex-col border-t border-[#EBE9F1] lg:flex-row">
        {overviewMetrics.map((metric, index) => {
          const heightPct = Math.max(22, (metric.value / maxValue) * 100);
          const isHighPct = metric.pct !== undefined && metric.pct >= 50;
          const isLast = index === overviewMetrics.length - 1;

          return (
            <div
              key={metric.label}
              className={`flex min-h-[240px] flex-1 flex-col first:pl-4 pr-4 pt-4 sm:min-h-[280px] ${
                !isLast
                  ? "border-b border-[#EBE9F1] lg:border-b-0 lg:border-r"
                  : ""
              }`}
            >
              <div className="flex items-center gap-1.5 pl-2">
                <span className="text-xs font-semibold text-[#5E5873]">
                  {metric.label}
                </span>
                {INFO_LABELS.has(metric.label) && (
                  <Info
                    className="h-3.5 w-3.5 shrink-0 text-[#B9B9C3]"
                    strokeWidth={2}
                  />
                )}
              </div>

              <div className="mt-2.5 flex flex-wrap items-center gap-2">
                <span className="text-[22px] pl-2 font-semibold leading-none tracking-tight text-[#5E5873]">
                  {metric.value.toLocaleString()}
                </span>
                {metric.pct !== undefined && (
                  <span
                    className={`rounded px-1.5 py-0.5 text-[11px] font-semibold leading-none ${
                      isHighPct
                        ? "bg-[#E5F8EE] text-[#28C76F]"
                        : "bg-[#FFF3E8] text-[#FF9F43]"
                    }`}
                  >
                    {metric.pct}%
                  </span>
                )}
              </div>

              <div className="mt-auto flex h-[130px] items-end sm:h-[150px]">
                <div
                  className="w-full rounded-tr-[14px] transition-all"
                  style={{
                    height: `${heightPct}%`,
                    backgroundColor: metric.color,
                  }}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
