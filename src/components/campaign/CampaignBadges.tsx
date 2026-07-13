import { Zap } from "lucide-react";
import PauseIcon from "../../assets/pause.svg";

interface ChannelBadgeProps {
  label: string;
}

export function ChannelBadge({ label }: ChannelBadgeProps) {
  return (
    <span className="rounded px-2 py-0.5 text-[10px] font-bold leading-4 text-[#5269AB] bg-[#EDF2FC]">
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
    <div className="inline-flex overflow-hidden rounded-md border border-[#EBE9F1]">
      <button
        type="button"
        onClick={() => onChange("linkedin")}
        className={`cursor-pointer px-3 py-1.5 text-xs font-bold transition ${
          active === "linkedin"
            ? "bg-[#F3F2F7] text-[#82868B]"
            : "bg-white text-[#B9B9C3]"
        }`}
      >
        LinkedIn
      </button>
      <button
        type="button"
        onClick={() => onChange("email")}
        className={`cursor-pointer border-l font-bold border-[#EBE9F1] px-3 py-1.5 text-xs transition ${
          active === "email"
            ? "bg-[#F3F2F7] text-[#5E5873]"
            : "bg-white text-[#B9B9C3]"
        }`}
      >
        Email
      </button>
    </div>
  );
}
