import React, { useState } from 'react';
import { Code2, Database, Globe, Layers, Palette, Server, ChevronDown, ChevronUp } from 'lucide-react';

const SkillsSection = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const skills = [
    {
      category: "Frontend Development",
      icon: <Code2 className="w-6 h-6" />,
      items: [
        { name: "React", level: 90 },
        { name: "JavaScript", level: 85 },
        { name: "TypeScript", level: 80 },
        { name: "HTML5/CSS3", level: 95 }
      ]
    },
    {
      category: "UI/UX",
      icon: <Palette className="w-6 h-6" />,
      items: [
        { name: "Tailwind CSS", level: 88 },
        { name: "Material UI", level: 82 },
        { name: "Responsive Design", level: 92 },
        { name: "CSS Animation", level: 78 }
      ]
    },
    {
      category: "Backend Development",
      icon: <Server className="w-6 h-6" />,
      items: [
        { name: "Node.js", level: 85 },
        { name: "Express", level: 82 },
        { name: "RESTful APIs", level: 88 },
        { name: "GraphQL", level: 75 }
      ]
    },
    {
      category: "Database",
      icon: <Database className="w-6 h-6" />,
      items: [
        { name: "MongoDB", level: 86 },
        { name: "PostgreSQL", level: 84 },
        { name: "Redis", level: 78 },
        { name: "Firebase", level: 80 }
      ]
    },
    {
      category: "Web Technologies",
      icon: <Globe className="w-6 h-6" />,
      items: [
        { name: "Git", level: 90 },
        { name: "Webpack", level: 82 },
        { name: "Docker", level: 85 },
        { name: "AWS", level: 80 }
      ]
    },
    {
      category: "Architecture",
      icon: <Layers className="w-6 h-6" />,
      items: [
        { name: "Microservices", level: 85 },
        { name: "CI/CD", level: 82 },
        { name: "Design Patterns", level: 88 },
        { name: "System Design", level: 84 }
      ]
    }
  ];

  const SkillBar = ({ name, level }) => (
    <div className="mb-4">
      <div className="flex justify-between mb-1">
        <span className="text-sm font-medium text-gray-300">{name}</span>
        <span className="text-sm font-medium text-gray-400">{level}%</span>
      </div>
      <div className="w-full bg-gray-700 rounded-full h-2.5">
        <div 
          className="h-2.5 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 transition-all duration-1000 ease-out"
          style={{ width: `${level}%` }}
        ></div>
      </div>
    </div>
  );

  const handleCategoryClick = (index) => {
    setSelectedCategory(selectedCategory === index ? null : index);
  };

  return (
    <section className="py-16 bg-black text-gray-200">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-4 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
          Technical Skills
        </h2>
        <p className="text-center text-gray-400 mb-12">Expertise across the full stack development spectrum</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skillGroup, index) => (
            <div 
              key={index}
              className={`bg-gray-800 rounded-xl shadow-md hover:shadow-lg transition-all duration-300
                ${selectedCategory === index ? 'ring-2 ring-blue-400' : ''}`}
            >
              <button
                className="w-full p-6 text-left focus:outline-none"
                onClick={() => handleCategoryClick(index)}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="p-2 bg-gray-700 rounded-lg mr-4">
                      {skillGroup.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-gray-300">{skillGroup.category}</h3>
                  </div>
                  {selectedCategory === index ? 
                    <ChevronUp className="w-5 h-5 text-gray-400" /> :
                    <ChevronDown className="w-5 h-5 text-gray-400" />
                  }
                </div>
              </button>
              
              <div className={`px-6 overflow-hidden transition-all duration-300 ease-in-out
                ${selectedCategory === index ? 'max-h-96 pb-6' : 'max-h-0'}`}>
                {skillGroup.items.map((skill, skillIndex) => (
                  <SkillBar
                    key={skillIndex}
                    name={skill.name}
                    level={skill.level}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
