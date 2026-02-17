import { Palette, Plus } from "lucide-react";

const brands = [
  {
    id: "1",
    name: "GARVIS PRIMARY",
    primary: "#FF4500",
    secondary: "#1a1a1a",
    accent: "#00FF88",
    description: "Primary brand identity for sovereign intelligence systems",
  },
  {
    id: "2",
    name: "TELAUTHORIUM",
    primary: "#3B82F6",
    secondary: "#0f172a",
    accent: "#F59E0B",
    description: "Authority and governance brand profile",
  },
  {
    id: "3",
    name: "PEARL & PIG",
    primary: "#EC4899",
    secondary: "#18181b",
    accent: "#A855F7",
    description: "Parent organization brand profile",
  },
];

const Brands = () => {
  return (
    <div className="space-y-8">
      <div className="flex items-start justify-between">
        <div className="space-y-2">
          <h1 className="text-3xl md:text-4xl font-bold tracking-tighter">BRANDS</h1>
          <p className="text-muted-foreground text-sm">Design system configurations and brand profiles</p>
        </div>
        <button className="bg-primary text-primary-foreground px-4 py-2 text-xs tracking-wider uppercase flex items-center gap-2 hover:bg-primary/90 transition-colors">
          <Plus size={14} /> NEW BRAND
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {brands.map((brand) => (
          <div key={brand.id} className="bg-card border border-border hover:border-primary transition-colors cursor-pointer overflow-hidden">
            <div className="h-24 flex">
              <div className="flex-1" style={{ backgroundColor: brand.primary }} />
              <div className="flex-1" style={{ backgroundColor: brand.secondary }} />
              <div className="w-16" style={{ backgroundColor: brand.accent }} />
            </div>
            <div className="p-6 space-y-3">
              <div className="flex items-center gap-2">
                <Palette size={16} className="text-primary" />
                <div className="text-sm font-bold tracking-wider">{brand.name}</div>
              </div>
              <p className="text-xs text-muted-foreground">{brand.description}</p>
              <div className="flex gap-2">
                {[brand.primary, brand.secondary, brand.accent].map((color, i) => (
                  <div key={i} className="flex items-center gap-1">
                    <div className="w-3 h-3 border border-border" style={{ backgroundColor: color }} />
                    <span className="text-[10px] text-muted-foreground">{color}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Brands;
