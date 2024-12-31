import React from "react";

const AboutSection = () => {
  return (
    <section id="about" className="py-10 bg-black  text-white">
      <div className="container mx-auto px-4 mt-4">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="md:w-1/2">
            <div className="relative group">
              <img
                src="https://media.istockphoto.com/id/1439425791/photo/digital-technology-software-development-concept-coding-programmer-working-on-laptop-with.jpg?s=612x612&w=0&k=20&c=43WZfDZcnI2lULx83NVAtFiGyzKHzi4HyLqYZgggX-c="
                alt="About Me"
                className="rounded-lg shadow-lg w-full transform group-hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
          <div className="md:w-1/2">
            <div className="flex items-center mb-4">
              <h2 className="text-2xl md:text-3xl font-bold">About Me</h2>
            </div>
            <p className="text-base md:text-base text-gray-300 mb-6">
              I am a motivated and enthusiastic MERN Stack Developer with a
              strong foundation in web development and a passion for creating
              innovative and user-friendly applications. My technical expertise
              includes working with MongoDB, Express.js, React.js, and Node.js,
              which forms the core of the MERN stack.
              <br /> I have recently completed my graduation, during which I
              gained hands-on experience through various projects and
              internships. These experiences have allowed me to develop a deep
              understanding of both front-end and back-end technologies. I have
              successfully designed, developed, and deployed multiple web
              applications, showcasing my ability to translate complex
              requirements into functional.
              <br />I am always eager to learn and stay updated with the latest
              industry trends and best practices. My goal is to leverage my
              skills and knowledge to contribute to meaningful and impactful
              projects, continuously growing as a developer and delivering
              high-quality solutions.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
              <div className="bg-gray-800 p-4 rounded-lg">
                <h3 className="font-bold text-gray-100 mb-2">Education</h3>
                <p className="text-gray-400">B.E. Computer Engineering</p>
                <p className="text-gray-500">Mumbai University</p>
              </div>
              <div className="bg-gray-800 p-4 rounded-lg">
                <h3 className="font-bold text-gray-100 mb-2">Location</h3>
                <p className="text-gray-400">Maharashtra, Mumbai</p>
                <p className="text-gray-500">Available for work</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
