import NavBar from "./components/NavBar";
import HeroSection from "./components/HeroSection";
import About from "./components/About";
import ProjectSection from "./components/ProjectSection";
import SkillsSection from "./components/SkillsSection";
import ExperienceSection from "./components/Experience";
import ContactSection from "./components/ContactSection";
import FooterSection from "./components/FooterSection";

const App = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation Section*/}
      <NavBar />

      <div className="pt-16">
        {/* Enhanced Hero Section */}
        <HeroSection />

        {/* Enhanced About Section */}
        <About />

        {/* Enhanced Projects Section */}
        <ProjectSection />

        {/* Skills sections */}
        <SkillsSection />

        {/* Exprienced sections  */}
        <ExperienceSection />

        {/* Contact sections  */}
        <ContactSection />

        {/* Contact sections  */}
        <FooterSection />
        {/* Other sections remain the same... */}
      </div>
    </div>
  );
};

export default App;
