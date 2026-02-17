import { BookOpen, Search } from "lucide-react";

const terms = [
  { term: "SOVEREIGN", definition: "The ultimate authority holder within the GARVIS framework. Holds unrestricted governance rights." },
  { term: "TELAUTHORIUM", definition: "The canonical rights registry that maps authority chains and validates sovereign permissions." },
  { term: "GARVIS", definition: "Governance, Authority, Routing, Verification, Intelligence, Sovereignty — the core intelligence layer." },
  { term: "FLIGHTPATH COS", definition: "Command Operating System for phase control and operational sequencing." },
  { term: "MOSE", definition: "Multi-Operator Scheduling Engine — routes tasks to appropriate AI operators." },
  { term: "PIG PEN", definition: "AI operator containment and management environment. Houses all TAI-D registered operators." },
  { term: "TELA", definition: "Terminal Execution Layer Architecture — the final enforcement and action layer." },
  { term: "TAI-D", definition: "Technology AI Designation — the classification system for AI operators in the Pig Pen." },
  { term: "AUDIT LEDGER", definition: "Immutable log of all system changes, decisions, and authority exercises." },
  { term: "AUTHORITY CHAIN", definition: "The verified path from sovereign to execution through all intermediate layers." },
];

const Glossary = () => {
  return (
    <div className="space-y-8">
      <div className="space-y-2">
        <h1 className="text-3xl md:text-4xl font-bold tracking-tighter">GLOSSARY</h1>
        <p className="text-muted-foreground text-sm">Canonical terminology and definitions</p>
      </div>

      <div className="relative">
        <Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" />
        <input
          type="text"
          placeholder="SEARCH TERMS..."
          className="w-full bg-card border border-border pl-12 pr-4 py-3 text-sm tracking-wider placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
        />
      </div>

      <div className="space-y-2">
        {terms.map((item) => (
          <div
            key={item.term}
            className="bg-card border border-border p-4 hover:border-primary transition-colors cursor-pointer"
          >
            <div className="flex items-start gap-3">
              <BookOpen size={16} className="text-primary mt-0.5 flex-shrink-0" />
              <div>
                <div className="text-sm font-bold tracking-wider text-primary">{item.term}</div>
                <div className="text-xs text-muted-foreground mt-1">{item.definition}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Glossary;
