import { useState } from "react";
import { Bot, Plus, Search } from "lucide-react";

const operators = [
  { id: "TAI-001", name: "SENTINEL", type: "MONITORING", status: "ACTIVE", description: "Continuous system health and anomaly detection operator" },
  { id: "TAI-002", name: "CIPHER", type: "ENCRYPTION", status: "ACTIVE", description: "Data encryption and secure communication operator" },
  { id: "TAI-003", name: "HERALD", type: "NOTIFICATION", status: "ACTIVE", description: "Alert routing and notification management operator" },
  { id: "TAI-004", name: "SCRIBE", type: "DOCUMENTATION", status: "STANDBY", description: "Automated documentation and report generation operator" },
  { id: "TAI-005", name: "ORACLE", type: "ANALYTICS", status: "ACTIVE", description: "Predictive analytics and trend analysis operator" },
  { id: "TAI-006", name: "WARDEN", type: "SECURITY", status: "ACTIVE", description: "Perimeter defense and intrusion detection operator" },
  { id: "TAI-007", name: "NEXUS", type: "INTEGRATION", status: "ACTIVE", description: "Cross-system data bridge and API orchestration operator" },
  { id: "TAI-008", name: "FORGE", type: "BUILD", status: "ACTIVE", description: "Automated build pipeline and deployment operator" },
  { id: "TAI-009", name: "COMPASS", type: "NAVIGATION", status: "ACTIVE", description: "User journey mapping and flow optimization operator" },
  { id: "TAI-010", name: "VAULT", type: "STORAGE", status: "ACTIVE", description: "Secure data archival and retrieval operator" },
  { id: "TAI-011", name: "PRISM", type: "VISUALIZATION", status: "ACTIVE", description: "Data visualization and dashboard rendering operator" },
  { id: "TAI-012", name: "ECHO", type: "LOGGING", status: "ACTIVE", description: "System event capture and replay operator" },
  { id: "TAI-013", name: "RAVEN", type: "MESSAGING", status: "ACTIVE", description: "Inter-operator communication and message relay operator" },
  { id: "TAI-014", name: "ATLAS", type: "MAPPING", status: "STANDBY", description: "Infrastructure topology and dependency mapping operator" },
  { id: "TAI-015", name: "TIDE", type: "SCHEDULING", status: "ACTIVE", description: "Time-based task orchestration and cron management operator" },
  { id: "TAI-016", name: "SPARK", type: "PROCESSING", status: "ACTIVE", description: "Real-time event stream processing operator" },
  { id: "TAI-017", name: "ANCHOR", type: "VALIDATION", status: "ACTIVE", description: "Data integrity verification and schema validation operator" },
  { id: "TAI-018", name: "GHOST", type: "STEALTH", status: "STANDBY", description: "Covert operations and silent audit operator" },
  { id: "TAI-019", name: "FLARE", type: "ALERTING", status: "ACTIVE", description: "Emergency escalation and critical alert operator" },
  { id: "TAI-020", name: "WEAVE", type: "ETL", status: "ACTIVE", description: "Extract-transform-load pipeline management operator" },
  { id: "TAI-021", name: "BASTION", type: "FIREWALL", status: "ACTIVE", description: "Network policy enforcement and traffic filtering operator" },
  { id: "TAI-022", name: "CHRONICLE", type: "HISTORY", status: "ACTIVE", description: "Version history tracking and changelog generation operator" },
  { id: "TAI-023", name: "DRIFT", type: "COMPLIANCE", status: "ACTIVE", description: "Configuration drift detection and compliance monitoring operator" },
  { id: "TAI-024", name: "MERIDIAN", type: "ROUTING", status: "ACTIVE", description: "Intelligent request routing and load distribution operator" },
  { id: "TAI-025", name: "TEMPEST", type: "TESTING", status: "ACTIVE", description: "Chaos engineering and stress testing operator" },
  { id: "TAI-026", name: "CAIRN", type: "CHECKPOINT", status: "STANDBY", description: "System state snapshot and recovery point operator" },
  { id: "TAI-027", name: "LOOM", type: "WORKFLOW", status: "ACTIVE", description: "Multi-step workflow orchestration and state machine operator" },
  { id: "TAI-028", name: "SABLE", type: "CLASSIFICATION", status: "ACTIVE", description: "Data classification and sensitivity labeling operator" },
  { id: "TAI-029", name: "PYLON", type: "INFRASTRUCTURE", status: "ACTIVE", description: "Cloud resource provisioning and scaling operator" },
  { id: "TAI-030", name: "QUARRY", type: "MINING", status: "ACTIVE", description: "Pattern mining and knowledge extraction operator" },
  { id: "TAI-031", name: "REED", type: "PARSING", status: "ACTIVE", description: "Document parsing and structured data extraction operator" },
  { id: "TAI-032", name: "SIGIL", type: "AUTHENTICATION", status: "ACTIVE", description: "Token management and identity verification operator" },
  { id: "TAI-033", name: "THORN", type: "DEFENSE", status: "ACTIVE", description: "Threat response and automated countermeasure operator" },
  { id: "TAI-034", name: "UMBRA", type: "BACKUP", status: "ACTIVE", description: "Shadow replication and disaster recovery operator" },
  { id: "TAI-035", name: "VIGIL", type: "WATCHDOG", status: "ACTIVE", description: "Continuous uptime monitoring and heartbeat operator" },
  { id: "TAI-036", name: "WRAITH", type: "SCANNING", status: "STANDBY", description: "Deep network scanning and vulnerability assessment operator" },
  { id: "TAI-037", name: "ZENITH", type: "OPTIMIZATION", status: "ACTIVE", description: "Performance tuning and resource optimization operator" },
  { id: "TAI-038", name: "AXIOM", type: "RULES", status: "ACTIVE", description: "Business rule engine and policy enforcement operator" },
  { id: "TAI-039", name: "BEACON", type: "DISCOVERY", status: "ACTIVE", description: "Service discovery and endpoint registration operator" },
  { id: "TAI-040", name: "CREST", type: "REPORTING", status: "ACTIVE", description: "Executive reporting and KPI dashboard generation operator" },
  { id: "TAI-041", name: "DELTA", type: "SYNC", status: "ACTIVE", description: "Incremental synchronization and conflict resolution operator" },
  { id: "TAI-042", name: "EPOCH", type: "MIGRATION", status: "STANDBY", description: "Schema migration and data transformation operator" },
];

const PigPen = () => {
  const [search, setSearch] = useState("");

  const filtered = operators.filter(
    (op) =>
      op.name.toLowerCase().includes(search.toLowerCase()) ||
      op.id.toLowerCase().includes(search.toLowerCase()) ||
      op.type.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="space-y-8">
      <div className="flex items-start justify-between">
        <div className="space-y-2">
          <h1 className="text-3xl md:text-4xl font-bold tracking-tighter">PIG PEN</h1>
          <p className="text-muted-foreground text-sm">AI operator registry and management (TAI-D) — {operators.length} operators registered</p>
        </div>
        <button className="bg-primary text-primary-foreground px-4 py-2 text-xs tracking-wider uppercase flex items-center gap-2 hover:bg-primary/90 transition-colors">
          <Plus size={14} /> NEW OPERATOR
        </button>
      </div>

      <div className="relative">
        <Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" />
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="SEARCH OPERATORS..."
          className="w-full bg-card border border-border pl-12 pr-4 py-3 text-sm tracking-wider placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
        />
      </div>

      <div className="text-xs text-muted-foreground tracking-wider">
        SHOWING {filtered.length} OF {operators.length} OPERATORS
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filtered.map((op) => (
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
