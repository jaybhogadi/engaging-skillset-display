
import React from "react";
import * as Icons from "lucide-react";
type SkillCategory = {
  title: string;
  skills: string[];
};

const skillCategories: SkillCategory[] = [
  {
    title: "Languages & Frameworks",
    skills: ["Python","JavaScript","CPP","HTML","CSS", "FastAPI", "Flask", "React", "Streamlit"],
  },
  {
    title: "Technologies & Platforms",
    skills: [
      "LangChain",
      "LangGraph",
      "Semantic Kernel",
      "Huggingface",
      "TensorFlow",
      "Keras",
      "Numpy",
    ],
  },
  {
    title: "Specialized Areas",
    skills: [
      "Generative AI",
      "Machine Learning",
      "Computer Vision",
      "Data Structures & Algorithms",
    ],
  },
  {
    title: "Databases & Version Control",
    skills: ["ChromaDB", "MySQL", "Neo4j", "Git", "Bitbucket"],
  },
];

const getIconForSkill = (skill: string) => {
  const iconName = skill.toLowerCase().replace(/[.\s]/g, "");
  return (Icons as any)[iconName] || Icons.Code;
};

const SkillCard: React.FC<{ skill: string }> = ({ skill }) => {
  const imageName = skill.toLowerCase().replace(/[.\s&]/g, "").replace("++", "pp");
  const imageUrl = `/skills/${imageName}.png`;
  // const imageUrl = `/skills/Python.jpeg`;

  return (
    <div className="bg-secondary rounded-lg p-6 transition-all duration-300 hover:shadow-lg hover:shadow-accent/20 hover:-translate-y-1 flex flex-col items-center gap-3">
      <img
        src={imageUrl}
        alt={skill}
        className="w-12 h-12 object-contain"
        onError={(e) => {
          (e.target as HTMLImageElement).src = "/skills/default.jpeg"; // fallback image
        }}
      />
      <h3 className="text-lg font-semibold text-center">{skill}</h3>
    </div>
  );
};

const SkillsSection: React.FC = () => {
  return (
    <section id="skills" className="section bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Skills</h2>
          <div className="w-20 h-1 bg-accent mx-auto"></div>
          <p className="mt-6 text-foreground/80 max-w-2xl mx-auto">
            I've developed expertise across various technologies and platforms.
            Here's an overview of my technical skillset.
          </p>
        </div>

        {skillCategories.map((category) => (
          <div key={category.title} className="mb-12 last:mb-0">
            <h3 className="text-2xl font-semibold mb-6 text-center">
              {category.title}
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
              {category.skills.map((skill) => (
                <SkillCard key={skill} skill={skill} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SkillsSection;
