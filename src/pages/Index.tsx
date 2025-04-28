
import React, { useEffect } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import SkillsSection from "@/components/SkillsSection";
import InfoSection from "@/components/InfoSection";
import Footer from "@/components/Footer";

const Index: React.FC = () => {
  useEffect(() => {
    // Update document title
    document.title = "My Portfolio";
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        <HeroSection />
        <SkillsSection />
        <InfoSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
