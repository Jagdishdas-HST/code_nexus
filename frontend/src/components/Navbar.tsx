import { useState, useEffect } from "react";
import { Search, ChevronDown, Menu, X } from "lucide-react";
import GitHubLogo from "./GitHubLogo";

const navLinks = [
  { label: "Platform", hasDropdown: true },
  { label: "Solutions", hasDropdown: true },
  { label: "Resources", hasDropdown: true },
  { label: "Open Source", hasDropdown: true },
  { label: "Enterprise", hasDropdown: true },
  { label: "Pricing", hasDropdown: false },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-black/80 backdrop-blur-xl border-b border-gh-border-subtle shadow-lg shadow-black/20"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Left: Logo + Nav */}
          <div className="flex items-center gap-6">
            <GitHubLogo className="w-8 h-8 text-white hover:opacity-80 transition-opacity cursor-pointer" />
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <button
                  key={link.label}
                  className="flex items-center gap-1 px-3 py-1.5 text-sm text-white/90 hover:text-white rounded-md hover:bg-white/10 transition-colors duration-200"
                >
                  {link.label}
                  {link.hasDropdown && <ChevronDown className="w-3.5 h-3.5 opacity-60" />}
                </button>
              ))}
            </div>
          </div>

          {/* Right: Search + Auth */}
          <div className="flex items-center gap-3">
            <div className="hidden md:flex items-center gap-2 px-3 py-1.5 rounded-lg border border-gh-border text-gh-text-secondary text-sm bg-white/5 hover:border-gh-border/80 transition-colors cursor-pointer min-w-[240px]">
              <Search className="w-4 h-4" />
              <span className="flex-1">Search or jump to...</span>
              <kbd className="px-1.5 py-0.5 text-xs border border-gh-border rounded bg-white/5 font-mono">/</kbd>
            </div>
            <button className="hidden md:block text-sm text-white/90 hover:text-white px-3 py-1.5 transition-colors">
              Sign in
            </button>
            <button className="hidden md:block text-sm font-medium text-white border border-white/20 hover:border-white/40 px-4 py-1.5 rounded-lg transition-colors hover:bg-white/5">
              Sign up
            </button>
            <button
              className="lg:hidden text-white p-1.5"
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-black/95 backdrop-blur-xl border-t border-gh-border-subtle animate-fade-in">
          <div className="px-4 py-4 space-y-1">
            {navLinks.map((link) => (
              <button
                key={link.label}
                className="flex items-center justify-between w-full px-3 py-2.5 text-sm text-white/90 hover:text-white rounded-lg hover:bg-white/5 transition-colors"
              >
                {link.label}
                {link.hasDropdown && <ChevronDown className="w-4 h-4 opacity-60" />}
              </button>
            ))}
            <div className="pt-3 border-t border-gh-border-subtle space-y-2">
              <button className="w-full text-sm text-white/90 hover:text-white px-3 py-2 rounded-lg hover:bg-white/5 text-left">
                Sign in
              </button>
              <button className="w-full text-sm font-medium text-white border border-white/20 px-3 py-2 rounded-lg hover:bg-white/5 text-left">
                Sign up
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;