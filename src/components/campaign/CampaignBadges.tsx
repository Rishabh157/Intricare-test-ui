interface ChannelBadgeProps {
  label: string;
}

export function ChannelBadge({ label }: ChannelBadgeProps) {
  return (
    <span className="rounded border border-[#bfdbfe] bg-[#eff6ff] px-2 py-0.5 text-xs font-medium text-[#3b82f6]">
      {label}
    </span>
  );
}

interface StatusBadgeProps {
  status: string;
}

export function StatusBadge({ status }: StatusBadgeProps) {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full bg-[#dcfce7] px-3 py-1 text-xs font-medium text-[#16a34a]">
      <span className="h-1.5 w-1.5 rounded-full bg-[#22c55e]" />
      {status}
    </span>
  );
}

interface ChannelToggleProps {
  active: "linkedin" | "email";
  onChange: (v: "linkedin" | "email") => void;
}

export function ChannelToggle({ active, onChange }: ChannelToggleProps) {
  return (
    <div className="flex gap-1 rounded-lg border border-[#e8ecf4] bg-[#f8fafc] p-1">
      <button
        type="button"
        onClick={() => onChange("linkedin")}
        className={`rounded-md px-3 py-1 text-xs font-medium transition ${
          active === "linkedin" ? "bg-white text-[#4f6ef7] shadow-sm" : "text-[#64748b]"
        }`}
      >
        LinkedIn
      </button>
      <button
        type="button"
        onClick={() => onChange("email")}
        className={`rounded-md px-3 py-1 text-xs font-medium transition ${
          active === "email" ? "bg-white text-[#4f6ef7] shadow-sm" : "text-[#64748b]"
        }`}
      >
        Email
      </button>
    </div>
  );
}
