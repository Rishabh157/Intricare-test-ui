import { useState } from "react"
import { ChannelToggle } from "../CampaignBadges"
import { campaignActions } from "../../../data/campaigns"
import UserIcon1 from "../../../assets/user-1.svg"
import UserIcon2 from "../../../assets/user-2.svg"
import UserIcon3 from "../../../assets/user-3.svg"

const teamAvatars = [
  { id: "user-1", src: UserIcon1 },
  { id: "user-2", src: UserIcon2 },
  { id: "user-3", src: UserIcon3 },
]

export default function CampaignActionsCard() {
  const [channel, setChannel] = useState<"linkedin" | "email">("linkedin")

  return (
    <div className="flex h-full flex-col overflow-hidden rounded-xl border border-[#EBE9F1] bg-white">
      <div className="flex-1 p-5">
        <div className="mb-4 flex flex-wrap items-start justify-between gap-3">
          <div>
            <h3 className="text-base font-semibold text-[#444050]">
              Campaign Actions
            </h3>
            <p className="text-xs text-[#9692A4] font-bold">
              Execution stats & engagement signals
            </p>
          </div>
          <ChannelToggle active={channel} onChange={setChannel} />
        </div>

        <div className="grid grid-cols-2 gap-x-6 gap-y-3">
          <div className="space-y-3">
            {campaignActions.left.map((item) => (
              <div
                key={item.label}
                className="flex items-center justify-between gap-2 text-sm"
              >
                <span className="text-[#444050] font-bold">{item.label}</span>
                <span className="font-semibold text-[#5E5873]">
                  {item.value}
                </span>
              </div>
            ))}
          </div>
          <div className="space-y-3">
            {campaignActions.right.map((item) => (
              <div
                key={item.label}
                className="flex items-center justify-between gap-2 text-sm"
              >
                <span className="text-[#444050] font-bold">{item.label}</span>
                <span className="font-semibold text-[#5E5873]">
                  {item.value}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="flex items-center gap-3 bg-[#F0F4FF] px-5 py-3">
        <span className="text-sm font-bold text-[#5E5873]">Team:</span>
        <div className="flex items-center">
          {teamAvatars.map((avatar, index) => (
            <div
              key={avatar.id}
              className={`relative h-8 w-8 shrink-0 overflow-hidden rounded-full border border-white bg-white ${
                index > 0 ? "-ml-2.5" : ""
              }`}
              style={{ zIndex: index + 1 }}
            >
              <img
                src={avatar.src}
                alt=""
                className="absolute left-1/2 top-1/2 h-[155%] w-[155%] max-w-none -translate-x-1/2 -translate-y-1/2"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
