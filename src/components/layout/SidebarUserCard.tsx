import type { ThemeMode } from "../../types"
import Avatar from "../../assets/avatar.png"
import Sun from "../../assets/sun-03.svg"
import Moon from "../../assets/moon-02.svg"
import LogOut from "../../assets/logout.svg"

interface SidebarUserCardProps {
  name: string
  role: string
  email: string
  collapsed?: boolean
}

export default function SidebarUserCard({
  name,
  role,
  email,
  collapsed = false,
}: SidebarUserCardProps) {
  if (collapsed) {
    return (
      <div className="flex justify-center py-1" title={`${name} (${role})`}>
        <img src={Avatar} alt="icon" />
      </div>
    )
  }

  return (
    <div className="relative rounded-xl border border-[#e8ecf4] bg-[#f8fafc] p-3">
      <button
        type="button"
        className="absolute bg-[#E1E7F1] cursor-pointer right-2 top-2 rounded-md p-1 text-[#94a3b8] transition hover:bg-white hover:text-[#64748b]"
        aria-label="Logout"
      >
        <img src={LogOut} alt="icon" className="h-4 w-4" />
      </button>

      <div className="flex items-start gap-3">
        <img src={Avatar} alt="icon" />
        <div className="min-w-0 pr-6">
          <p className="truncate text-sm font-semibold text-[#1e293b]">
            {name}
          </p>
          <p className="text-xs text-[#64748b]">{role}</p>
          <p className="mt-0.5 truncate text-xs text-[#94a3b8]">{email}</p>
        </div>
      </div>
    </div>
  )
}

interface ThemeToggleProps {
  theme: ThemeMode
  onChange: (theme: ThemeMode) => void
  collapsed?: boolean
}

export function ThemeToggle({
  theme,
  onChange,
  collapsed = false,
}: ThemeToggleProps) {
  if (collapsed) {
    return (
      <div className="flex flex-col gap-1">
        <button
          type="button"
          onClick={() => onChange("light")}
          title="Light mode"
          className={`flex items-center justify-center rounded-lg p-2 transition cursor-pointer ${
            theme === "light"
              ? "bg-[#f0f4ff] text-[#4f6ef7]"
              : "text-[#94a3b8] hover:bg-[#f8fafc]"
          }`}
        >
          <img src={Sun} alt="icon" className="h-4 w-4" />
        </button>
        <button
          type="button"
          onClick={() => onChange("dark")}
          title="Dark mode"
          className={`flex items-center justify-center rounded-lg p-2 transition cursor-pointer ${
            theme === "dark"
              ? "bg-[#f0f4ff] text-[#4f6ef7]"
              : "text-[#94a3b8] hover:bg-[#f8fafc]"
          }`}
        >
          <img src={Moon} alt="icon" className="h-4 w-4" />
        </button>
      </div>
    )
  }

  return (
    <div className="flex rounded-full border border-[#e8ecf4] bg-[#F4F5F8] p-1">
      <button
        type="button"
        onClick={() => onChange("light")}
        className={`flex flex-1 items-center justify-center cursor-pointer gap-1.5 rounded-full py-2 text-xs font-medium transition ${
          theme === "light"
            ? "bg-white text-[#1e293b] shadow-sm"
            : "text-[#64748b]"
        }`}
      >
        <img src={Sun} alt="icon" className="h-3.5 w-3.5" />
        Light
      </button>
      <button
        type="button"
        onClick={() => onChange("dark")}
        className={`flex flex-1 items-center justify-center cursor-pointer gap-1.5 rounded-full py-2 text-xs font-medium transition ${
          theme === "dark"
            ? "bg-white text-[#1e293b] shadow-sm"
            : "text-[#64748b]"
        }`}
      >
        <img src={Moon} alt="icon" className="h-3.5 w-3.5" />
        Dark
      </button>
    </div>
  )
}
