import type { ReactNode } from "react";
import { Link, useLocation } from "react-router-dom";

interface SidebarNavItemProps {
  to: string;
  label: string;
  icon: ReactNode;
  collapsed?: boolean;
}

export default function SidebarNavItem({
  to,
  label,
  icon,
  collapsed = false,
}: SidebarNavItemProps) {
  const location = useLocation();
  const isActive = location.pathname === to || location.pathname.startsWith(`${to}/`);

  return (
    <Link
      to={to}
      title={collapsed ? label : undefined}
      className={`flex items-center rounded-xl text-sm font-medium transition ${
        collapsed ? "justify-center px-2 py-3" : "gap-3 px-4 py-3"
      } ${
        isActive
          ? "bg-gradient-to-r from-[#4f6ef7] to-[#6b7ff7] text-white shadow-sm"
          : "text-[#64748b] hover:bg-[#f8fafc] hover:text-[#334155]"
      }`}
    >
      <span className="shrink-0">{icon}</span>
      {!collapsed && <span>{label}</span>}
    </Link>
  );
}
