import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative w-full min-h-screen flex flex-col items-center justify-center overflow-hidden bg-black">
      {/* Background gradient orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[600px] rounded-full bg-gradient-to-b from-indigo-900/20 via-purple-900/10 to-transparent blur-3xl" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[1200px] h-[400px] bg-gradient-to-t from-gh-surface via-transparent to-transparent" />
      </div>

      {/* Noise overlay */}
      <div className="absolute inset-0 noise-overlay" />

      {/* Content */}
      <div className="relative z-10 text-center px-4 md:px-6 max-w-4xl mx-auto pt-24">
        <h1
          className="text-5xl sm:text-6xl md:text-7xl lg:text-[80px] font-bold text-white tracking-tight leading-[1.05] mb-6 opacity-0 animate-fade-in-up"
          style={{ animationDelay: "0.1s" }}
        >
          The future of building
          <br />
          happens together
        </h1>

        <p
          className="text-base sm:text-lg md:text-xl text-gh-text-secondary max-w-2xl mx-auto mb-10 leading-relaxed opacity-0 animate-fade-in-up"
          style={{ animationDelay: "0.3s" }}
        >
          Tools and trends evolve, but collaboration endures. With GitHub,
          developers, agents, and code come together on one platform.
        </p>

        {/* Email signup row */}
        <div
          className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-8 opacity-0 animate-fade-in-up"
          style={{ animationDelay: "0.5s" }}
        >
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full sm:w-72 px-4 py-3 rounded-lg bg-white/10 border border-gh-border text-white placeholder:text-gh-text-secondary text-sm focus:outline-none focus:border-gh-blue-bright focus:ring-2 focus:ring-gh-blue/30 transition-all"
          />
          <button className="w-full sm:w-auto px-6 py-3 bg-gh-green hover:bg-gh-green-bright text-white font-semibold text-sm rounded-lg transition-colors shadow-lg shadow-gh-green/20 active:scale-95">
            Sign up for GitHub
          </button>
          <button className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3 bg-white/5 hover:bg-white/10 text-white font-medium text-sm rounded-lg border border-white/15 hover:border-white/25 transition-all">
            Try GitHub Copilot free
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Copilot preview card at bottom */}
      <div
        className="relative z-10 w-full max-w-4xl mx-auto px-4 mt-4 opacity-0 animate-fade-in-up"
        style={{ animationDelay: "0.7s" }}
      >
        <div className="relative rounded-t-xl overflow-hidden border border-gh-border-subtle border-b-0 bg-gh-surface shadow-2xl shadow-black/50">
          {/* Window chrome */}
          <div className="flex items-center gap-2 px-4 py-3 bg-gh-surface border-b border-gh-border-subtle">
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-[#ff5f57]" />
              <div className="w-3 h-3 rounded-full bg-[#febc2e]" />
              <div className="w-3 h-3 rounded-full bg-[#28c840]" />
            </div>
            <div className="flex items-center gap-4 ml-4">
              <span className="text-xs text-gh-text-secondary font-mono">GITHUB COPILOT: CHAT</span>
            </div>
            <div className="flex items-center gap-1 ml-auto">
              <div className="px-3 py-1 text-xs text-white/80 bg-gh-surface-hl rounded border border-gh-border-subtle font-mono">
                game.ts
              </div>
              <div className="px-3 py-1 text-xs text-white/50 font-mono">
                characters.module.css
              </div>
              <div className="px-3 py-1 text-xs text-white/50 font-mono">
                bonus-level.ts
              </div>
            </div>
          </div>

          {/* Split view: Chat + Code */}
          <div className="flex min-h-[280px]">
            {/* Chat panel */}
            <div className="w-2/5 border-r border-gh-border-subtle p-4 space-y-4">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-full bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center">
                  <svg className="w-3.5 h-3.5 text-white" viewBox="0 0 16 16" fill="currentColor">
                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z" />
                  </svg>
                </div>
                <span className="text-sm font-medium text-white">GitHub Copilot</span>
              </div>
              <p className="text-sm text-white/80">
                Hi @monalisa, how can I help you?
              </p>
              <p className="text-xs text-gh-text-secondary leading-relaxed">
                {"I'm"} powered by AI, so surprises and mistakes are possible. Make sure to verify all generated code or suggestions, and share feedback so that we can learn and improve.
              </p>
            </div>

            {/* Code panel */}
            <div className="w-3/5 p-4 font-mono text-xs leading-6 overflow-hidden">
              <div className="flex gap-4">
                <div className="text-gh-muted select-none text-right w-8 shrink-0 space-y-0">
                  {[76, 77, 78, 79, 80, 81, 82, 83, 84, 85].map((n) => (
                    <div key={n}>{n}</div>
                  ))}
                </div>
                <div className="overflow-hidden">
                  <div className="text-gh-text-secondary">{"// Player 1 Controls"}</div>
                  <div>
                    <span className="text-purple-400">if</span>
                    <span className="text-white"> (</span>
                    <span className="text-gh-blue-bright">this</span>
                    <span className="text-white">.cursors.left.isDown) {"{"}</span>
                  </div>
                  <div className="pl-4">
                    <span className="text-gh-blue-bright">this</span>
                    <span className="text-white">.player1.setVelocityX(</span>
                    <span className="text-orange-300">-200</span>
                    <span className="text-white">);</span>
                  </div>
                  <div>
                    <span className="text-white">{"}"} </span>
                    <span className="text-purple-400">else if</span>
                    <span className="text-white"> (</span>
                    <span className="text-gh-blue-bright">this</span>
                    <span className="text-white">.cursors.right.isDown) {"{"}</span>
                  </div>
                  <div className="pl-4">
                    <span className="text-gh-blue-bright">this</span>
                    <span className="text-white">.player1.setVelocityX(</span>
                    <span className="text-orange-300">200</span>
                    <span className="text-white">);</span>
                  </div>
                  <div>
                    <span className="text-white">{"}"} </span>
                    <span className="text-purple-400">else</span>
                    <span className="text-white"> {"{"}</span>
                  </div>
                  <div className="pl-4">
                    <span className="text-gh-blue-bright">this</span>
                    <span className="text-white">.player1.setVelocityX(</span>
                    <span className="text-orange-300">0</span>
                    <span className="text-white">);</span>
                  </div>
                  <div><span className="text-white">{"}"}</span></div>
                  <div />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;