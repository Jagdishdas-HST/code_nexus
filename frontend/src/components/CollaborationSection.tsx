import { ArrowRight, CheckCircle2 } from "lucide-react";

const projectItems = [
  { title: "Game brief and go-no-go", area: "Producers", status: "Complete", assignee: "lucid-jellybean", progress: 86 },
  { title: "Engine prototype (physics, rendering)", area: "Engine", status: "Complete", assignee: "aidengarcia", progress: 24 },
  { title: "Initial concept art", area: "Art", status: "Complete", assignee: "amerejess", progress: 100 },
];

const betaItems = [
  { title: "Integrate with Leaderboard Service", area: "Game Loop", status: "Not Started", assignee: "dareal-daryl", progress: 54 },
  { title: "Creative design update to aliens for variety", area: "Art", status: "Planning", assignee: "novablaster00", progress: 10 },
  { title: "Updates to alien, beam, bomb and cannon sprites", area: "Art", status: "Building", assignee: "itsjessicabell", progress: 10 },
  { title: "Update to collision logic", area: "Engine", status: "Building", assignee: "helios-ackmore", progress: 78 },
];

const StatusBadge = ({ status }: { status: string }) => {
  const colorMap: Record<string, string> = {
    "Complete": "bg-gh-green/15 text-gh-green-bright border-gh-green/30",
    "Not Started": "bg-gray-500/15 text-gray-400 border-gray-500/30",
    "Planning": "bg-blue-500/15 text-blue-400 border-blue-500/30",
    "Building": "bg-purple-500/15 text-purple-400 border-purple-500/30",
    "Behind": "bg-red-500/15 text-red-400 border-red-500/30",
  };
  return (
    <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-medium border ${colorMap[status] || "bg-gray-500/15 text-gray-400 border-gray-500/30"}`}>
      {status === "Complete" && <CheckCircle2 className="w-3 h-3 mr-1" />}
      {status}
    </span>
  );
};

const ProgressBar = ({ value }: { value: number }) => (
  <div className="flex items-center gap-2">
    <div className="w-20 h-1.5 bg-gh-border rounded-full overflow-hidden">
      <div
        className="h-full bg-gh-green-bright rounded-full transition-all"
        style={{ width: `${value}%` }}
      />
    </div>
    <span className="text-[10px] text-gh-text-secondary font-mono">{value}%</span>
  </div>
);

const CollaborationSection = () => {
  return (
    <section id="collaboration-section" className="relative py-24 lg:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight mb-4">
            Work together, achieve more
          </h2>
          <p className="text-lg text-gh-text-secondary max-w-2xl mx-auto">
            From planning and discussion to code review, GitHub keeps your {"team's"} conversation and context next to your code.
          </p>
        </div>

        {/* Project board mock */}
        <div className="rounded-2xl border border-gh-border-subtle bg-gh-surface overflow-hidden shadow-2xl shadow-black/30 mb-12">
          {/* Board header */}
          <div className="px-5 py-4 border-b border-gh-border-subtle flex items-center gap-4">
            <span className="text-sm">👾</span>
            <span className="text-sm font-semibold text-white">OctoArcade Invaders</span>
            <div className="flex items-center gap-2 ml-4">
              {["Feature planning", "By area", "Current sprint"].map((tab, i) => (
                <button
                  key={tab}
                  className={`px-3 py-1 text-xs rounded-md transition-colors ${
                    i === 0 ? "bg-white/10 text-white" : "text-gh-text-secondary hover:text-white hover:bg-white/5"
                  }`}
                >
                  {tab}
                </button>
              ))}
              <button className="px-3 py-1 text-xs text-gh-text-secondary hover:text-white">+ New view</button>
            </div>
          </div>

          {/* Table header */}
          <div className="grid grid-cols-12 gap-2 px-5 py-2 border-b border-gh-border-subtle text-[11px] text-gh-text-secondary font-medium uppercase tracking-wider">
            <div className="col-span-1">#</div>
            <div className="col-span-4">Title</div>
            <div className="col-span-2">Area</div>
            <div className="col-span-2">Status</div>
            <div className="col-span-2">Assignee</div>
            <div className="col-span-1">Progress</div>
          </div>

          {/* Prototype section */}
          <div className="px-5 py-2 border-b border-gh-border-subtle">
            <span className="text-xs font-semibold text-white">Prototype 🔨 <span className="text-gh-text-secondary font-normal">3</span></span>
          </div>
          {projectItems.map((item, i) => (
            <div key={i} className="grid grid-cols-12 gap-2 px-5 py-2.5 border-b border-gh-border-subtle hover:bg-white/[0.02] transition-colors items-center text-xs">
              <div className="col-span-1 text-gh-text-secondary">{i + 1}</div>
              <div className="col-span-4 text-white font-medium">{item.title}</div>
              <div className="col-span-2">
                <span className="px-2 py-0.5 rounded bg-gh-surface-hl text-gh-text-secondary text-[10px]">{item.area}</span>
              </div>
              <div className="col-span-2"><StatusBadge status={item.status} /></div>
              <div className="col-span-2 text-gh-text-secondary">{item.assignee}</div>
              <div className="col-span-1"><ProgressBar value={item.progress} /></div>
            </div>
          ))}

          {/* Beta section */}
          <div className="px-5 py-2 border-b border-gh-border-subtle">
            <span className="text-xs font-semibold text-white">Beta 🚀 <span className="text-gh-text-secondary font-normal">5</span></span>
          </div>
          {betaItems.map((item, i) => (
            <div key={i} className="grid grid-cols-12 gap-2 px-5 py-2.5 border-b border-gh-border-subtle hover:bg-white/[0.02] transition-colors items-center text-xs">
              <div className="col-span-1 text-gh-text-secondary">{i + 4}</div>
              <div className="col-span-4 text-white font-medium">{item.title}</div>
              <div className="col-span-2">
                <span className="px-2 py-0.5 rounded bg-gh-surface-hl text-gh-text-secondary text-[10px]">{item.area}</span>
              </div>
              <div className="col-span-2"><StatusBadge status={item.status} /></div>
              <div className="col-span-2 text-gh-text-secondary">{item.assignee}</div>
              <div className="col-span-1"><ProgressBar value={item.progress} /></div>
            </div>
          ))}
        </div>

        {/* Bottom row: Plan + Testimonial */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <p className="text-lg text-white mb-2">
              <span className="font-bold">Plan with clarity.</span>{" "}
              <span className="text-gh-text-secondary">Organize everything from high-level roadmaps to everyday tasks.</span>
            </p>
            <a href="#" className="inline-flex items-center gap-2 text-gh-blue-bright hover:text-white text-sm font-medium transition-colors group/link mt-2">
              Explore GitHub Projects
              <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
            </a>
          </div>
          <div className="rounded-2xl border border-gh-border-subtle bg-gh-surface p-8">
            <div className="text-3xl text-gh-blue-bright mb-4">"</div>
            <p className="text-white text-lg leading-relaxed mb-6">
              It helps us onboard new software engineers and get them productive right away. We have all our source code, issues, and pull requests in one place... GitHub is a complete platform that frees us from menial tasks and enables us to do our best work.
            </p>
            <div>
              <div className="text-sm font-semibold text-white">Fabian Faulhaber</div>
              <div className="text-xs text-gh-text-secondary font-mono">Application manager at Mercedes-Benz</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CollaborationSection;