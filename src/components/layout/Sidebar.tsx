import { Megaphone, PanelLeftClose, PanelLeftOpen, X } from "lucide-react";
import { useState } from "react";
import type { ThemeMode } from "../../types";
import { useSidebar } from "./SidebarContext";
import SidebarNavItem from "./SidebarNavItem";
import SidebarUserCard, { ThemeToggle } from "./SidebarUserCard";
import LogoImg from "../../assets/Isolation_Mode.svg"
import PanelOpen from "../../assets/panel-right-close.svg"

const USER = {
  name: "John Doe",
  role: "Admin",
  email: "johndoe@gmail.com",
};

interface SidebarProps {
  onClose?: () => void;
}

export default function Sidebar({ onClose }: SidebarProps) {
  const { collapsed, toggleCollapsed } = useSidebar();
  const [theme, setTheme] = useState<ThemeMode>("light");

  return (
    <aside
      className={`flex h-full w-full shrink-0 flex-col overflow-hidden border-r border-[#e8ecf4] bg-white py-5 transition-all duration-300 ${
        collapsed ? "px-2" : "px-4"
      }`}
    >
      <div
        className={`mb-6 flex items-center ${
          collapsed ? "flex-col gap-3" : "justify-between px-1"
        }`}
      >
        <div className={`flex items-center ${collapsed ? "justify-center" : "gap-1"}`}>
          <div className="flex cursor-pointer h-9 w-9 shrink-0 items-center justify-center rounded-lg">
            <img src={LogoImg} alt="icon" />
          </div>
          {!collapsed && (
            <span className="text-sm font-bold text-[#00002B]">Frontend Task</span>
          )}
        </div>

        <div className={`flex items-center gap-1 ${collapsed ? "" : ""}`}>
          <button
            type="button"
            onClick={toggleCollapsed}
            className="hidden rounded-md p-1.5 cursor-pointer text-[#94a3b8] transition hover:bg-[#f1f5f9] hover:text-[#64748b] lg:block"
            aria-label={collapsed ? "Expand sidebar" : "Collapse sidebar"}
          >
            {collapsed ? (
              <img src={PanelOpen} alt="icon" className="h-4 w-4 "/>
            ) : (
              <img src={PanelOpen} alt="icon" className="h-4 w-4 rotate-180"/>
            )}
          </button>

          {!collapsed && (
            <button
              type="button"
              onClick={onClose}
              className="rounded-md p-1.5 text-[#94a3b8] hover:bg-[#f1f5f9] lg:hidden"
              aria-label="Close sidebar"
            >
              <X className="h-4 w-4" />
            </button>
          )}
        </div>
      </div>

      <nav className="flex-1 space-y-1">
        <SidebarNavItem
          to="/campaign"
          label="Campaign"
          icon={<Megaphone className="h-4 w-4" />}
          collapsed={collapsed}
        />
      </nav>

      <div className="mt-auto space-y-3">
        <SidebarUserCard {...USER} collapsed={collapsed} />
        <ThemeToggle theme={theme} onChange={setTheme} collapsed={collapsed} />
      </div>
    </aside>
  );
}
