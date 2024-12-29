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

const HeroSection = () => {
  return (
    <>
      <section className="relative bg-gradient-to-r from-blue-600 to-blue-800 text-white py-32">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-1/2 z-10 text-left">
              <h1 className="text-5xl font-bold mb-4">
                Hi, I'm Ali Mo Salman
                <span className="block text-3xl mt-2">
                  FULL STACK Developer
                </span>
              </h1>
              <p className="text-xl mb-8 text-gray-100">
                I build exceptional digital experiences that make life easier
                and more enjoyable
              </p>
              <div className="flex gap-4">
                <a
                  href="#contact"
                  className="bg-white text-blue-600 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition flex items-center"
                >
                  Get in Touch
                  <Mail className="ml-2 w-4 h-4" />
                </a>
                <a
                  href="/resume.pdf"
                  className="border-2 border-white text-white px-6 py-3 rounded-full font-semibold hover:bg-white hover:text-blue-600 transition flex items-center"
                  download
                >
                  Download CV
                  <Download className="ml-2 w-4 h-4" />
                </a>
              </div>
            </div>
            <div className="md:w-1/2 mt-8 md:mt-0 z-10">
              <div className="relative w-64 h-64 mx-auto">
                <div className="absolute inset-0 bg-blue-500 rounded-full opacity-20 animate-pulse"></div>
                <img
                  src="https://imgcdn.stablediffusionweb.com/2024/10/29/b772c8fb-e6cc-4e71-93c4-b5e43899a68f.jpg"
                  alt="Ali Mo Salman"
                  className="rounded-full w-full h-full object-cover border-4 border-white"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
