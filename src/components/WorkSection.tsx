
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const projects = [
  {
  title: "🎥 VidQuest",
  description: "Convert any uploaded MP4 video into multiple-choice questions (MCQs). Users can select the desired count of questions, and the system automatically generates them using AI.",
  tech: ["Python", "Generative AI", "Whisper Model", "WebSocket", "React.js"],
  code_link: "https://github.com/jaybhogadi/VidQuest_Full_Stack_Project",
  live_link: "https://vidquest-backend.onrender.com"
},
  {
    title: "🛒 Product Recommendation System",
    description: "A data-driven product recommendation engine built using Flask and machine learning models trained on real sales history.",
    tech: ["Python", "Machine Learning", "Flask", "Pandas"],
    code_link:"https://github.com/jaybhogadi/Products_Recommendation_System.git",
    live_link: "https://products-recommendation-system-r1sz.onrender.com",
  },
  {
    title: "Sorting Visualizer",
    description: "A web-based interactive visualizer for learning sorting algorithms, designed to help beginners understand the step-by-step execution of classic sorting techniques through engaging animations.",
    tech: ["HTML", "CSS", "JavaScript"],
    code_link:"https://github.com/jaybhogadi/Sorting_Visualizer.git",
    live_link: "https://sorting-visualizer-kgz8.onrender.com"
  }
  
  // {
  //   title: "Weather Dashboard",
  //   description: "Real-time weather monitoring dashboard",
  //   tech: ["React", "Weather API", "ChartJS"],
  //   link: "https://project3.com",
  // },
];

const WorkSection: React.FC = () => {
  return (
    <section id="work" className="section">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Work</h2>
          <div className="w-20 h-1 bg-accent mx-auto"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4 text-muted-foreground">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 bg-accent/10 text-accent rounded-md text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <a
                  href={project.code_link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:text-primary/80 mr-4"
                >
                  🛠️ View Code
                </a>
              <a
                href={project.live_link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:text-primary/80"
              >
                🚀 View Project
              </a>

              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkSection;
