
import React from "react";
import { cn } from "@/lib/utils";

type Skill = {
  name: string;
  level: number;
  category: "frontend" | "backend" | "design" | "other";
};

const skills: Skill[] = [
  { name: "HTML & CSS", level: 90, category: "frontend" },
  { name: "JavaScript", level: 85, category: "frontend" },
  { name: "React", level: 80, category: "frontend" },
  { name: "TypeScript", level: 75, category: "frontend" },
  { name: "Node.js", level: 70, category: "backend" },
  { name: "Express", level: 65, category: "backend" },
  { name: "MongoDB", level: 60, category: "backend" },
  { name: "UI/UX Design", level: 75, category: "design" },
  { name: "Figma", level: 70, category: "design" },
  { name: "Git", level: 80, category: "other" },
];

const SkillCard: React.FC<{ skill: Skill }> = ({ skill }) => {
  return (
    <div className="bg-secondary rounded-lg p-6 transition-all duration-300 hover:shadow-lg hover:shadow-accent/20 hover:-translate-y-1">
      <h3 className="text-lg font-semibold mb-3">{skill.name}</h3>
      <div className="w-full h-2 bg-background/50 rounded-full overflow-hidden">
        <div
          className={cn(
            "h-full rounded-full bg-gradient-to-r from-primary to-accent",
            skill.level > 80 ? "from-accent to-primary" : ""
          )}
          style={{ width: `${skill.level}%` }}
        ></div>
      </div>
      <p className="mt-2 text-sm text-foreground/70">{skill.level}%</p>
    </div>
  );
};

const SkillsSection: React.FC = () => {
  const [filter, setFilter] = React.useState<string>("all");

  const filteredSkills = skills.filter((skill) => {
    if (filter === "all") return true;
    return skill.category === filter;
  });

  return (
    <section id="skills" className="section bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Skills</h2>
          <div className="w-20 h-1 bg-accent mx-auto"></div>
          <p className="mt-6 text-foreground/80 max-w-2xl mx-auto">
            I've developed a diverse set of skills throughout my journey as a developer.
            Here's a glimpse of what I bring to the table.
          </p>
        </div>

        <div className="flex flex-wrap justify-center mb-10 space-x-2">
          <button
            onClick={() => setFilter("all")}
            className={cn(
              "px-4 py-2 rounded-full transition-colors",
              filter === "all"
                ? "bg-accent text-accent-foreground"
                : "bg-secondary hover:bg-secondary/80"
            )}
          >
            All
          </button>
          <button
            onClick={() => setFilter("frontend")}
            className={cn(
              "px-4 py-2 rounded-full transition-colors",
              filter === "frontend"
                ? "bg-accent text-accent-foreground"
                : "bg-secondary hover:bg-secondary/80"
            )}
          >
            Frontend
          </button>
          <button
            onClick={() => setFilter("backend")}
            className={cn(
              "px-4 py-2 rounded-full transition-colors",
              filter === "backend"
                ? "bg-accent text-accent-foreground"
                : "bg-secondary hover:bg-secondary/80"
            )}
          >
            Backend
          </button>
          <button
            onClick={() => setFilter("design")}
            className={cn(
              "px-4 py-2 rounded-full transition-colors",
              filter === "design"
                ? "bg-accent text-accent-foreground"
                : "bg-secondary hover:bg-secondary/80"
            )}
          >
            Design
          </button>
          <button
            onClick={() => setFilter("other")}
            className={cn(
              "px-4 py-2 rounded-full transition-colors",
              filter === "other"
                ? "bg-accent text-accent-foreground"
                : "bg-secondary hover:bg-secondary/80"
            )}
          >
            Other
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill) => (
            <SkillCard key={skill.name} skill={skill} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
