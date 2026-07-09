import type { WorkflowType } from "../../types";

interface WorkflowOptionCardProps {
  id: WorkflowType;
  title: string;
  description: string;
  features: string[];
  selected: boolean;
  recommended?: boolean;
  onSelect: (id: WorkflowType) => void;
}

function WorkflowIllustration({ type }: { type: WorkflowType }) {
  if (type === "advanced") {
    return (
      <svg viewBox="0 0 80 60" className="h-14 w-20 shrink-0" aria-hidden="true">
        <rect x="4" y="8" width="24" height="16" rx="3" fill="#4F6EF7" opacity="0.8" />
        <rect x="52" y="4" width="24" height="16" rx="3" fill="#93C5FD" />
        <rect x="28" y="36" width="24" height="16" rx="3" fill="#4F6EF7" />
        <path d="M28 16 L40 28 L28 36" stroke="#4F6EF7" strokeWidth="1.5" fill="none" />
        <path d="M52 12 L40 28" stroke="#93C5FD" strokeWidth="1.5" fill="none" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 80 60" className="h-14 w-20 shrink-0" aria-hidden="true">
      <rect x="8" y="10" width="64" height="10" rx="2" fill="#E2E8F0" />
      <rect x="8" y="26" width="64" height="10" rx="2" fill="#E2E8F0" />
      <rect x="8" y="42" width="64" height="10" rx="2" fill="#E2E8F0" />
      <circle cx="16" cy="15" r="3" fill="#94A3B8" />
      <circle cx="16" cy="31" r="3" fill="#94A3B8" />
      <circle cx="16" cy="47" r="3" fill="#94A3B8" />
    </svg>
  );
}

export default function WorkflowOptionCard({
  id,
  title,
  description,
  features,
  selected,
  recommended,
  onSelect,
}: WorkflowOptionCardProps) {
  return (
    <button
      type="button"
      onClick={() => onSelect(id)}
      className={`flex w-full items-center gap-4 rounded-xl border-2 p-4 text-left transition ${
        selected
          ? "border-[#4f6ef7] bg-[#f0f4ff]"
          : "border-[#e8ecf4] bg-white hover:border-[#c7d2fe]"
      }`}
    >
      <div
        className={`mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border-2 ${
          selected ? "border-[#4f6ef7]" : "border-[#cbd5e1]"
        }`}
      >
        {selected && <div className="h-2.5 w-2.5 rounded-full bg-[#4f6ef7]" />}
      </div>

      <div className="min-w-0 flex-1">
        <div className="flex flex-wrap items-center gap-2">
          <span className="font-semibold text-[#1e293b]">{title}</span>
          {recommended && (
            <span className="rounded-full bg-[#dcfce7] px-2 py-0.5 text-xs font-medium text-[#16a34a]">
              Recommended
            </span>
          )}
        </div>
        <p className="mt-1 text-sm text-[#64748b]">{description}</p>
        <p className="mt-2 text-xs text-[#94a3b8]">{features.join(" • ")}</p>
      </div>

      <WorkflowIllustration type={id} />
    </button>
  );
}
