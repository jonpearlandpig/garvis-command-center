import { useState } from "react";
import { Bot, Search, ChevronDown, ChevronRight, Shield, Zap, Eye, Users } from "lucide-react";
import { operatorRegistry, totalOperatorCount, type Operator } from "@/data/operatorRegistry";

const weightColors: Record<number, string> = {
  5: "bg-primary text-primary-foreground",
  4: "bg-primary/60 text-primary-foreground",
  3: "bg-primary/30 text-foreground",
  2: "bg-muted text-muted-foreground",
};

const phaseColors: Record<string, string> = {
  Spark: "border-status-warning text-status-warning",
  Build: "border-primary text-primary",
  Launch: "border-status-online text-status-online",
  Expand: "border-blue-400 text-blue-400",
  Evergreen: "border-emerald-500 text-emerald-500",
};

const OperatorCard = ({ op }: { op: Operator }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div
      className="bg-card border border-border hover:border-primary/60 transition-colors cursor-pointer"
      onClick={() => setExpanded(!expanded)}
    >
      <div className="p-5 space-y-3">
        {/* Header */}
        <div className="flex items-start justify-between gap-3">
          <div className="flex items-center gap-3 min-w-0">
            <div className="w-8 h-8 border border-primary/50 flex items-center justify-center flex-shrink-0">
              <Bot size={14} className="text-primary" />
            </div>
            <div className="min-w-0">
              <div className="text-sm font-bold tracking-wider truncate">{op.name}</div>
              <div className="text-[10px] text-muted-foreground tracking-wider">{op.operator_id}</div>
            </div>
          </div>
          <div className="flex items-center gap-2 flex-shrink-0">
            <span className={`w-6 h-6 flex items-center justify-center text-[10px] font-bold ${weightColors[op.decision_weight] || "bg-muted text-muted-foreground"}`}>
              {op.decision_weight}
            </span>
            {expanded ? <ChevronDown size={14} className="text-muted-foreground" /> : <ChevronRight size={14} className="text-muted-foreground" />}
          </div>
        </div>

        {/* Title & Tagline */}
        <div>
          <div className="text-xs text-foreground/80 tracking-wider">{op.title}</div>
          {op.tagline && (
            <div className="text-[10px] text-primary/80 italic mt-0.5">"{op.tagline}"</div>
          )}
        </div>

        {/* Phase badges */}
        <div className="flex flex-wrap gap-1">
          {op.phase_ownership.map((phase) => (
            <span
              key={phase}
              className={`px-2 py-0.5 text-[9px] tracking-wider border ${phaseColors[phase] || "border-border text-muted-foreground"}`}
            >
              {phase.toUpperCase()}
            </span>
          ))}
        </div>
      </div>

      {/* Expanded Details */}
      {expanded && (
        <div className="border-t border-border p-5 space-y-4 bg-background/50">
          {/* Always show role summary */}
          <div className="flex gap-8 flex-wrap">
            <div>
              <div className="text-[10px] text-muted-foreground tracking-wider mb-1">ROLE</div>
              <div className="text-xs">{op.title}</div>
            </div>
            <div>
              <div className="text-[10px] text-muted-foreground tracking-wider mb-1">WEIGHT</div>
              <div className="text-xs font-bold text-primary">{op.decision_weight} / 5</div>
            </div>
            <div>
              <div className="text-[10px] text-muted-foreground tracking-wider mb-1">PHASES</div>
              <div className="text-xs">{op.phase_ownership.join(" → ")}</div>
            </div>
          </div>

          {op.focus_areas && op.focus_areas.length > 0 && (
            <div>
              <div className="text-[10px] text-muted-foreground tracking-wider mb-2 flex items-center gap-1">
                <Eye size={10} /> FOCUS AREAS
              </div>
              <div className="flex flex-wrap gap-1">
                {op.focus_areas.map((area) => (
                  <span key={area} className="px-2 py-0.5 text-[10px] bg-secondary text-secondary-foreground tracking-wider">
                    {area}
                  </span>
                ))}
              </div>
            </div>
          )}

          {(op.thinking_style || op.core_instinct) && (
            <div className="flex gap-8">
              {op.thinking_style && (
                <div>
                  <div className="text-[10px] text-muted-foreground tracking-wider mb-1">THINKING STYLE</div>
                  <div className="text-xs">{op.thinking_style}</div>
                </div>
              )}
              {op.core_instinct && (
                <div>
                  <div className="text-[10px] text-muted-foreground tracking-wider mb-1">CORE INSTINCT</div>
                  <div className="text-xs text-primary">{op.core_instinct}</div>
                </div>
              )}
            </div>
          )}

          {op.strengths && (
            <div>
              <div className="text-[10px] text-muted-foreground tracking-wider mb-1 flex items-center gap-1">
                <Zap size={10} /> STRENGTHS
              </div>
              <div className="text-xs text-status-online">{op.strengths.join(" · ")}</div>
            </div>
          )}

          {op.blind_spots && (
            <div>
              <div className="text-[10px] text-muted-foreground tracking-wider mb-1 flex items-center gap-1">
                <Shield size={10} /> BLIND SPOTS
              </div>
              <div className="text-xs text-status-warning">{op.blind_spots.join(" · ")}</div>
            </div>
          )}

          {op.invoke_when && (
            <div>
              <div className="text-[10px] text-muted-foreground tracking-wider mb-1">INVOKE WHEN</div>
              <div className="text-xs text-muted-foreground">{op.invoke_when.join(" · ")}</div>
            </div>
          )}

          {op.function && (
            <div>
              <div className="text-[10px] text-muted-foreground tracking-wider mb-1">FUNCTION</div>
              <div className="text-xs text-muted-foreground leading-relaxed">{op.function}</div>
            </div>
          )}

          {op.aliases && (
            <div>
              <div className="text-[10px] text-muted-foreground tracking-wider mb-1">ALIASES</div>
              <div className="text-xs">{op.aliases.join(", ")}</div>
            </div>
          )}

          {/* Minimal profile indicator for operators without extended data */}
          {!op.focus_areas && !op.thinking_style && !op.function && (
            <div className="text-[10px] text-muted-foreground/50 tracking-wider italic border-t border-border/50 pt-3">
              CORE PROFILE · EXTENDED ATTRIBUTES PENDING
            </div>
          )}
        </div>
      )}
    </div>
  );
};

