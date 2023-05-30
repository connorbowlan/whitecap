function Feature(props) {
  const shortenedContent = props.content.substr(0, 250);

  return (
    <div className="flex flex-col items-center justify-center p-5">
      <svg
        className="w-12 h-12 text-yellow-500"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path d="M9.5 7H6v2h3.5c1.93 0 3.5 1.57 3.5 3.5S11.43 16 9.5 16H6v2h3.5C12.88 18 15 15.88 15 13.5S12.88 9 10.5 9H6V7h3.5C11.43 7 13 8.57 13 10.5S11.43 14 9.5 14H6v2h3.5c2.43 0 4.5-1.97 4.5-4.5S11.93 7 9.5 7z" />
      </svg>
      <h2 className="mt-2 text-lg font-medium text-gray-900">{props.title}</h2>
      <p className="mt-2 text-gray-600">{shortenedContent}...</p>
    </div>
  );
}

export default Feature;
