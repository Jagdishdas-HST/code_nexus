import { useState } from "react";
import { Code2, Layout, Users, Zap, Shield } from "lucide-react";

const tabs = [
  { id: "code", label: "Code", icon: Code2 },
  { id: "plan", label: "Plan", icon: Layout },
  { id: "collaborate", label: "Collaborate", icon: Users },
  { id: "automate", label: "Automate", icon: Zap },
  { id: "secure", label: "Secure", icon: Shield },
];

const FeaturesNav = () => {
  const [active, setActive] = useState("code");

  return (
    <div className="flex items-center justify-center gap-1 md:gap-2 px-4 py-3 overflow-x-auto">
      {tabs.map((tab) => {
        const Icon = tab.icon;
        const isActive = active === tab.id;
        return (
          <button
            key={tab.id}
            onClick={() => setActive(tab.id)}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-full text-sm font-medium transition-all duration-200 whitespace-nowrap ${
              isActive
                ? "bg-white text-black shadow-lg shadow-white/10"
                : "text-gh-text-secondary hover:text-white hover:bg-white/5"
            }`}
          >
            <Icon className="w-4 h-4" />
            {tab.label}
          </button>
        );
      })}
    </div>
  );
};

export default FeaturesNav;