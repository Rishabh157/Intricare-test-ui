import { useState } from "react";
import { Bot, Clock, Info, Trash2 } from "lucide-react";
import Button from "../../ui/Button";
import WizardFooter from "../WizardFooter";

const days = ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"];
const activeDays = ["MON", "TUE", "WED", "THU", "SAT"];

const zapierEvents = [
  { id: "response", label: "Response received", checked: true },
  { id: "invite", label: "Invite sent", checked: false },
  { id: "accepted", label: "Invitation accepted", checked: false },
  { id: "withdrawn", label: "Invitation withdrawn", checked: false },
  { id: "followup", label: "Followup Sent", checked: false },
];

interface SettingsStepProps {
  onPrevious: () => void;
  onNext: () => void;
}

export default function SettingsStep({ onPrevious, onNext }: SettingsStepProps) {
  const [campaignName, setCampaignName] = useState("New Outreach Campaign");
  const [autoMessage, setAutoMessage] = useState(false);
  const [autoLeads, setAutoLeads] = useState(false);
  const [events, setEvents] = useState(zapierEvents);

  const toggleEvent = (id: string) => {
    setEvents((prev) =>
      prev.map((e) => (e.id === id ? { ...e, checked: !e.checked } : e))
    );
  };

  return (
    <>
      <div className="space-y-6">
        <div>
          <label className="mb-2 block text-sm font-medium text-[#334155]">Campaign name</label>
          <input
            type="text"
            value={campaignName}
            onChange={(e) => setCampaignName(e.target.value)}
            className="w-full rounded-lg border border-[#e2e8f0] px-4 py-2.5 text-sm text-[#334155] outline-none focus:border-[#4f6ef7] focus:ring-2 focus:ring-[#4f6ef7]/20"
          />
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          <div className="space-y-4 lg:col-span-2">
            <h3 className="text-sm font-semibold text-[#1e293b]">Sending Window</h3>

            <select className="w-full rounded-lg border border-[#e2e8f0] bg-white px-4 py-2.5 text-sm text-[#334155]">
              <option>USA Outreach Time</option>
            </select>

            <div className="flex flex-wrap items-center gap-2">
              {days.map((day) => (
                <button
                  key={day}
                  type="button"
                  className={`rounded-lg border px-3 py-1.5 text-xs font-medium ${
                    activeDays.includes(day)
                      ? "border-[#4f6ef7] bg-[#f0f4ff] text-[#4f6ef7]"
                      : "border-[#e8ecf4] text-[#94a3b8]"
                  }`}
                >
                  {day}
                </button>
              ))}
              <button type="button" className="p-1.5 text-[#94a3b8] hover:text-[#ef4444]">
                <Trash2 className="h-4 w-4" />
              </button>
            </div>

            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              <div className="flex items-center gap-2 rounded-lg border border-[#e2e8f0] px-4 py-2.5 text-sm text-[#334155]">
                <Clock className="h-4 w-4 text-[#94a3b8]" />
                11:30 AM - 04:00 PM
              </div>
              <div className="rounded-lg border border-[#e2e8f0] bg-[#f8fafc] px-4 py-2.5 text-sm text-[#64748b]">
                USA Timezone
              </div>
            </div>

            <button type="button" className="text-sm text-[#4f6ef7] hover:underline">
              + Add New Window
            </button>
          </div>

          <div className="rounded-xl border border-[#e8ecf4] p-4">
            <div className="mb-4 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Bot className="h-5 w-5 text-[#4f6ef7]" />
                <span className="text-sm font-semibold text-[#1e293b]">AI Assist Optional</span>
              </div>
              <Button className="px-3 py-1.5 text-xs">Train AI</Button>
            </div>

            <div className="space-y-4">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <p className="text-sm font-medium text-[#334155]">Auto message after reply detected</p>
                  <p className="text-xs text-[#94a3b8]">Automatically send a follow-up when a reply is detected</p>
                </div>
                <Toggle checked={autoMessage} onChange={setAutoMessage} />
              </div>
              <div className="flex items-start justify-between gap-3">
                <div>
                  <p className="text-sm font-medium text-[#334155]">
                    Auto handle leads after{" "}
                    <input
                      type="number"
                      defaultValue={2}
                      className="mx-1 w-10 rounded border border-[#e2e8f0] px-1 py-0.5 text-center text-xs"
                    />{" "}
                    Follow-ups
                  </p>
                  <p className="text-xs text-[#94a3b8]">Let AI manage leads after set follow-ups</p>
                </div>
                <Toggle checked={autoLeads} onChange={setAutoLeads} />
              </div>
            </div>
          </div>
        </div>

        <div className="rounded-xl border border-[#e8ecf4] overflow-hidden">
          <div className="bg-[#f0f4ff] px-5 py-3">
            <label className="flex items-center gap-2 text-sm font-medium text-[#334155]">
              <input type="checkbox" defaultChecked className="rounded border-[#cbd5e1]" />
              Select events to trigger zapier
              <Info className="h-4 w-4 text-[#94a3b8]" />
            </label>
          </div>
          <div className="flex flex-wrap gap-4 p-5">
            {events.map((event) => (
              <label key={event.id} className="flex items-center gap-2 text-sm text-[#475569]">
                <input
                  type="checkbox"
                  checked={event.checked}
                  onChange={() => toggleEvent(event.id)}
                  className="rounded border-[#cbd5e1]"
                />
                {event.label}
              </label>
            ))}
          </div>
          <div className="border-t border-[#e8ecf4] px-5 py-3">
            <p className="text-xs text-[#94a3b8]">
              Works With: Zapier · n8n · webhooks — Steps stop automatically when triggered.{" "}
              <button type="button" className="text-[#4f6ef7] hover:underline">
                Learn more
              </button>
            </p>
          </div>
        </div>
      </div>

      <WizardFooter showPrevious onPrevious={onPrevious} onNext={onNext} />
    </>
  );
}

function Toggle({
  checked,
  onChange,
}: {
  checked: boolean;
  onChange: (v: boolean) => void;
}) {
  return (
    <button
      type="button"
      role="switch"
      aria-checked={checked}
      onClick={() => onChange(!checked)}
      className={`relative h-6 w-11 shrink-0 rounded-full transition ${
        checked ? "bg-[#4f6ef7]" : "bg-[#cbd5e1]"
      }`}
    >
      <span
        className={`absolute top-0.5 left-0.5 h-5 w-5 rounded-full bg-white shadow transition ${
          checked ? "translate-x-5" : "translate-x-0"
        }`}
      />
    </button>
  );
}
