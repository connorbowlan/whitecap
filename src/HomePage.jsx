import { aboutSection, introSection } from "./assets/constants";

import Feature from "./components/subcomponents/Feature";
import React from "react";

function HomePage() {
  return (
    <div className="bg-white border-2 border-solid border-gray-100 rounded-lg shadow-lg p-5">
      <section>
        <h1>{introSection.title}</h1>
        <p>{introSection.content}</p>
      </section>

      <section>
        <h2>{aboutSection.title}</h2>
        <p>{aboutSection.content}</p>
      </section>
    </div>
  );
}

export default HomePage;
