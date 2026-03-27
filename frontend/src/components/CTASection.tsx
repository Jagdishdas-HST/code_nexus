import { ArrowRight } from "lucide-react";

const CTASection = () => {
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-[600px] h-[400px] bg-gradient-to-r from-gh-green/10 via-gh-blue/10 to-purple-500/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 md:px-8 text-center">
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white tracking-tight mb-6 leading-tight">
          Millions of developers and
          <br />
          businesses call GitHub home
        </h2>
        <p className="text-lg text-gh-text-secondary max-w-2xl mx-auto mb-10">
          {"Whether you're"} scaling your development process or just learning how to code, GitHub is where you belong. Join the {"world's"} most widely adopted developer platform to build the technologies that shape {"what's"} next.
        </p>

        {/* Email signup */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
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
    </section>
  );
};

export default CTASection;