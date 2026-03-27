import { useState } from "react";
import { Code2, Layout, Users, Zap, Shield } from "lucide-react";

const tabs = [
  { id: "copilot-section", label: "Code", icon: Code2 },
  { id: "collaboration-section", label: "Plan", icon: Layout },
  { id: "collaboration-section", label: "Collaborate", icon: Users },
  { id: "workflow-section", label: "Automate", icon: Zap },
  { id: "security-section", label: "Secure", icon: Shield },
];

const FeaturesNav = () => {
  const [active, setActive] = useState("copilot-section");

  const handleClick = (sectionId: string) => {
    setActive(sectionId);
    const el = document.getElementById(sectionId);
    if (el) {
      const offset = 120; // account for sticky nav
      const top = el.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <div className="flex items-center justify-center gap-1 md:gap-2 px-4 py-3 overflow-x-auto">
      {tabs.map((tab, i) => {
        const Icon = tab.icon;
        const isActive = active === tab.id && tabs.findIndex(t => t.id === active) === i;
        return (
          <button
            key={tab.label}
            onClick={() => handleClick(tab.id)}
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