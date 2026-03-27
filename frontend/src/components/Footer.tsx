import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import GitHubLogo from "./GitHubLogo";

const footerColumns = [
  {
    title: "Platform",
    links: ["Features", "Enterprise", "Copilot", "AI", "Security", "Pricing", "Team", "Resources"],
  },
  {
    title: "Ecosystem",
    links: ["Developer API", "Partners", "Education", "GitHub CLI", "GitHub Desktop", "GitHub Mobile", "GitHub Marketplace", "MCP Registry"],
  },
  {
    title: "Support",
    links: ["Docs", "Community Forum", "Professional Services", "Premium Support", "Skills", "Status", "Contact GitHub"],
  },
  {
    title: "Company",
    links: ["About", "Why GitHub", "Customer stories", "Blog", "The ReadME Project", "Careers", "Newsroom", "Inclusion"],
  },
];

const socialLinks = [
  { name: "LinkedIn", url: "https://linkedin.com/company/github" },
  { name: "Instagram", url: "https://instagram.com/github" },
  { name: "YouTube", url: "https://youtube.com/github" },
  { name: "X", url: "https://x.com/github" },
  { name: "TikTok", url: "https://tiktok.com/@github" },
  { name: "Twitch", url: "https://twitch.tv/github" },
  { name: "GitHub", url: "https://github.com/github" },
];

const Footer = () => {
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const { toast } = useToast();

  const handleSubscribe = () => {
    if (!newsletterEmail.trim()) {
      toast({
        title: "Email required",
        description: "Please enter your email to subscribe.",
        variant: "destructive",
      });
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(newsletterEmail)) {
      toast({
        title: "Invalid email",
        description: "Please enter a valid email address.",
        variant: "destructive",
      });
      return;
    }
    toast({
      title: "Subscribed! 📬",
      description: "You'll receive our developer newsletter twice a month.",
    });
    setNewsletterEmail("");
  };

  return (
    <footer className="relative border-t border-gh-border-subtle bg-black">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-6 gap-12 lg:gap-8">
          {/* Brand column */}
          <div className="lg:col-span-2">
            <GitHubLogo className="w-10 h-10 text-white mb-6" />
            <h3 className="text-sm font-semibold text-white mb-2">
              Subscribe to our developer newsletter
            </h3>
            <p className="text-xs text-gh-text-secondary mb-4">
              Get tips, technical guides, and best practices. Twice a month.
            </p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="you@example.com"
                value={newsletterEmail}
                onChange={(e) => setNewsletterEmail(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSubscribe()}
                className="flex-1 px-3 py-2 text-sm bg-white/5 border border-gh-border rounded-lg text-white placeholder:text-gh-text-secondary focus:outline-none focus:border-gh-blue-bright transition-colors"
              />
              <button
                onClick={handleSubscribe}
                className="px-5 py-2 text-sm font-medium text-white border border-white/20 hover:border-white/40 rounded-lg hover:bg-white/5 transition-all shrink-0"
              >
                Subscribe
              </button>
            </div>
          </div>

          {/* Link columns */}
          {footerColumns.map((col) => (
            <div key={col.title}>
              <h4 className="text-xs font-semibold text-gh-text-secondary uppercase tracking-wider mb-4">
                {col.title}
              </h4>
              <ul className="space-y-2.5">
                {col.links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-sm text-gh-text-secondary hover:text-white transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-gh-border-subtle flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4 text-xs text-gh-text-secondary">
            <span>© 2026 GitHub, Inc.</span>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Sitemap</a>
            <a href="#" className="hover:text-white transition-colors">What is Git?</a>
          </div>
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-gh-text-secondary hover:text-white transition-colors"
              >
                {social.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;