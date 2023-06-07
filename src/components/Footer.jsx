import NavItems from "./subcomponents/NavItems";
import React from "react";

function Footer() {
  return (
    <footer className="bg-blue-900 text-white py-8 w-full overflow-x-hidden">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        <div className="flex items-center mb-4 md:mb-0">
          <h3 className="text-4xl font-bold leading-tight text-white transform hover:scale-110 transition-transform">
            <span className="inline-block relative">
              <span className="text-transparent absolute top-0 left-0 w-full h-full bg-gradient-to-r from-blue-500 to-white bg-clip-text">
                
              </span>
              <span className="text-blue-500">Whitecap</span>
            </span>
          </h3>
        </div>
        <div className="flex flex-wrap items-center justify-center flex-grow">
          <NavItems />
        </div>
        <div className="text-gray-300 mt-4 md:mt-0 flex-shrink-0">
          <p>
            &copy; {new Date().getFullYear()} Whitecap. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
