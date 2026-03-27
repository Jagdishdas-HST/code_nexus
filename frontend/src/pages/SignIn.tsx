import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";
import GitHubLogo from "@/components/GitHubLogo";
import { Eye, EyeOff } from "lucide-react";

const SignIn = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!username.trim() || !password.trim()) {
      toast({
        title: "Missing fields",
        description: "Please enter both username and password.",
        variant: "destructive",
      });
      return;
    }
    setLoading(true);
    // Simulate sign in
    setTimeout(() => {
      setLoading(false);
      toast({
        title: "Welcome back! 👋",
        description: `Signed in as ${username}`,
      });
      navigate("/");
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center px-4">
      <div className="w-full max-w-sm">
        {/* Logo */}
        <div className="flex justify-center mb-8">
          <GitHubLogo
            className="w-12 h-12 text-white cursor-pointer hover:opacity-80 transition-opacity"
            onClick={() => navigate("/")}
          />
        </div>

        <h1 className="text-2xl font-light text-white text-center mb-6">
          Sign in to GitHub
        </h1>

        {/* Form card */}
        <div className="rounded-xl border border-gh-border-subtle bg-gh-surface p-6">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm text-white mb-1.5">
                Username or email address
              </label>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full px-3 py-2 rounded-lg bg-white/5 border border-gh-border text-white text-sm focus:outline-none focus:border-gh-blue-bright focus:ring-2 focus:ring-gh-blue/30 transition-all"
                autoFocus
              />
            </div>

            <div>
              <div className="flex items-center justify-between mb-1.5">
                <label className="text-sm text-white">Password</label>
                <a href="#" className="text-xs text-gh-blue-bright hover:text-white transition-colors">
                  Forgot password?
                </a>
              </div>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-3 py-2 pr-10 rounded-lg bg-white/5 border border-gh-border text-white text-sm focus:outline-none focus:border-gh-blue-bright focus:ring-2 focus:ring-gh-blue/30 transition-all"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gh-text-secondary hover:text-white transition-colors"
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-2.5 bg-gh-green hover:bg-gh-green-bright text-white font-semibold text-sm rounded-lg transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {loading ? "Signing in..." : "Sign in"}
            </button>
          </form>
        </div>

        {/* Sign up link */}
        <div className="mt-4 rounded-xl border border-gh-border-subtle bg-gh-surface p-4 text-center">
          <span className="text-sm text-gh-text-secondary">
            New to GitHub?{" "}
            <Link to="/signup" className="text-gh-blue-bright hover:text-white transition-colors">
              Create an account
            </Link>
          </span>
        </div>

        {/* Footer links */}
        <div className="mt-8 flex items-center justify-center gap-4 text-xs text-gh-text-secondary">
          <a href="#" className="hover:text-gh-blue-bright transition-colors">Terms</a>
          <a href="#" className="hover:text-gh-blue-bright transition-colors">Privacy</a>
          <a href="#" className="hover:text-gh-blue-bright transition-colors">Docs</a>
          <a href="#" className="hover:text-gh-blue-bright transition-colors">Contact GitHub</a>
          <a href="#" className="hover:text-gh-blue-bright transition-colors">Status</a>
        </div>
      </div>
    </div>
  );
};

export default SignIn;