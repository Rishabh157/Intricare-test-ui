import PauseIcon from "../../assets/pause.svg"

interface ChannelBadgeProps {
  label: string;
}

export function ChannelBadge({ label }: ChannelBadgeProps) {
  return (
    <span className="rounded px-2 py-0.5 text-[10px] font-medium leading-4 text-[#5269AB] bg-[#EDF2FC]">
      {label}
    </span>
  );
}

interface StatusBadgeProps {
  status: string;
}

export function StatusBadge({ status }: StatusBadgeProps) {
  const isRunning = status === "Running";

  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-md font-semibold border px-2.5 py-1 text-xs ${
        isRunning
          ? "border-[#28C76F]/30 bg-[#E5F8EE]/10 text-[#549A75]"
          : status === "Paused"
            ? "border-[#FF9F43]/30 bg-[#FF9F43]/10 text-[#FF9F43]"
            : "border-[#B9B9C3]/40 bg-[#F3F2F7] text-[#6E6B7B]"
      }`}
    >
      {isRunning ? (
        <img src={PauseIcon} alt="btn" className="h-3 w-3 fill-current" />
      ) : (
        <span className="h-1.5 w-1.5 rounded-full bg-current" />
      )}
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
