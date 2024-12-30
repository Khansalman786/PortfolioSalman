import React from "react";
import { User, ExternalLink } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <div className="relative">
              <img
                src="https://media.istockphoto.com/id/1439425791/photo/digital-technology-software-development-concept-coding-programmer-working-on-laptop-with.jpg?s=612x612&w=0&k=20&c=43WZfDZcnI2lULx83NVAtFiGyzKHzi4HyLqYZgggX-c="
                alt="About Me"
                className="rounded-lg shadow-lg w-full"
              />
            </div>
          </div>
          <div className="md:w-1/2">
            <div className="flex items-center mb-6">
              <User className="w-6 h-6 mr-2 text-blue-600" />
              <h2 className="text-3xl font-bold text-gray-900">About Me</h2>
            </div>
            <p className="text-lg text-gray-600 mb-6">
              I'm a passionate frontend developer with 5+ years of experience in
              building modern web applications. My journey in web development
              started with curiosity and has evolved into a professional career
              focused on creating intuitive and performant user interfaces.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-bold text-gray-700 mb-2">Education</h3>
                <p className="text-gray-600">B.S. Computer Science</p>
                <p className="text-gray-500">Tech University</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-bold text-gray-700 mb-2">Location</h3>
                <p className="text-gray-600">San Francisco, CA</p>
                <p className="text-gray-500">Available for remote work</p>
              </div>
            </div>
            <div className="flex gap-4">
              <a
                href="#projects"
                className="inline-flex items-center px-4 py-2 text-blue-600 hover:text-blue-800 font-semibold rounded-lg transition-colors duration-200"
              >
                View Projects
                <ExternalLink className="ml-2 w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;