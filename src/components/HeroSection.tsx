
import React from "react";
import { Button } from "@/components/ui/button";

const HeroSection: React.FC = () => {
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
              <span>Your Name</span>
            </h1>
            <p className="text-xl md:text-2xl mb-6 text-foreground/80">
              Web Developer & Designer
            </p>
            <p className="text-muted-foreground mb-8 max-w-lg">
              I create beautiful, functional websites and applications. With expertise in
              modern web technologies, I bring ideas to life through clean code and
              thoughtful design.
            </p>
            <div className="flex space-x-4">
              <Button size="lg">My Work</Button>
              <Button size="lg" variant="outline">
                Contact Me
              </Button>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <div className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-gradient-to-br from-primary to-accent opacity-90 flex items-center justify-center">
              <div className="w-60 h-60 md:w-72 md:h-72 rounded-full bg-background flex items-center justify-center overflow-hidden">
                {/* Replace with your photo */}
                <div className="text-6xl">👤</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
