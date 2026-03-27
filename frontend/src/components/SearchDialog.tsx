import { useState, useEffect, useRef } from "react";
import { Search, X, FileCode2, GitBranch, Users, BookOpen } from "lucide-react";

interface SearchDialogProps {
  open: boolean;
  onClose: () => void;
}

const searchSuggestions = [
  { icon: FileCode2, label: "Repositories", description: "Search across all repositories", category: "code" },
  { icon: GitBranch, label: "Pull Requests", description: "Find open pull requests", category: "code" },
  { icon: Users, label: "People", description: "Search for developers", category: "people" },
  { icon: BookOpen, label: "Documentation", description: "Browse GitHub docs", category: "docs" },
];

const trendingRepos = [
  { name: "facebook/react", stars: "228k", language: "JavaScript" },
  { name: "microsoft/vscode", stars: "165k", language: "TypeScript" },
  { name: "torvalds/linux", stars: "182k", language: "C" },
  { name: "tensorflow/tensorflow", stars: "186k", language: "Python" },
  { name: "vercel/next.js", stars: "127k", language: "JavaScript" },
];

const SearchDialog = ({ open, onClose }: SearchDialogProps) => {
  const [query, setQuery] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (open) {
      setTimeout(() => inputRef.current?.focus(), 100);
    } else {
      setQuery("");
    }
  }, [open]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && open) {
        onClose();
      }
      if (e.key === "/" && !open) {
        const target = e.target as HTMLElement;
        if (target.tagName !== "INPUT" && target.tagName !== "TEXTAREA") {
          e.preventDefault();
          // Parent will handle opening
        }
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [open, onClose]);

  if (!open) return null;

  const filteredSuggestions = query
    ? searchSuggestions.filter((s) =>
        s.label.toLowerCase().includes(query.toLowerCase())
      )
    : searchSuggestions;

  const filteredRepos = query
    ? trendingRepos.filter((r) =>
        r.name.toLowerCase().includes(query.toLowerCase())
      )
    : trendingRepos;

  return (
    <div className="fixed inset-0 z-[100] flex items-start justify-center pt-[15vh]">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Dialog */}
      <div className="relative w-full max-w-2xl mx-4 rounded-xl border border-gh-border-subtle bg-gh-surface shadow-2xl shadow-black/50 overflow-hidden animate-fade-in">
        {/* Search input */}
        <div className="flex items-center gap-3 px-4 py-3 border-b border-gh-border-subtle">
          <Search className="w-5 h-5 text-gh-text-secondary shrink-0" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search or jump to..."
            className="flex-1 bg-transparent text-white text-sm placeholder:text-gh-text-secondary focus:outline-none"
          />
          <button
            onClick={onClose}
            className="text-gh-text-secondary hover:text-white transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Results */}
        <div className="max-h-[400px] overflow-y-auto">
          {/* Quick actions */}
          <div className="px-3 py-2">
            <div className="text-[10px] font-semibold text-gh-text-secondary uppercase tracking-wider px-2 py-1.5">
              {query ? "Search results" : "Quick actions"}
            </div>
            {filteredSuggestions.map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.label}
                  className="flex items-center gap-3 w-full px-2 py-2 rounded-lg hover:bg-white/5 transition-colors text-left group"
                >
                  <div className="w-8 h-8 rounded-lg bg-white/5 border border-gh-border-subtle flex items-center justify-center group-hover:border-gh-blue/30 transition-colors">
                    <Icon className="w-4 h-4 text-gh-text-secondary group-hover:text-gh-blue-bright transition-colors" />
                  </div>
                  <div>
                    <div className="text-sm text-white">{item.label}</div>
                    <div className="text-xs text-gh-text-secondary">
                      {item.description}
                    </div>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Trending repos */}
          <div className="px-3 py-2 border-t border-gh-border-subtle">
            <div className="text-[10px] font-semibold text-gh-text-secondary uppercase tracking-wider px-2 py-1.5">
              {query ? "Matching repositories" : "Trending repositories"}
            </div>
            {filteredRepos.map((repo) => (
              <button
                key={repo.name}
                className="flex items-center justify-between w-full px-2 py-2 rounded-lg hover:bg-white/5 transition-colors text-left"
              >
                <div className="flex items-center gap-2">
                  <GitBranch className="w-4 h-4 text-gh-text-secondary" />
                  <span className="text-sm text-white">{repo.name}</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-xs text-gh-text-secondary">
                    ⭐ {repo.stars}
                  </span>
                  <span className="text-xs px-2 py-0.5 rounded-full bg-white/5 text-gh-text-secondary">
                    {repo.language}
                  </span>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="px-4 py-2 border-t border-gh-border-subtle flex items-center justify-between text-[10px] text-gh-text-secondary">
          <div className="flex items-center gap-3">
            <span>
              <kbd className="px-1 py-0.5 rounded bg-white/5 border border-gh-border-subtle font-mono">↵</kbd> to select
            </span>
            <span>
              <kbd className="px-1 py-0.5 rounded bg-white/5 border border-gh-border-subtle font-mono">↑↓</kbd> to navigate
            </span>
          </div>
          <span>
            <kbd className="px-1 py-0.5 rounded bg-white/5 border border-gh-border-subtle font-mono">esc</kbd> to close
          </span>
        </div>
      </div>
    </div>
  );
};

export default SearchDialog;