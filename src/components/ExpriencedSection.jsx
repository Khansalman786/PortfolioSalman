import React from 'react';
import { FaBriefcase } from 'react-icons/fa';

const ExperienceSection = () => {
  const experiences = [
    {
      role: 'Frontend Developer',
      company: 'Tech Solutions Inc.',
      duration: 'Jan 2020 - Present',
      description: [
        'Developed and maintained responsive web applications using React.js.',
        'Implemented modern UI components with Tailwind CSS to enhance user experience.',
        'Collaborated with backend developers to integrate RESTful APIs.',
      ],
    },
    {
      role: 'Web Developer Intern',
      company: 'Innovatech Labs',
      duration: 'Jun 2019 - Dec 2019',
      description: [
        'Built reusable components and optimized performance in React.js applications.',
        'Designed and styled interactive layouts with Tailwind CSS.',
        'Assisted in debugging and testing web applications across different browsers.',
      ],
    },
  ];

  return (
    <section className="bg-gradient-to-b from-gray-100 to-gray-300 py-12">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-extrabold text-gray-800 text-center mb-8">Experience</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {experiences.map((experience, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-xl p-8 border border-gray-200 transition-transform transform hover:scale-105 hover:shadow-2xl"
            >
              <div className="flex items-center mb-4">
                <FaBriefcase className="text-gray-600 text-2xl mr-4" />
                <h3 className="text-2xl font-bold text-gray-800">
                  {experience.role}
                </h3>
              </div>
              <p className="text-gray-600 text-sm italic mb-6">{experience.company} | {experience.duration}</p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                {experience.description.map((item, i) => (
                  <li key={i} className="text-base">{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
