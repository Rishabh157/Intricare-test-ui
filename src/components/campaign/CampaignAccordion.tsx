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
      <div className="relative z-10 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#28C76F]">
        <Check className="h-3.5 w-3.5 text-white" strokeWidth={3} />
      </div>
    );
  }

  if (status === "active") {
    return (
      <div className="relative z-10 h-6 w-6 shrink-0 rounded-full border-[2.5px] border-[#3762EE] bg-white" />
    );
  }

  return (
    <div className="relative z-10 h-6 w-6 shrink-0 rounded-full border-2 border-[#D8D6DE] bg-white" />
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
      {/* Timeline rail */}
      <div className="relative flex w-6 shrink-0 flex-col items-center pt-4">
        <StatusIndicator status={status} />
        {!isLast && (
          <div
            className="absolute top-[2.5rem] bottom-0 left-1/2 w-[2px] -translate-x-1/2 bg-[#D0D4E4]"
            aria-hidden="true"
          />
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
