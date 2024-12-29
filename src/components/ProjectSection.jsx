import {
  Code,
  Briefcase,
  User,
  Folder,
  Mail,
  Menu,
  X,
  Phone,
  Download,
  ExternalLink,
  Github,
} from "lucide-react";

const ProjectSection = () => {
  // Project data with more details
  const projects = [
    {
      title: "E-commerce Platform",
      description:
        "A full-stack e-commerce solution with real-time inventory management, payment processing, and user authentication.",
      tech: ["React", "Redux", "Node.js", "MongoDB"],
      image:
        "https://etimg.etb2bimg.com/thumb/msid-90659925,imgsize-119622,width-1200,height=765,overlay-etgovernment/news/governance/rajasthan-govt-to-create-e-commerce-platform-under-rajeevika-project.jpg",
      github: "#",
      demo: "#",
      features: [
        "User authentication and authorization",
        "Payment gateway integration",
        "Real-time inventory tracking",
        "Admin dashboard",
      ],
    },
    {
      title: "Task Management App",
      description:
        "Collaborative task management platform with real-time updates and team workspace features.",
      tech: ["React", "Firebase", "Tailwind CSS"],
      image: "https://www.chanty.com/blog/wp-content/uploads/2020/10/Task-manager-apps-740x380.jpg",
      github: "#",
      demo: "#",
      features: [
        "Real-time collaboration",
        "Task assignment and tracking",
        "Project timeline visualization",
        "File sharing",
      ],
    },
    {
      title: "Weather Dashboard",
      description:
        "Interactive weather visualization dashboard with historical data analysis and forecast predictions.",
      tech: ["React", "Chart.js", "Weather API"],
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeGfVh0sb2Lcgub4A929xVUH4eE-H7ETsDzg&s",
      github: "#",
      demo: "#",
      features: [
        "5-day weather forecast",
        "Interactive charts",
        "Location-based weather",
        "Weather alerts",
      ],
    },
  ];
  // Previous skills and experience data remain the same...
  return (
    <>
      <section id="projects" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center mb-12">
            <Folder className="w-6 h-6 mr-2 text-blue-600" />
            <h2 className="text-3xl font-bold">Featured Projects</h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg overflow-hidden transform transition hover:-translate-y-1"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <div className="mb-4">
                    <h4 className="font-semibold mb-2">Key Features:</h4>
                    <ul className="list-disc list-inside text-gray-600">
                      {project.features.map((feature, i) => (
                        <li key={i}>{feature}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4">
                    <a
                      href={project.demo}
                      className="flex items-center text-blue-600 hover:text-blue-800"
                    >
                      Live Demo <ExternalLink className="ml-1 w-4 h-4" />
                    </a>
                    <a
                      href={project.github}
                      className="flex items-center text-gray-600 hover:text-gray-800"
                    >
                      Code <Github className="ml-1 w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default ProjectSection;
