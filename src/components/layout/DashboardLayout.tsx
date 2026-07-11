import { useSidebar } from "./SidebarContext";
import type { ReactNode } from "react";
import Sidebar from "./Sidebar";
import TopHeader from "./TopHeader";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface DashboardLayoutProps {
  breadcrumbs: BreadcrumbItem[];
  children: ReactNode;
  headerRight?: ReactNode;
}

export default function DashboardLayout({
  breadcrumbs,
  children,
  headerRight,
}: DashboardLayoutProps) {
  const { collapsed, mobileOpen, setMobileOpen } = useSidebar();

  return (
    <div className="flex h-screen overflow-hidden bg-[#f4f6fb]">
      {mobileOpen && (
        <button
          type="button"
          aria-label="Close sidebar"
          className="fixed inset-0 z-40 bg-black/30 lg:hidden"
          onClick={() => setMobileOpen(false)}
        />
      )}

      <div
        className={`fixed inset-y-0 left-0 z-50 h-screen shrink-0 transition-all duration-300 ease-in-out lg:static ${
          mobileOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
        } ${collapsed ? "w-[72px] lg:w-[72px]" : "w-[240px]"}`}
      >
        <Sidebar onClose={() => setMobileOpen(false)} />
      </div>

      <div className="flex min-h-0 min-w-0 flex-1 flex-col overflow-hidden">
        <TopHeader
          breadcrumbs={breadcrumbs}
          rightContent={headerRight}
          onMenuClick={() => setMobileOpen(true)}
        />
        <main className="min-h-0 flex-1 overflow-y-auto">
          <div className="min-h-0 w-full">{children}</div>
        </main>
      </div>
    </div>
  );
}