const PigPen = () => {
  const [search, setSearch] = useState("");
  const [collapsedClusters, setCollapsedClusters] = useState<Set<string>>(new Set());

  const toggleCluster = (key: string) => {
    setCollapsedClusters((prev) => {
      const next = new Set(prev);
      if (next.has(key)) next.delete(key);
      else next.add(key);
      return next;
    });
  };

  const filteredRegistry = operatorRegistry
    .map((cluster) => ({
      ...cluster,
      operators: cluster.operators.filter(
        (op) =>
          op.name.toLowerCase().includes(search.toLowerCase()) ||
          op.operator_id.toLowerCase().includes(search.toLowerCase()) ||
          op.title.toLowerCase().includes(search.toLowerCase()) ||
          (op.tagline && op.tagline.toLowerCase().includes(search.toLowerCase()))
      ),
    }))
    .filter((cluster) => cluster.operators.length > 0);

  const filteredCount = filteredRegistry.reduce((s, c) => s + c.operators.length, 0);

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="space-y-2">
        <div className="flex items-start justify-between">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold tracking-tighter">PIG PEN</h1>
            <p className="text-muted-foreground text-sm mt-1">
              Operator Registry — Canonical Ledger v4.3.0
            </p>
          </div>
          <div className="flex items-center gap-3">
            <span className="px-3 py-1 text-[10px] tracking-wider bg-status-warning/20 text-status-warning border border-status-warning/30">
              DRAFT
            </span>
            <div className="flex items-center gap-2">
              <Users size={14} className="text-primary" />
              <span className="text-sm font-bold text-primary">{totalOperatorCount}</span>
            </div>
          </div>
        </div>
        <div className="text-[10px] text-muted-foreground tracking-wider">
          AUTHORITY: PEARL & PIG — FOUNDER & ARCHITECT · EFFECTIVE DATE: 2026-02-10 · SUPERSEDES v4.1.0
        </div>
      </div>

      {/* Search */}
      <div className="relative">
        <Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" />
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="SEARCH OPERATORS BY NAME, ID, TITLE..."
          className="w-full bg-card border border-border pl-12 pr-4 py-3 text-sm tracking-wider placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
        />
      </div>

      <div className="text-[10px] text-muted-foreground tracking-wider">
        SHOWING {filteredCount} OF {totalOperatorCount} OPERATORS ACROSS {filteredRegistry.length} CLUSTERS
      </div>

      {/* Clusters */}
      <div className="space-y-6">
        {filteredRegistry.map((cluster) => {
          const isCollapsed = collapsedClusters.has(cluster.key);
          return (
            <div key={cluster.key}>
              <button
                onClick={() => toggleCluster(cluster.key)}
                className="flex items-center gap-3 mb-3 group w-full text-left"
              >
                {isCollapsed ? (
                  <ChevronRight size={14} className="text-primary" />
                ) : (
                  <ChevronDown size={14} className="text-primary" />
                )}
                <span className="text-xs font-bold tracking-widest text-foreground group-hover:text-primary transition-colors">
                  {cluster.label}
                </span>
                <span className="text-[10px] text-muted-foreground tracking-wider">
                  ({cluster.operators.length})
                </span>
                <div className="flex-1 border-t border-border ml-2" />
              </button>

              {!isCollapsed && (
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-3">
                  {cluster.operators.map((op) => (
                    <OperatorCard key={op.operator_id} op={op} />
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PigPen;
