import { useState, useMemo } from "react";
import { operatorRegistry, type Operator, type OperatorCluster } from "../data/operatorRegistry";
import { Search, ChevronDown, ChevronRight, Shield, Zap, Brain, Users, Star } from "lucide-react";
import aiOfficeGif from "../assets/ai_office_animated.gif";

const phaseColor: Record<string, string> = {
  Spark: "bg-amber-500/20 text-amber-300",
  Build: "bg-blue-500/20 text-blue-300",
  Launch: "bg-emerald-500/20 text-emerald-300",
  Expand: "bg-purple-500/20 text-purple-300",
  Evergreen: "bg-teal-500/20 text-teal-300",
};

const weightBar = (w: number) => (
  <div className="flex gap-0.5 items-center">
    {Array.from({ length: 5 }).map((_, i) => (
      <div
        key={i}
        className={`h-1.5 w-3 rounded-full transition-colors ${
          i < w ? "bg-primary" : "bg-muted"
        }`}
      />
    ))}
  </div>
);

function OperatorCard({ op, index }: { op: Operator; index: number }) {
  const [open, setOpen] = useState(false);

  return (
    <button
      onClick={() => setOpen(!open)}
      className="w-full text-left border border-border rounded-lg bg-card hover:bg-accent/40 transition-all duration-200 active:scale-[0.99]"
    >
      {/* Header */}
      <div className="flex items-center gap-3 px-4 py-3">
        <span className="text-[10px] font-mono text-muted-foreground w-5 shrink-0">
          {String(index).padStart(2, "0")}
        </span>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2">
            <span className="font-semibold text-sm text-foreground truncate">{op.name}</span>
            <span className="text-[10px] font-mono text-muted-foreground">{op.operator_id}</span>
          </div>
          <div className="text-xs text-muted-foreground truncate">{op.title}</div>
        </div>
        <div className="shrink-0 flex items-center gap-2">
          {weightBar(op.decision_weight)}
          {open ? (
            <ChevronDown className="w-3.5 h-3.5 text-muted-foreground" />
          ) : (
            <ChevronRight className="w-3.5 h-3.5 text-muted-foreground" />
          )}
        </div>
      </div>

      {/* Tags row */}
      <div className="flex gap-1.5 px-4 pb-2 flex-wrap">
        {op.tags.map((t) => (
          <span key={t} className="text-[9px] font-mono tracking-wider px-1.5 py-0.5 rounded bg-secondary text-muted-foreground">
            {t}
          </span>
        ))}
      </div>

      {/* Expanded detail */}
      {open && (
        <div className="border-t border-border px-4 py-3 space-y-3 text-xs">
          {/* Row 1: Core attributes */}
          <div className="grid grid-cols-2 gap-3">
            <div>
              <div className="text-[9px] uppercase tracking-widest text-muted-foreground mb-0.5 flex items-center gap-1">
                <Brain className="w-2.5 h-2.5" /> Thinking Style
              </div>
              <div className="text-foreground">{op.thinking_style}</div>
            </div>
            <div>
              <div className="text-[9px] uppercase tracking-widest text-muted-foreground mb-0.5 flex items-center gap-1">
                <Zap className="w-2.5 h-2.5" /> Core Instinct
              </div>
              <div className="text-foreground">{op.core_instinct}</div>
            </div>
          </div>

          {/* Row 2: Strengths + Blind Spots */}
          <div className="grid grid-cols-2 gap-3">
            <div>
              <div className="text-[9px] uppercase tracking-widest text-muted-foreground mb-0.5 flex items-center gap-1">
                <Star className="w-2.5 h-2.5" /> Strengths
              </div>
              <ul className="space-y-0.5">
                {op.strengths.map((s) => (
                  <li key={s} className="text-foreground">• {s}</li>
                ))}
              </ul>
            </div>
            <div>
              <div className="text-[9px] uppercase tracking-widest text-muted-foreground mb-0.5 flex items-center gap-1">
                <Shield className="w-2.5 h-2.5" /> Blind Spots
              </div>
              <ul className="space-y-0.5">
                {op.blind_spots.map((b) => (
                  <li key={b} className="text-muted-foreground">• {b}</li>
                ))}
              </ul>
            </div>
          </div>

          {/* Invoke When */}
          <div>
            <div className="text-[9px] uppercase tracking-widest text-muted-foreground mb-1">
              ⚡ Invoke When
            </div>
            <div className="flex gap-1.5 flex-wrap">
              {op.invoke_when.map((iw) => (
                <span key={iw} className="text-[10px] px-2 py-0.5 rounded-full bg-primary/15 text-primary border border-primary/20">
                  {iw}
                </span>
              ))}
            </div>
          </div>

          {/* Phase ownership */}
          <div>
            <div className="text-[9px] uppercase tracking-widest text-muted-foreground mb-1">
              Phase Flow
            </div>
            <div className="flex gap-1.5 flex-wrap">
              {op.phase_ownership.map((p) => (
                <span key={p} className={`text-[10px] font-mono px-2 py-0.5 rounded ${phaseColor[p] ?? "bg-muted text-muted-foreground"}`}>
                  {p}
                </span>
              ))}
            </div>
          </div>

          {/* Focus areas */}
          {op.focus_areas && op.focus_areas.length > 0 && (
            <div>
              <div className="text-[9px] uppercase tracking-widest text-muted-foreground mb-1">
                Focus Areas
              </div>
              <div className="text-foreground">{op.focus_areas.join(" · ")}</div>
            </div>
          )}

          {/* Function */}
          {op.function && (
            <div className="bg-secondary/50 rounded p-2 text-[11px] text-muted-foreground italic">
              {op.function}
            </div>
          )}

          {/* Weight + Tagline footer */}
          <div className="flex items-center justify-between pt-1 border-t border-border">
            <span className="text-[10px] text-muted-foreground">
              Weight: <span className="text-primary font-bold">{op.decision_weight}/5</span>
            </span>
            {op.tagline && (
              <span className="text-[10px] text-muted-foreground italic">"{op.tagline}"</span>
            )}
          </div>
        </div>
      )}
    </button>
  );
}

