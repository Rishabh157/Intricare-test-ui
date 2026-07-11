import Button from "../ui/Button";
import NoDataFoundIcon from '../../assets/DataNotFound.svg'

interface CampaignEmptyStateProps {
  onNewCampaign: () => void;
}

export default function CampaignEmptyState({ onNewCampaign }: CampaignEmptyStateProps) {
  return (
    <div className="flex flex-col items-center justify-center px-4 py-16 sm:py-24">
      <img src={NoDataFoundIcon} alt="icon" />
      <Button onClick={onNewCampaign} className="mt-8 px-8 py-3 text-sm font-semibold cursor-pointer">
        New Campaign
      </Button>
    </div>
  );
}
