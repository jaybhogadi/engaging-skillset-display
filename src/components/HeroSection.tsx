
import React from "react";
import { Button } from "@/components/ui/button";

const HeroSection: React.FC = () => {
  const imageUrl = `/skills/Python.png`;
  return (
    <section id="home" className="section min-h-screen flex items-center">
      <div className="container mx-auto px-4">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-12">
          <div className="md:w-1/2">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Hello, I'm
              </span>
              <br />
              <span>Jaya Krishna Sri</span>
            </h1>
            <p className="text-xl md:text-2xl mb-6 text-foreground/80">
            Gen AI Engineer
            </p>
            <p className="text-muted-foreground mb-8 max-w-lg">
            I build intelligent AI-powered 
            applications and systems. With expertise in Generative AI, agentic frameworks like LangGraph,
             RAG pipelines, and modern frameworks such as FastAPI and React, I transform complex ideas into impactful real-world solutions.
            </p>
            <div className="flex space-x-4">
              <Button size="lg" onClick={() => document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' })}>
                My Work
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                onClick={() => {
                  window.location.href = "mailto:jayakrishnasri13@gmail.com";
                }}
              >
                Contact Me
              </Button>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <div className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-gradient-to-br from-primary to-accent opacity-90 flex items-center justify-center">
              <div className="w-60 h-60 md:w-72 md:h-72 rounded-full bg-background flex items-center justify-center overflow-hidden">
                {/* Replace with your photo */}
                <img
                  src={imageUrl} 
                  alt="profile"
                  className="text-7xl"
                  // className="w-12 h-12 object-contain"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = "/skills/profile.png"; // fallback image
                  }}
                />
                {/* <div className="text-6xl">👤</div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
