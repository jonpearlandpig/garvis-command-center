import { Settings, Info } from "lucide-react";

const SettingsPage = () => {
  return (
    <div className="space-y-8">
      <div className="space-y-2">
        <h1 className="text-3xl md:text-4xl font-bold tracking-tighter">SETTINGS</h1>
        <p className="text-muted-foreground text-sm">System configuration and preferences</p>
      </div>

      <div className="space-y-4">
        <div className="bg-card border border-border p-6 space-y-4">
          <div className="flex items-center gap-2">
            <Settings size={18} className="text-primary" />
            <h2 className="text-sm font-bold tracking-wider">SYSTEM CONFIGURATION</h2>
          </div>
          <div className="space-y-3">
            {[
              { label: "SYSTEM NAME", value: "GARVIS 42" },
              { label: "VERSION", value: "v2.0.0" },
              { label: "OWNER", value: "PEARL & PIG" },
              { label: "PRIMARY COLOR", value: "#FF4500" },
              { label: "AUTHORITY MODEL", value: "SOVEREIGN → EXECUTION" },
            ].map((item) => (
              <div key={item.label} className="flex items-center justify-between py-2 border-b border-border last:border-0">
                <span className="text-xs text-muted-foreground tracking-wider">{item.label}</span>
                <span className="text-xs font-semibold tracking-wider">{item.value}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-card border border-border p-6 space-y-4">
          <div className="flex items-center gap-2">
            <Info size={18} className="text-primary" />
            <h2 className="text-sm font-bold tracking-wider">ABOUT</h2>
          </div>
          <p className="text-xs text-muted-foreground leading-relaxed">
            GARVIS (Governance, Authority, Routing, Verification, Intelligence, Sovereignty) is a sovereign
            intelligence framework for building systems with clear authority hierarchies, content governance,
            immutable audit trails, and AI-powered assistance. Built by Pearl & Pig.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;
