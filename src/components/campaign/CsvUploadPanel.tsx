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
        className="flex w-full flex-col items-center justify-center rounded-xl border-2 border-dashed border-[#93c5fd] bg-[#f8fbff] px-6 py-12 transition hover:border-[#4f6ef7] hover:bg-[#f0f4ff]"
      >
        <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-[#e0eaff] text-[#4f6ef7]">
          <Upload className="h-6 w-6" />
        </div>
        <p className="text-sm font-medium text-[#1e293b]">
          Drag a File or <span className="text-[#4f6ef7]">click a browse</span>
        </p>
        <p className="mt-1 text-xs text-[#94a3b8]">File with up to 100 rows works best</p>
      </button>

      <button
        type="button"
        className="mt-4 flex items-center gap-2 text-sm text-[#4f6ef7] hover:underline"
      >
        <CloudDownload className="h-4 w-4" />
        Download a sample file
      </button>
    </div>
  );
}
