
import React, { useEffect } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import SkillsSection from "@/components/SkillsSection";
import WorkSection from "@/components/WorkSection";
import ExperienceSection from "@/components/ExperienceSection";
import InfoSection from "@/components/InfoSection";
import CodingPlatforms from "@/components/CodingPlatforms";
import Footer from "@/components/Footer";

const Index: React.FC = () => {
  useEffect(() => {
    document.title = "My Portfolio";
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        <HeroSection />
        <SkillsSection />
        <WorkSection />
        <ExperienceSection />
        <CodingPlatforms />
        <InfoSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
