import { Mail, Download } from "lucide-react";

const HeroSection = () => {
  return (
    <>
      <section className="relative bg-gradient-to-r from-gray-900 to-black text-gray-200 py-32">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-1/2 z-10 text-left">
              <h1 className="text-5xl font-bold mb-4">
                Hi, I'm Ali Mo Salman
                <span className="block text-3xl mt-2 text-gray-400">
                  FULL STACK DEVELOPER
                </span>
              </h1>
              <p className="text-xl mb-8 text-gray-300">
                Welcome to my digital playground, where coding meets creativity,
                bugs are just features in disguise, and coffee is the ultimate
                fuel for innovation!
              </p>
              <div className="flex gap-4">
                <a
                  href="#contact"
                  className="bg-gray-200 text-black px-6 py-3 rounded-full font-semibold hover:bg-gradient-to-r hover:from-gray-500 hover:to-gray-700 hover:text-white transition-all flex items-center shadow-lg hover:scale-105"
                >
                  Get in Touch
                  <Mail className="ml-2 w-4 h-4" />
                </a>
                <a
                  href="/AliMoSalman.pdf"
                  className="border-2 border-gray-200 text-gray-200 px-6 py-3 rounded-full font-semibold hover:bg-gradient-to-r hover:from-gray-200 hover:to-gray-400 hover:text-black transition-all flex items-center shadow-lg hover:scale-105"
                  download
                >
                  Download CV
                  <Download className="ml-2 w-4 h-4" />
                </a>
              </div>
            </div>
            <div className="md:w-1/2 mt-8 md:mt-0 z-10">
              <div className="relative w-80 h-80 mx-auto">
                <div className="absolute inset-0 bg-gray-700 rounded-full opacity-20 animate-pulse"></div>
                <img
                  src="https://imgcdn.stablediffusionweb.com/2024/10/29/b772c8fb-e6cc-4e71-93c4-b5e43899a68f.jpg"
                  alt="Ali Mo Salman"
                  className="rounded-full w-full h-full object-cover border-4 border-gray-200 shadow-2xl"
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
