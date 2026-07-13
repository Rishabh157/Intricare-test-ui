import { ChevronRight } from "lucide-react";
import type { CampaignStepConfig } from "../../data/campaignSteps";

interface CampaignStepperProps {
  steps: CampaignStepConfig[];
  activeStep: string;
}

const ACTIVE_ICON_BG =
  "linear-gradient(239.27deg, #8BA6FF -27.06%, #3762EE 83.4%)";

/** Turns white/dark SVG strokes into brand blue #3762EE */
const BLUE_ICON_FILTER =
  "brightness(0) saturate(100%) invert(32%) sepia(98%) saturate(2476%) hue-rotate(220deg) brightness(95%) contrast(91%)";

type StepState = "active" | "completed" | "upcoming";

function getStepState(index: number, activeIndex: number): StepState {
  if (index === activeIndex) return "active";
  if (index < activeIndex) return "completed";
  return "upcoming";
}

export default function CampaignStepper({
  steps,
  activeStep,
}: CampaignStepperProps) {
  const activeIndex = Math.max(
    0,
    steps.findIndex((step) => step.id === activeStep)
  );

  return (
    <div className="flex flex-wrap items-center gap-2 rounded-xl border border-[#E8ECF4] bg-white px-3 py-2.5 sm:gap-3 sm:px-4">
      {steps.map((step, index) => {
        const state = getStepState(index, activeIndex);

        return (
          <div key={step.id} className="flex items-center gap-2 sm:gap-3">
            <div className="flex items-center gap-2.5">
              <span
                className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg sm:h-9 sm:w-9 ${
                  state === "completed"
                    ? "bg-[#EEF2FF]"
                    : state === "upcoming"
                      ? "bg-[#E8E8E8]"
                      : ""
                }`}
                style={
                  state === "active" ? { background: ACTIVE_ICON_BG } : undefined
                }
              >
                <img
                  src={step.iconSrc}
                  alt=""
                  className="h-4 w-4 sm:h-[18px] sm:w-[18px]"
                  style={
                    state === "active"
                      ? { filter: "brightness(0) invert(1)" }
                      : state === "completed"
                        ? { filter: BLUE_ICON_FILTER }
                        : { filter: "brightness(0) opacity(0.35)" }
                  }
                />
              </span>

              <span
                className={`text-xs font-medium sm:text-sm ${
                  state === "upcoming" ? "text-[#94A3B8]" : "text-[#5E5873]"
                }`}
              >
                <span className="hidden sm:inline">{step.label}</span>
                <span className="sm:hidden">{step.label.split(" ")[0]}</span>
              </span>
            </div>

            {index < steps.length - 1 && (
              <ChevronRight
                className="h-4 w-4 shrink-0 text-[#CBD5E1]"
                aria-hidden="true"
              />
            )}
          </div>
        );
      })}
    </div>
  );
}
