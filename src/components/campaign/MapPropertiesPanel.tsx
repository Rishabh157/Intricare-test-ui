import type { ReactNode } from "react";
import {
  AlignLeft,
  Briefcase,
  Building2,
  ChevronDown,
  Trash2,
  User,
} from "lucide-react";
import SearchInput from "../ui/SearchInput";
import type { FieldMapping, UnmappedField } from "../../types";

const defaultMappings: Omit<FieldMapping, "icon">[] = [
  { id: "1", contactField: "Full name", csvColumn: "Full name", count: 35 },
  { id: "2", contactField: "First name", csvColumn: "First name", count: 3 },
  { id: "3", contactField: "Last name", csvColumn: "Last name", count: 12 },
  { id: "4", contactField: "Company Name", csvColumn: "Company Name", count: 8 },
  { id: "5", contactField: "Position", csvColumn: "Position", count: 5 },
  { id: "6", contactField: "Headline", csvColumn: "Headline", count: 2 },
];

const defaultUnmapped: UnmappedField[] = [
  { id: "1", label: "Location", count: 9 },
  { id: "2", label: "Industry", count: 3 },
  { id: "3", label: "Notes", count: 9 },
];

const fieldIcons: Record<string, ReactNode> = {
  "Full name": <User className="h-4 w-4" />,
  "First name": <User className="h-4 w-4" />,
  "Last name": <User className="h-4 w-4" />,
  "Company Name": <Building2 className="h-4 w-4" />,
  Position: <Briefcase className="h-4 w-4" />,
  Headline: <AlignLeft className="h-4 w-4" />,
};

export default function MapPropertiesPanel() {
  return (
    <div>
      <div className="mb-4 flex items-start justify-between">
        <p className="text-sm text-[#64748b]">
          <span className="text-[#22c55e]">✓</span> Make sure file includes contact name and phone
          number
        </p>
        <button
          type="button"
          className="rounded-md p-1.5 text-[#ef4444] hover:bg-red-50"
          aria-label="Delete file"
        >
          <Trash2 className="h-4 w-4" />
        </button>
      </div>

      <div className="flex flex-col gap-4 lg:flex-row">
        <div className="min-w-0 flex-1 space-y-2">
          <div className="mb-2 hidden grid-cols-2 gap-4 text-xs font-medium text-[#94a3b8] sm:grid">
            <span>Contact Field</span>
            <span>CSV Column</span>
          </div>

          {defaultMappings.map((row) => (
            <div key={row.id} className="grid grid-cols-1 gap-2 sm:grid-cols-2 sm:gap-4">
              <div className="flex items-center gap-2 rounded-lg border border-[#e8ecf4] bg-[#f8fafc] px-3 py-2.5 text-sm text-[#475569]">
                <span className="text-[#22c55e]">{fieldIcons[row.contactField]}</span>
                {row.contactField}
              </div>
              <button
                type="button"
                className="flex items-center justify-between rounded-lg border border-[#e8ecf4] bg-white px-3 py-2.5 text-sm text-[#334155]"
              >
                <span className="flex items-center gap-2">
                  <span className="text-[#94a3b8]">{fieldIcons[row.csvColumn]}</span>
                  {row.csvColumn}
                </span>
                <span className="flex items-center gap-1 text-xs text-[#94a3b8]">
                  ({row.count})
                  <ChevronDown className="h-3.5 w-3.5" />
                </span>
              </button>
            </div>
          ))}
        </div>

        <div className="w-full shrink-0 rounded-xl border border-[#e8ecf4] bg-[#f8fafc] p-4 lg:w-56">
          <p className="mb-3 text-sm font-semibold text-[#1e293b]">Unmapped Works</p>
          <SearchInput placeholder="Search" className="mb-3" />
          <ul className="space-y-2">
            {defaultUnmapped.map((item) => (
              <li
                key={item.id}
                className="flex items-center justify-between rounded-lg border border-[#e8ecf4] bg-white px-3 py-2 text-sm text-[#475569]"
              >
                {item.label}
                <span className="text-xs text-[#94a3b8]">({item.count})</span>
              </li>
            ))}
          </ul>
          <button type="button" className="mt-3 text-sm text-[#4f6ef7] hover:underline">
            Clear All Matched
          </button>
        </div>
      </div>
    </div>
  );
}
