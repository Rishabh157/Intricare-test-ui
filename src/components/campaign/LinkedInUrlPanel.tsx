import { Info } from "lucide-react";
import Button from "../ui/Button";

interface LinkedInUrlPanelProps {
  url: string;
  onChange: (value: string) => void;
  onValidate: () => void;
}

export default function LinkedInUrlPanel({ url, onChange, onValidate }: LinkedInUrlPanelProps) {
  return (
    <div>
      <div className="mb-4 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-[#64748b]">
          Find your target audience with LinkedIn Search or Sales Navigator or Post URL or Group
          URL
        </p>
        <button
          type="button"
          className="flex shrink-0 items-center gap-1 text-sm text-[#4f6ef7] hover:underline"
        >
          <Info className="h-4 w-4" />
          Search Guide
        </button>
      </div>

      <div className="flex flex-col gap-3 sm:flex-row">
        <input
          type="url"
          value={url}
          onChange={(e) => onChange(e.target.value)}
          placeholder="https://www.linkedin.com/search/results/people/?keywords="
          className="flex-1 rounded-lg border border-[#e2e8f0] px-4 py-2.5 text-sm text-[#334155] outline-none placeholder:text-[#94a3b8] focus:border-[#4f6ef7] focus:ring-2 focus:ring-[#4f6ef7]/20"
        />
        <Button onClick={onValidate} className="shrink-0 px-6">
          Validate
        </Button>
      </div>

      <p className="mt-3 text-xs text-[#4f6ef7]">
        * Paste the search URL directly from Linkedin
      </p>
    </div>
  );
}
