export default function ReplyAnalysisCard() {
  const segments = [
    { label: "Positive", pct: 12, color: "#a855f7" },
    { label: "Neutral", pct: 14, color: "#f59e0b" },
    { label: "Negative", pct: 8, color: "#ef4444" },
  ];

  return (
    <div className="rounded-xl border border-[#e8ecf4] bg-white p-5">
      <h3 className="mb-4 text-sm font-semibold text-[#1e293b]">Reply Analysis</h3>

      <div className="flex flex-col items-center">
        <div className="relative mb-2 h-28 w-56">
          <svg viewBox="0 0 200 100" className="h-full w-full">
            <path d="M 20 90 A 80 80 0 0 1 180 90" fill="none" stroke="#f1f5f9" strokeWidth="16" strokeLinecap="round" />
            <path d="M 20 90 A 80 80 0 0 1 120 30" fill="none" stroke="#4f6ef7" strokeWidth="16" strokeLinecap="round" />
          </svg>
          <div className="absolute inset-0 flex flex-col items-center justify-end pb-1">
            <span className="text-2xl font-bold text-[#1e293b]">80%</span>
            <span className="text-xs text-[#64748b]">Discussions</span>
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-4">
          {segments.map((seg) => (
            <div key={seg.label} className="flex items-center gap-1.5 text-xs text-[#64748b]">
              <span className="h-2 w-2 rounded-full" style={{ backgroundColor: seg.color }} />
              {seg.label}: {seg.pct}%
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
