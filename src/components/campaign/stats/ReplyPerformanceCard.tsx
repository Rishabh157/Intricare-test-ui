import { replyPerformance } from "../../../data/campaigns";

export default function ReplyPerformanceCard() {
  return (
    <div className="h-full rounded-xl border border-[#EBE9F1] bg-white p-5">
      <h3 className="text-sm font-semibold text-[#5E5873]">Reply Performance</h3>
      <p className="mb-5 text-xs text-[#B9B9C3]">Top reply channel</p>

      <div className="space-y-4">
        {replyPerformance.map((item) => (
          <div key={item.label}>
            <div className="mb-1.5 flex items-center justify-between text-xs">
              <span className="text-[#6E6B7B] font-semibold">{item.label}</span>
              <span className="font-semibold text-[#5E5873]">{item.pct}%</span>
            </div>
            <div className="h-2 overflow-hidden rounded-full bg-[#F3F2F7]">
              <div
                className="h-full rounded-full"
                style={{ width: `${item.pct}%`, backgroundColor: item.color }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
