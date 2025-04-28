import React, { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { FileDown } from "lucide-react";
import { Button } from "./ui/button";

type NavLink = {
  name: string;
  href: string;
};

const navLinks: NavLink[] = [
  { name: "Home", href: "#home" },
  { name: "Skills", href: "#skills" },
  { name: "Work", href: "#work" },
  { name: "Experience", href: "#experience" },
  { name: "Information", href: "#information" },
];

const Navbar: React.FC = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section[id]");
      const scrollPosition = window.scrollY + 100;

      sections.forEach((section) => {
        const sectionTop = (section as HTMLElement).offsetTop;
        const sectionHeight = (section as HTMLElement).offsetHeight;
        const sectionId = section.getAttribute("id") || "";

        if (
          scrollPosition >= sectionTop &&
          scrollPosition < sectionTop + sectionHeight
        ) {
          setActiveSection(sectionId);
        }
      });

      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleDownloadResume = () => {
    // Replace this URL with your actual resume file URL
    const resumeUrl = "/path-to-your-resume.pdf";
    window.open(resumeUrl, '_blank');
  };

  return (
    <header
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300",
        scrolled ? "bg-background/95 backdrop-blur-sm shadow-md" : "bg-transparent"
      )}
    >
      <div className="container mx-auto flex justify-between items-center h-16 px-4">
        <div className="text-xl font-bold text-primary">Portfolio</div>
        <nav className="hidden md:flex items-center space-x-1">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={cn(
                "nav-link",
                activeSection === link.href.substring(1) && "active-link"
              )}
            >
              {link.name}
            </a>
          ))}
          <Button
            variant="outline"
            size="sm"
            className="ml-4"
            onClick={handleDownloadResume}
          >
            <FileDown className="mr-2 h-4 w-4" />
            Resume
          </Button>
        </nav>
        <div className="md:hidden">
          {/* Mobile menu button would go here */}
          <button className="p-2 text-accent hover:text-accent-foreground">
            <span className="sr-only">Open menu</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
