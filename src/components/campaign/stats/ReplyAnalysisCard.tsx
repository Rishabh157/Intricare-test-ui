export default function ReplyAnalysisCard() {
  const segments = [
    { label: "Positive", pct: 12, color: "#7367F0" },
    { label: "Neutral", pct: 14, color: "#FF9F43" },
    { label: "Negative", pct: 8, color: "#EA5455" },
  ];

  // Segmented semi-circle: dashed stroke arcs
  const arcs = [
    { color: "#7367F0", dash: "18 8", offset: 0 },
    { color: "#3762EE", dash: "22 6", offset: -26 },
    { color: "#28C76F", dash: "14 10", offset: -52 },
    { color: "#FF9F43", dash: "16 8", offset: -76 },
    { color: "#EA5455", dash: "12 10", offset: -100 },
  ];

  return (
    <div className="rounded-xl border border-[#EBE9F1] bg-white p-5">
      <h3 className="mb-2 text-sm font-semibold text-[#5E5873]">Reply Analysis</h3>

      <div className="flex flex-col items-center">
        <div className="relative mb-1 h-36 w-full max-w-[240px]">
          <svg viewBox="0 0 200 120" className="h-full w-full">
            {arcs.map((arc, i) => (
              <path
                key={i}
                d="M 24 100 A 76 76 0 0 1 176 100"
                fill="none"
                stroke={arc.color}
                strokeWidth="14"
                strokeLinecap="round"
                strokeDasharray={arc.dash}
                strokeDashoffset={arc.offset}
                opacity={0.95}
              />
            ))}
          </svg>
          <div className="absolute inset-0 flex flex-col items-center justify-end pb-2">
            <span className="text-2xl font-bold text-[#5E5873]">80%</span>
            <span className="text-xs text-[#6E6B7B]">Discussions</span>
          </div>
        </div>

        <div className="mt-2 w-full space-y-2.5 border-t border-[#EBE9F1] pt-4">
          {segments.map((seg) => (
            <div
              key={seg.label}
              className="flex items-center justify-between text-sm"
            >
              <span className="flex items-center gap-2 text-[#6E6B7B]">
                <span
                  className="h-2.5 w-2.5 rounded-full"
                  style={{ backgroundColor: seg.color }}
                />
                {seg.label}
              </span>
              <span className="font-semibold text-[#5E5873]">{seg.pct}%</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
