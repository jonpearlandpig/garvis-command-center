import { Bot, Plus, Search } from "lucide-react";

const operators = [
  { id: "TAI-001", name: "SENTINEL", type: "MONITORING", status: "ACTIVE", description: "Continuous system health and anomaly detection operator" },
  { id: "TAI-002", name: "CIPHER", type: "ENCRYPTION", status: "ACTIVE", description: "Data encryption and secure communication operator" },
  { id: "TAI-003", name: "HERALD", type: "NOTIFICATION", status: "ACTIVE", description: "Alert routing and notification management operator" },
  { id: "TAI-004", name: "SCRIBE", type: "DOCUMENTATION", status: "STANDBY", description: "Automated documentation and report generation operator" },
  { id: "TAI-005", name: "ORACLE", type: "ANALYTICS", status: "ACTIVE", description: "Predictive analytics and trend analysis operator" },
];

const PigPen = () => {
  return (
    <div className="space-y-8">
      <div className="flex items-start justify-between">
        <div className="space-y-2">
          <h1 className="text-3xl md:text-4xl font-bold tracking-tighter">PIG PEN</h1>
          <p className="text-muted-foreground text-sm">AI operator registry and management (TAI-D)</p>
        </div>
        <button className="bg-primary text-primary-foreground px-4 py-2 text-xs tracking-wider uppercase flex items-center gap-2 hover:bg-primary/90 transition-colors">
          <Plus size={14} /> NEW OPERATOR
        </button>
      </div>

      <div className="relative">
        <Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" />
        <input
          type="text"
          placeholder="SEARCH OPERATORS..."
          className="w-full bg-card border border-border pl-12 pr-4 py-3 text-sm tracking-wider placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {operators.map((op) => (
          <div key={op.id} className="bg-card border border-border p-6 hover:border-primary transition-colors cursor-pointer space-y-4">
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-3">
                <Bot size={20} className="text-primary" />
                <div>
                  <div className="text-sm font-bold tracking-wider">{op.name}</div>
                  <div className="text-[10px] text-muted-foreground tracking-wider">{op.id} · {op.type}</div>
                </div>
              </div>
              <span className={`px-2 py-1 text-[10px] tracking-wider ${op.status === "ACTIVE" ? "bg-status-online/20 text-status-online" : "bg-muted text-muted-foreground"}`}>
                {op.status}
              </span>
            </div>
            <p className="text-xs text-muted-foreground">{op.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PigPen;
