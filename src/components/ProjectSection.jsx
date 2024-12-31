import React, { useState } from "react";
import { Folder, Eye, Github } from "lucide-react";

const ProjectSection = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const projects = [
    {
      title: "E-commerce Platform",
      tech: ["React", "Redux", "Node.js"],
      category: "Web",
      image:
        "https://images.yourstory.com/cs/2/fb7ee200-7579-11e9-995c-171c030e4eb8/Ecomm-min1560422084936.jpg?fm=png&auto=format",
      github: "#",
      demo: "#",
    },
    {
      title: "Tech Blog Platform",
      tech: ["Next.js", "MDX", "Tailwind"],
      category: "Blog",
      image:
        "https://pascalinesoft.com/wp-content/uploads/elementor/thumbs/Soft-Solution-Services-pop8cblnkldrx0tmcyehvb7unole5mto0a3u3724y0.jpg",
      github: "#",
      demo: "#",
    },
    {
      title: "Weather Dashboard",
      tech: ["React", "Chart.js", "API"],
      category: "Web",
      image:
        "https://th.bing.com/th/id/OIP.ezIXjevm3hGwqpNZsHrhBgHaFj?w=234&h=180&c=7&r=0&o=5&pid=1.7",
      github: "#",
      demo: "#",
    },
    {
      title: "Personal Blog Theme",
      tech: ["Gatsby", "GraphQL", "SCSS"],
      category: "Blog",
      image: "/api/placeholder/400/200",
      github: "#",
      demo: "#",
    },
    {
      title: "AI Image Generator",
      tech: ["Python", "TensorFlow", "Flask"],
      category: "Web",
      image: "",
      github: "#",
      demo: "#",
    },
    {
      title: "Travel Blog",
      tech: ["WordPress", "PHP", "MySQL"],
      category: "Blog",
      image: "/api/placeholder/400/200",
      github: "#",
      demo: "#",
    },
    {
      title: "Portfolio Generator",
      tech: ["Vue.js", "Firebase", "Vuex"],
      category: "Web",
      image: "/api/placeholder/400/200",
      github: "#",
      demo: "#",
    },
    {
      title: "Recipe Blog",
      tech: ["Django", "PostgreSQL", "AWS"],
      category: "Blog",
      image: "/api/placeholder/400/200",
      github: "#",
      demo: "#",
    },
  ];

  const categories = ["All", "Web", "Blog"];

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  return (
    <section id="projects" className="py-20 bg-black min-h-screen">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <div className="flex flex-col items-center justify-center mb-16">
          <div className="flex items-center mb-10">
            {/* <Folder className="w-8 h-8 mr-3 text-blue-500" /> */}
            <h2 className="text-4xl font-bold text-white tracking-tight">
              My Projects
            </h2>
          </div>

          <div className="flex gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-8 py-2.5 rounded-full transition-all duration-300 transform hover:scale-105 text-sm font-medium
                  ${
                    activeCategory === category
                      ? "bg-gradient-to-r from-blue-600 to-blue-400 text-white shadow-lg shadow-blue-500/25"
                      : "bg-gray-800/50 text-gray-300 hover:bg-gray-700/50 backdrop-blur-sm"
                  }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {filteredProjects.map((project, index) => (
            <div
              key={index}
              className="group bg-gray-900/50 backdrop-blur-sm rounded-xl overflow-hidden transform transition-all duration-500 hover:-translate-y-2 hover:shadow-xl hover:shadow-blue-500/20 w-full max-w-sm mx-auto"
            >
              <div className="relative overflow-hidden aspect-[4/3]">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
                />
                {/* Hover Overlay with Centered Buttons */}
                <div className="absolute inset-0 bg-gradient-to-b from-blue-600/80 to-gray-900/90 opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col items-center justify-center gap-6">
                  <div className="flex gap-6 transform -translate-y-10 group-hover:translate-y-0 transition-transform duration-500 delay-100">
                    <a
                      href={project.github}
                      className="bg-white/10 hover:bg-white/20 text-white p-3 rounded-full backdrop-blur-sm transition-all duration-300 hover:scale-110 group-hover:rotate-12"
                      aria-label="View Code"
                    >
                      <Github className="w-6 h-6" />
                    </a>
                    <a
                      href={project.demo}
                      className="bg-white/10 hover:bg-white/20 text-white p-3 rounded-full backdrop-blur-sm transition-all duration-300 hover:scale-110 group-hover:-rotate-12"
                      aria-label="Live Preview"
                    >
                      <Eye className="w-6 h-6" />
                    </a>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-lg font-bold text-white mb-4 tracking-wide">
                  {project.title}
                </h3>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="bg-blue-500/10 text-blue-300 px-3 py-1 rounded-full text-xs font-medium backdrop-blur-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;
