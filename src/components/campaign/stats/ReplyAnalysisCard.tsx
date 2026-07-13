const SEGMENT_COUNT = 21;
const ACTIVE_COUNT = 17; // ~80% of 21

function lerpColor(a: string, b: string, t: number) {
  const parse = (hex: string) => {
    const h = hex.replace("#", "");
    return [
      parseInt(h.slice(0, 2), 16),
      parseInt(h.slice(2, 4), 16),
      parseInt(h.slice(4, 6), 16),
    ] as const;
  };
  const [ar, ag, ab] = parse(a);
  const [br, bg, bb] = parse(b);
  const toHex = (n: number) =>
    Math.round(n)
      .toString(16)
      .padStart(2, "0");
  return `#${toHex(ar + (br - ar) * t)}${toHex(ag + (bg - ag) * t)}${toHex(ab + (bb - ab) * t)}`;
}

const legend = [
  { label: "Positive", pct: 12, color: "#7255DE" },
  { label: "Neutral", pct: 14, color: "#F4A226" },
  { label: "Negative", pct: 8, color: "#EA5455" },
];

export default function ReplyAnalysisCard() {
  const cx = 100;
  const cy = 108;
  const radius = 72;
  const barLength = 16;
  const barWidth = 5;

  // Semi-circle from 180° (left) to 0° (right)
  const startAngle = Math.PI;
  const endAngle = 0;

  const segments = Array.from({ length: SEGMENT_COUNT }, (_, i) => {
    const t = i / (SEGMENT_COUNT - 1);
    const angle = startAngle + (endAngle - startAngle) * t;
    const isActive = i < ACTIVE_COUNT;
    const color = isActive
      ? lerpColor("#3762EE", "#A5B4FC", i / Math.max(ACTIVE_COUNT - 1, 1))
      : "#D0D4E4";

    const x1 = cx + Math.cos(angle) * radius;
    const y1 = cy - Math.sin(angle) * radius;
    const x2 = cx + Math.cos(angle) * (radius + barLength);
    const y2 = cy - Math.sin(angle) * (radius + barLength);
    const rotation = (-angle * 180) / Math.PI + 90;

    return { x1, y1, x2, y2, rotation, color, i };
  });

  return (
    <div className="rounded-xl border border-[#EBE9F1] bg-white p-5 shadow-[0_2px_8px_rgba(34,41,47,0.04)]">
      <h3 className="text-base font-semibold text-[#5E5873]">Reply Analysis</h3>

      <div className="relative mx-auto mt-2 h-[160px] w-full max-w-[260px]">
        <svg viewBox="0 0 200 130" className="h-full w-full" aria-hidden>
          {/* Inner dashed arc */}
          <path
            d="M 28 108 A 72 72 0 0 1 172 108"
            fill="none"
            stroke="#D0D4E4"
            strokeWidth="1.25"
            strokeDasharray="3 4"
            strokeLinecap="round"
          />

          {/* Segmented bars */}
          {segments.map((seg) => {
            const midX = (seg.x1 + seg.x2) / 2;
            const midY = (seg.y1 + seg.y2) / 2;
            return (
              <rect
                key={seg.i}
                x={midX - barWidth / 2}
                y={midY - barLength / 2}
                width={barWidth}
                height={barLength}
                rx={2.5}
                fill={seg.color}
                transform={`rotate(${seg.rotation} ${midX} ${midY})`}
              />
            );
          })}
        </svg>

        <div className="pointer-events-none absolute inset-x-0 bottom-0 flex flex-col items-center">
          <span className="text-[28px] font-bold leading-none text-[#5E5873]">
            80%
          </span>
          <span className="mt-1.5 h-[2px] w-10 rounded-full bg-[#3762EE]" />
          <span className="mt-1.5 text-sm font-semibold text-[#5E5873]">
            Discussions
          </span>
        </div>
      </div>

      <div className="mt-5 border-t border-[#EBE9F1] pt-4">
        <div className="mb-3 flex items-center justify-between text-sm font-semibold text-[#5E5873]">
          <span>Status</span>
          <span>Results</span>
        </div>

        <div className="space-y-3">
          {legend.map((row) => (
            <div
              key={row.label}
              className="flex items-center justify-between text-sm font-semibold text-[#5E5873]"
            >
              <span className="flex items-center gap-2.5">
                <span
                  className="h-2.5 w-2.5 rounded-full"
                  style={{ backgroundColor: row.color }}
                />
                {row.label}
              </span>
              <span>{row.pct}%</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
