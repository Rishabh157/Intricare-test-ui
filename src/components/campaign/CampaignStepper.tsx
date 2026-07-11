// import { ChevronRight } from "lucide-react";
import type { CampaignStepConfig } from "../../data/campaignSteps";
import ChevronRight from '../../assets/sidebar.svg'

interface CampaignStepperProps {
  steps: CampaignStepConfig[];
  activeStep: string;
}

const ACTIVE_ICON_BG =
  "linear-gradient(239.27deg, #8BA6FF -27.06%, #3762EE 83.4%)";

export default function CampaignStepper({ steps, activeStep }: CampaignStepperProps) {
  return (
    <div className="flex flex-wrap items-center gap-2 rounded-xl border border-[#E8ECF4] bg-white px-3 py-2.5 sm:gap-3 sm:px-4">
      {steps.map((step, index) => {
        const isActive = step.id === activeStep;

        return (
          <div key={step.id} className="flex items-center gap-2 sm:gap-3">
            <div className="flex items-center gap-2.5">
              <span
                className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg sm:h-9 sm:w-9 ${
                  isActive ? "" : "bg-[#E8E8E8]"
                }`}
                style={isActive ? { background: ACTIVE_ICON_BG } : undefined}
              >
                <img
                  src={step.iconSrc}
                  alt=""
                  className={`h-4 w-4 sm:h-[18px] sm:w-[18px] ${
                    isActive ? "brightness-0 invert" : "opacity-70"
                  }`}
                />
              </span>

              <span
                className={`text-xs font-medium sm:text-sm ${
                  isActive ? "text-[#1E293B]" : "text-[#64748B]"
                }`}
              >
                <span className="hidden sm:inline">{step.label}</span>
                <span className="sm:hidden">{step.label.split(" ")[0]}</span>
              </span>
            </div>

            {index < steps.length - 1 && (
              <img src={ChevronRight} alt="btn" className="h-4 w-4 shrink-0 text-[#CBD5E1]" aria-hidden="true" />
            )}
          </div>
        );
      })}
    </div>
  );
}
