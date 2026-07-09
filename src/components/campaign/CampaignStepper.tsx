import type { ReactNode } from "react";
import { ChevronRight } from "lucide-react";

interface Step {
  id: string;
  label: string;
  icon: ReactNode;
}

interface CampaignStepperProps {
  steps: Step[];
  activeStep: string;
}

export default function CampaignStepper({ steps, activeStep }: CampaignStepperProps) {
  return (
    <div className="flex flex-wrap items-center gap-1 rounded-xl border border-[#e8ecf4] bg-white p-2">
      {steps.map((step, index) => {
        const isActive = step.id === activeStep;

        return (
          <div key={step.id} className="flex items-center">
            <div
              className={`flex items-center gap-2 rounded-lg px-3 py-2 text-xs font-medium sm:px-4 sm:text-sm ${
                isActive
                  ? "bg-gradient-to-r from-[#4f6ef7] to-[#6b7ff7] text-white"
                  : "text-[#64748b]"
              }`}
            >
              <span className="shrink-0">{step.icon}</span>
              <span className="hidden sm:inline">{step.label}</span>
              <span className="sm:hidden">{step.label.split(" ")[0]}</span>
            </div>
            {index < steps.length - 1 && (
              <ChevronRight className="mx-0.5 h-4 w-4 shrink-0 text-[#cbd5e1]" />
            )}
          </div>
        );
      })}
    </div>
  );
}
