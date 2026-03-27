import { useState } from "react";
import { useNavigate, Link, useLocation } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";
import GitHubLogo from "@/components/GitHubLogo";
import { Eye, EyeOff, Check, X } from "lucide-react";

const SignUp = () => {
  const location = useLocation();
  const prefillEmail = (location.state as any)?.email || "";
  const [email, setEmail] = useState(prefillEmail);
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [step, setStep] = useState(1);
  const navigate = useNavigate();
  const { toast } = useToast();

  const passwordChecks = [
    { label: "At least 8 characters", valid: password.length >= 8 },
    { label: "Contains a number", valid: /\d/.test(password) },
    { label: "Contains a lowercase letter", valid: /[a-z]/.test(password) },
  ];

  const allPasswordChecksValid = passwordChecks.every((c) => c.valid);

  const handleContinue = () => {
    if (step === 1) {
      if (!email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        toast({
          title: "Invalid email",
          description: "Please enter a valid email address.",
          variant: "destructive",
        });
        return;
      }
      setStep(2);
    } else if (step === 2) {
      if (!allPasswordChecksValid) {
        toast({
          title: "Weak password",
          description: "Please meet all password requirements.",
          variant: "destructive",
        });
        return;
      }
      setStep(3);
    } else if (step === 3) {
      if (!username.trim() || username.length < 3) {
        toast({
          title: "Invalid username",
          description: "Username must be at least 3 characters.",
          variant: "destructive",
        });
        return;
      }
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
        toast({
          title: "Account created! 🎉",
          description: `Welcome to GitHub, ${username}!`,
        });
        navigate("/");
      }, 1200);
    }
  };

  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center px-4">
      <div className="w-full max-w-md">
        {/* Logo */}
        <div className="flex justify-center mb-8">
          <GitHubLogo
            className="w-12 h-12 text-white cursor-pointer hover:opacity-80 transition-opacity"
            onClick={() => navigate("/")}
          />
        </div>

        <h1 className="text-2xl font-light text-white text-center mb-2">
          Welcome to GitHub!
        </h1>
        <p className="text-sm text-gh-text-secondary text-center mb-8">
          {"Let's"} begin the adventure
        </p>

        {/* Progress indicator */}
        <div className="flex items-center justify-center gap-2 mb-8">
          {[1, 2, 3].map((s) => (
            <div
              key={s}
              className={`h-1 rounded-full transition-all duration-300 ${
                s <= step ? "bg-gh-green-bright w-12" : "bg-gh-border w-8"
              }`}
            />
          ))}
        </div>

        {/* Form card */}
        <div className="rounded-xl border border-gh-border-subtle bg-gh-surface p-6">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleContinue();
            }}
            className="space-y-4"
          >
            {step === 1 && (
              <div className="animate-fade-in">
                <label className="block text-sm text-white mb-1.5">
                  Enter your email
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@example.com"
                  className="w-full px-3 py-2 rounded-lg bg-white/5 border border-gh-border text-white text-sm placeholder:text-gh-text-secondary focus:outline-none focus:border-gh-blue-bright focus:ring-2 focus:ring-gh-blue/30 transition-all"
                  autoFocus
                />
              </div>
            )}

            {step === 2 && (
              <div className="animate-fade-in space-y-4">
                <div>
                  <label className="block text-sm text-white mb-1.5">
                    Create a password
                  </label>
                  <div className="relative">
                    <input
                      type={showPassword ? "text" : "password"}
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="Create a password"
                      className="w-full px-3 py-2 pr-10 rounded-lg bg-white/5 border border-gh-border text-white text-sm placeholder:text-gh-text-secondary focus:outline-none focus:border-gh-blue-bright focus:ring-2 focus:ring-gh-blue/30 transition-all"
                      autoFocus
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
                <div className="space-y-1.5">
                  {passwordChecks.map((check) => (
                    <div key={check.label} className="flex items-center gap-2">
                      {check.valid ? (
                        <Check className="w-3.5 h-3.5 text-gh-green-bright" />
                      ) : (
                        <X className="w-3.5 h-3.5 text-gh-text-secondary" />
                      )}
                      <span
                        className={`text-xs ${
                          check.valid ? "text-gh-green-bright" : "text-gh-text-secondary"
                        }`}
                      >
                        {check.label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {step === 3 && (
              <div className="animate-fade-in">
                <label className="block text-sm text-white mb-1.5">
                  Enter a username
                </label>
                <input
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value.replace(/[^a-zA-Z0-9-_]/g, ""))}
                  placeholder="Choose a username"
                  className="w-full px-3 py-2 rounded-lg bg-white/5 border border-gh-border text-white text-sm placeholder:text-gh-text-secondary focus:outline-none focus:border-gh-blue-bright focus:ring-2 focus:ring-gh-blue/30 transition-all"
                  autoFocus
                />
                <p className="text-xs text-gh-text-secondary mt-1.5">
                  This will be your public identity on GitHub.
                </p>
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full py-2.5 bg-gh-green hover:bg-gh-green-bright text-white font-semibold text-sm rounded-lg transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {loading
                ? "Creating account..."
                : step === 3
                ? "Create account"
                : "Continue"}
            </button>
          </form>
        </div>

        {/* Sign in link */}
        <div className="mt-4 rounded-xl border border-gh-border-subtle bg-gh-surface p-4 text-center">
          <span className="text-sm text-gh-text-secondary">
            Already have an account?{" "}
            <Link to="/signin" className="text-gh-blue-bright hover:text-white transition-colors">
              Sign in
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

export default SignUp;