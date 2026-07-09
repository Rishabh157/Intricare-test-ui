import { Rocket } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Button from "../../ui/Button";

function StatsIllustration() {
  return (
    <svg
      viewBox="0 0 200 140"
      className="mx-auto h-auto w-full max-w-[200px]"
      fill="none"
      aria-hidden="true"
    >
      <rect x="30" y="50" width="60" height="45" rx="4" fill="#E8EDF8" />
      <rect x="38" y="58" width="44" height="8" rx="2" fill="#CBD5E1" />
      <rect x="38" y="72" width="30" height="6" rx="2" fill="#E2E8F0" />
      <rect x="110" y="40" width="60" height="55" rx="4" fill="#F0F4FF" />
      <circle cx="140" cy="65" r="18" fill="none" stroke="#93C5FD" strokeWidth="6" />
      <path d="M140 65 L140 52 A13 13 0 0 1 150 58 Z" fill="#4F6EF7" />
      <rect x="70" y="100" width="80" height="6" rx="3" fill="#E2E8F0" />
    </svg>
  );
}

export default function StatsStep() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center rounded-xl border border-[#e8ecf4] bg-white py-16 px-4">
      <StatsIllustration />
      <h3 className="mt-6 text-lg font-semibold text-[#1e293b]">No Stats Yet</h3>
      <p className="mt-2 max-w-sm text-center text-sm text-[#64748b]">
        Once Campaign is launched, Statistics will be shown here.
      </p>
      <Button onClick={() => navigate("/campaign/tech-founder")} className="mt-8 gap-2">
        <Rocket className="h-4 w-4" />
        Launch Campaign
      </Button>
    </div>
  );
}
