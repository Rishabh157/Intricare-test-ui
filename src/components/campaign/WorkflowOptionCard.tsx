import type { WorkflowType } from "../../types"
import AdvancedWorkflow from "../../assets/advanced-worflow.svg"
import StandardWorkflow from "../../assets/standard-workflow.svg"

interface WorkflowOptionCardProps {
  id: WorkflowType
  title: string
  description: string
  features: string[]
  selected: boolean
  recommended?: boolean
  onSelect: (id: WorkflowType) => void
}

function WorkflowIllustration({ type }: { type: WorkflowType }) {
  if (type === "advanced") {
    return <img src={AdvancedWorkflow} alt="cross-btn" />
  }

  return <img src={StandardWorkflow} alt="cross-btn" />
}

export default function WorkflowOptionCard({
  id,
  title,
  description,
  features,
  selected,
  recommended,
  onSelect,
}: WorkflowOptionCardProps) {
  return (
    <button
      type="button"
      onClick={() => onSelect(id)}
      className={`flex w-full items-start gap-4 rounded-xl border-2 p-4 text-left transition ${
        selected
          ? "border-[#4f6ef7] bg-[#f0f4ff]"
          : "border-[#e8ecf4] bg-white hover:border-[#c7d2fe]"
      }`}
    >
      <div
        className={`mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border-2 ${
          selected ? "border-[#4f6ef7]" : "border-[#cbd5e1]"
        }`}
      >
        {selected && <div className="h-2.5 w-2.5 rounded-full bg-[#4f6ef7]" />}
      </div>

      <div className="min-w-0 flex-1">
        <div className="flex flex-wrap items-center gap-2">
          <span className="font-bold text-[#5E5873]">{title}</span>
          {recommended && (
            <span className="rounded-full bg-[#dcfce7] px-2 py-0.5 text-xs font-medium text-[#16a34a]">
              Recommended
            </span>
          )}
        </div>
        <p className="mt-1 text-sm text-[#64748b]">{description}</p>
        <div className="flex items-center gap-x-4 mt-2 text-sm text-[#5E5873]">
          {features.map((feature) => (
            <>
              <div className="h-2 w-2 bg-[#B1B1B1] rounded-full"></div>
              <div className="-ml-2">{feature}</div>
            </>
          ))}
        </div>
      </div>

      <WorkflowIllustration type={id} />
    </button>
  )
}
