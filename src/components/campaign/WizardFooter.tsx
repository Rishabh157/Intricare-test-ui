import type { ReactNode } from "react";
import { ArrowLeft } from "lucide-react";
import Button from "../ui/Button";

interface WizardFooterProps {
  showPrevious?: boolean;
  onPrevious?: () => void;
  onNext?: () => void;
  nextLabel?: string;
  nextOnly?: boolean;
  leftContent?: ReactNode;
}

export default function WizardFooter({
  showPrevious = false,
  onPrevious,
  onNext,
  nextLabel = "Next",
  nextOnly = false,
  leftContent,
}: WizardFooterProps) {
  return (
    <div
      className={`flex flex-wrap items-center gap-3 ${
        nextOnly && !leftContent ? "justify-end" : "justify-between"
      }`}
    >
      {leftContent ?? (
        showPrevious && onPrevious ? (
          <button
            type="button"
            onClick={onPrevious}
            className="flex items-center gap-1.5 text-sm font-medium text-[#3762EE] transition hover:text-[#2b4fd4]"
          >
            <ArrowLeft className="h-4 w-4" />
            Previous
          </button>
        ) : (
          <span />
        )
      )}

      <div className="ml-auto flex items-center gap-3">
        {leftContent && showPrevious && onPrevious && (
          <button
            type="button"
            onClick={onPrevious}
            className="flex items-center gap-1.5 text-sm font-medium text-[#3762EE] transition hover:text-[#2b4fd4]"
          >
            <ArrowLeft className="h-4 w-4" />
            Previous
          </button>
        )}
        {onNext && <Button onClick={onNext}>{nextLabel}</Button>}
      </div>
    </div>
  );
}
