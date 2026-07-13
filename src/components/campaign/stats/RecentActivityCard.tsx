import { ExternalLink } from "lucide-react"
import RocketIcon from "../../../assets/rocket.svg"
import BubbleIcon from "../../../assets/bubble-chat.svg"
import LinkForwardIcon from "../../../assets/link-forward.svg"
import PauseIcon from "../../../assets/pause-white.svg"

type ActivityEntry =
  | {
      id: string
      kind: "event"
      time: string
      title: string
      prefix: string
      actor?: string
      suffix?: string
      color: string
      Icon: string
    }
  | {
      id: string
      kind: "branch"
      time: string
      title: string
      prefix: string
      actor?: string
      suffix?: string
    }

const activities: ActivityEntry[] = [
  {
    id: "1",
    kind: "event",
    time: "09:14 AM",
    title: "Campaign started",
    prefix: "by",
    actor: "Aman S.",
    color: "#3762EE",
    Icon: RocketIcon,
  },
  {
    id: "2",
    kind: "event",
    time: "10:30 AM",
    title: "Reply received",
    prefix: "from",
    actor: "Suresh K.",
    color: "#7367F0",
    Icon: BubbleIcon,
  },
  {
    id: "3",
    kind: "event",
    time: "10:35 AM",
    title: "Follow-up message sent",
    prefix: "by System",
    color: "#EA5455",
    Icon: LinkForwardIcon,
  },
  {
    id: "4",
    kind: "branch",
    time: "10:35 AM",
    title: "Connection accepted",
    prefix: "by",
    actor: "Suresh K.",
    suffix: "(Prospect)",
  },
  {
    id: "5",
    kind: "event",
    time: "10:45 AM",
    title: "Campaign paused",
    prefix: "by",
    actor: "Aman S.",
    color: "#FF9F43",
    Icon: PauseIcon,
  },
]

function ActorLine({
  prefix,
  actor,
  suffix,
}: {
  prefix: string
  actor?: string
  suffix?: string
}) {
  return (
    <p className="mt-0.5 text-[13px] leading-snug text-[#8E92A2]">
      {prefix}
      {actor && (
        <>
          {" "}
          <button
            type="button"
            className="font-medium text-[#5E5873] underline decoration-[#5E5873]/50 underline-offset-[3px] hover:text-[#3762EE]"
          >
            {actor}
          </button>
        </>
      )}
      {suffix && <span> {suffix}</span>}
    </p>
  )
}

/** L-curve from the spine into a nested row */
function BranchConnector({ withDot = true }: { withDot?: boolean }) {
  return (
    <svg
      width="36"
      height="40"
      viewBox="0 0 36 40"
      fill="none"
      className="absolute left-0 top-0"
      aria-hidden
    >
      <path
        d="M18 0 V16 C18 28 22 32 32 32"
        stroke="#D0D4E4"
        strokeWidth="1.5"
        strokeLinecap="round"
        fill="none"
      />
      {withDot && <circle cx="32" cy="32" r="2.25" fill="#D0D4E4" />}
    </svg>
  )
}

export default function RecentActivityCard() {
  return (
    <div className="rounded-xl border border-[#EBE9F1] bg-white p-5">
      <h3 className="text-base font-semibold text-[#5E5873]">
        Recent Campaign Activity
      </h3>

      <div className="relative mt-5">
        {/* Continuous timeline spine */}
        <div className="absolute top-4 bottom-2 left-[17.5px] w-px bg-[#EBE9F1]" />

        <ul>
          {activities.map((item, index) => {
            const isLast = index === activities.length - 1
            const prevIsEvent =
              index > 0 && activities[index - 1]?.kind === "event"

            if (item.kind === "branch") {
              return (
                <li
                  key={item.id}
                  className={`relative flex gap-3 ${isLast ? "pb-2" : "pb-4"}`}
                >
                  <div className="relative h-9 w-9 shrink-0">
                    <BranchConnector />
                  </div>
                  <div className="min-w-0 pt-[18px]">
                    <p className="text-xs font-medium text-[#B9B9C3]">
                      {item.time}
                    </p>
                    <p className="mt-0.5 text-sm font-semibold text-[#5E5873]">
                      {item.title}
                    </p>
                    <ActorLine
                      prefix={item.prefix}
                      actor={item.actor}
                      suffix={item.suffix}
                    />
                  </div>
                </li>
              )
            }

            const tighter = prevIsEvent === false && index > 0

            return (
              <li
                key={item.id}
                className={`relative flex gap-3 ${
                  isLast ? "pb-2" : tighter ? "pb-5" : "pb-6"
                }`}
              >
                <div
                  className="relative z-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-white"
                  style={{ backgroundColor: item.color }}
                >
                  <img
                    src={item.Icon}
                    alt="btn"
                    className={`h-4 w-4 ${
                      item.id === "3" ? "scale-x-[-1]" : ""
                    } ${item.id === "5" ? "fill-current" : ""}`}
                  />
                </div>

                <div className="min-w-0 pt-0.5">
                  <p className="text-xs font-medium text-[#B9B9C3]">
                    {item.time}
                  </p>
                  <p className="mt-0.5 text-sm font-semibold text-[#5E5873]">
                    {item.title}
                  </p>
                  <ActorLine
                    prefix={item.prefix}
                    actor={item.actor}
                    suffix={item.suffix}
                  />
                </div>
              </li>
            )
          })}
        </ul>

        {/* Footer branch into Open Activity Log */}
        <div className="relative flex items-start gap-3 pt-1 pb-1">
          <div className="relative h-9 w-9 shrink-0">
            <BranchConnector withDot={false} />
          </div>
          <button
            type="button"
            className="mt-[18px] inline-flex cursor-pointer items-center gap-2 text-sm font-semibold text-[#3762EE] hover:underline"
          >
            <ExternalLink className="h-4 w-4" strokeWidth={2} />
            Open Activity Log
          </button>
        </div>
      </div>
    </div>
  )
}
