import React, { useState } from 'react';

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
  <path d="M12 2c0 9-8 10-8 10s8 1 8 10a6 6 0 0 1-6-6c0-6 4-8 4-8z" />
</svg>






      <h2 className="mt-2 text-lg font-medium text-gray-900">{props.title}</h2>
      {expanded ? (
        <p className="mt-2 text-gray-600">{props.content}</p>
      ) : (
        <p className="mt-2 text-gray-600">{shortenedContent}...</p>
      )}
      <button
        className="text-blue-500 mt-2"
        onClick={toggleExpanded}
      >
        {expanded ? 'Show Less' : 'Show More'}
      </button>
    </div>
  );
}

export default Feature;
