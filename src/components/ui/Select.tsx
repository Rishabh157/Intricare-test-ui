import { ChevronDown } from "lucide-react";

interface SelectProps {
  value: string;
  options: string[];
  onChange?: (value: string) => void;
  className?: string;
}

export default function Select({ value, options, onChange, className = "" }: SelectProps) {
  return (
    <div className={`relative ${className}`}>
      <select
        value={value}
        onChange={(e) => onChange?.(e.target.value)}
        className="w-full appearance-none rounded-lg border border-[#e2e8f0] bg-white py-2.5 pl-4 pr-10 text-sm text-[#334155] outline-none focus:border-[#4f6ef7] focus:ring-2 focus:ring-[#4f6ef7]/20"
      >
        {options.map((opt) => (
          <option key={opt} value={opt}>
            {opt}
          </option>
        ))}
      </select>
      <ChevronDown className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[#94a3b8]" />
    </div>
  );
}
