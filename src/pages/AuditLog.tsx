import { History, User } from "lucide-react";

const logs = [
  { id: "1", action: "DOCUMENT_CREATED", user: "admin@garvis.io", target: "System Architecture Spec v2.1", timestamp: "2026-02-15 14:32:00" },
  { id: "2", action: "GLOSSARY_UPDATED", user: "editor@garvis.io", target: "TELAUTHORIUM definition", timestamp: "2026-02-15 12:18:00" },
  { id: "3", action: "OPERATOR_DEPLOYED", user: "admin@garvis.io", target: "TAI-005 ORACLE", timestamp: "2026-02-14 09:45:00" },
  { id: "4", action: "BRAND_MODIFIED", user: "editor@garvis.io", target: "GARVIS PRIMARY palette", timestamp: "2026-02-13 16:22:00" },
  { id: "5", action: "USER_ROLE_CHANGED", user: "admin@garvis.io", target: "viewer@garvis.io → Editor", timestamp: "2026-02-12 11:05:00" },
  { id: "6", action: "SYSTEM_BACKUP", user: "system", target: "Full system snapshot", timestamp: "2026-02-11 03:00:00" },
  { id: "7", action: "DOCUMENT_DELETED", user: "admin@garvis.io", target: "Legacy Spec v1.0", timestamp: "2026-02-10 08:30:00" },
];

const actionColors: Record<string, string> = {
  DOCUMENT_CREATED: "text-status-online",
  GLOSSARY_UPDATED: "text-primary",
  OPERATOR_DEPLOYED: "text-status-online",
  BRAND_MODIFIED: "text-primary",
  USER_ROLE_CHANGED: "text-status-warning",
  SYSTEM_BACKUP: "text-muted-foreground",
  DOCUMENT_DELETED: "text-destructive",
};

const AuditLog = () => {
  return (
    <div className="space-y-8">
      <div className="space-y-2">
        <h1 className="text-3xl md:text-4xl font-bold tracking-tighter">AUDIT LOG</h1>
        <p className="text-muted-foreground text-sm">Immutable record of all system changes</p>
      </div>

      <div className="space-y-0">
        {logs.map((log, index) => (
          <div
            key={log.id}
            className="flex items-start gap-4 p-4 bg-card border border-border hover:border-primary/50 transition-colors"
            style={{ marginTop: index > 0 ? "-1px" : 0 }}
          >
            <History size={16} className="text-muted-foreground mt-0.5 flex-shrink-0" />
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 flex-wrap">
                <span className={`text-xs font-bold tracking-wider ${actionColors[log.action] || "text-foreground"}`}>
                  {log.action}
                </span>
                <span className="text-xs text-muted-foreground">·</span>
                <span className="text-xs text-muted-foreground">{log.target}</span>
              </div>
              <div className="flex items-center gap-2 mt-1">
                <User size={10} className="text-muted-foreground" />
                <span className="text-[10px] text-muted-foreground tracking-wider">{log.user}</span>
              </div>
            </div>
            <div className="text-[10px] text-muted-foreground tracking-wider whitespace-nowrap">
              {log.timestamp}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AuditLog;
