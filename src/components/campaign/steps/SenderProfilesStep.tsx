import { useState } from "react"
import { ChevronDown, Plus, Search, Undo2 } from "lucide-react"
import Button from "../../ui/Button"
import AvatarImg from "../../../assets/table-avatar.png"
import LinkedinIcon from "../../../assets/linkedin-icon-1.svg"

type ProfileTab = "linkedin" | "email"

interface SenderProfile {
  id: string
  name: string
  connections: string
  health: number
  dailyLimit: string
  accountType: string
  status: "Connected" | "Disconnected"
  avatar?: string
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
    avatar: AvatarImg,
  },
]

function LinkedInBadge({
  variant = "blue",
  size = "md",
}: {
  variant?: "blue" | "gold"
  size?: "sm" | "md"
}) {
  const dim = size === "sm" ? "h-4 w-4 text-[8px]" : "h-8 w-8 text-xs"
  const bg = variant === "gold" ? "bg-[#EAB308]" : "bg-[#0A66C2]"

  return (
    <span
      className={`inline-flex shrink-0 items-center justify-center rounded ${dim} ${bg} font-bold text-white`}
    >
      in
    </span>
  )
}

function HealthRing({ value }: { value: number }) {
  const radius = 16
  const circumference = 2 * Math.PI * radius
  const offset = circumference - (value / 100) * circumference

  return (
    <div className="relative flex h-10 w-10 items-center justify-center">
      <svg className="h-10 w-10 -rotate-90" viewBox="0 0 40 40">
        <circle
          cx="20"
          cy="20"
          r={radius}
          fill="none"
          stroke="#EBE9F1"
          strokeWidth="3.5"
        />
        <circle
          cx="20"
          cy="20"
          r={radius}
          fill="none"
          stroke="#FF9F43"
          strokeWidth="3.5"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          strokeLinecap="round"
        />
      </svg>
      <span className="absolute text-xs font-semibold text-[#5E5873]">
        {value}
      </span>
    </div>
  )
}

interface SenderProfilesStepProps {
  onPrevious: () => void
  onNext: () => void
}