function ClusterSection({ cluster, startIndex }: { cluster: OperatorCluster; startIndex: number }) {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <section className="space-y-2">
      <button
        onClick={() => setCollapsed(!collapsed)}
        className="flex items-center gap-2 w-full text-left group"
      >
        {collapsed ? (
          <ChevronRight className="w-4 h-4 text-primary" />
        ) : (
          <ChevronDown className="w-4 h-4 text-primary" />
        )}
        <h2 className="text-xs font-mono tracking-[0.2em] text-primary uppercase">
          {cluster.label}
        </h2>
        <span className="text-[10px] text-muted-foreground font-mono">
          ({cluster.operators.length})
        </span>
        <div className="flex-1 border-t border-border ml-2" />
      </button>

      {!collapsed && (
        <div className="space-y-2 pl-2">
          {cluster.operators.map((op, i) => (
            <OperatorCard key={op.operator_id} op={op} index={startIndex + i + 1} />
          ))}
        </div>
      )}
    </section>
  );
}

export default function PigPen() {
  const [search, setSearch] = useState("");

  const filtered = useMemo(() => {
    if (!search.trim()) return operatorRegistry;
    const q = search.toLowerCase();
    return operatorRegistry
      .map((cluster) => ({
        ...cluster,
        operators: cluster.operators.filter(
          (op) =>
            op.name.toLowerCase().includes(q) ||
            op.operator_id.toLowerCase().includes(q) ||
            op.title.toLowerCase().includes(q) ||
            (op.tagline ?? "").toLowerCase().includes(q) ||
            op.tags.some((t) => t.toLowerCase().includes(q))
        ),
      }))
      .filter((c) => c.operators.length > 0);
  }, [search]);

  const totalOps = operatorRegistry.reduce((sum, c) => sum + c.operators.length, 0);
  const filteredOps = filtered.reduce((sum, c) => sum + c.operators.length, 0);

  // Compute running index for numbering
  let runningIndex = 0;

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-20 bg-background/95 backdrop-blur border-b border-border">
        <div className="max-w-3xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between mb-3">
            <div>
              <h1 className="text-lg font-semibold text-foreground tracking-tight">
                Pig Pen · Operator Registry
              </h1>
              <p className="text-[11px] text-muted-foreground font-mono">
                v4.3.0 DRAFT · {totalOps} operators · 12 clusters
              </p>
            </div>
            <div className="flex items-center gap-1.5">
              <Users className="w-4 h-4 text-primary" />
              <span className="text-sm font-bold text-primary">{filteredOps}</span>
            </div>
          </div>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-muted-foreground" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search operators, IDs, tags…"
              className="w-full pl-9 pr-4 py-2 text-sm bg-card border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring"
            />
          </div>
        </div>
      </header>

      {/* Body */}
      <main className="max-w-3xl mx-auto px-4 py-6 space-y-6">
        {/* Silicon Pastoral — Animated AI Office */}
        <div className="rounded-lg overflow-hidden border border-border shadow-md">
          <img
            src={aiOfficeGif}
            alt="Silicon Pastoral — Animated AI office pixel art with blinking monitors, coffee steam, and a walking figure"
            className="w-full h-auto"
            loading="eager"
          />
          <div className="bg-card px-3 py-1.5 flex items-center justify-between">
            <span className="text-[10px] font-mono text-muted-foreground tracking-wider">
              SILICON PASTORAL · GARVIS COMMAND CENTER
            </span>
            <span className="text-[9px] text-muted-foreground">12 frames · 5 fps</span>
          </div>
        </div>

        {filtered.length === 0 ? (
          <div className="text-center py-16 text-muted-foreground text-sm">
            No operators match "{search}"
          </div>
        ) : (
          filtered.map((cluster) => {
            const section = (
              <ClusterSection
                key={cluster.id}
                cluster={cluster}
                startIndex={runningIndex}
              />
            );
            runningIndex += cluster.operators.length;
            return section;
          })
        )}
      </main>
    </div>
  );
}
