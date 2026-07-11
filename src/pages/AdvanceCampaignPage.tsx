import { useState } from "react";
import DashboardLayout from "../components/layout/DashboardLayout";
import CampaignStepper from "../components/campaign/CampaignStepper";
import AudienceStep from "../components/campaign/steps/AudienceStep";
import SenderProfilesStep from "../components/campaign/steps/SenderProfilesStep";
import SettingsStep from "../components/campaign/steps/SettingsStep";
import StatsStep from "../components/campaign/steps/StatsStep";
import { campaignSteps, getNextStep, getPrevStep } from "../data/campaignSteps";
import type { CampaignStepId } from "../types";

export default function AdvanceCampaignPage() {
  const [currentStep, setCurrentStep] = useState<CampaignStepId>("audience");

  const goNext = () => {
    const next = getNextStep(currentStep);
    if (next) setCurrentStep(next);
  };

  const goPrev = () => {
    const prev = getPrevStep(currentStep);
    if (prev) setCurrentStep(prev);
  };

  const renderStep = () => {
    switch (currentStep) {
      case "audience":
        return <AudienceStep onNext={goNext} />;
      case "senders":
        return <SenderProfilesStep onPrevious={goPrev} onNext={goNext} />;
      case "settings":
        return <SettingsStep onPrevious={goPrev} onNext={goNext} />;
      case "stats":
        return <StatsStep />;
      default:
        return null;
    }
  };

  return (
    <DashboardLayout
      breadcrumbs={[
        { label: "Campaign", href: "/campaign" },
        { label: "Advance Campaign" },
      ]}
    >
      <div className="flex w-full flex-col gap-6 p-4 sm:p-6">
        <CampaignStepper steps={campaignSteps} activeStep={currentStep} />
        <div className="w-full shrink-0">{renderStep()}</div>
      </div>
    </DashboardLayout>
  );
}
