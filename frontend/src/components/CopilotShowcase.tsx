import { ArrowRight, Sparkles } from "lucide-react";

const CopilotShowcase = () => {
  return (
    <section id="copilot-section" className="relative py-24 lg:py-32 overflow-hidden">
      {/* ... keep existing code (entire section content unchanged) */}
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gh-green/10 border border-gh-green/20 text-gh-green-bright text-sm font-medium mb-6">
            <Sparkles className="w-4 h-4" />
            GitHub Copilot
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight mb-4">
            Your AI partner everywhere
          </h2>
          <p className="text-lg text-gh-text-secondary max-w-2xl mx-auto">
            Copilot is ready to work with you at each step of the software development lifecycle.
          </p>
        </div>

        {/* Feature cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Large card spanning 2 cols */}
          <div className="md:col-span-2 lg:col-span-2 group relative rounded-2xl border border-gh-border-subtle bg-gh-surface p-8 hover:border-gh-green/30 transition-all duration-300 overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-gh-green/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-gh-green/10 transition-colors" />
            <div className="relative z-10">
              <h3 className="text-2xl font-bold text-white mb-3">
                Write, test, and fix code quickly
              </h3>
              <p className="text-gh-text-secondary mb-6 max-w-lg">
                From simple boilerplate to complex features, Copilot helps you code faster with AI-powered suggestions and completions.
              </p>
              <a href="#" className="inline-flex items-center gap-2 text-gh-green-bright hover:text-white text-sm font-medium transition-colors group/link">
                Explore GitHub Copilot
                <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
              </a>
            </div>

            {/* Mock code block */}
            <div className="mt-8 rounded-xl bg-black/50 border border-gh-border-subtle p-4 font-mono text-xs">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-2 h-2 rounded-full bg-gh-green-bright animate-pulse" />
                <span className="text-gh-text-secondary">Copilot is suggesting...</span>
              </div>
              <div className="space-y-1">
                <div>
                  <span className="text-purple-400">async function</span>
                  <span className="text-gh-blue-bright"> fetchUserData</span>
                  <span className="text-white">(userId: string) {"{"}</span>
                </div>
                <div className="pl-4 text-white/40">
                  <span className="text-purple-400">const</span> response = <span className="text-purple-400">await</span> fetch(<span className="text-orange-300">{"`/api/users/${userId}`"}</span>);
                </div>
                <div className="pl-4 text-white/40">
                  <span className="text-purple-400">return</span> response.json();
                </div>
                <div className="text-white/40">{"}"}</div>
              </div>
            </div>
          </div>

          {/* Side card */}
          <div className="group relative rounded-2xl border border-gh-border-subtle bg-gh-surface p-8 hover:border-gh-blue/30 transition-all duration-300 overflow-hidden">
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-gh-blue/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 group-hover:bg-gh-blue/10 transition-colors" />
            <div className="relative z-10">
              <div className="w-12 h-12 rounded-xl bg-gh-blue/10 border border-gh-blue/20 flex items-center justify-center mb-4">
                <Sparkles className="w-6 h-6 text-gh-blue-bright" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                Agent mode
              </h3>
              <p className="text-gh-text-secondary text-sm mb-6">
                Switch to Agent mode and let Copilot analyze your codebase, explain edits, and implement multi-file changes autonomously.
              </p>
              <a href="#" className="inline-flex items-center gap-2 text-gh-blue-bright hover:text-white text-sm font-medium transition-colors group/link">
                Learn more
                <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>

          {/* Bottom row: 3 equal cards */}
          <div className="group rounded-2xl border border-gh-border-subtle bg-gh-surface p-6 hover:border-white/15 transition-all duration-300">
            <div className="text-4xl font-bold text-white mb-2 font-mono">25%</div>
            <p className="text-sm text-gh-text-secondary">
              Duolingo boosts developer speed with GitHub Copilot
            </p>
            <a href="#" className="inline-flex items-center gap-1 text-gh-blue-bright text-xs font-medium mt-3 hover:text-white transition-colors">
              Read customer story <ArrowRight className="w-3 h-3" />
            </a>
          </div>

          <div className="group rounded-2xl border border-gh-border-subtle bg-gh-surface p-6 hover:border-white/15 transition-all duration-300">
            <div className="text-lg font-bold text-white mb-2">2025 Gartner® Magic Quadrant™</div>
            <p className="text-sm text-gh-text-secondary">
              for AI Code Assistants
            </p>
            <a href="#" className="inline-flex items-center gap-1 text-gh-blue-bright text-xs font-medium mt-3 hover:text-white transition-colors">
              Read industry report <ArrowRight className="w-3 h-3" />
            </a>
          </div>

          <div className="group rounded-2xl border border-gh-border-subtle bg-gh-surface p-6 hover:border-white/15 transition-all duration-300">
            <div className="text-4xl font-bold text-gradient-green mb-2 font-mono">150M+</div>
            <p className="text-sm text-gh-text-secondary">
              Developers trust GitHub worldwide
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CopilotShowcase;