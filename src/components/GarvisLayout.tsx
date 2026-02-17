import { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import {
  LayoutDashboard,
  FileText,
  Network,
  MessageSquare,
  BookOpen,
  Settings,
  ChevronRight,
  Menu,
  X,
  History,
  Bot,
  Palette,
} from "lucide-react";

const navItems = [
  { path: "/", icon: LayoutDashboard, label: "DASHBOARD" },
  { path: "/docs", icon: FileText, label: "DOCUMENTATION" },
  { path: "/architecture", icon: Network, label: "ARCHITECTURE" },
  { path: "/pigpen", icon: Bot, label: "PIG PEN" },
  { path: "/brands", icon: Palette, label: "BRANDS" },
  { path: "/chat", icon: MessageSquare, label: "GARVIS AI" },
  { path: "/glossary", icon: BookOpen, label: "GLOSSARY" },
  { path: "/audit", icon: History, label: "AUDIT LOG" },
  { path: "/settings", icon: Settings, label: "SETTINGS" },
];

const Sidebar = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  const location = useLocation();

  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 bg-background/80 z-40 lg:hidden"
          onClick={onClose}
        />
      )}
      <aside
        className={`
          fixed top-0 left-0 h-full w-64 bg-sidebar border-r border-sidebar-border z-50
          transform transition-transform duration-200 ease-linear
          ${isOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}
        `}
      >
        <div className="h-16 border-b border-sidebar-border flex items-center px-6">
          <span className="text-xl font-bold tracking-tight text-primary">
            GARVIS
          </span>
          <span className="text-xs text-muted-foreground ml-2 tracking-widest">42</span>
          <button
            className="ml-auto lg:hidden p-2 hover:bg-sidebar-accent text-sidebar-foreground"
            onClick={onClose}
          >
            <X size={18} />
          </button>
        </div>

        <nav className="p-4 space-y-1 h-[calc(100%-10rem)] overflow-y-auto">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.path;
            return (
              <NavLink
                key={item.path}
                to={item.path}
                onClick={onClose}
                className={`
                  flex items-center gap-3 px-4 py-3 text-xs tracking-wider
                  transition-colors duration-100
                  ${
                    isActive
                      ? "bg-primary text-primary-foreground"
                      : "text-muted-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
                  }
                `}
              >
                <Icon size={16} strokeWidth={1.5} />
                {item.label}
                {isActive && <ChevronRight size={14} className="ml-auto" />}
              </NavLink>
            );
          })}
        </nav>

        <div className="absolute bottom-0 left-0 right-0 border-t border-sidebar-border p-4">
          <div className="px-4 py-2">
            <span className="text-[10px] text-muted-foreground tracking-wider">
              v2.0.0 // PEARL & PIG
            </span>
          </div>
        </div>
      </aside>
    </>
  );
};

const Header = ({ onMenuClick }: { onMenuClick: () => void }) => {
  const location = useLocation();
  const currentPage = navItems.find((item) => item.path === location.pathname);

  return (
    <header className="h-16 border-b border-border flex items-center px-6 bg-background/80 backdrop-blur-sm sticky top-0 z-30">
      <button
        className="lg:hidden p-2 mr-4 hover:bg-secondary text-foreground"
        onClick={onMenuClick}
      >
        <Menu size={20} />
      </button>
      <div className="flex items-center gap-2">
        <span className="text-xs text-muted-foreground tracking-wider">
          GARVIS //
        </span>
        <span className="text-sm font-semibold tracking-wider uppercase">
          {currentPage?.label || "SYSTEM"}
        </span>
      </div>
      <div className="ml-auto flex items-center gap-2">
        <span className="w-2 h-2 bg-status-online rounded-full animate-pulse" />
        <span className="text-xs text-muted-foreground tracking-wider">
          OPERATIONAL
        </span>
      </div>
    </header>
  );
};

const GarvisLayout = ({ children }: { children: React.ReactNode }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
      <div className="lg:ml-64">
        <Header onMenuClick={() => setSidebarOpen(true)} />
        <main className="p-6 md:p-8 lg:p-12">{children}</main>
      </div>
    </div>
  );
};

export default GarvisLayout;