export default function SenderProfilesStep({
  onPrevious,
  onNext,
}: SenderProfilesStepProps) {
  const [activeTab, setActiveTab] = useState<ProfileTab>("linkedin")
  const [search, setSearch] = useState("")
  const [pageSize, setPageSize] = useState("10")

  return (
    <div className="flex w-full flex-col gap-4">
      {/* Tabs */}
      <div className="inline-flex overflow-hidden rounded-lg border border-[#3762EE]">
        <button
          type="button"
          onClick={() => setActiveTab("linkedin")}
          className={`px-5 py-2.5 text-sm font-medium transition ${
            activeTab === "linkedin"
              ? "bg-[#CFDAFE] text-[#3762EE]"
              : "bg-white text-[#3762EE] hover:bg-[#F8FAFF]"
          }`}
        >
          LinkedIn Profile
        </button>
        <button
          type="button"
          onClick={() => setActiveTab("email")}
          className={`border-l border-[#3762EE] px-5 py-2.5 text-sm font-medium transition ${
            activeTab === "email"
              ? "bg-[#EEF2FF] text-[#3762EE]"
              : "bg-white text-[#3762EE] hover:bg-[#F8FAFF]"
          }`}
        >
          Email Accounts
        </button>
      </div>

      {/* Main panel */}
      <div className="overflow-hidden rounded-xl border border-[#EBE9F1] bg-white">
        {/* Header */}
        <div className="flex flex-col gap-4 border-b border-[#EBE9F1] px-5 py-5 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-3">
            <div>
              <div className="flex gap-x-2">
                <img src={LinkedinIcon} alt="btn" />
                <h3 className="text-base font-semibold text-[#5E5873]">
                  LinkedIn Profile
                </h3>
              </div>
              <p className="text-xs text-[#444050] mt-2">
                Pick which LinkedIn profiles you want to use for this campaign.
              </p>
            </div>
          </div>
          <Button className="shrink-0 gap-1.5 !bg-[#3762EE] hover:!bg-[#2b4fd4]">
            <Plus className="h-4 w-4" />
            Add Account
          </Button>
        </div>

        {/* Toolbar */}
        <div className="flex flex-col gap-3 border-b border-[#EBE9F1] px-5 py-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-2 text-sm text-[#6E6B7B]">
            <span>Show</span>
            <div className="relative">
              <select
                value={pageSize}
                onChange={(e) => setPageSize(e.target.value)}
                className="appearance-none rounded-md border border-[#EBE9F1] bg-white py-1.5 pl-3 pr-8 text-sm text-[#5E5873] outline-none"
              >
                <option value="10">10</option>
                <option value="25">25</option>
                <option value="50">50</option>
              </select>
              <ChevronDown className="pointer-events-none absolute right-2 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-[#B9B9C3]" />
            </div>
          </div>

          <div className="relative w-full sm:w-56">
            <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[#000000]" />
            <input
              type="search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search"
              className="w-full rounded-lg border border-[#EBE9F1] py-2 pl-9 pr-3 text-sm text-[#5E5873] outline-none placeholder:text-[#B9B9C3] focus:border-[#3762EE]"
            />
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full min-w-[760px] text-left text-sm">
            <thead>
              <tr className="bg-[#F3F2F7] text-[11px] font-semibold uppercase tracking-wide text-[#5E5873]">
                <th className="w-10 px-4 py-3">
                  <input
                    type="checkbox"
                    className="h-4 w-4 rounded border-[#D8D6DE]"
                  />
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
                <tr key={profile.id} className="border-t border-[#EBE9F1]">
                  <td className="px-4 py-4">
                    <input
                      type="checkbox"
                      className="h-4 w-4 rounded border-[#D8D6DE]"
                    />
                  </td>
                  <td className="px-4 py-4">
                    <div className="flex items-center gap-3">
                      {profile.avatar ? (
                        <div className="relative shrink-0">
                          <img
                            src={profile.avatar}
                            alt={profile.name}
                            className="h-10 w-10 rounded-full object-cover"
                          />
                        </div>
                      ) : (
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#EEF2FF] text-xs font-semibold text-[#3762EE]">
                          EJ
                        </div>
                      )}
                      <div>
                        <p className="font-semibold text-[#5E5873]">
                          {profile.name}
                        </p>
                        <p className="text-xs text-[#6D6B77]">
                          {profile.connections}
                        </p>
                      </div>
                    </div>
                  </td>
                  <td className="px-4 py-4">
                    <HealthRing value={profile.health} />
                  </td>
                  <td className="px-4 py-4">
                    <span className="inline-block rounded-md border border-[#D0D0D0] px-3 py-2 text-xs text-[#444050]">
                      {profile.dailyLimit}
                    </span>
                  </td>
                  <td className="px-4 py-4">
                    <span className="flex items-center gap-2 text-sm text-[#6E6B7B]">
                      <LinkedInBadge variant="gold" size="sm" />
                      {profile.accountType}
                    </span>
                  </td>
                  <td className="px-4 py-4">
                    <span className="inline-flex rounded-full bg-[#28C76F] px-3 py-1 text-xs font-semibold text-white">
                      {profile.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Footer — sits directly under the panel */}
      <div className="flex shrink-0 items-center justify-end gap-4">
        <button
          type="button"
          onClick={onPrevious}
          className="flex items-center gap-1.5 text-sm font-medium text-[#3762EE] transition hover:text-[#2b4fd4]"
        >
          <Undo2 className="h-4 w-4" />
          Previous
        </button>
        <Button
          onClick={onNext}
          className="!bg-[#3762EE] px-8 hover:!bg-[#2b4fd4]"
        >
          Submit
        </Button>
      </div>
    </div>
  )
}
