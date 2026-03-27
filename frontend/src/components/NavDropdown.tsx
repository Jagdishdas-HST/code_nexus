import { useState, useRef, useEffect } from "react";
import { ChevronDown, ArrowRight } from "lucide-react";

interface DropdownItem {
  label: string;
  description?: string;
  href?: string;
}

interface NavDropdownProps {
  label: string;
  items: DropdownItem[];
}

const NavDropdown = ({ label, items }: NavDropdownProps) => {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-1 px-3 py-1.5 text-sm text-white/90 hover:text-white rounded-md hover:bg-white/10 transition-colors duration-200"
      >
        {label}
        <ChevronDown
          className={`w-3.5 h-3.5 opacity-60 transition-transform duration-200 ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>

      {open && (
        <div className="absolute top-full left-0 mt-2 w-72 rounded-xl border border-gh-border-subtle bg-gh-surface shadow-2xl shadow-black/50 overflow-hidden animate-fade-in z-50">
          <div className="p-2">
            {items.map((item) => (
              <a
                key={item.label}
                href={item.href || "#"}
                onClick={() => setOpen(false)}
                className="flex items-start gap-3 px-3 py-2.5 rounded-lg hover:bg-white/5 transition-colors group"
              >
                <div className="flex-1">
                  <div className="text-sm font-medium text-white group-hover:text-gh-blue-bright transition-colors">
                    {item.label}
                  </div>
                  {item.description && (
                    <div className="text-xs text-gh-text-secondary mt-0.5">
                      {item.description}
                    </div>
                  )}
                </div>
                <ArrowRight className="w-3.5 h-3.5 text-gh-text-secondary opacity-0 group-hover:opacity-100 transition-opacity mt-0.5" />
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default NavDropdown;