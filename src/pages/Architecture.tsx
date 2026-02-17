import { ArrowDown } from "lucide-react";

const layers = [
  { id: "L0", name: "SOVEREIGN AUTHORITY", description: "Ultimate authority and governance layer", status: "ACTIVE" },
  { id: "L1", name: "TELAUTHORIUM", description: "Rights registry and verification", status: "ACTIVE" },
  { id: "L2", name: "GARVIS CORE", description: "Intelligence routing and decision engine", status: "ACTIVE" },
  { id: "L3", name: "FLIGHTPATH COS", description: "Phase control and operational sequencing", status: "ACTIVE" },
  { id: "L4", name: "MOSE", description: "Multi-operator scheduling and execution", status: "ACTIVE" },
  { id: "L5", name: "PIG PEN", description: "AI operator containment and management", status: "ACTIVE" },
  { id: "L6", name: "TELA", description: "Execution and enforcement layer", status: "ACTIVE" },
  { id: "L7", name: "AUDIT LEDGER", description: "Immutable logging and compliance", status: "ACTIVE" },
];

const Architecture = () => {
  return (
    <div className="space-y-8">
      <div className="space-y-2">
        <h1 className="text-3xl md:text-4xl font-bold tracking-tighter">ARCHITECTURE</h1>
        <p className="text-muted-foreground text-sm">Authority hierarchy and system component map</p>
      </div>

      <div className="max-w-2xl mx-auto space-y-0">
        {layers.map((layer, index) => (
          <div key={layer.id}>
            <div className="bg-card border border-border p-6 hover:border-primary transition-colors cursor-pointer">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 border border-primary flex items-center justify-center text-xs text-primary font-bold">
                  {layer.id}
                </div>
                <div className="flex-1">
                  <div className="text-sm font-bold tracking-wider">{layer.name}</div>
                  <div className="text-xs text-muted-foreground">{layer.description}</div>
                </div>
                <span className="w-2 h-2 bg-status-online rounded-full" />
              </div>
            </div>
            {index < layers.length - 1 && (
              <div className="flex justify-center py-2">
                <ArrowDown size={16} className="text-primary" />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Architecture;
