import { useState } from "react"
import { Clock, Info } from "lucide-react"
import Button from "../../ui/Button"
import WizardFooter from "../WizardFooter"
import TrashIcon from "../../../assets/delete-icon.svg"
import RobotIcon from "../../../assets/robot.svg"
import MessageIcon from "../../../assets/message.svg"
import ShareIcon from "../../../assets/share.svg"
import ZapierIcon from "../../../assets/zapier.svg"
import N8NIcon from "../../../assets/n8n.svg"
import WebHookIcon from "../../../assets/webhook.svg"


const days = ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"]
const activeDays = ["MON", "TUE", "WED", "THU", "SAT"]

const zapierEvents = [
  { id: "response", label: "Response received", checked: true },
  { id: "invite", label: "Invite sent", checked: false },
  { id: "accepted", label: "Invitation accepted", checked: false },
  { id: "withdrawn", label: "Invitation withdrawn", checked: false },
  { id: "followup", label: "Followup Sent", checked: false },
]

interface SettingsStepProps {
  onPrevious: () => void
  onNext: () => void
}

export default function SettingsStep({
  onPrevious,
  onNext,
}: SettingsStepProps) {
  const [campaignName, setCampaignName] = useState("")
  const [autoMessage, setAutoMessage] = useState(false)
  const [autoLeads, setAutoLeads] = useState(false)
  const [events, setEvents] = useState(zapierEvents)

  const toggleEvent = (id: string) => {
    setEvents((prev) =>
      prev.map((e) => (e.id === id ? { ...e, checked: !e.checked } : e))
    )
  }

  return (
    <>
      <div className="space-y-6">
        <div>
          <label className="mb-2 block text-sm font-medium text-[#334155]">
            Campaign name
          </label>
          <input
            type="text"
            value={campaignName}
            placeholder="New Outreach Campaign"
            onChange={(e) => setCampaignName(e.target.value)}
            className="w-full rounded-lg border placeholder:text-[#334155] border-[#3666EE] px-4 py-2.5 text-sm text-[#334155] outline-none focus:border-[#4f6ef7] focus:ring-2 focus:ring-[#4f6ef7]/20"
          />
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          <div className="min-w-0 space-y-4">
            <div>
              <h3 className="text-sm font-semibold text-[#1e293b]">
                Sending Window
              </h3>
              <span className="text-xs">Define when the campaign runs</span>
            </div>

            <select className="w-full rounded-lg border border-[#e2e8f0] bg-white px-4 py-2.5 text-sm text-[#334155]">
              <option>USA Outreach Time</option>
            </select>

            <div className="flex flex-wrap items-center gap-2">
              {days.map((day) => (
                <button
                  key={day}
                  type="button"
                  className={`rounded-md border px-3 py-1.5 text-xs font-medium ${
                    activeDays.includes(day)
                      ? "border-[#3666EE] bg-[#D0DCFF] text-[#4f6ef7]"
                      : "border-[#e8ecf4] text-[#94a3b8]"
                  }`}
                >
                  {day}
                </button>
              ))}
              <button
                type="button"
                className="p-1.5 text-[#94a3b8] rounded-md border hover:text-[#ef4444]"
              >
                <img src={TrashIcon} alt="btn" className="h-4 w-4" />
              </button>
            </div>

            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              <div className="flex items-center gap-2 rounded-lg border border-[#e2e8f0] px-4 py-2.5 text-sm text-[#444050]">
                <Clock className="h-4 w-4 text-[#3666EE]" />
                11:30 AM - 04:00 PM
              </div>
              <div className="rounded-lg border border-[#e2e8f0] bg-[#f8fafc] px-4 py-2.5 text-sm text-[#444050]">
                USA Timezone
              </div>
            </div>

            <button
              type="button"
              className="text-sm text-[#3666EE] hover:underline"
            >
              + Add New Window
            </button>
          </div>

          <div className="min-w-0 rounded-xl border border-[#EBE9F1] bg-white p-4 sm:p-5">
            {/* Header */}
            <div className="mb-4 flex items-start justify-between gap-3">
              <div className="flex items-start gap-3">
                <img src={RobotIcon} alt="" className="h-9 w-9 shrink-0" />
                <div>
                  <div className="flex flex-wrap items-baseline gap-1.5">
                    <span className="text-sm font-semibold text-[#5E5873]">
                      AI Assist
                    </span>
                    <span className="text-sm font-normal text-[#B9B9C3]">
                      Optional
                    </span>
                  </div>
                  <p className="mt-0.5 text-xs text-[#444050]">
                    Define when the campaign runs
                  </p>
                </div>
              </div>
              <Button className="h-[37px] w-[103px] shrink-0 bg-[#3762EE]! px-0 text-sm font-medium hover:bg-[#2b4fd4]!">
                Train AI
              </Button>
            </div>

            <div className="mb-4 border-t border-[#EBE9F1]" />

            {/* Options */}
            <div className="space-y-5">
              <div className="flex items-center justify-between gap-3">
                <div className="flex min-w-0 items-start gap-3">
                  <img
                    src={MessageIcon}
                    alt="btn"
                    className="mt-0.5 h-5 w-5 shrink-0 text-[#3762EE]"
                  />
                  <div className="min-w-0">
                    <p className="text-sm font-semibold text-[#5E5873]">
                      Auto message after reply detected
                    </p>
                    <p className="mt-0.5 text-xs text-[#444050]">
                      AI auto-replies to leads who message you back
                    </p>
                  </div>
                </div>
                <Toggle checked={autoMessage} onChange={setAutoMessage} />
              </div>

              <div className="flex items-center justify-between gap-3">
                <div className="flex min-w-0 items-start gap-3">
                  <img
                    src={ShareIcon}
                    alt="btn"
                    className="mt-0.5 h-5 w-5 shrink-0 text-[#3762EE]"
                  />
                  <div className="min-w-0">
                    <p className="flex flex-wrap items-center gap-1 text-sm font-semibold text-[#5E5873]">
                      <span>Auto handle leads after</span>
                      <input
                        type="text"
                        defaultValue={2}
                        min={1}
                        className="mx-0.5 h-7 w-9 rounded border border-[#EBE9F1] bg-white px-1 text-center text-sm font-semibold text-[#5E5873] outline-none focus:border-[#3762EE]"
                      />
                      <span>Follow-ups</span>
                    </p>
                    <p className="mt-0.5 text-xs text-[#444050]">
                      AI takes over after two follow-ups.
                    </p>
                  </div>
                </div>
                <Toggle checked={autoLeads} onChange={setAutoLeads} />
              </div>
            </div>
          </div>
        </div>

        <div className="overflow-hidden rounded-xl border border-[#EBE9F1]">
          <div className="bg-[#F0F4FF] px-5 py-3.5">
            <label className="flex cursor-pointer items-center gap-2.5 text-sm font-medium text-[#5E5873]">
              <input
                type="checkbox"
                defaultChecked
                className="h-4 w-4 accent-[#3762EE]"
              />
              Select events to trigger zapier
              <Info className="h-4 w-4 text-[#6D6B77]" />
            </label>
          </div>

          <div className="flex flex-wrap items-center gap-x-8 gap-y-3 border-t border-[#EBE9F1] px-5 py-4">
            {events.map((event) => (
              <label
                key={event.id}
                className="flex cursor-pointer items-center gap-2 font-semibold text-sm text-[#5E5873]"
              >
                <input
                  type="checkbox"
                  checked={event.checked}
                  onChange={() => toggleEvent(event.id)}
                  className="h-4 w-4 accent-[#3762EE]"
                />
                {event.label}
              </label>
            ))}
          </div>

          <div className="flex flex-wrap items-center gap-3 border-t border-[#EBE9F1] px-5 py-3.5">
            <span className="text-xs font-semibold text-[#5E5873]">Works With</span>
            <div className="flex flex-wrap items-center gap-2 border border-[#EBE9F1]">
              <span className="inline-flex h-8 items-center border-r border-[#EBE9F1] px-3">
                <img src={ZapierIcon} alt="Zapier" className="h-4 w-auto" />
              </span>
              <span className="inline-flex h-8 items-center border-r border-[#EBE9F1] px-3">
                <img src={N8NIcon} alt="n8n" className="h-5 w-auto" />
              </span>
              <span className="inline-flex h-8 items-center px-3">
                <img src={WebHookIcon} alt="Webhooks" className="h-3.5 w-auto" />
              </span>
            </div>
          </div>
        </div>
      </div>

      <WizardFooter
        showPrevious
        onPrevious={onPrevious}
        onNext={onNext}
        leftContent={
          <p className="max-w-xl text-xs leading-relaxed text-[#444050]">
            If a lead answers your invite, message, or InMail, we <br /> stop sending
            further steps automatically.{" "}
            <button
              type="button"
              className="font-medium text-[#3762EE] hover:underline cursor-pointer" 
            >
              Learn more
            </button>
          </p>
        }
      />
    </>
  )
}


function Toggle({
  checked,
  onChange,
}: {
  checked: boolean
  onChange: (v: boolean) => void
}) {
  return (
    <button
      type="button"
      role="switch"
      aria-checked={checked}
      onClick={() => onChange(!checked)}
      className={`relative h-6 w-11 shrink-0 py-2 rounded-full transition cursor-pointer ${
        checked ? "bg-[#4f6ef7]" : "bg-[#CACACA]"
      }`}
    >
      <span
        className={`absolute top-[5px] left-[6px] h-3.5 w-3.5 rounded-full bg-white shadow transition ${
          checked ? "translate-x-5" : "translate-x-0"
        }`}
      />
    </button>
  )
}
