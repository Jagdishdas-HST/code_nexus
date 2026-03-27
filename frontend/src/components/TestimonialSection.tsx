import { ArrowRight } from "lucide-react";

const industries = [
  {
    category: "Technology",
    company: "Figma",
    description: "streamlines development and strengthens security",
  },
  {
    category: "Automotive",
    company: "Mercedes-Benz",
    description: "standardizes source code and automates onboarding",
  },
  {
    category: "Financial services",
    company: "Mercado Libre",
    description: "cuts coding time by 50%",
  },
];

const TestimonialSection = () => {
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <h2 className="text-sm font-semibold text-gh-text-secondary uppercase tracking-wider mb-4">
            From startups to enterprises
          </h2>
          <p className="text-2xl md:text-3xl font-bold text-white">
            GitHub scales with teams of any size in any industry.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {industries.map((item) => (
            <div
              key={item.company}
              className="group rounded-2xl border border-gh-border-subtle bg-gh-surface p-6 hover:border-white/15 transition-all duration-300"
            >
              <div className="text-xs font-medium text-gh-text-secondary uppercase tracking-wider mb-3">
                {item.category}
              </div>
              <h3 className="text-lg font-bold text-white mb-2">
                {item.company} <span className="text-gh-text-secondary font-normal">{item.description}</span>
              </h3>
              <a href="#" className="inline-flex items-center gap-2 text-gh-blue-bright hover:text-white text-sm font-medium transition-colors group/link mt-4">
                Read customer story
                <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
              </a>
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <a href="#" className="inline-flex items-center gap-2 text-gh-blue-bright hover:text-white text-sm font-medium transition-colors">
            Explore customer stories
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;