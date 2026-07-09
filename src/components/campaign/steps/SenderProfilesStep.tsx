import { useState } from "react";
import { ChevronDown, Plus, Search } from "lucide-react";
import LinkedInIcon from "../../icons/LinkedInIcon";
import Button from "../../ui/Button";
import WizardFooter from "../WizardFooter";

type ProfileTab = "linkedin" | "email";

interface SenderProfile {
  id: string;
  name: string;
  connections: string;
  health: number;
  dailyLimit: string;
  accountType: string;
  status: "Connected" | "Disconnected";
}

const profiles: SenderProfile[] = [
  {
    id: "1",
    name: "Edgar Jones",
    connections: "1,250 connections",
    health: 72,
    dailyLimit: "Invites: 40 / day",
    accountType: "Premium",
    status: "Connected",
  },
];

function HealthRing({ value }: { value: number }) {
  const radius = 18;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (value / 100) * circumference;

  return (
    <div className="relative flex h-11 w-11 items-center justify-center">
      <svg className="h-11 w-11 -rotate-90" viewBox="0 0 44 44">
        <circle cx="22" cy="22" r={radius} fill="none" stroke="#f1f5f9" strokeWidth="4" />
        <circle
          cx="22"
          cy="22"
          r={radius}
          fill="none"
          stroke="#f59e0b"
          strokeWidth="4"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          strokeLinecap="round"
        />
      </svg>
      <span className="absolute text-xs font-semibold text-[#334155]">{value}</span>
    </div>
  );
}

interface SenderProfilesStepProps {
  onPrevious: () => void;
  onNext: () => void;
}

export default function SenderProfilesStep({ onPrevious, onNext }: SenderProfilesStepProps) {
  const [activeTab, setActiveTab] = useState<ProfileTab>("linkedin");
  const [search, setSearch] = useState("");

  return (
    <>
      <div className="flex gap-2 border-b border-[#e8ecf4] pb-4">
        <button
          type="button"
          onClick={() => setActiveTab("linkedin")}
          className={`rounded-lg border px-4 py-2 text-sm font-medium transition ${
            activeTab === "linkedin"
              ? "border-[#4f6ef7] bg-[#f0f4ff] text-[#4f6ef7]"
              : "border-[#e8ecf4] bg-white text-[#64748b]"
          }`}
        >
          LinkedIn Profile
        </button>
        <button
          type="button"
          onClick={() => setActiveTab("email")}
          className={`rounded-lg border px-4 py-2 text-sm font-medium transition ${
            activeTab === "email"
              ? "border-[#4f6ef7] bg-[#f0f4ff] text-[#4f6ef7]"
              : "border-[#e8ecf4] bg-white text-[#64748b]"
          }`}
        >
          Email Accounts
        </button>
      </div>

      <div className="rounded-xl border border-[#e8ecf4] bg-white">
        <div className="flex flex-col gap-4 border-b border-[#e8ecf4] p-5 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-start gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#f0f4ff] text-[#4f6ef7]">
              <LinkedInIcon className="h-5 w-5" />
            </div>
            <div>
              <h3 className="text-sm font-semibold text-[#1e293b]">LinkedIn Profile</h3>
              <p className="text-xs text-[#64748b]">
                Pick which LinkedIn profiles you want to use for this campaign.
              </p>
            </div>
          </div>
          <Button className="shrink-0 gap-1.5">
            <Plus className="h-4 w-4" />
            Add Account
          </Button>
        </div>

        <div className="flex flex-col gap-3 border-b border-[#e8ecf4] p-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="relative w-full sm:w-28">
            <select className="w-full appearance-none rounded-lg border border-[#e2e8f0] bg-white py-2 pl-3 pr-8 text-sm text-[#334155]">
              <option>Show 10</option>
              <option>Show 25</option>
            </select>
            <ChevronDown className="pointer-events-none absolute right-2 top-1/2 h-4 w-4 -translate-y-1/2 text-[#94a3b8]" />
          </div>
          <div className="relative w-full sm:max-w-xs">
            <Search className="absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[#94a3b8]" />
            <input
              type="search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search"
              className="w-full rounded-lg border border-[#e2e8f0] py-2 pl-3 pr-10 text-sm outline-none focus:border-[#4f6ef7]"
            />
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full min-w-[640px] text-left text-sm">
            <thead>
              <tr className="border-b border-[#e8ecf4] text-xs font-medium uppercase tracking-wide text-[#94a3b8]">
                <th className="px-4 py-3">
                  <input type="checkbox" className="rounded border-[#cbd5e1]" />
                </th>
                <th className="px-4 py-3">Name</th>
                <th className="px-4 py-3">Health</th>
                <th className="px-4 py-3">Daily Limits</th>
                <th className="px-4 py-3">Account Type</th>
                <th className="px-4 py-3">Status</th>
              </tr>
            </thead>
            <tbody>
              {profiles.map((profile) => (
                <tr key={profile.id} className="border-b border-[#f1f5f9]">
                  <td className="px-4 py-4">
                    <input type="checkbox" className="rounded border-[#cbd5e1]" defaultChecked />
                  </td>
                  <td className="px-4 py-4">
                    <div className="flex items-center gap-3">
                      <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-[#c4b5fd] to-[#93c5fd] text-xs font-semibold text-white">
                        EJ
                      </div>
                      <div>
                        <p className="font-medium text-[#1e293b]">{profile.name}</p>
                        <p className="text-xs text-[#94a3b8]">{profile.connections}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-4 py-4">
                    <HealthRing value={profile.health} />
                  </td>
                  <td className="px-4 py-4">
                    <span className="rounded-lg border border-[#e8ecf4] px-3 py-1.5 text-xs text-[#475569]">
                      {profile.dailyLimit}
                    </span>
                  </td>
                  <td className="px-4 py-4">
                    <span className="flex items-center gap-1.5 text-[#d97706]">
                      <LinkedInIcon className="h-4 w-4" />
                      {profile.accountType}
                    </span>
                  </td>
                  <td className="px-4 py-4">
                    <span className="rounded-full bg-[#dcfce7] px-3 py-1 text-xs font-medium text-[#16a34a]">
                      {profile.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <WizardFooter showPrevious onPrevious={onPrevious} onNext={onNext} nextLabel="Submit" />
    </>
  );
}
