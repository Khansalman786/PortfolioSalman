import React from 'react';
import { FaBriefcase } from 'react-icons/fa';

const Experience = () => {
  const experiences = [
    {
      role: 'MERN STACK Developer',
      company: 'Za Charity Feed Foundation',
      duration: 'Dec 2024 - Jan 2025',
      description: [
        'Developed and maintained responsive web applications using React.js.',
        'Implemented modern UI components with Tailwind CSS to enhance user experience.',
        'Collaborated with backend developers to integrate RESTful APIs.',
      ],
    },
    {
      role: 'Web Developer Intern',
      company: 'TopperWorld',
      duration: 'May 2024 - July 2024',
      description: [
        'Built reusable components and optimized performance in React.js applications.',
        'Designed and styled interactive layouts with Tailwind CSS.',
        'Assisted in debugging and testing web applications across different browsers.',
      ],
    },
  ];

  return (
    <section className="bg-gradient-to-br bg-black py-12">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-extrabold text-white text-center mb-8">Experience</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {experiences.map((experience, index) => (
            <div
              key={index}
              className="bg-gray-800 shadow-lg rounded-xl p-8 border border-gray-700 transition-transform transform hover:scale-105 hover:shadow-2xl"
            >
              <div className="flex items-center mb-4">
                <FaBriefcase className="text-white text-2xl mr-4" />
                <h3 className="text-2xl font-bold text-white">
                  {experience.role}
                </h3>
              </div>
              <p className="text-gray-400 text-sm italic mb-6">{experience.company} | {experience.duration}</p>
              <ul className="list-disc pl-6 text-gray-300 space-y-2">
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

export default Experience;
