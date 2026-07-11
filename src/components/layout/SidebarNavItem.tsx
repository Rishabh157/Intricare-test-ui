import type { ReactNode } from "react";
import { Link, useLocation } from "react-router-dom";
import marketingIcon from "../../assets/marketing.svg"

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
      className={`flex items-center rounded-sm text-sm font-medium transition ${
        collapsed ? "justify-center px-2 py-3" : "gap-3 px-4 py-3"
      } ${
        isActive
          ? "text-white shadow-sm"
          : "text-[#64748b] hover:bg-[#f8fafc] hover:text-[#334155]"
      }`}
      style={
        isActive
          ? {
              background:
                "linear-gradient(239.27deg, #8BA6FF -27.06%, #3762EE 83.4%)",
            }
          : undefined
      }
    >
      <span className="shrink-0"><img src={marketingIcon} alt="icon" /></span>  
      {!collapsed && <span>{label}</span>}
    </Link>
  );
}
