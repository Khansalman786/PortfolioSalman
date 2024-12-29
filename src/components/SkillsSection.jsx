import React from "react";

const SkillsSection = () => {
  const skills = [
    {
      category: "Frontend",
      items: [
        { name: "React/Next.js", level: 90 },
        { name: "JavaScript/TypeScript", level: 85 },
        { name: "HTML/CSS/Tailwind", level: 95 },
      ],
    },
    {
      category: "Backend",
      items: [
        { name: "Node.js/Express", level: 85 },
        { name: "Python/Django", level: 80 },
        { name: "REST/GraphQL", level: 85 },
      ],
    },
    {
      category: "Database & DevOps",
      items: [
        { name: "SQL/NoSQL", level: 85 },
        { name: "Docker/AWS", level: 80 },
        { name: "Git/CI-CD", level: 90 },
      ],
    },
  ];

  return (
    <div className="max-w-4xl mx-auto p-8 bg-gradient-to-br from-white to-gray-50 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
      <h2 className="text-3xl font-extrabold text-gray-800 mb-8 text-center">
        Technical Skills
      </h2>
      <div className="space-y-10">
        {skills.map((skillGroup, groupIndex) => (
          <div key={groupIndex} className="space-y-6">
            <h3 className="text-xl font-bold text-gray-700 border-b-2 border-blue-500 pb-3">
              {skillGroup.category}
            </h3>
            <div className="space-y-4">
              {skillGroup.items.map((skill, skillIndex) => (
                <div key={skillIndex} className="group">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-base text-gray-700 font-medium">
                      {skill.name}
                    </span>
                    <span className="text-sm text-gray-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {skill.level}%
                    </span>
                  </div>
                  <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-blue-500 to-blue-700 transform origin-left transition-transform duration-500 ease-out hover:from-blue-600 hover:to-blue-800"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillsSection;
