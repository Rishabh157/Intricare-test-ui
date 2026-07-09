import type { ReactNode } from "react";
import { Check } from "lucide-react";

interface ImportMethodCardProps {
  title: string;
  description: string;
  icon: ReactNode;
  linkText?: string;
  selected?: boolean;
  onClick?: () => void;
}

export default function ImportMethodCard({
  title,
  description,
  icon,
  linkText,
  selected,
  onClick,
}: ImportMethodCardProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`relative flex flex-col items-center rounded-xl border p-5 text-center transition ${
        selected
          ? "border-[#4f6ef7] bg-[#f0f4ff] shadow-sm"
          : "border-[#e8ecf4] bg-white hover:border-[#c7d2fe]"
      }`}
    >
      {selected && (
        <div className="absolute right-3 top-3 flex h-5 w-5 items-center justify-center rounded-full bg-[#4f6ef7]">
          <Check className="h-3 w-3 text-white" strokeWidth={3} />
        </div>
      )}

      <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-[#f0f4ff] text-[#4f6ef7]">
        {icon}
      </div>
      <h3 className="text-sm font-semibold text-[#1e293b]">{title}</h3>
      <p className="mt-2 text-xs leading-relaxed text-[#64748b]">
        {description}
        {linkText && (
          <>
            {" "}
            <span className="text-[#4f6ef7] hover:underline">{linkText}</span>
          </>
        )}
      </p>
    </button>
  );
}
