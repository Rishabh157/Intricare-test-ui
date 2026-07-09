import { ArrowLeft } from "lucide-react";
import Button from "../ui/Button";

interface WizardFooterProps {
  showPrevious?: boolean;
  onPrevious?: () => void;
  onNext?: () => void;
  nextLabel?: string;
  nextOnly?: boolean;
}

export default function WizardFooter({
  showPrevious = false,
  onPrevious,
  onNext,
  nextLabel = "Next",
  nextOnly = false,
}: WizardFooterProps) {
  return (
    <div className={`flex items-center gap-3 ${nextOnly ? "justify-end" : "justify-between"}`}>
      {showPrevious && onPrevious && (
        <button
          type="button"
          onClick={onPrevious}
          className="flex items-center gap-1.5 text-sm font-medium text-[#64748b] transition hover:text-[#334155]"
        >
          <ArrowLeft className="h-4 w-4" />
          Previous
        </button>
      )}
      {onNext && (
        <Button onClick={onNext} className={showPrevious ? "" : "ml-auto"}>
          {nextLabel}
        </Button>
      )}
    </div>
  );
}
