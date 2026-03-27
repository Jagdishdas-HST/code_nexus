import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import FeaturesNav from "@/components/FeaturesNav";
import CopilotShowcase from "@/components/CopilotShowcase";
import WorkflowSection from "@/components/WorkflowSection";
import SecuritySection from "@/components/SecuritySection";
import CollaborationSection from "@/components/CollaborationSection";
import StatsSection from "@/components/StatsSection";
import TestimonialSection from "@/components/TestimonialSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  const location = useLocation();

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <Navbar />
      <HeroSection />

      {/* Features navigation tabs */}
      <div className="relative border-y border-gh-border-subtle bg-black/50 backdrop-blur-sm sticky top-16 z-40">
        <FeaturesNav />
      </div>

      <CopilotShowcase />

      {/* Divider */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-gh-border to-transparent" />

      <WorkflowSection />

      <div className="w-full h-px bg-gradient-to-r from-transparent via-gh-border to-transparent" />

      <SecuritySection />

      <div className="w-full h-px bg-gradient-to-r from-transparent via-gh-border to-transparent" />

      <CollaborationSection />

      <div className="w-full h-px bg-gradient-to-r from-transparent via-gh-border to-transparent" />

      <StatsSection />

      <TestimonialSection />

      <div className="w-full h-px bg-gradient-to-r from-transparent via-gh-border to-transparent" />

      <CTASection />

      <Footer />
    </div>
  );
};

export default Index;