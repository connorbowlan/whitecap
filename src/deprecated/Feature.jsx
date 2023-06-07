import React, { useState } from "react";

function Feature(props) {
  const [expanded, setExpanded] = useState(false);
  const shortenedContent = props.content.substr(0, 250);

  const toggleExpanded = () => {
    setExpanded(!expanded);
  };

  return (
    <div className="flex flex-col bg-white border-2 border-solid border-gray-100 rounded-lg shadow-lg p-5">
      <svg
        className="w-12 h-12 text-green-500"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 2C6.4 6.5 3 10.5 3 10.5S6.6 6 12 2zM12 2c5.6 4.5 9 8.5 9 8.5S17.4 6 12 2zm0 0v14" />
      </svg>

      <h2 className="mt-2 text-lg text-gray-1000 font-semibold">
        {props.title}
      </h2>
      <div className="bg-gray-100 rounded-lg p-4 mt-2">
        {expanded ? (
          <p className="text-gray-800">{props.content}</p>
        ) : (
          <p className="text-gray-800">{shortenedContent}...</p>
        )}
      </div>
      <button className="text-blue-500 mt-2" onClick={toggleExpanded}>
        {expanded ? "Show Less" : "Show More"}
      </button>
    </div>
  );
}

export default Feature;
