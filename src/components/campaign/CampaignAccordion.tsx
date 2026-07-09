import type { ReactNode } from "react";
import { Check, ChevronUp } from "lucide-react";
import type { AccordionStatus } from "../../types";

interface CampaignAccordionProps {
  title: string;
  status: AccordionStatus;
  stepBadge?: string;
  expanded: boolean;
  onToggle: () => void;
  children?: ReactNode;
  isLast?: boolean;
}

function StatusIndicator({ status }: { status: AccordionStatus }) {
  if (status === "complete") {
    return (
      <div className="flex h-6 w-6 items-center justify-center rounded-full bg-[#22c55e]">
        <Check className="h-3.5 w-3.5 text-white" strokeWidth={3} />
      </div>
    );
  }

  if (status === "active") {
    return (
      <div className="flex h-6 w-6 items-center justify-center rounded-full border-2 border-[#4f6ef7] bg-white">
        <div className="h-2 w-2 rounded-full bg-[#4f6ef7]" />
      </div>
    );
  }

  return (
    <div className="flex h-6 w-6 items-center justify-center rounded-full border-2 border-[#e2e8f0] bg-white">
      <div className="h-2 w-2 rounded-full bg-[#e2e8f0]" />
    </div>
  );
}

export default function CampaignAccordion({
  title,
  status,
  stepBadge,
  expanded,
  onToggle,
  children,
  isLast = false,
}: CampaignAccordionProps) {
  return (
    <div className="relative flex gap-4">
      <div className="flex flex-col items-center pt-4">
        <StatusIndicator status={status} />
        {!isLast && (
          <div className="mt-1 w-px flex-1 bg-[#4f6ef7]/25" aria-hidden="true" />
        )}
      </div>

      <div className="mb-4 min-w-0 flex-1 rounded-xl border border-[#e8ecf4] bg-white">
        <button
          type="button"
          onClick={onToggle}
          className="flex w-full items-center justify-between px-5 py-4"
        >
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-sm font-semibold text-[#1e293b]">{title}</span>
            {stepBadge && (
              <span className="rounded-md bg-[#f1f5f9] px-2 py-0.5 text-xs text-[#64748b]">
                {stepBadge}
              </span>
            )}
          </div>
          <ChevronUp
            className={`h-5 w-5 shrink-0 text-[#94a3b8] transition ${expanded ? "" : "rotate-180"}`}
          />
        </button>

        {expanded && children && (
          <div className="border-t border-[#e8ecf4] px-5 pb-5 pt-4">{children}</div>
        )}
      </div>
    </div>
  );
}
