import Button from "../ui/Button";
import EmptyStateIllustration from "./EmptyStateIllustration";

interface CampaignEmptyStateProps {
  onNewCampaign: () => void;
}

export default function CampaignEmptyState({ onNewCampaign }: CampaignEmptyStateProps) {
  return (
    <div className="flex flex-col items-center justify-center px-4 py-16 sm:py-24">
      <EmptyStateIllustration />
      <Button onClick={onNewCampaign} className="mt-8 px-8 py-3 text-sm font-semibold">
        New Campaign
      </Button>
    </div>
  );
}
