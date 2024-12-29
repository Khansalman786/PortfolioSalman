import React, { useState } from "react";
import {
  Code,
  Briefcase,
  User,
  Folder,
  Mail,
  Menu,
  X,
  Phone,
} from "lucide-react";
const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // Navigation items remain the same...
  const navItems = [
    { name: "About", href: "#about", icon: User },
    { name: "Projects", href: "#projects", icon: Folder },
    { name: "Skills", href: "#skills", icon: Code },
    { name: "Experience", href: "#experience", icon: Briefcase },
    { name: "Contact", href: "#contact", icon: Mail },
  ];

  return (
    <>
      {/* {" "} */}
      {/* Navigation Bar */}
      <nav className="fixed w-full bg-white shadow-md z-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center">
              <Code className="w-8 h-8 text-blue-600" />
              <span className="ml-2 text-xl font-bold text-gray-800">
                DevPortfolio
              </span>
            </div>
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-600 hover:text-blue-600 flex items-center"
                >
                  <item.icon className="w-4 h-4 mr-1" />
                  {item.name}
                </a>
              ))}
            </div>
            {/* Mobile menu button */}
            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="w-6 h-6 text-gray-600" />
              ) : (
                <Menu className="w-6 h-6 text-gray-600" />
              )}
            </button>
          </div>
          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className=" py-2 px-4 text-gray-600 hover:bg-gray-100 flex items-center"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <item.icon className="w-4 h-4 mr-2" />
                  {item.name}
                </a>
              ))}
            </div>
          )}
        </div>
      </nav>
    </>
  );
};

export default NavBar;
