import { ArrowRight, Shield, Lock, Eye, AlertTriangle } from "lucide-react";

const securityFeatures = [
  {
    icon: Shield,
    title: "Apply fixes in seconds",
    description: "Spend less time debugging and more time building features with Copilot Autofix.",
    link: "Explore GitHub Advanced Security",
    color: "green",
  },
  {
    icon: AlertTriangle,
    title: "Security debt, solved",
    description: "Leverage security campaigns and Copilot Autofix to reduce application vulnerabilities.",
    link: "Learn about GitHub Code Security",
    color: "yellow",
  },
  {
    icon: Eye,
    title: "Dependencies you can depend on",
    description: "Update vulnerable dependencies with supported fixes for breaking changes.",
    link: "Learn about Dependabot",
    color: "blue",
  },
  {
    icon: Lock,
    title: "Your secrets, your business",
    description: "Detect, prevent, and remediate leaked secrets across your organization.",
    link: "Learn about GitHub Secret Protection",
    color: "purple",
  },
];

const colorMap: Record<string, { bg: string; text: string; border: string }> = {
  green: { bg: "bg-gh-green/10", text: "text-gh-green-bright", border: "border-gh-green/20" },
  yellow: { bg: "bg-yellow-500/10", text: "text-yellow-400", border: "border-yellow-500/20" },
  blue: { bg: "bg-gh-blue/10", text: "text-gh-blue-bright", border: "border-gh-blue/20" },
  purple: { bg: "bg-purple-500/10", text: "text-purple-400", border: "border-purple-500/20" },
};

const SecuritySection = () => {
  return (
    <section id="security-section" className="relative py-24 lg:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight mb-4">
            Built-in application security
          </h2>
          <p className="text-lg text-gh-text-secondary max-w-2xl mx-auto">
            Where found means fixed. Use AI to find and fix vulnerabilities so your team can ship more secure software faster.
          </p>
        </div>

        {/* Stats row */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-8 sm:gap-16 mb-16">
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-white font-mono">70%</div>
            <p className="text-sm text-gh-text-secondary mt-1">MTTR reduction with Copilot Autofix</p>
          </div>
          <div className="hidden sm:block w-px h-12 bg-gh-border" />
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-white font-mono">8.3M</div>
            <p className="text-sm text-gh-text-secondary mt-1">secret leaks stopped with push protection</p>
          </div>
        </div>

        {/* Feature cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {securityFeatures.map((feature) => {
            const Icon = feature.icon;
            const colors = colorMap[feature.color];
            return (
              <div
                key={feature.title}
                className="group rounded-2xl border border-gh-border-subtle bg-gh-surface p-6 hover:border-white/15 transition-all duration-300"
              >
                <div className={`w-10 h-10 rounded-lg ${colors.bg} border ${colors.border} flex items-center justify-center mb-4`}>
                  <Icon className={`w-5 h-5 ${colors.text}`} />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{feature.title}</h3>
                <p className="text-sm text-gh-text-secondary mb-4">{feature.description}</p>
                <a href="#" className="inline-flex items-center gap-2 text-gh-blue-bright hover:text-white text-sm font-medium transition-colors group/link">
                  {feature.link}
                  <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SecuritySection;