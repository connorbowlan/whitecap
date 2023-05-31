import React from "react";

function Footer() {
  return (
    <footer className="bg-blue-900 text-white py-8">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        <div className="flex items-center mb-4 md:mb-0">
          <img
            src="/logo.png"
            alt="Company Logo"
            className="w-12 h-12 mr-2"
          />
          <h3 className="text-xl font-bold">Natural Gas Company</h3>
        </div>
        <nav className="flex flex-wrap items-center justify-center">
          <a
            href="#"
            className="text-gray-300 hover:text-white px-4 py-2 mt-2 md:mt-0"
          >
            Home
          </a>
          <a
            href="#"
            className="text-gray-300 hover:text-white px-4 py-2 mt-2 md:mt-0"
          >
            Products
          </a>
          <a
            href="#"
            className="text-gray-300 hover:text-white px-4 py-2 mt-2 md:mt-0"
          >
            About Us
          </a>
          <a
            href="#"
            className="text-gray-300 hover:text-white px-4 py-2 mt-2 md:mt-0"
          >
            Contact Us
          </a>
        </nav>
        <div className="text-gray-300 mt-4 md:mt-0">
          <p>&copy; {new Date().getFullYear()} Natural Gas Company. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

