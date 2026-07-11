import { CloudDownload, Upload } from "lucide-react";

interface CsvUploadPanelProps {
  onFileSelect?: () => void;
}

export default function CsvUploadPanel({ onFileSelect }: CsvUploadPanelProps) {
  return (
    <div>
      <button
        type="button"
        onClick={onFileSelect}
        className="flex w-full flex-col items-center justify-center rounded-xl border border-dashed border-[#8BA6FF] bg-[#F5F8FF] px-6 py-14 transition hover:border-[#3762EE] hover:bg-[#EEF3FF]"
      >
        <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-lg border border-[#D6E0FF] bg-white text-[#3762EE] shadow-sm">
          <Upload className="h-5 w-5" strokeWidth={2} />
        </div>

        <p className="text-sm font-medium text-[#3762EE]">
          Drag a File or click a browse
        </p>
        <p className="mt-2 text-xs text-[#A6A4AD]">
          File with up to 100 rows works best
        </p>
      </button>

      <button
        type="button"
        className="mt-4 flex items-center gap-2 text-sm text-[#6E6B7B] transition hover:text-[#3762EE]"
      >
        <CloudDownload className="h-4 w-4 text-[#3762EE]" />
        Download a sample file
      </button>
    </div>
  );
}
