import { FileText, Plus, Search } from "lucide-react";

const docs = [
  { id: "1", title: "SYSTEM ARCHITECTURE SPEC", category: "TECHNICAL", version: "v2.1", updated: "2026-02-15" },
  { id: "2", title: "SOVEREIGN AUTHORITY PROTOCOL", category: "GOVERNANCE", version: "v1.4", updated: "2026-02-12" },
  { id: "3", title: "OPERATOR DEPLOYMENT GUIDE", category: "OPERATIONS", version: "v3.0", updated: "2026-02-10" },
  { id: "4", title: "AUDIT COMPLIANCE FRAMEWORK", category: "COMPLIANCE", version: "v1.2", updated: "2026-02-08" },
  { id: "5", title: "API INTEGRATION REFERENCE", category: "TECHNICAL", version: "v2.0", updated: "2026-02-05" },
];

const Documentation = () => {
  return (
    <div className="space-y-8">
      <div className="flex items-start justify-between">
        <div className="space-y-2">
          <h1 className="text-3xl md:text-4xl font-bold tracking-tighter">DOCUMENTATION</h1>
          <p className="text-muted-foreground text-sm">Version-controlled documents and specifications</p>
        </div>
        <button className="bg-primary text-primary-foreground px-4 py-2 text-xs tracking-wider uppercase flex items-center gap-2 hover:bg-primary/90 transition-colors">
          <Plus size={14} /> NEW DOC
        </button>
      </div>

      <div className="relative">
        <Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" />
        <input
          type="text"
          placeholder="SEARCH DOCUMENTS..."
          className="w-full bg-card border border-border pl-12 pr-4 py-3 text-sm tracking-wider placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
        />
      </div>

      <div className="space-y-2">
        {docs.map((doc) => (
          <div
            key={doc.id}
            className="flex items-center gap-4 p-4 bg-card border border-border hover:border-primary transition-colors cursor-pointer"
          >
            <FileText size={18} className="text-primary flex-shrink-0" />
            <div className="flex-1 min-w-0">
              <div className="text-sm font-semibold tracking-wider">{doc.title}</div>
              <div className="text-xs text-muted-foreground">{doc.category} · {doc.version}</div>
            </div>
            <div className="text-xs text-muted-foreground tracking-wider">{doc.updated}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Documentation;
