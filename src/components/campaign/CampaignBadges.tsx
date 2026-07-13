import { Zap } from "lucide-react";
import PauseIcon from "../../assets/pause.svg";

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
  /** "table" uses pause bars; "stats" uses lightning (screenshot) */
  variant?: "table" | "stats";
}

export function StatusBadge({ status, variant = "table" }: StatusBadgeProps) {
  const isRunning = status === "Running";

  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-md border px-2.5 py-1 text-xs font-semibold ${
        isRunning
          ? "border-[#28C76F]/30 bg-[#E5F8EE] text-[#28C76F]"
          : status === "Paused"
            ? "border-[#FF9F43]/30 bg-[#FF9F43]/10 text-[#FF9F43]"
            : "border-[#B9B9C3]/40 bg-[#F3F2F7] text-[#6E6B7B]"
      }`}
    >
      {isRunning ? (
        variant === "stats" ? (
          <Zap className="h-3 w-3 fill-current" />
        ) : (
          <img src={PauseIcon} alt="" className="h-3 w-3" />
        )
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
    <div className="flex rounded-md border border-[#EBE9F1] bg-[#F8F8F8] p-0.5">
      <button
        type="button"
        onClick={() => onChange("linkedin")}
        className={`rounded px-2.5 py-1 text-xs font-medium transition ${
          active === "linkedin"
            ? "bg-white text-[#3762EE] shadow-sm"
            : "text-[#6E6B7B]"
        }`}
      >
        LinkedIn
      </button>
      <button
        type="button"
        onClick={() => onChange("email")}
        className={`rounded px-2.5 py-1 text-xs font-medium transition ${
          active === "email"
            ? "bg-white text-[#3762EE] shadow-sm"
            : "text-[#6E6B7B]"
        }`}
      >
        Email
      </button>
    </div>
  );
}
