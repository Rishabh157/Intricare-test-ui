import {
  ExternalLink,
  MessageSquare,
  Pause,
  Rocket,
  Send,
  UserCheck,
} from "lucide-react";
import { recentActivity } from "../../../data/campaigns";

const iconById: Record<string, typeof Rocket> = {
  "1": Rocket,
  "2": MessageSquare,
  "3": Send,
  "4": UserCheck,
  "5": Pause,
};

export default function RecentActivityCard() {
  return (
    <div className="rounded-xl border border-[#EBE9F1] bg-white p-5">
      <h3 className="mb-5 text-sm font-semibold text-[#5E5873]">
        Recent Campaign Activity
      </h3>

      <ul className="space-y-0">
        {recentActivity.map((item, index) => {
          const Icon = iconById[item.id] ?? Rocket;
          const isLast = index === recentActivity.length - 1;

          return (
            <li key={item.id} className="flex gap-3">
              <div className="flex flex-col items-center">
                <div
                  className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-white"
                  style={{ backgroundColor: item.color }}
                >
                  <Icon className="h-3.5 w-3.5" />
                </div>
                {!isLast && <div className="my-1 w-px flex-1 min-h-[20px] bg-[#EBE9F1]" />}
              </div>
              <div className={isLast ? "pb-0" : "pb-4"}>
                <p className="text-xs font-medium text-[#B9B9C3]">{item.time}</p>
                <p className="mt-0.5 text-sm text-[#5E5873]">{item.text}</p>
              </div>
            </li>
          );
        })}
      </ul>

      <button
        type="button"
        className="mt-4 flex items-center gap-1.5 text-sm font-medium text-[#3762EE] hover:underline"
      >
        Open Activity Log
        <ExternalLink className="h-3.5 w-3.5" />
      </button>
    </div>
  );
}
