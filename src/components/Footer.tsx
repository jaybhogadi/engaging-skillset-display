
import React from "react";
import { Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer: React.FC = () => {
  return (
    <footer className="bg-secondary py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="font-bold text-lg">Portfolio</p>
            <p className="text-sm text-foreground/70">© {new Date().getFullYear()} All Rights Reserved</p>
          </div>
          <div className="mb-6 md:mb-0">
            <p className="text-foreground/80 mb-2 text-center md:text-left">Contact me at: <span className="font-medium">jayakrishnasri13@gmail.com</span></p>
          </div>
          <div className="flex space-x-4">
            <a href="https://github.com/jaybhogadi" className="hover:text-accent transition-colors" target="_blank" rel="noopener noreferrer">
              <span className="sr-only">GitHub</span>
              <Github className="w-6 h-6" />
            </a>
            <a href="https://www.linkedin.com/in/jayakrishnasribhogadi/" className="hover:text-accent transition-colors" target="_blank" rel="noopener noreferrer">
              <span className="sr-only">LinkedIn</span>
              <Linkedin className="w-6 h-6" />
            </a>
            <a href="mailto:jayakrishnasri13@gmail.com" className="hover:text-accent transition-colors">
              <span className="sr-only">Email</span>
              <Mail className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
