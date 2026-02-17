import { useNavigate } from "react-router-dom";
import {
  Database,
  FileText,
  Layers,
  Shield,
  Link2,
  ArrowRight,
  Zap,
  Bot,
  Palette,
} from "lucide-react";

const stats = {
  system_status: "OPERATIONAL",
  authority_chain: "VERIFIED",
  total_documents: 12,
  total_glossary_terms: 47,
  total_components: 8,
  total_pigpen_operators: 42,
  total_brand_profiles: 3,
};

const components = [
  { id: "1", layer: "L1", name: "TELAUTHORIUM", description: "Sovereign rights registry and authority verification layer" },
  { id: "2", layer: "L2", name: "GARVIS CORE", description: "Intelligence routing and decision orchestration engine" },
  { id: "3", layer: "L3", name: "FLIGHTPATH COS", description: "Phase control and operational sequencing system" },
  { id: "4", layer: "L4", name: "MOSE", description: "Multi-operator scheduling and execution router" },
];

const StatCard = ({
  icon: Icon,
  label,
  value,
  onClick,
}: {
  icon: React.ElementType;
  label: string;
  value: string | number;
  onClick: () => void;
}) => (
  <div
    className="bg-card border border-border p-6 hover:border-primary transition-colors duration-100 cursor-pointer group"
    onClick={onClick}
  >
    <div className="flex items-start justify-between mb-4">
      <Icon size={20} className="text-primary" strokeWidth={1.5} />
      <ArrowRight
        size={16}
        className="text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity"
      />
    </div>
    <div className="text-3xl font-bold mb-1">{value}</div>
    <div className="text-xs tracking-wider text-muted-foreground uppercase">
      {label}
    </div>
  </div>
);

const StatusBadge = ({ status }: { status: string }) => {
  const colorMap: Record<string, string> = {
    OPERATIONAL: "bg-status-online",
    WARNING: "bg-status-warning",
    CRITICAL: "bg-status-critical",
    INACTIVE: "bg-muted",
  };

  return (
    <span
      className={`inline-flex items-center gap-2 px-3 py-1 ${colorMap[status] || "bg-muted"} text-primary-foreground text-xs tracking-wider`}
    >
      <span className="w-1.5 h-1.5 bg-primary-foreground rounded-full animate-pulse" />
      {status}
    </span>
  );
};

const Dashboard = () => {
  const navigate = useNavigate();

  return (
    <div className="space-y-8">
      <div className="space-y-2">
        <h1 className="text-3xl md:text-4xl font-bold tracking-tighter">
          SYSTEM OVERVIEW
        </h1>
        <p className="text-muted-foreground text-sm">
          Sovereign intelligence and enforcement layer status
        </p>
      </div>

      {/* System Status Banner */}
      <div className="bg-card border border-border p-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <Shield size={24} className="text-primary" />
          <div>
            <div className="text-xs text-muted-foreground tracking-wider">SYSTEM STATUS</div>
            <div className="text-lg font-bold">{stats.system_status}</div>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <Link2 size={24} className="text-status-online" />
          <div>
            <div className="text-xs text-muted-foreground tracking-wider">AUTHORITY CHAIN</div>
            <div className="text-lg font-bold text-status-online">{stats.authority_chain}</div>
          </div>
        </div>
        <StatusBadge status={stats.system_status} />
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-px bg-border">
        <StatCard icon={FileText} label="Documents" value={stats.total_documents} onClick={() => navigate("/docs")} />
        <StatCard icon={Database} label="Glossary" value={stats.total_glossary_terms} onClick={() => navigate("/glossary")} />
        <StatCard icon={Layers} label="Components" value={stats.total_components} onClick={() => navigate("/architecture")} />
        <StatCard icon={Bot} label="Pig Pen" value={stats.total_pigpen_operators} onClick={() => navigate("/pigpen")} />
        <StatCard icon={Palette} label="Brands" value={stats.total_brand_profiles} onClick={() => navigate("/brands")} />
        <StatCard icon={Zap} label="GARVIS AI" value="ONLINE" onClick={() => navigate("/chat")} />
      </div>

      {/* Authority Flow */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-bold tracking-tight">AUTHORITY FLOW</h2>
          <button
            className="text-xs text-primary hover:underline tracking-wider"
            onClick={() => navigate("/architecture")}
          >
            VIEW FULL DIAGRAM →
          </button>
        </div>
        <div className="space-y-2">
          {components.map((component) => (
            <div
              key={component.id}
              className="flex items-center gap-4 p-4 border border-border hover:border-primary transition-colors duration-100 cursor-pointer bg-card"
              onClick={() => navigate("/architecture")}
            >
              <div className="w-8 h-8 border border-primary flex items-center justify-center text-xs text-primary">
                {component.layer}
              </div>
              <div className="flex-1">
                <div className="text-sm font-semibold uppercase tracking-wider">{component.name}</div>
                <div className="text-xs text-muted-foreground line-clamp-1">{component.description}</div>
              </div>
              <span className="w-2 h-2 bg-status-online rounded-full" />
            </div>
          ))}
        </div>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <button
          className="bg-primary text-primary-foreground p-6 text-sm tracking-wider uppercase hover:bg-primary/90 transition-colors duration-100 flex items-center justify-between"
          onClick={() => navigate("/chat")}
        >
          ASK GARVIS AI
          <ArrowRight size={18} />
        </button>
        <button
          className="bg-secondary text-secondary-foreground p-6 text-sm tracking-wider uppercase hover:bg-secondary/80 transition-colors duration-100 flex items-center justify-between border border-border"
          onClick={() => navigate("/docs")}
        >
          BROWSE DOCS
          <ArrowRight size={18} />
        </button>
        <button
          className="bg-secondary text-secondary-foreground p-6 text-sm tracking-wider uppercase hover:bg-secondary/80 transition-colors duration-100 flex items-center justify-between border border-border"
          onClick={() => navigate("/glossary")}
        >
          SEARCH GLOSSARY
          <ArrowRight size={18} />
        </button>
      </div>
    </div>
  );
};

export default Dashboard;
