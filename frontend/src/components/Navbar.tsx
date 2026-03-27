import { useState, useEffect } from "react";
import { Search, Menu, X } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";
import GitHubLogo from "./GitHubLogo";
import NavDropdown from "./NavDropdown";
import SearchDialog from "./SearchDialog";

const dropdownData: Record<string, { label: string; description: string }[]> = {
  Platform: [
    { label: "GitHub Copilot", description: "Write better code with AI" },
    { label: "GitHub Actions", description: "Automate any workflow" },
    { label: "GitHub Codespaces", description: "Instant dev environments" },
    { label: "GitHub Packages", description: "Host and manage packages" },
    { label: "GitHub Security", description: "Find and fix vulnerabilities" },
    { label: "GitHub Issues", description: "Plan and track work" },
  ],
  Solutions: [
    { label: "For Enterprise", description: "Advanced security, compliance, and support" },
    { label: "For Teams", description: "Collaboration for growing teams" },
    { label: "For Startups", description: "Build your MVP faster" },
    { label: "By Industry", description: "Solutions for every sector" },
  ],
  Resources: [
    { label: "Documentation", description: "Guides and API references" },
    { label: "GitHub Skills", description: "Learn with interactive courses" },
    { label: "Blog", description: "Updates, ideas, and inspiration" },
    { label: "Community Forum", description: "Connect with other developers" },
  ],
  "Open Source": [
    { label: "GitHub Sponsors", description: "Fund open source developers" },
    { label: "Explore Repositories", description: "Discover popular projects" },
    { label: "Topics", description: "Browse by technology" },
    { label: "Trending", description: "See what's popular today" },
  ],
  Enterprise: [
    { label: "Enterprise Cloud", description: "GitHub in the cloud for enterprises" },
    { label: "Enterprise Server", description: "Self-hosted GitHub" },
    { label: "Advanced Security", description: "Code scanning and secret detection" },
    { label: "Premium Support", description: "24/7 priority support" },
  ],
};

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "/" && !searchOpen) {
        const target = e.target as HTMLElement;
        if (target.tagName !== "INPUT" && target.tagName !== "TEXTAREA") {
          e.preventDefault();
          setSearchOpen(true);
        }
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [searchOpen]);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  return (
    <>
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
              <GitHubLogo
                className="w-8 h-8 text-white hover:opacity-80 transition-opacity cursor-pointer"
                onClick={() => navigate("/")}
              />
              <div className="hidden lg:flex items-center gap-1">
                {Object.entries(dropdownData).map(([label, items]) => (
                  <NavDropdown key={label} label={label} items={items} />
                ))}
                <button
                  onClick={() => {
                    const el = document.getElementById("pricing-section");
                    if (el) {
                      el.scrollIntoView({ behavior: "smooth" });
                    } else if (location.pathname !== "/") {
                      navigate("/");
                      setTimeout(() => {
                        document.getElementById("pricing-section")?.scrollIntoView({ behavior: "smooth" });
                      }, 300);
                    }
                  }}
                  className="flex items-center gap-1 px-3 py-1.5 text-sm text-white/90 hover:text-white rounded-md hover:bg-white/10 transition-colors duration-200"
                >
                  Pricing
                </button>
              </div>
            </div>

            {/* Right: Search + Auth */}
            <div className="flex items-center gap-3">
              <button
                onClick={() => setSearchOpen(true)}
                className="hidden md:flex items-center gap-2 px-3 py-1.5 rounded-lg border border-gh-border text-gh-text-secondary text-sm bg-white/5 hover:border-gh-border/80 transition-colors cursor-pointer min-w-[240px]"
              >
                <Search className="w-4 h-4" />
                <span className="flex-1 text-left">Search or jump to...</span>
                <kbd className="px-1.5 py-0.5 text-xs border border-gh-border rounded bg-white/5 font-mono">
                  /
                </kbd>
              </button>
              <button
                onClick={() => navigate("/signin")}
                className="hidden md:block text-sm text-white/90 hover:text-white px-3 py-1.5 transition-colors"
              >
                Sign in
              </button>
              <button
                onClick={() => navigate("/signup")}
                className="hidden md:block text-sm font-medium text-white border border-white/20 hover:border-white/40 px-4 py-1.5 rounded-lg transition-colors hover:bg-white/5"
              >
                Sign up
              </button>
              <button
                className="lg:hidden text-white p-1.5"
                onClick={() => setMobileOpen(!mobileOpen)}
              >
                {mobileOpen ? (
                  <X className="w-5 h-5" />
                ) : (
                  <Menu className="w-5 h-5" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="lg:hidden bg-black/95 backdrop-blur-xl border-t border-gh-border-subtle animate-fade-in">
            <div className="px-4 py-4 space-y-1">
              {Object.keys(dropdownData).map((label) => (
                <button
                  key={label}
                  className="flex items-center justify-between w-full px-3 py-2.5 text-sm text-white/90 hover:text-white rounded-lg hover:bg-white/5 transition-colors"
                >
                  {label}
                </button>
              ))}
              <button
                onClick={() => {
                  setMobileOpen(false);
                  navigate("/");
                  setTimeout(() => {
                    document.getElementById("pricing-section")?.scrollIntoView({ behavior: "smooth" });
                  }, 300);
                }}
                className="flex items-center justify-between w-full px-3 py-2.5 text-sm text-white/90 hover:text-white rounded-lg hover:bg-white/5 transition-colors"
              >
                Pricing
              </button>
              <div className="pt-3 border-t border-gh-border-subtle space-y-2">
                <button
                  onClick={() => {
                    setMobileOpen(false);
                    setSearchOpen(true);
                  }}
                  className="w-full flex items-center gap-2 text-sm text-white/90 hover:text-white px-3 py-2 rounded-lg hover:bg-white/5 text-left"
                >
                  <Search className="w-4 h-4" />
                  Search
                </button>
                <button
                  onClick={() => navigate("/signin")}
                  className="w-full text-sm text-white/90 hover:text-white px-3 py-2 rounded-lg hover:bg-white/5 text-left"
                >
                  Sign in
                </button>
                <button
                  onClick={() => navigate("/signup")}
                  className="w-full text-sm font-medium text-white border border-white/20 px-3 py-2 rounded-lg hover:bg-white/5 text-left"
                >
                  Sign up
                </button>
              </div>
            </div>
          </div>
        )}
      </nav>

      <SearchDialog open={searchOpen} onClose={() => setSearchOpen(false)} />
    </>
  );
};

export default Navbar;