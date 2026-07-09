import type { InputHTMLAttributes } from "react";
import { Search } from "lucide-react";

interface SearchInputProps extends InputHTMLAttributes<HTMLInputElement> {
  wrapperClassName?: string;
}

export default function SearchInput({
  wrapperClassName = "",
  className = "",
  ...props
}: SearchInputProps) {
  return (
    <div className={`relative ${wrapperClassName}`}>
      <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[#94a3b8]" />
      <input
        type="search"
        className={`w-full rounded-lg border border-[#e2e8f0] bg-white py-2.5 pl-10 pr-4 text-sm text-[#334155] outline-none placeholder:text-[#94a3b8] focus:border-[#4f6ef7] focus:ring-2 focus:ring-[#4f6ef7]/20 ${className}`}
        {...props}
      />
    </div>
  );
}
