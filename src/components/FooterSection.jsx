import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black text-gray-300">
      <div className="max-w-7xl mx-auto px-4 pb-12 sm:px-6 lg:px-8">
        <div className="pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-4">
              <img
                src="https://i1.wp.com/logosandtypes.com/wp-content/uploads/2019/09/saracina.png?fit=63,75&ssl=1"
                alt="Logo"
                className="h-8 w-auto"
              />
            </div>
            <p className="text-sm mt-4 md:mt-0">
              © {new Date().getFullYear()} DevCorp. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a
                href="#"
                className="text-sm hover:text-white transition-colors"
              >
                All rights reserved.
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
