import { aboutSection, features, introSection } from "../assets/constants";

import { useState } from "react";

function Features() {
  const [expanded, setExpanded] = useState(false);

  const toggleExpanded = () => {
    setExpanded(!expanded);
  };

  return (
    <div className="container mx-auto py-8">
      <div className="bg-gray-100 p-8 rounded-lg mb-8">
        <h2 className="text-3xl font-bold mb-4">{introSection.title}</h2>
        <p className="text-gray-700">{introSection.content}</p>
      </div>

      <div className="border-t border-gray-300 my-8"></div>

      <div className="bg-gray-100 p-8 rounded-lg mb-8">
        <h2 className="text-3xl font-bold mb-4">{aboutSection.title}</h2>
        <p className="text-gray-700">{aboutSection.content}</p>
      </div>

      <h2 className="text-3xl font-bold mb-4">Features</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((feature, index) => (
          <div
            className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-blue-500 relative"
            key={index}
          >
            <h2 className="text-xl font-semibold mb-2">{feature.title}</h2>
            <div
              className={`overflow-hidden ${
                expanded ? "" : "h-20"
              } transition-all`}
            >
              <p className="text-gray-700">{feature.content}</p>
            </div>
            <button
              className="text-blue-500 mt-2 absolute bottom-0 right-0"
              onClick={toggleExpanded}
            >
              {expanded ? "Show Less" : "Show More"}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Features;
