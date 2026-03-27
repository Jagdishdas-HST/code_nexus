import { useState } from "react";
import { ArrowRight, CheckCircle2, Clock, Plus, ChevronDown } from "lucide-react";

const accordionItems = [
  {
    id: "actions",
    title: "Automate your path to production",
    subtitle: "Ship faster with secure, reliable CI/CD.",
    link: "Explore GitHub Actions",
    expanded: true,
  },
  {
    id: "codespaces",
    title: "Code instantly from anywhere",
    subtitle: "Launch a full, cloud-based development environment in seconds.",
    link: "Explore GitHub Codespaces",
    expanded: false,
  },
  {
    id: "mobile",
    title: "Keep momentum on the go",
    subtitle: "Manage projects and assign tasks to Copilot, all from your mobile device.",
    link: "Explore GitHub Mobile",
    expanded: false,
  },
  {
    id: "marketplace",
    title: "Shape your toolchain",
    subtitle: "Extend your stack with apps, actions, and AI models.",
    link: "Explore GitHub Marketplace",
    expanded: false,
  },
];

const workflowRuns = [
  { name: "Fix IE12 incompatibilities", status: "success", time: "1 hour ago", duration: "5m 40s" },
  { name: "Accessibility tests", status: "success", time: "1 hour ago", duration: "5m 40s" },
  { name: "Update changelog and release notes", status: "success", time: "1 hour ago", duration: "5m 40s" },
  { name: "Migrate to latest Storybook", status: "success", time: "1 hour ago", duration: "5m 40s" },
  { name: "Fix IE11 incompatibilities", status: "success", time: "1 hour ago", duration: "5m 40s" },
];

const WorkflowSection = () => {
  const [activeItem, setActiveItem] = useState("actions");

  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-bl from-blue-900/10 via-purple-900/5 to-transparent rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left: Accordion */}
          <div className="space-y-0">
            <h2 className="text-sm font-semibold text-gh-text-secondary uppercase tracking-wider mb-8">
              GitHub features
            </h2>
            {accordionItems.map((item) => {
              const isActive = activeItem === item.id;
              return (
                <div
                  key={item.id}
                  className="border-b border-gh-border-subtle"
                >
                  <button
                    onClick={() => setActiveItem(isActive ? "" : item.id)}
                    className="flex items-center justify-between w-full py-5 text-left group"
                  >
                    <span className={`text-lg md:text-xl font-semibold transition-colors ${isActive ? "text-white" : "text-gh-text-secondary hover:text-white"}`}>
                      {item.title}
                    </span>
                    {isActive ? (
                      <ChevronDown className="w-5 h-5 text-gh-text-secondary rotate-180 transition-transform" />
                    ) : (
                      <Plus className="w-5 h-5 text-gh-text-secondary group-hover:text-white transition-colors" />
                    )}
                  </button>
                  {isActive && (
                    <div className="pb-5 animate-fade-in">
                      <p className="text-gh-text-secondary text-sm mb-3">{item.subtitle}</p>
                      <a href="#" className="inline-flex items-center gap-2 text-gh-blue-bright hover:text-white text-sm font-medium transition-colors group/link">
                        {item.link}
                        <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                      </a>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Right: Workflow runs card */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-teal-500/5 rounded-2xl blur-xl" />
            <div className="relative rounded-2xl border border-gh-border-subtle bg-gh-surface overflow-hidden shadow-2xl shadow-black/30">
              {/* Header */}
              <div className="px-5 py-4 border-b border-gh-border-subtle flex items-center justify-between">
                <span className="text-sm font-semibold text-white">45,167 workflow runs</span>
                <div className="flex items-center gap-2">
                  {["Event", "Status", "Branch", "Actor"].map((filter) => (
                    <button key={filter} className="flex items-center gap-1 text-xs text-gh-text-secondary hover:text-white px-2 py-1 rounded hover:bg-white/5 transition-colors">
                      {filter}
                      <ChevronDown className="w-3 h-3" />
                    </button>
                  ))}
                </div>
              </div>

              {/* Workflow list */}
              <div className="divide-y divide-gh-border-subtle">
                {workflowRuns.map((run, i) => (
                  <div key={i} className="flex items-center justify-between px-5 py-3.5 hover:bg-white/[0.02] transition-colors">
                    <div className="flex items-center gap-3">
                      <CheckCircle2 className="w-4 h-4 text-gh-green-bright shrink-0" />
                      <div>
                        <div className="text-sm font-medium text-white">{run.name}</div>
                        <div className="text-xs text-gh-text-secondary">
                          Build, test and deploy #15078: pull request #239122 synchronize by mona
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-4 shrink-0 ml-4">
                      <span className="text-xs text-gh-text-secondary">{run.time}</span>
                      <div className="flex items-center gap-1 text-xs text-gh-text-secondary">
                        <Clock className="w-3 h-3" />
                        {run.duration}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkflowSection;