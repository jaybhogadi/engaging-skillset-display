
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const projects = [
  {
    title: "E-commerce Platform",
    description: "A full-stack e-commerce platform built with React and Node.js",
    tech: ["React", "Node.js", "MongoDB", "Express"],
    link: "https://project1.com",
  },
  {
    title: "Task Management App",
    description: "A collaborative task management application",
    tech: ["React", "Firebase", "Tailwind CSS"],
    link: "https://project2.com",
  },
  {
    title: "Weather Dashboard",
    description: "Real-time weather monitoring dashboard",
    tech: ["React", "Weather API", "ChartJS"],
    link: "https://project3.com",
  },
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
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:text-primary/80"
                >
                  View Project →
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
