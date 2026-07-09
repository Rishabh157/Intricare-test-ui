import { ExternalLink } from "lucide-react";
import { recentActivity } from "../../../data/campaigns";

export default function RecentActivityCard() {
  return (
    <div className="rounded-xl border border-[#e8ecf4] bg-white p-5">
      <h3 className="mb-4 text-sm font-semibold text-[#1e293b]">Recent Campaign Activity</h3>

      <ul className="space-y-4">
        {recentActivity.map((item, index) => (
          <li key={item.id} className="flex gap-3">
            <div className="flex flex-col items-center">
              <div
                className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-xs text-white"
                style={{ backgroundColor: item.color }}
              >
                •
              </div>
              {index < recentActivity.length - 1 && (
                <div className="mt-1 w-px flex-1 bg-[#e8ecf4]" />
              )}
            </div>
            <div className="pb-2">
              <p className="text-sm text-[#334155]">{item.text}</p>
              <p className="text-xs text-[#94a3b8]">{item.time}</p>
            </div>
          </li>
        ))}
      </ul>

      <button
        type="button"
        className="mt-2 flex items-center gap-1 text-sm text-[#4f6ef7] hover:underline"
      >
        Open Activity Log
        <ExternalLink className="h-3.5 w-3.5" />
      </button>
    </div>
  );
}
