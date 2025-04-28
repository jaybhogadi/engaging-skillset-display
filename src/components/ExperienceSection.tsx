
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const experiences = [
  {
    role: "Senior Frontend Developer",
    company: "Tech Corp",
    period: "2022 - Present",
    description: "Leading the frontend development team and architecting scalable solutions.",
    responsibilities: [
      "Developed and maintained multiple React applications",
      "Mentored junior developers",
      "Implemented CI/CD pipelines",
    ],
  },
  {
    role: "Frontend Developer",
    company: "Digital Solutions Inc",
    period: "2020 - 2022",
    description: "Worked on various client projects using modern web technologies.",
    responsibilities: [
      "Built responsive web applications",
      "Optimized application performance",
      "Collaborated with design team",
    ],
  },
];

const ExperienceSection: React.FC = () => {
  return (
    <section id="experience" className="section">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Experience</h2>
          <div className="w-20 h-1 bg-accent mx-auto"></div>
        </div>
        <div className="max-w-4xl mx-auto space-y-6">
          {experiences.map((exp, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle className="flex justify-between items-center flex-wrap gap-2">
                  <span>{exp.role}</span>
                  <span className="text-muted-foreground text-sm">{exp.period}</span>
                </CardTitle>
                <p className="text-primary">{exp.company}</p>
              </CardHeader>
              <CardContent>
                <p className="mb-4 text-muted-foreground">{exp.description}</p>
                <ul className="list-disc list-inside space-y-2">
                  {exp.responsibilities.map((resp, i) => (
                    <li key={i} className="text-foreground/80">{resp}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
