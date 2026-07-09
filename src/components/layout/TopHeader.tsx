import type { ReactNode } from "react";
import { ChevronRight, Home, Menu } from "lucide-react";
import { Link } from "react-router-dom";
import { UserInfo } from "../ui/UserAvatar";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface TopHeaderProps {
  breadcrumbs: BreadcrumbItem[];
  rightContent?: ReactNode;
  onMenuClick?: () => void;
}

export default function TopHeader({ breadcrumbs, rightContent, onMenuClick }: TopHeaderProps) {
  return (
    <header className="flex shrink-0 items-center justify-between border-b border-[#e8ecf4] bg-white px-4 py-4 sm:px-6">
      <div className="flex items-center gap-3">
        <button
          type="button"
          onClick={onMenuClick}
          className="rounded-md p-1.5 text-[#64748b] hover:bg-[#f1f5f9] lg:hidden"
          aria-label="Open menu"
        >
          <Menu className="h-5 w-5" />
        </button>

        <nav className="flex items-center gap-1.5 text-sm text-[#94a3b8]">
          <Link to="/campaign" className="hover:text-[#64748b]">
            <Home className="h-4 w-4" />
          </Link>
          {breadcrumbs.map((item) => (
            <span key={item.label} className="flex items-center gap-1.5">
              <ChevronRight className="h-3.5 w-3.5" />
              {item.href ? (
                <Link to={item.href} className="text-[#4f6ef7] hover:underline">
                  {item.label}
                </Link>
              ) : (
                <span className="text-[#64748b]">{item.label}</span>
              )}
            </span>
          ))}
        </nav>
      </div>

      {rightContent ?? <UserInfo name="John Doe" role="Admin" showStatus />}
    </header>
  );
}
