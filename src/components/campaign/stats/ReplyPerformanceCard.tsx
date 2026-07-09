import { replyPerformance } from "../../../data/campaigns";

export default function ReplyPerformanceCard() {
  return (
    <div className="rounded-xl border border-[#e8ecf4] bg-white p-5">
      <h3 className="text-sm font-semibold text-[#1e293b]">Reply Performance</h3>
      <p className="mb-4 text-xs text-[#94a3b8]">Top reply channel</p>

      <div className="space-y-3">
        {replyPerformance.map((item) => (
          <div key={item.label}>
            <div className="mb-1 flex items-center justify-between text-xs">
              <span className="text-[#64748b]">{item.label}</span>
              <span className="font-medium text-[#334155]">{item.pct}%</span>
            </div>
            <div className="h-1.5 overflow-hidden rounded-full bg-[#f1f5f9]">
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
