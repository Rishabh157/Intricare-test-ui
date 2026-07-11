import { Info } from "lucide-react";
import Button from "../ui/Button";
import linkedInIcon from "../../assets/linkedin-icon.svg";

interface LinkedInUrlPanelProps {
  url: string;
  onChange: (value: string) => void;
  onValidate: () => void;
}

const linkClass =
  "font-medium text-[#3762EE] underline underline-offset-2 hover:text-[#2b4fd4]";

export default function LinkedInUrlPanel({ url, onChange, onValidate }: LinkedInUrlPanelProps) {
  return (
    <div>
      {/* Header */}
      <div className="mb-4 flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
        <div className="flex items-start gap-2 text-sm leading-relaxed text-[#334155]">
          <img src={linkedInIcon} alt="" className="mt-0.5 h-5 w-5 shrink-0" />
          <p>
            Find your target audience with{" "}
            <button type="button" className={linkClass}>
              LinkedIn Search
            </button>{" "}
            or{" "}
            <button type="button" className={linkClass}>
              Sales Navigator
            </button>{" "}
            or{" "}
            <button type="button" className={linkClass}>
              Post URL
            </button>{" "}
            or{" "}
            <button type="button" className={linkClass}>
              Group URL
            </button>
          </p>
        </div>

        <button
          type="button"
          className="flex shrink-0 items-center gap-1.5 text-xs font-medium text-[#3762EE] underline underline-offset-2 hover:text-[#2b4fd4]"
        >
          <Info className="h-2 w-2" />
          Search Guide
        </button>
      </div>

      {/* URL input + Validate */}
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
        <input
          type="url"
          value={url}
          onChange={(e) => onChange(e.target.value)}
          placeholder="https://www.linkedin.com/search/results/people/?keywords="
          className="flex-1 rounded-lg border border-[#E2E8F0] px-4 py-2.5 text-sm text-[#334155] outline-none placeholder:text-[#94A3B8] focus:border-[#3762EE] focus:ring-2 focus:ring-[#3762EE]/20"
        />
        <Button
          onClick={onValidate}
          className="shrink-0 !bg-[#3762EE] px-6 hover:!bg-[#2b4fd4]"
        >
          Validate
        </Button>
      </div>

      {/* Helper note */}
      <div className="mt-3 flex items-center gap-2">
        <span
          className="relative flex h-4 w-4 shrink-0 items-center justify-center"
          aria-hidden="true"
        >
          <span className="absolute inset-0 rounded-full bg-[#3762EE]/25" />
          <span className="relative h-2 w-2 rounded-full bg-[#3762EE]" />
        </span>
        <p className="text-xs text-[#A6A4AD]">Paste the search URL directly from Linkedin</p>
      </div>
    </div>
  );
}
