// import React from "react";

// function Footer() {
//   return (
//     <footer className="bg-blue-900 text-white py-8">
//       <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
//         <div className="flex items-center mb-4 md:mb-0">
//           <h3 className="text-4xl font-bold leading-tight text-white transform hover:scale-110 transition-transform">
//             <span className="inline-block relative">
//               <span className="text-transparent absolute top-0 left-0 w-full h-full bg-gradient-to-r from-blue-500 to-white bg-clip-text">
//                 Whitecap
//               </span>
//               <span className="text-blue-500">Whitecap</span>
//             </span>
//           </h3>
//         </div>
//         <nav className="flex flex-wrap items-center justify-center flex-grow">
//           <a
//             href="#"
//             className="text-gray-300 hover:text-white px-4 py-2 mt-2 md:mt-0"
//           >
//             Home
//           </a>
//           <a
//             href="#"
//             className="text-gray-300 hover:text-white px-4 py-2 mt-2 md:mt-0"
//           >
//             Products
//           </a>
//           <a
//             href="#"
//             className="text-gray-300 hover:text-white px-4 py-2 mt-2 md:mt-0"
//           >
//             About Us
//           </a>
//           <a
//             href="#"
//             className="text-gray-300 hover:text-white px-4 py-2 mt-2 md:mt-0"
//           >
//             Contact Us
//           </a>
//         </nav>
//         <div className="text-gray-300 mt-4 md:mt-0 flex-shrink-0">
//           <p>
//             &copy; {new Date().getFullYear()} Whitecap. All rights
//             reserved.
//           </p>
//         </div>
//       </div>
//     </footer>
//   );
// }

// export default Footer;


import React from "react";

function Footer() {
  return (
    <footer className="bg-blue-900 text-white py-8 fixed bottom-0 left-0 w-full overflow-x-hidden">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        <div className="flex items-center mb-4 md:mb-0">
          <h3 className="text-4xl font-bold leading-tight text-white transform hover:scale-110 transition-transform">
            <span className="inline-block relative">
              <span className="text-transparent absolute top-0 left-0 w-full h-full bg-gradient-to-r from-blue-500 to-white bg-clip-text">
                Whitecap
              </span>
              <span className="text-blue-500">Whitecap</span>
            </span>
          </h3>
        </div>
        <nav className="flex flex-wrap items-center justify-center flex-grow">
          <a
            href="/"
            className="text-gray-300 hover:text-white px-4 py-2 mt-2 md:mt-0"
          >
            Home
          </a>
          <a
            href="/products"
            className="text-gray-300 hover:text-white px-4 py-2 mt-2 md:mt-0"
          >
            Products
          </a>
          <a
            href="/about"
            className="text-gray-300 hover:text-white px-4 py-2 mt-2 md:mt-0"
          >
            About Us
          </a>
          <a
            href="/contact"
            className="text-gray-300 hover:text-white px-4 py-2 mt-2 md:mt-0"
          >
            Contact Us
          </a>
        </nav>
        <div className="text-gray-300 mt-4 md:mt-0 flex-shrink-0">
          <p>
            &copy; {new Date().getFullYear()} Whitecap. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;









